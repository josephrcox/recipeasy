import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { execFile } from 'child_process'
import { promisify } from 'util'
import { mkdtemp, rm, readdir, readFile, mkdir } from 'fs/promises'
import { tmpdir } from 'os'
import path from 'path'
import Anthropic from '@anthropic-ai/sdk'
import {
  getOrCreateUser,
  getCookbooks, getCookbook, createCookbook, deleteCookbook, renameCookbook,
  getRecipes, getRecipe, saveRecipe, deleteRecipe, moveRecipe
} from './db.js'

const execFileAsync = promisify(execFile)
const app = express()
const PORT = process.env.PORT || 3000

// Auto-detect yt-dlp binary location
async function findBinary(name) {
  try {
    const { stdout } = await execFileAsync('which', [name])
    return stdout.trim()
  } catch {
    // Common fallback paths
    const fallbacks = [
      `/usr/local/bin/${name}`,
      `/usr/bin/${name}`,
      `/opt/homebrew/bin/${name}`,
      `/Users/joseph/Library/Python/3.9/bin/${name}`
    ]
    for (const p of fallbacks) {
      try { await execFileAsync(p, ['--version']); return p } catch {}
    }
    throw new Error(`Could not find ${name} binary`)
  }
}

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const allowedOrigins = process.env.ALLOWED_ORIGIN
  ? [process.env.ALLOWED_ORIGIN, 'http://localhost:5173']
  : ['http://localhost:5173']

app.use(cors({ origin: allowedOrigins, credentials: true }))
app.use(express.json())
app.use(cookieParser())

// Serve built frontend in production
const __dirname = path.dirname(new URL(import.meta.url).pathname)
const frontendDist = path.join(__dirname, '../frontend/dist')
app.use(express.static(frontendDist))

// --- Auth middleware ---

function requireUser(req, res, next) {
  const userId = req.cookies.user_id
  if (!userId) return res.status(401).json({ error: 'Not logged in' })
  req.userId = userId
  next()
}

// --- Auth routes ---

app.post('/api/login', (req, res) => {
  const { userId } = req.body
  if (!userId?.trim()) return res.status(400).json({ error: 'User ID is required' })

  const user = getOrCreateUser(userId.trim())
  res.cookie('user_id', user.id, {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year
  })
  res.json({ userId: user.id })
})

app.post('/api/logout', (req, res) => {
  res.clearCookie('user_id')
  res.json({ ok: true })
})

app.get('/api/me', (req, res) => {
  const userId = req.cookies.user_id
  if (!userId) return res.json({ userId: null })
  res.json({ userId })
})

// --- Cookbook routes ---

app.get('/api/cookbooks', requireUser, (req, res) => {
  res.json(getCookbooks(req.userId))
})

app.post('/api/cookbooks', requireUser, (req, res) => {
  const { name } = req.body
  if (!name?.trim()) return res.status(400).json({ error: 'Name is required' })
  res.json(createCookbook(req.userId, name.trim()))
})

app.patch('/api/cookbooks/:id', requireUser, (req, res) => {
  const cb = getCookbook(req.params.id, req.userId)
  if (!cb) return res.status(404).json({ error: 'Cookbook not found' })
  const { name } = req.body
  if (!name?.trim()) return res.status(400).json({ error: 'Name is required' })
  res.json(renameCookbook(req.params.id, req.userId, name.trim()))
})

app.delete('/api/cookbooks/:id', requireUser, (req, res) => {
  const cb = getCookbook(req.params.id, req.userId)
  if (!cb) return res.status(404).json({ error: 'Cookbook not found' })
  deleteCookbook(req.params.id, req.userId)
  res.json({ ok: true })
})

// --- Recipe routes ---

app.get('/api/cookbooks/:id/recipes', requireUser, (req, res) => {
  const cb = getCookbook(req.params.id, req.userId)
  if (!cb) return res.status(404).json({ error: 'Cookbook not found' })
  res.json(getRecipes(req.params.id))
})

app.get('/api/recipes/:id', requireUser, (req, res) => {
  const recipe = getRecipe(req.params.id)
  if (!recipe) return res.status(404).json({ error: 'Recipe not found' })
  res.json(recipe)
})

app.post('/api/cookbooks/:id/recipes', requireUser, (req, res) => {
  const cb = getCookbook(req.params.id, req.userId)
  if (!cb) return res.status(404).json({ error: 'Cookbook not found' })
  const { title, sourceUrl, thumbnailUrl, recipeJson } = req.body
  if (!title || !recipeJson) return res.status(400).json({ error: 'title and recipeJson are required' })
  res.json(saveRecipe(req.params.id, { title, sourceUrl, thumbnailUrl, recipeJson }))
})

app.delete('/api/recipes/:id', requireUser, (req, res) => {
  deleteRecipe(req.params.id)
  res.json({ ok: true })
})

app.patch('/api/recipes/:id/move', requireUser, (req, res) => {
  const { cookbookId } = req.body
  const cb = getCookbook(cookbookId, req.userId)
  if (!cb) return res.status(404).json({ error: 'Target cookbook not found' })
  res.json(moveRecipe(req.params.id, cookbookId))
})

// --- Video analysis route ---

async function downloadVideo(url, tmpDir) {
  const YTDLP = await findBinary('yt-dlp')
  const outputTemplate = path.join(tmpDir, '%(id)s.%(ext)s')
  const { stdout: metaJson } = await execFileAsync(YTDLP, ['--dump-json', '--no-playlist', url])
  const meta = JSON.parse(metaJson)
  await execFileAsync(YTDLP, [
    '-f', 'bestvideo[height<=720]+bestaudio/best[height<=720]/best',
    '--no-playlist', '--merge-output-format', 'mp4',
    '-o', outputTemplate, url
  ])
  const files = await readdir(tmpDir)
  const videoFile = files.find(f => f.startsWith(meta.id))
  if (!videoFile) throw new Error('Downloaded file not found')
  return { videoPath: path.join(tmpDir, videoFile), meta }
}

async function extractFrames(videoPath, tmpDir, numFrames = 8) {
  const framesDir = path.join(tmpDir, 'frames')
  await mkdir(framesDir, { recursive: true })
  const { stdout } = await execFileAsync('ffprobe', [
    '-v', 'quiet', '-print_format', 'json', '-show_streams', videoPath
  ])
  const videoStream = JSON.parse(stdout).streams.find(s => s.codec_type === 'video')
  const duration = parseFloat(videoStream?.duration || 10)
  const interval = duration / (numFrames + 1)
  await Promise.all(
    Array.from({ length: numFrames }, (_, i) => {
      const ts = (interval * (i + 1)).toFixed(2)
      const out = path.join(framesDir, `frame_${String(i + 1).padStart(2, '0')}.jpg`)
      return execFileAsync('ffmpeg', ['-ss', ts, '-i', videoPath, '-vframes', '1', '-q:v', '3', '-vf', 'scale=720:-1', out])
    })
  )
  const frameFiles = await readdir(framesDir)
  return frameFiles.sort().map(f => path.join(framesDir, f))
}

async function analyzeWithClaude(frames, meta) {
  const imageBlocks = await Promise.all(
    frames.map(async (framePath) => ({
      type: 'image',
      source: {
        type: 'base64',
        media_type: 'image/jpeg',
        data: (await readFile(framePath)).toString('base64')
      }
    }))
  )

  const metadataText = [
    meta.title && `Title: ${meta.title}`,
    meta.description && `Description/Caption:\n${meta.description}`,
    meta.uploader && `Creator: ${meta.uploader}`
  ].filter(Boolean).join('\n\n')

  const response = await anthropic.messages.create({
    model: 'claude-opus-4-6',
    max_tokens: 4096,
    thinking: { type: 'adaptive' },
    system: `You are a recipe extraction specialist. Analyze cooking videos and extract structured recipe data. Return ONLY valid JSON with no extra text.`,
    messages: [{
      role: 'user',
      content: [
        ...imageBlocks,
        {
          type: 'text',
          text: `Here are ${frames.length} frames from a cooking video, plus metadata below.
Extract the recipe and return ONLY a JSON object in this exact format:

{
  "title": "Recipe name",
  "description": "1-2 sentence description",
  "servings": "e.g. 2-4 servings",
  "prepTime": "e.g. 10 minutes",
  "cookTime": "e.g. 30 minutes",
  "ingredientGroups": [
    {
      "group": "Potatoes",
      "emoji": "🥔",
      "items": [
        { "amount": "2", "unit": "cups", "item": "diced potatoes" }
      ]
    },
    {
      "group": "Beef",
      "emoji": "🥩",
      "items": [
        { "amount": "1", "unit": "lb", "item": "ground beef" }
      ]
    }
  ],
  "instructions": [
    "Step 1: ...",
    "Step 2: ..."
  ],
  "tips": ["Optional tip 1"]
}

Group ingredients logically (e.g. by protein, vegetables, sauce, seasoning, toppings).
Only create a group if there are 2+ ingredients that belong together — if everything is one flat list, use a single group with no group name (set "group" to null).
Pick a fitting food emoji for each group.
If a field can't be determined, use null.

Video Metadata:
${metadataText}`
        }
      ]
    }]
  })

  const textBlock = response.content.find(b => b.type === 'text')
  if (!textBlock) throw new Error('No text response from Claude')
  const jsonText = textBlock.text.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '').trim()
  return JSON.parse(jsonText)
}

app.post('/api/analyze', requireUser, async (req, res) => {
  const { url } = req.body
  if (!url) return res.status(400).json({ error: 'URL is required' })

  let tmpDir = null
  try {
    tmpDir = await mkdtemp(path.join(tmpdir(), 'recipeasy-'))
    console.log(`\n[1/3] Downloading: ${url}`)
    const { videoPath, meta } = await downloadVideo(url, tmpDir)
    console.log(`[2/3] Extracting frames...`)
    const frames = await extractFrames(videoPath, tmpDir)
    console.log(`[3/3] Analyzing with Claude...`)
    const recipe = await analyzeWithClaude(frames, meta)
    console.log(`Done: ${recipe.title}`)
    res.json({
      recipe,
      meta: { id: meta.id, uploader: meta.uploader, thumbnail: meta.thumbnail, sourceUrl: url }
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: err.message })
  } finally {
    if (tmpDir) await rm(tmpDir, { recursive: true, force: true }).catch(() => {})
  }
})

// SPA fallback — serve index.html for any non-API route
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendDist, 'index.html'))
})

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`))

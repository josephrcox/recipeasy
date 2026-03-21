import Database from 'better-sqlite3'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const db = new Database(path.join(__dirname, 'recipeasy.db'))

db.pragma('journal_mode = WAL')
db.pragma('foreign_keys = ON')

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS cookbooks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL REFERENCES users(id),
    name TEXT NOT NULL,
    is_default INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cookbook_id INTEGER NOT NULL REFERENCES cookbooks(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    source_url TEXT,
    thumbnail_url TEXT,
    recipe_json TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`)

// Migration: add notes column to users
const hasNotesCol = db.prepare("PRAGMA table_info(users)").all().some(c => c.name === 'notes')
if (!hasNotesCol) {
  db.exec("ALTER TABLE users ADD COLUMN notes TEXT NOT NULL DEFAULT ''")
}

// Migration: add checked_json column to recipes
const hasCheckedCol = db.prepare("PRAGMA table_info(recipes)").all().some(c => c.name === 'checked_json')
if (!hasCheckedCol) {
  db.exec(`ALTER TABLE recipes ADD COLUMN checked_json TEXT NOT NULL DEFAULT '{"ingredients":[],"steps":[]}'`)
}

// Migration: add is_default column if it doesn't exist yet
const hasFlagCol = db.prepare("PRAGMA table_info(cookbooks)").all().some(c => c.name === 'is_default')
if (!hasFlagCol) {
  db.exec('ALTER TABLE cookbooks ADD COLUMN is_default INTEGER NOT NULL DEFAULT 0')
}

// Migration: create Uncategorized cookbook for any existing users who don't have one
db.exec(`
  INSERT INTO cookbooks (user_id, name, is_default)
  SELECT id, 'Uncategorized', 1 FROM users
  WHERE id NOT IN (SELECT user_id FROM cookbooks WHERE is_default = 1)
`)

// --- Users ---

export function getOrCreateUser(userId) {
  const existing = db.prepare('SELECT * FROM users WHERE id = ?').get(userId)
  if (existing) {
    // Ensure they have an Uncategorized cookbook (safety net)
    const hasDefault = db.prepare('SELECT id FROM cookbooks WHERE user_id = ? AND is_default = 1').get(userId)
    if (!hasDefault) {
      db.prepare('INSERT INTO cookbooks (user_id, name, is_default) VALUES (?, ?, 1)').run(userId, 'Uncategorized')
    }
    return existing
  }
  db.prepare('INSERT INTO users (id) VALUES (?)').run(userId)
  db.prepare('INSERT INTO cookbooks (user_id, name, is_default) VALUES (?, ?, 1)').run(userId, 'Uncategorized')
  return db.prepare('SELECT * FROM users WHERE id = ?').get(userId)
}

// --- Cookbooks ---

export function getCookbooks(userId) {
  return db.prepare(`
    SELECT c.*, COUNT(r.id) as recipe_count,
      (SELECT r2.thumbnail_url FROM recipes r2
       WHERE r2.cookbook_id = c.id
       ORDER BY r2.created_at ASC LIMIT 1) as cover_url
    FROM cookbooks c
    LEFT JOIN recipes r ON r.cookbook_id = c.id
    WHERE c.user_id = ?
    GROUP BY c.id
    ORDER BY c.is_default DESC, c.created_at DESC
  `).all(userId)
}

export function findRecipeByUrl(userId, sourceUrl) {
  return db.prepare(`
    SELECT r.id, r.title, c.name as cookbook_name, c.id as cookbook_id
    FROM recipes r
    JOIN cookbooks c ON c.id = r.cookbook_id
    WHERE c.user_id = ? AND r.source_url = ?
    LIMIT 1
  `).get(userId, sourceUrl)
}

export function getCookbook(id, userId) {
  return db.prepare('SELECT * FROM cookbooks WHERE id = ? AND user_id = ?').get(id, userId)
}

export function createCookbook(userId, name) {
  const result = db.prepare('INSERT INTO cookbooks (user_id, name) VALUES (?, ?)').run(userId, name)
  return db.prepare('SELECT * FROM cookbooks WHERE id = ?').get(result.lastInsertRowid)
}

export function deleteCookbook(id, userId) {
  const cb = db.prepare('SELECT * FROM cookbooks WHERE id = ? AND user_id = ?').get(id, userId)
  if (!cb || cb.is_default) return null
  return db.prepare('DELETE FROM cookbooks WHERE id = ? AND user_id = ?').run(id, userId)
}

export function renameCookbook(id, userId, name) {
  db.prepare('UPDATE cookbooks SET name = ? WHERE id = ? AND user_id = ?').run(name, id, userId)
  return db.prepare('SELECT * FROM cookbooks WHERE id = ?').get(id)
}

// --- Recipes ---

export function getRecipes(cookbookId) {
  return db.prepare(`
    SELECT id, cookbook_id, title, source_url, thumbnail_url, created_at
    FROM recipes WHERE cookbook_id = ? ORDER BY created_at DESC
  `).all(cookbookId)
}

export function getRecipe(id) {
  const row = db.prepare('SELECT * FROM recipes WHERE id = ?').get(id)
  if (!row) return null
  return {
    ...row,
    recipe_json: JSON.parse(row.recipe_json),
    checked_json: row.checked_json ? JSON.parse(row.checked_json) : { ingredients: [], steps: [] }
  }
}

export function updateChecked(id, checked) {
  db.prepare('UPDATE recipes SET checked_json = ? WHERE id = ?').run(JSON.stringify(checked), id)
}

export function saveRecipe(cookbookId, { title, sourceUrl, thumbnailUrl, recipeJson }) {
  const result = db.prepare(`
    INSERT INTO recipes (cookbook_id, title, source_url, thumbnail_url, recipe_json)
    VALUES (?, ?, ?, ?, ?)
  `).run(cookbookId, title, sourceUrl || null, thumbnailUrl || null, JSON.stringify(recipeJson))
  return getRecipe(result.lastInsertRowid)
}

export function deleteRecipe(id) {
  return db.prepare('DELETE FROM recipes WHERE id = ?').run(id)
}

// --- Notes ---

export function getNotes(userId) {
  const row = db.prepare('SELECT notes FROM users WHERE id = ?').get(userId)
  return row?.notes ?? ''
}

export function saveNotes(userId, text) {
  db.prepare('UPDATE users SET notes = ? WHERE id = ?').run(text, userId)
}

export function moveRecipe(id, cookbookId) {
  db.prepare('UPDATE recipes SET cookbook_id = ? WHERE id = ?').run(cookbookId, id)
  return getRecipe(id)
}

import Database from 'better-sqlite3'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const db = new Database(path.join(__dirname, 'recipeasy.db'))

// Enable WAL mode for better concurrent read performance
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

// --- Users ---

export function getOrCreateUser(userId) {
  const existing = db.prepare('SELECT * FROM users WHERE id = ?').get(userId)
  if (existing) return existing
  db.prepare('INSERT INTO users (id) VALUES (?)').run(userId)
  return db.prepare('SELECT * FROM users WHERE id = ?').get(userId)
}

// --- Cookbooks ---

export function getCookbooks(userId) {
  return db.prepare(`
    SELECT c.*, COUNT(r.id) as recipe_count
    FROM cookbooks c
    LEFT JOIN recipes r ON r.cookbook_id = c.id
    WHERE c.user_id = ?
    GROUP BY c.id
    ORDER BY c.created_at DESC
  `).all(userId)
}

export function getCookbook(id, userId) {
  return db.prepare('SELECT * FROM cookbooks WHERE id = ? AND user_id = ?').get(id, userId)
}

export function createCookbook(userId, name) {
  const result = db.prepare('INSERT INTO cookbooks (user_id, name) VALUES (?, ?)').run(userId, name)
  return db.prepare('SELECT * FROM cookbooks WHERE id = ?').get(result.lastInsertRowid)
}

export function deleteCookbook(id, userId) {
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
  return { ...row, recipe_json: JSON.parse(row.recipe_json) }
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

export function moveRecipe(id, cookbookId) {
  db.prepare('UPDATE recipes SET cookbook_id = ? WHERE id = ?').run(cookbookId, id)
  return getRecipe(id)
}

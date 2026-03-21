<script>
  let { userId, onNavigate, onLogout } = $props()
  let cookbooks = $state([])
  let newName = $state('')
  let creating = $state(false)
  let error = $state(null)

  async function load() {
    const res = await fetch('/api/cookbooks', { credentials: 'include' })
    cookbooks = await res.json()
  }

  async function create() {
    if (!newName.trim()) return
    creating = true
    try {
      const res = await fetch('/api/cookbooks', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newName.trim() })
      })
      const cb = await res.json()
      cookbooks = [cb, ...cookbooks]
      newName = ''
    } catch (err) {
      error = err.message
    } finally {
      creating = false
    }
  }

  async function remove(id) {
    if (!confirm('Delete this cookbook and all its recipes?')) return
    await fetch(`/api/cookbooks/${id}`, { method: 'DELETE', credentials: 'include' })
    cookbooks = cookbooks.filter(c => c.id !== id)
  }

  async function logout() {
    await fetch('/api/logout', { method: 'POST', credentials: 'include' })
    onLogout()
  }

  load()
</script>

<div class="page">
  <header>
    <h1>Recipeasy</h1>
    <div class="header-right">
      <span class="user-id">👤 {userId}</span>
      <button class="ghost" onclick={logout}>Sign out</button>
    </div>
  </header>

  <div class="content">
    <h2>My Cookbooks</h2>

    <div class="new-row">
      <input
        type="text"
        bind:value={newName}
        placeholder="New cookbook name..."
        onkeydown={(e) => e.key === 'Enter' && create()}
      />
      <button onclick={create} disabled={creating || !newName.trim()}>
        {creating ? '...' : '+ Create'}
      </button>
    </div>

    {#if error}<p class="error">{error}</p>{/if}

    {#if cookbooks.length === 0}
      <div class="empty">No cookbooks yet — create one above</div>
    {:else}
      <div class="grid">
        {#each cookbooks as cb}
          <div class="card" onclick={() => onNavigate('cookbook', { cookbookId: cb.id })}>
            <div class="card-body">
              <div class="card-name">{cb.name}</div>
              <div class="card-count">{cb.recipe_count} recipe{cb.recipe_count !== 1 ? 's' : ''}</div>
            </div>
            <button class="delete" onclick={(e) => { e.stopPropagation(); remove(cb.id) }}>✕</button>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
  .page { max-width: 720px; margin: 0 auto; padding: 0 20px 60px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
  header { display: flex; justify-content: space-between; align-items: center; padding: 24px 0 16px; border-bottom: 1px solid #eee; margin-bottom: 32px; }
  h1 { margin: 0; font-size: 1.5rem; }
  h2 { margin: 0 0 20px; }
  .header-right { display: flex; align-items: center; gap: 12px; }
  .user-id { font-size: 0.85rem; color: #666; }
  .ghost { background: none; border: 1px solid #ddd; border-radius: 6px; padding: 6px 12px; cursor: pointer; font-size: 0.85rem; color: #555; }
  .ghost:hover { border-color: #999; }
  .new-row { display: flex; gap: 8px; margin-bottom: 24px; }
  input { flex: 1; padding: 10px 14px; font-size: 1rem; border: 1.5px solid #ddd; border-radius: 8px; outline: none; }
  input:focus { border-color: #000; }
  button { padding: 10px 18px; font-size: 0.95rem; background: #000; color: #fff; border: none; border-radius: 8px; cursor: pointer; white-space: nowrap; }
  button:disabled { opacity: 0.4; cursor: not-allowed; }
  .empty { padding: 48px 0; text-align: center; color: #aaa; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 14px; }
  .card { background: #fff; border: 1.5px solid #eee; border-radius: 12px; padding: 20px 16px; cursor: pointer; display: flex; justify-content: space-between; align-items: flex-start; transition: border-color 0.15s, box-shadow 0.15s; }
  .card:hover { border-color: #000; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
  .card-name { font-weight: 600; font-size: 1rem; margin-bottom: 4px; }
  .card-count { font-size: 0.82rem; color: #888; }
  .delete { background: none; border: none; color: #ccc; cursor: pointer; font-size: 0.85rem; padding: 0; line-height: 1; }
  .delete:hover { color: #c00; }
  .error { color: #c00; font-size: 0.9rem; }
</style>

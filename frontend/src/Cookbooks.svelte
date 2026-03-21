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
          <div class="card" role="button" tabindex="0"
            onclick={() => onNavigate('cookbook', { cookbookId: cb.id })}
            onkeydown={(e) => e.key === 'Enter' && onNavigate('cookbook', { cookbookId: cb.id })}>
            <div class="card-icon">📖</div>
            <div class="card-body">
              <div class="card-name">{cb.name}</div>
              <div class="card-count">{cb.recipe_count} recipe{cb.recipe_count !== 1 ? 's' : ''}</div>
            </div>
            <button class="delete" onclick={(e) => { e.stopPropagation(); remove(cb.id) }} aria-label="Delete cookbook">✕</button>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
  .page {
    max-width: 720px;
    margin: 0 auto;
    padding: 0 16px 60px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0 16px;
    border-bottom: 1px solid #eee;
    margin-bottom: 28px;
  }
  h1 { margin: 0; font-size: 1.4rem; }
  h2 { margin: 0 0 16px; font-size: 1.1rem; }
  .header-right { display: flex; align-items: center; gap: 10px; }
  .user-id { font-size: 0.82rem; color: #888; }
  .ghost {
    background: none;
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 6px 12px;
    cursor: pointer;
    font-size: 0.82rem;
    color: #555;
  }
  .ghost:hover { border-color: #999; }

  .new-row { display: flex; gap: 8px; margin-bottom: 20px; }
  input {
    flex: 1;
    padding: 10px 14px;
    font-size: 1rem;
    border: 1.5px solid #ddd;
    border-radius: 8px;
    outline: none;
    min-width: 0;
  }
  input:focus { border-color: #000; }
  button {
    padding: 10px 16px;
    font-size: 0.9rem;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    white-space: nowrap;
    flex-shrink: 0;
  }
  button:disabled { opacity: 0.4; cursor: not-allowed; }

  .empty { padding: 48px 0; text-align: center; color: #aaa; font-size: 0.95rem; }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 12px;
  }

  .card {
    background: #fff;
    border: 1.5px solid #eee;
    border-radius: 12px;
    padding: 16px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  .card:hover { border-color: #000; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
  .card-icon { font-size: 1.8rem; }
  .card-name { font-weight: 600; font-size: 0.95rem; line-height: 1.3; padding-right: 20px; }
  .card-count { font-size: 0.8rem; color: #888; }
  .delete {
    position: absolute;
    top: 10px; right: 10px;
    background: none;
    border: none;
    color: #ccc;
    cursor: pointer;
    font-size: 0.8rem;
    padding: 2px;
    line-height: 1;
  }
  .delete:hover { color: #c00; }
  .error { color: #c00; font-size: 0.9rem; }

  @media (max-width: 400px) {
    .grid { grid-template-columns: 1fr 1fr; }
  }
</style>

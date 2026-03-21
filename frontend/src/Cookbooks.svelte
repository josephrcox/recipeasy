<script>
  import { LogOut, Plus } from 'lucide-svelte'
  import BottomNav from './BottomNav.svelte'

  let { userId, onNavigate, onLogout, route } = $props()
  let cookbooks = $state(null)
  let newName = $state('')
  let creating = $state(false)
  let showCreate = $state(false)

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
      cookbooks = [...cookbooks, cb]
      newName = ''
      showCreate = false
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

<div class="page-with-nav">
  <!-- Header -->
  <div class="header">
    <div>
      <p class="greeting">Hello 👋</p>
      <h1>My Cookbooks</h1>
    </div>
    <button class="icon-btn" onclick={logout} title="Sign out">
      <LogOut size={18} />
    </button>
  </div>

  <!-- Create sheet -->
  {#if showCreate}
    <div class="create-box">
      <input
        class="input"
        type="text"
        bind:value={newName}
        placeholder="Cookbook name…"
        onkeydown={(e) => e.key === 'Enter' && create()}
        autofocus
      />
      <div class="create-actions">
        <button class="btn-ghost" onclick={() => { showCreate = false; newName = '' }}>Cancel</button>
        <button class="btn-primary" style="width:auto;padding:13px 24px" onclick={create} disabled={creating || !newName.trim()}>
          {creating ? '…' : 'Create'}
        </button>
      </div>
    </div>
  {:else}
    <button class="new-cookbook-btn" onclick={() => showCreate = true}>
      <Plus size={18} />
      New Cookbook
    </button>
  {/if}

  <!-- Grid -->
  {#if cookbooks === null}
    <div class="grid">
      {#each [1, 2, 3, 4] as _}
        <div class="skeleton-card">
          <div class="skeleton-img shimmer"></div>
          <div class="skeleton-info">
            <div class="skeleton-line shimmer" style="width:70%"></div>
            <div class="skeleton-line shimmer" style="width:40%;margin-top:6px"></div>
          </div>
        </div>
      {/each}
    </div>
  {:else if cookbooks.length === 0}
    <div class="empty">
      <div class="empty-icon">📖</div>
      <h2>No cookbooks yet</h2>
      <p>Create a cookbook to start saving TikTok recipes</p>
    </div>
  {:else}
    <div class="grid">
      {#each cookbooks as cb}
        <div class="card" role="button" tabindex="0"
          onclick={() => onNavigate('cookbook', { cookbookId: cb.id })}
          onkeydown={(e) => e.key === 'Enter' && onNavigate('cookbook', { cookbookId: cb.id })}>
          <div class="card-img">
            {#if cb.cover_url}
              <img src={cb.cover_url} alt={cb.name} />
            {:else}
              <div class="card-img-placeholder">🍽️</div>
            {/if}
            <div class="card-gradient"></div>
            {#if !cb.is_default}
              <button class="card-delete" onclick={(e) => { e.stopPropagation(); remove(cb.id) }}>✕</button>
            {/if}
          </div>
          <div class="card-info">
            <span class="card-name">{cb.name}</span>
            <span class="card-count">{cb.recipe_count} recipe{cb.recipe_count !== 1 ? 's' : ''}</span>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<BottomNav {route} {onNavigate} />

<style>
  .header {
    padding: calc(var(--safe-top) + 20px) 16px 16px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background: var(--bg);
  }
  .greeting { font-size: 0.85rem; color: var(--text-2); margin-bottom: 2px; }
  .header h1 { font-size: 1.75rem; }

  .create-box {
    margin: 0 16px 16px;
    background: var(--surface);
    border-radius: var(--radius);
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-shadow: var(--shadow);
  }
  .create-actions { display: flex; gap: 10px; }
  .create-actions .btn-ghost { flex: 1; }

  .new-cookbook-btn {
    margin: 0 16px 20px;
    padding: 13px 18px;
    background: var(--surface);
    border: 1.5px dashed var(--border);
    border-radius: var(--radius);
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-2);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    width: calc(100% - 32px);
    transition: border-color 0.15s, color 0.15s;
  }
  .new-cookbook-btn:hover { border-color: var(--accent); color: var(--accent); }

  .empty {
    padding: 64px 32px;
    text-align: center;
    color: var(--text-3);
  }
  .empty-icon { font-size: 3.5rem; margin-bottom: 16px; }
  .empty h2 { color: var(--text); margin-bottom: 8px; }
  .empty p { font-size: 0.9rem; line-height: 1.5; }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    padding: 0 16px;
  }

  .card {
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    padding: 0;
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    transition: transform 0.15s;
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }
  .card:active { transform: scale(0.97); }

  .card-img {
    position: relative;
    aspect-ratio: 3/4;
    background: #E8E8E4;
    overflow: hidden;
  }
  .card-img img {
    width: 100%; height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
  }
  .card-img-placeholder {
    width: 100%; height: 100%;
    display: flex; align-items: center; justify-content: center;
    font-size: 2.5rem;
    background: linear-gradient(135deg, #F5F0EB 0%, #E8E0D8 100%);
  }
  .card-gradient {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%);
  }
  .card-delete {
    position: absolute;
    top: 8px; right: 8px;
    background: rgba(0,0,0,0.5);
    border: none; color: #fff;
    border-radius: 50%;
    width: 24px; height: 24px;
    font-size: 0.7rem;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    opacity: 0;
    transition: opacity 0.15s;
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
  }
  .card:hover .card-delete { opacity: 1; }

  .card-info {
    background: var(--surface);
    padding: 10px 12px 12px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .card-name { font-size: 0.88rem; font-weight: 700; color: var(--text); line-height: 1.3; }
  .card-count { font-size: 0.75rem; color: var(--text-3); }

  /* Skeletons */
  .skeleton-card {
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
  }
  .skeleton-img {
    aspect-ratio: 3/4;
    background: var(--border);
  }
  .skeleton-info {
    background: var(--surface);
    padding: 10px 12px 12px;
  }
  .skeleton-line {
    height: 12px;
    border-radius: 6px;
    background: var(--border);
  }
  .shimmer {
    background: linear-gradient(90deg, var(--border) 25%, #e8e4e0 50%, var(--border) 75%);
    background-size: 200% 100%;
    animation: shimmer 1.4s infinite;
  }
  @keyframes shimmer {
    from { background-position: 200% 0; }
    to   { background-position: -200% 0; }
  }
</style>

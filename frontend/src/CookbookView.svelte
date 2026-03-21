<script>
  import { ArrowLeft, Plus } from 'lucide-svelte'
  import BottomNav from './BottomNav.svelte'

  let { cookbookId, onNavigate, route } = $props()
  let cookbook = $state(null)
  let recipes = $state([])

  async function load() {
    const [cbRes, recRes] = await Promise.all([
      fetch(`/api/cookbooks`, { credentials: 'include' }),
      fetch(`/api/cookbooks/${cookbookId}/recipes`, { credentials: 'include' })
    ])
    const cookbooks = await cbRes.json()
    cookbook = cookbooks.find(c => c.id === cookbookId)
    recipes = await recRes.json()
  }

  async function remove(id) {
    if (!confirm('Remove this recipe?')) return
    await fetch(`/api/recipes/${id}`, { method: 'DELETE', credentials: 'include' })
    recipes = recipes.filter(r => r.id !== id)
  }

  load()
</script>

<div class="page-with-nav">
  <div class="top-bar">
    <button class="icon-btn" onclick={() => onNavigate('cookbooks')}>
      <ArrowLeft size={20} />
    </button>
    <h1>{cookbook?.name ?? ''}</h1>
    <button class="icon-btn accent-btn" onclick={() => onNavigate('analyze', { cookbookId })}>
      <Plus size={20} />
    </button>
  </div>

  {#if recipes.length === 0}
    <div class="empty">
      <div class="empty-icon">🎬</div>
      <h2>No recipes yet</h2>
      <p>Paste a TikTok cooking video link to add your first recipe</p>
      <button class="btn-primary" style="margin-top:24px" onclick={() => onNavigate('analyze', { cookbookId })}>
        + Add first recipe
      </button>
    </div>
  {:else}
    <div class="grid">
      {#each recipes as recipe}
        <button class="card" onclick={() => onNavigate('recipe', { recipeId: recipe.id, cookbookId })}>
          <div class="card-img">
            {#if recipe.thumbnail_url}
              <img src={recipe.thumbnail_url} alt={recipe.title} />
            {:else}
              <div class="card-placeholder">🍴</div>
            {/if}
            <div class="card-gradient"></div>
            <div class="card-title-overlay">{recipe.title}</div>
            <button class="card-delete" onclick={(e) => { e.stopPropagation(); remove(recipe.id) }}>✕</button>
          </div>
        </button>
      {/each}
    </div>
  {/if}
</div>

<BottomNav {route} {onNavigate} />

<style>
  .top-bar { background: var(--surface); }

  .accent-btn {
    background: var(--accent-light);
    color: var(--accent);
  }

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
    gap: 10px;
    padding: 16px;
  }

  .card {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    display: block;
    transition: transform 0.15s;
  }
  .card:active { transform: scale(0.97); }

  .card-img {
    position: relative;
    aspect-ratio: 9/14;
    background: #E8E8E4;
    overflow: hidden;
  }
  .card-img img {
    width: 100%; height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
  }
  .card-placeholder {
    width: 100%; height: 100%;
    display: flex; align-items: center; justify-content: center;
    font-size: 2rem;
    background: linear-gradient(135deg, #F5F0EB 0%, #E8E0D8 100%);
  }
  .card-gradient {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 55%);
  }
  .card-title-overlay {
    position: absolute;
    bottom: 10px; left: 10px; right: 10px;
    color: #fff;
    font-size: 0.82rem;
    font-weight: 700;
    line-height: 1.3;
    text-shadow: 0 1px 4px rgba(0,0,0,0.4);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
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
  }
  .card:hover .card-delete,
  .card-delete:focus { opacity: 1; }
</style>

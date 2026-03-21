<script>
  let { cookbookId, onNavigate } = $props()
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

<div class="page">
  <header>
    <button class="back" onclick={() => onNavigate('cookbooks')}>← Cookbooks</button>
    {#if cookbook}
      <h1>{cookbook.name}</h1>
    {/if}
    <button class="add-btn" onclick={() => onNavigate('analyze', { cookbookId })}>+ Add</button>
  </header>

  {#if recipes.length === 0}
    <div class="empty">
      <p>No recipes yet.</p>
      <button onclick={() => onNavigate('analyze', { cookbookId })}>+ Add your first recipe</button>
    </div>
  {:else}
    <div class="grid">
      {#each recipes as recipe}
        <div class="card" role="button" tabindex="0"
          onclick={() => onNavigate('recipe', { recipeId: recipe.id, cookbookId })}
          onkeydown={(e) => e.key === 'Enter' && onNavigate('recipe', { recipeId: recipe.id, cookbookId })}>
          <div class="thumb-wrap">
            {#if recipe.thumbnail_url}
              <img src={recipe.thumbnail_url} alt={recipe.title} class="thumb" />
            {:else}
              <div class="thumb-placeholder">🍴</div>
            {/if}
            <button class="delete" onclick={(e) => { e.stopPropagation(); remove(recipe.id) }} aria-label="Remove recipe">✕</button>
          </div>
          <div class="card-body">
            <div class="card-title">{recipe.title}</div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
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
    align-items: center;
    gap: 12px;
    padding: 20px 0 20px;
    border-bottom: 1px solid #eee;
    margin-bottom: 24px;
  }
  h1 { margin: 0; font-size: 1.2rem; flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .back { background: none; border: none; font-size: 0.9rem; cursor: pointer; color: #555; padding: 0; white-space: nowrap; flex-shrink: 0; }
  .back:hover { color: #000; }
  .add-btn {
    padding: 8px 14px;
    font-size: 0.88rem;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .empty { text-align: center; padding: 60px 0; color: #aaa; }
  .empty p { margin-bottom: 16px; }
  .empty button {
    padding: 10px 20px;
    font-size: 0.95rem;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  /* Portrait grid — 3 columns on desktop, 2 on mobile */
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  .card {
    background: #fff;
    border: 1.5px solid #eee;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  .card:hover { border-color: #000; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }

  .thumb-wrap {
    position: relative;
    aspect-ratio: 9 / 14;
    background: #f5f5f5;
    overflow: hidden;
  }
  .thumb {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
  }
  .thumb-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }

  .delete {
    position: absolute;
    top: 6px; right: 6px;
    background: rgba(0,0,0,0.5);
    border: none;
    color: #fff;
    border-radius: 50%;
    width: 22px; height: 22px;
    font-size: 0.65rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.15s;
  }
  .card:hover .delete { opacity: 1; }

  .card-body { padding: 10px 10px 12px; }
  .card-title {
    font-size: 0.85rem;
    font-weight: 600;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media (max-width: 500px) {
    .grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
    .delete { opacity: 1; } /* always visible on mobile */
  }
</style>

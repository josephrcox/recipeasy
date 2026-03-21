<script>
  let { cookbookId, onNavigate } = $props()
  let cookbook = $state(null)
  let recipes = $state([])
  let error = $state(null)

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
    <button onclick={() => onNavigate('analyze', { cookbookId })}>+ Add Recipe</button>
  </header>

  <div class="content">
    {#if error}<p class="error">{error}</p>{/if}

    {#if recipes.length === 0}
      <div class="empty">
        <p>No recipes yet.</p>
        <button onclick={() => onNavigate('analyze', { cookbookId })}>+ Add your first recipe</button>
      </div>
    {:else}
      <div class="grid">
        {#each recipes as recipe}
          <div class="card" onclick={() => onNavigate('recipe', { recipeId: recipe.id, cookbookId })}>
            {#if recipe.thumbnail_url}
              <img src={recipe.thumbnail_url} alt={recipe.title} class="thumb" />
            {:else}
              <div class="thumb-placeholder">🍴</div>
            {/if}
            <div class="card-body">
              <div class="card-title">{recipe.title}</div>
              {#if recipe.source_url}
                <div class="card-source">TikTok</div>
              {/if}
            </div>
            <button class="delete" onclick={(e) => { e.stopPropagation(); remove(recipe.id) }}>✕</button>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
  .page { max-width: 720px; margin: 0 auto; padding: 0 20px 60px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
  header { display: flex; align-items: center; gap: 16px; padding: 24px 0 20px; border-bottom: 1px solid #eee; margin-bottom: 28px; }
  h1 { margin: 0; font-size: 1.4rem; flex: 1; }
  .back { background: none; border: none; font-size: 0.95rem; cursor: pointer; color: #555; padding: 0; }
  .back:hover { color: #000; }
  button { padding: 9px 16px; font-size: 0.9rem; background: #000; color: #fff; border: none; border-radius: 8px; cursor: pointer; }
  .empty { text-align: center; padding: 60px 0; color: #aaa; }
  .empty p { margin-bottom: 16px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 14px; }
  .card { background: #fff; border: 1.5px solid #eee; border-radius: 12px; overflow: hidden; cursor: pointer; display: flex; flex-direction: column; transition: border-color 0.15s, box-shadow 0.15s; position: relative; }
  .card:hover { border-color: #000; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
  .thumb { width: 100%; height: 130px; object-fit: cover; }
  .thumb-placeholder { width: 100%; height: 130px; background: #f5f5f5; display: flex; align-items: center; justify-content: center; font-size: 2rem; }
  .card-body { padding: 12px; flex: 1; }
  .card-title { font-weight: 600; font-size: 0.9rem; line-height: 1.3; }
  .card-source { font-size: 0.75rem; color: #aaa; margin-top: 4px; }
  .delete { position: absolute; top: 6px; right: 6px; background: rgba(0,0,0,0.45); border: none; color: #fff; border-radius: 50%; width: 22px; height: 22px; font-size: 0.7rem; cursor: pointer; display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.15s; }
  .card:hover .delete { opacity: 1; }
  .error { color: #c00; }
</style>

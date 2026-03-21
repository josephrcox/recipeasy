<script>
  import Ingredients from './Ingredients.svelte'
  let { recipeId, cookbookId, onNavigate } = $props()
  let recipe = $state(null)
  let error = $state(null)

  async function load() {
    try {
      const res = await fetch(`/api/recipes/${recipeId}`, { credentials: 'include' })
      if (!res.ok) throw new Error('Recipe not found')
      recipe = await res.json()
    } catch (err) {
      error = err.message
    }
  }

  load()
</script>

<div class="page">
  <header>
    <button class="back" onclick={() => onNavigate('cookbook', { cookbookId })}>← Back</button>
  </header>

  {#if error}
    <p class="error">{error}</p>
  {:else if !recipe}
    <p class="loading">Loading...</p>
  {:else}
    {@const r = recipe.recipe_json}
    <div class="recipe">
      {#if recipe.thumbnail_url}
        <img class="thumbnail" src={recipe.thumbnail_url} alt={r.title} />
      {/if}

      <h1>{r.title}</h1>
      {#if r.description}<p class="description">{r.description}</p>{/if}

      <div class="meta-row">
        {#if r.servings}<span>🍽 {r.servings}</span>{/if}
        {#if r.prepTime}<span>⏱ Prep: {r.prepTime}</span>{/if}
        {#if r.cookTime}<span>🔥 Cook: {r.cookTime}</span>{/if}
      </div>

      {#if recipe.source_url}
        <a class="source-link" href={recipe.source_url} target="_blank" rel="noopener">View original TikTok ↗</a>
      {/if}

      <h2>Ingredients</h2>
      <Ingredients recipe={r} />

      <h2>Instructions</h2>
      <ol class="instructions">
        {#each r.instructions as step}
          <li>{step.replace(/^Step \d+:\s*/i, '')}</li>
        {/each}
      </ol>

      {#if r.tips?.length}
        <h2>Tips</h2>
        <ul class="tips">
          {#each r.tips as tip}<li>{tip}</li>{/each}
        </ul>
      {/if}
    </div>
  {/if}
</div>

<style>
  .page {
    max-width: 680px;
    margin: 0 auto;
    padding: 0 16px 80px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  header { padding: 20px 0 8px; }
  .back { background: none; border: none; font-size: 0.9rem; cursor: pointer; color: #555; padding: 0; }
  .back:hover { color: #000; }

  /* Portrait thumbnail with a side-strip layout */
  .thumbnail {
    width: 100%;
    max-height: 260px;
    object-fit: cover;
    object-position: center top;
    border-radius: 14px;
    margin: 12px 0 18px;
  }

  h1 { font-size: 1.5rem; margin: 0 0 8px; line-height: 1.2; }
  h2 { font-size: 1.05rem; margin: 24px 0 10px; border-bottom: 1px solid #eee; padding-bottom: 4px; }
  .description { color: #555; margin: 0 0 10px; font-size: 0.95rem; line-height: 1.5; }
  .meta-row { display: flex; flex-wrap: wrap; gap: 12px; font-size: 0.85rem; color: #666; margin-bottom: 10px; }
  .source-link { font-size: 0.85rem; color: #555; text-decoration: none; }
  .source-link:hover { color: #000; text-decoration: underline; }
  .tips li { margin-bottom: 6px; line-height: 1.5; }
  .instructions li { margin-bottom: 12px; line-height: 1.65; font-size: 0.95rem; }
  .error { color: #c00; }
  .loading { color: #aaa; }

  @media (max-width: 500px) {
    h1 { font-size: 1.3rem; }
    .thumbnail { max-height: 200px; }
  }
</style>

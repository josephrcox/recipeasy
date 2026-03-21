<script>
  import Ingredients from './Ingredients.svelte'
  let { cookbookId, onNavigate } = $props()
  let url = $state('')
  let loading = $state(false)
  let result = $state(null)
  let saving = $state(false)
  let error = $state(null)

  async function analyze() {
    if (!url.trim()) return
    loading = true
    result = null
    error = null
    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      result = data
    } catch (err) {
      error = err.message
    } finally {
      loading = false
    }
  }

  async function save() {
    if (!result) return
    saving = true
    try {
      const res = await fetch(`/api/cookbooks/${cookbookId}/recipes`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: result.recipe.title,
          sourceUrl: result.meta.sourceUrl,
          thumbnailUrl: result.meta.thumbnail,
          recipeJson: result.recipe
        })
      })
      if (!res.ok) throw new Error('Failed to save')
      onNavigate('cookbook', { cookbookId })
    } catch (err) {
      error = err.message
      saving = false
    }
  }
</script>

<div class="page">
  <header>
    <button class="back" onclick={() => onNavigate('cookbook', { cookbookId })}>← Back</button>
    <h1>Add Recipe</h1>
  </header>

  <div class="input-row">
    <input
      type="text"
      bind:value={url}
      placeholder="Paste a TikTok URL..."
      onkeydown={(e) => e.key === 'Enter' && analyze()}
      disabled={loading}
    />
    <button onclick={analyze} disabled={loading || !url.trim()}>
      {loading ? 'Analyzing...' : 'Analyze'}
    </button>
  </div>

  {#if loading}
    <div class="status">
      <div class="spinner"></div>
      Downloading & analyzing video — this takes ~30s...
    </div>
  {/if}

  {#if error}<div class="error">{error}</div>{/if}

  {#if result}
    {@const r = result.recipe}
    <div class="preview">
      <div class="preview-header">
        {#if result.meta?.thumbnail}
          <img src={result.meta.thumbnail} alt={r.title} class="thumb" />
        {/if}
        <div>
          <h2>{r.title}</h2>
          {#if r.description}<p class="desc">{r.description}</p>{/if}
          <div class="meta-row">
            {#if r.servings}<span>🍽 {r.servings}</span>{/if}
            {#if r.prepTime}<span>⏱ {r.prepTime}</span>{/if}
            {#if r.cookTime}<span>🔥 {r.cookTime}</span>{/if}
          </div>
        </div>
      </div>

      <h3>Ingredients</h3>
      <Ingredients recipe={r} />

      <h3>Instructions</h3>
      <ol>
        {#each r.instructions as step}
          <li>{step.replace(/^Step \d+:\s*/i, '')}</li>
        {/each}
      </ol>

      <div class="save-row">
        <button class="save-btn" onclick={save} disabled={saving}>
          {saving ? 'Saving...' : '✓ Save to Cookbook'}
        </button>
        <button class="ghost" onclick={() => { result = null; url = '' }}>Discard</button>
      </div>
    </div>
  {/if}
</div>

<style>
  .page { max-width: 680px; margin: 0 auto; padding: 0 20px 60px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
  header { display: flex; align-items: center; gap: 16px; padding: 24px 0 20px; }
  h1 { margin: 0; font-size: 1.3rem; }
  .back { background: none; border: none; font-size: 0.95rem; cursor: pointer; color: #555; padding: 0; }
  .back:hover { color: #000; }
  .input-row { display: flex; gap: 8px; margin-bottom: 16px; }
  input { flex: 1; padding: 10px 14px; font-size: 1rem; border: 1.5px solid #ddd; border-radius: 8px; outline: none; }
  input:focus { border-color: #000; }
  button { padding: 10px 18px; font-size: 0.95rem; background: #000; color: #fff; border: none; border-radius: 8px; cursor: pointer; white-space: nowrap; }
  button:disabled { opacity: 0.4; cursor: not-allowed; }
  .ghost { background: none; border: 1px solid #ddd; color: #555; }
  .ghost:hover { border-color: #999; }
  .status { display: flex; align-items: center; gap: 10px; color: #666; font-size: 0.9rem; margin-bottom: 16px; }
  .spinner { width: 16px; height: 16px; border: 2px solid #ddd; border-top-color: #000; border-radius: 50%; animation: spin 0.7s linear infinite; flex-shrink: 0; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .error { padding: 12px 16px; background: #fff0f0; border: 1px solid #ffcccc; border-radius: 8px; color: #c00; margin-bottom: 16px; }
  .preview { border: 1.5px solid #eee; border-radius: 14px; padding: 24px; }
  .preview-header { display: flex; gap: 16px; margin-bottom: 20px; }
  .thumb { width: 120px; height: 90px; object-fit: cover; border-radius: 8px; flex-shrink: 0; }
  h2 { margin: 0 0 6px; font-size: 1.2rem; }
  h3 { font-size: 1rem; margin: 20px 0 8px; border-bottom: 1px solid #eee; padding-bottom: 4px; }
  .desc { color: #666; font-size: 0.9rem; margin: 0 0 8px; }
  .meta-row { display: flex; flex-wrap: wrap; gap: 12px; font-size: 0.85rem; color: #666; }
  ul, ol { padding-left: 20px; margin: 0; }
  li { margin-bottom: 6px; line-height: 1.5; font-size: 0.95rem; }
  .save-row { display: flex; gap: 10px; margin-top: 24px; }
  .save-btn { background: #1a7a1a; }
  .save-btn:hover:not(:disabled) { background: #166016; }
</style>

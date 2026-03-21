<script>
  import Ingredients from './Ingredients.svelte'
  import Toast from './Toast.svelte'
  let { cookbookId, onNavigate } = $props()

  let url = $state('')
  let step = $state(null) // null | 'downloading' | 'extracting' | 'analyzing' | 'done' | 'duplicate' | 'error'
  let stepMessage = $state('')
  let result = $state(null)
  let duplicate = $state(null)
  let saving = $state(false)
  let error = $state(null)
  let showToast = $state(false)

  function isTikTokUrl(val) {
    try {
      const { hostname } = new URL(val.trim())
      return ['tiktok.com', 'www.tiktok.com', 'vm.tiktok.com', 'm.tiktok.com'].includes(hostname)
    } catch {
      return false
    }
  }

  const urlValid = $derived(isTikTokUrl(url))

  const steps = ['downloading', 'extracting', 'analyzing']
  const stepLabels = {
    downloading: 'Downloading video',
    extracting:  'Extracting frames',
    analyzing:   'Analyzing with Claude'
  }

  function analyze() {
    if (!urlValid) return
    step = 'downloading'
    stepMessage = 'Downloading video...'
    result = null
    duplicate = null
    error = null

    const es = new EventSource(`/api/analyze?url=${encodeURIComponent(url)}`)

    es.onmessage = (e) => {
      const data = JSON.parse(e.data)
      if (data.step === 'done') {
        result = data
        step = 'done'
        es.close()
      } else if (data.step === 'duplicate') {
        duplicate = data
        step = 'duplicate'
        es.close()
      } else if (data.step === 'error') {
        error = data.error
        step = 'error'
        es.close()
      } else {
        step = data.step
        stepMessage = data.message
      }
    }

    es.onerror = () => {
      error = 'Connection lost. Please try again.'
      step = 'error'
      es.close()
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
      showToast = true
      setTimeout(() => onNavigate('cookbook', { cookbookId }), 1000)
    } catch (err) {
      error = err.message
      saving = false
    }
  }

  function reset() {
    result = null
    error = null
    step = null
    url = ''
  }

  const loading = $derived(step && step !== 'done' && step !== 'error')
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
      class:invalid={url.trim() && !urlValid}
    />
    <button onclick={analyze} disabled={loading || !urlValid}>
      {loading ? '...' : 'Analyze'}
    </button>
  </div>
  {#if url.trim() && !urlValid}
    <p class="url-hint">Please enter a valid TikTok URL (tiktok.com)</p>
  {/if}

  {#if loading}
    <div class="progress">
      {#each steps as s}
        <div class="progress-step" class:active={step === s} class:done={steps.indexOf(step) > steps.indexOf(s)}>
          <div class="step-dot"></div>
          <span>{stepLabels[s]}</span>
        </div>
      {/each}
    </div>
  {/if}

  {#if step === 'error' || error}
    <div class="error">{error}</div>
  {/if}

  {#if duplicate}
    <div class="duplicate">
      <span>⚠️ Already saved as <strong>{duplicate.title}</strong> in <em>{duplicate.cookbookName}</em></span>
      <button class="view-btn" onclick={() => onNavigate('recipe', { recipeId: duplicate.recipeId, cookbookId: duplicate.cookbookId })}>View recipe</button>
    </div>
  {/if}

  <Toast message="Recipe saved! 🎉" bind:show={showToast} />

  {#if result}
    {@const r = result.recipe}
    <div class="preview">
      <div class="preview-hero">
        {#if result.meta?.thumbnail}
          <img src={result.meta.thumbnail} alt={r.title} class="thumb" />
        {/if}
        <div class="preview-title-block">
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
        {#each r.instructions as s}
          <li>{s.replace(/^Step \d+:\s*/i, '')}</li>
        {/each}
      </ol>

      <div class="save-row">
        <button class="save-btn" onclick={save} disabled={saving}>
          {saving ? 'Saving...' : '✓ Save to Cookbook'}
        </button>
        <button class="ghost" onclick={reset}>Discard</button>
      </div>
    </div>
  {/if}
</div>

<style>
  .page {
    max-width: 680px;
    margin: 0 auto;
    padding: 0 16px 60px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 20px 0 16px;
  }
  h1 { margin: 0; font-size: 1.2rem; }
  .back { background: none; border: none; font-size: 0.95rem; cursor: pointer; color: #555; padding: 0; }
  .back:hover { color: #000; }

  .input-row { display: flex; gap: 8px; margin-bottom: 20px; }
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
  input.invalid { border-color: #e05; }
  .url-hint { margin: -12px 0 16px; font-size: 0.82rem; color: #e05; }
  button {
    padding: 10px 18px;
    font-size: 0.95rem;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    white-space: nowrap;
    flex-shrink: 0;
  }
  button:disabled { opacity: 0.4; cursor: not-allowed; }

  /* Progress steps */
  .progress {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 12px;
    margin-bottom: 20px;
  }
  .progress-step {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.95rem;
    color: #aaa;
    transition: color 0.3s;
  }
  .progress-step.done { color: #2a9d2a; }
  .progress-step.active { color: #000; font-weight: 500; }
  .step-dot {
    width: 10px; height: 10px;
    border-radius: 50%;
    background: #ddd;
    flex-shrink: 0;
    transition: background 0.3s;
  }
  .progress-step.done .step-dot { background: #2a9d2a; }
  .progress-step.active .step-dot {
    background: #000;
    box-shadow: 0 0 0 3px rgba(0,0,0,0.12);
    animation: pulse 1.2s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 3px rgba(0,0,0,0.12); }
    50% { box-shadow: 0 0 0 6px rgba(0,0,0,0.06); }
  }

  .error {
    padding: 12px 16px;
    background: #fff0f0;
    border: 1px solid #ffcccc;
    border-radius: 8px;
    color: #c00;
    margin-bottom: 16px;
    font-size: 0.9rem;
  }
  .duplicate {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 12px 16px;
    background: #fffbe6;
    border: 1px solid #ffe58f;
    border-radius: 8px;
    margin-bottom: 16px;
    font-size: 0.9rem;
    color: #7a5f00;
    flex-wrap: wrap;
  }
  .view-btn {
    background: #000;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 6px 14px;
    font-size: 0.85rem;
    cursor: pointer;
    flex-shrink: 0;
  }

  /* Preview */
  .preview { border: 1.5px solid #eee; border-radius: 14px; overflow: hidden; }
  .preview-hero { display: flex; gap: 0; }
  .thumb {
    width: 120px;
    flex-shrink: 0;
    object-fit: cover;
    aspect-ratio: 9/16;
    max-height: 200px;
  }
  .preview-title-block { padding: 16px; flex: 1; min-width: 0; }
  h2 { margin: 0 0 6px; font-size: 1.1rem; line-height: 1.3; }
  h3 { font-size: 1rem; margin: 0 20px 8px; border-bottom: 1px solid #eee; padding-bottom: 4px; padding-top: 16px; }
  .desc { color: #666; font-size: 0.88rem; margin: 0 0 8px; }
  .meta-row { display: flex; flex-wrap: wrap; gap: 10px; font-size: 0.82rem; color: #666; }
  ol { padding: 0 20px 0 36px; margin: 0 0 8px; }
  li { margin-bottom: 8px; line-height: 1.5; font-size: 0.95rem; }

  .save-row {
    display: flex;
    gap: 10px;
    padding: 16px 20px 20px;
  }
  .save-btn { background: #1a7a1a; flex: 1; }
  .save-btn:hover:not(:disabled) { background: #166016; }
  .ghost { background: none; border: 1px solid #ddd; color: #555; }
  .ghost:hover { border-color: #999; }

  @media (max-width: 500px) {
    .thumb { width: 90px; max-height: 160px; }
    h2 { font-size: 1rem; }
  }
</style>

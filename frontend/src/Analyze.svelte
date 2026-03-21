<script>
  import { ArrowLeft, Link, CheckCircle, Sparkles } from 'lucide-svelte'
  import Ingredients from './Ingredients.svelte'
  import Toast from './Toast.svelte'
  import BottomNav from './BottomNav.svelte'

  let { onNavigate, route } = $props()

  let mode = $state('tiktok') // 'tiktok' | 'generate'
  let url = $state('')
  let prompt = $state('')
  let step = $state(null)
  let result = $state(null)
  let duplicate = $state(null)
  let saving = $state(false)
  let generating = $state(false)
  let error = $state(null)
  let showToast = $state(false)
  let cookbooks = $state([])
  let selectedCookbookId = $state(null)

  const steps = ['downloading', 'extracting', 'analyzing']
  const stepLabels = {
    downloading: 'Downloading video',
    extracting:  'Extracting frames',
    analyzing:   'Analyzing with Claude'
  }

  async function loadCookbooks() {
    try {
      const res = await fetch('/api/cookbooks', { credentials: 'include' })
      cookbooks = await res.json()
      // Default to the Uncategorized (is_default) cookbook
      const def = cookbooks.find(c => c.is_default)
      if (def) selectedCookbookId = def.id
    } catch {}
  }

  loadCookbooks()

  function isTikTokUrl(val) {
    try {
      const { hostname } = new URL(val.trim())
      return ['tiktok.com', 'www.tiktok.com', 'vm.tiktok.com', 'm.tiktok.com'].includes(hostname)
    } catch { return false }
  }

  const urlValid = $derived(isTikTokUrl(url))
  const loading = $derived(step && step !== 'done' && step !== 'duplicate' && step !== 'error')

  function analyze() {
    if (!urlValid) return
    step = 'downloading'
    result = null
    duplicate = null
    error = null

    const es = new EventSource(`/api/analyze?url=${encodeURIComponent(url)}`)
    es.onmessage = (e) => {
      const data = JSON.parse(e.data)
      if (data.step === 'done') { result = data; step = 'done'; es.close() }
      else if (data.step === 'duplicate') { duplicate = data; step = 'duplicate'; es.close() }
      else if (data.step === 'error') { error = data.error; step = 'error'; es.close() }
      else step = data.step
    }
    es.onerror = () => { error = 'Connection lost. Please try again.'; step = 'error'; es.close() }
  }

  async function save() {
    if (!result || !selectedCookbookId) return
    saving = true
    try {
      const res = await fetch(`/api/cookbooks/${selectedCookbookId}/recipes`, {
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
      const saved = await res.json()
      showToast = true
      setTimeout(() => onNavigate('recipe', { recipeId: saved.id, cookbookId: selectedCookbookId }), 1200)
    } catch (err) {
      error = err.message
      saving = false
    }
  }

  async function generate() {
    if (!prompt.trim() || generating) return
    generating = true
    result = null
    error = null
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: prompt.trim() })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Generation failed')
      result = { recipe: data.recipe, meta: {} }
    } catch (err) {
      error = err.message
    }
    generating = false
  }

  function switchMode(m) {
    mode = m
    result = null
    error = null
    step = null
    duplicate = null
  }

  function reset() { result = null; error = null; step = null; url = ''; prompt = ''; duplicate = null }
</script>

<div class="page-with-nav">
  <div class="top-bar">
    <button class="icon-btn" onclick={() => onNavigate('cookbooks')}>
      <ArrowLeft size={20} />
    </button>
    <h1>Add Recipe</h1>
  </div>

  <div class="body">
    <!-- Mode tabs -->
    <div class="tabs">
      <button class="tab" class:active={mode === 'tiktok'} onclick={() => switchMode('tiktok')}>
        <Link size={14} /> From TikTok
      </button>
      <button class="tab" class:active={mode === 'generate'} onclick={() => switchMode('generate')}>
        <Sparkles size={14} /> Generate
      </button>
    </div>

    <!-- TikTok input -->
    {#if mode === 'tiktok'}
    <div class="input-card">
      <div class="input-label">
        <Link size={14} />
        TikTok URL
      </div>
      <input
        class="input"
        class:invalid={url.trim() && !urlValid}
        type="url"
        inputmode="url"
        bind:value={url}
        placeholder="https://www.tiktok.com/…"
        onkeydown={(e) => e.key === 'Enter' && analyze()}
        disabled={loading}
        autofocus
      />
      {#if url.trim() && !urlValid}
        <p class="hint">Please enter a valid TikTok URL</p>
      {/if}
      <button class="btn-primary" onclick={analyze} disabled={loading || !urlValid}>
        {loading ? 'Analyzing…' : 'Analyze Video'}
      </button>
    </div>
    {/if}

    <!-- Generate input -->
    {#if mode === 'generate'}
    <div class="input-card">
      <div class="input-label">
        <Sparkles size={14} />
        What do you want to cook?
      </div>
      <input
        class="input"
        type="text"
        bind:value={prompt}
        placeholder="e.g. Healthy bagel pizza"
        onkeydown={(e) => e.key === 'Enter' && generate()}
        disabled={generating}
        autofocus
      />
      <button class="btn-primary generate-btn" onclick={generate} disabled={generating || !prompt.trim()}>
        {#if generating}
          <span class="btn-spinner"></span> Generating…
        {:else}
          <Sparkles size={16} /> Generate Recipe
        {/if}
      </button>
    </div>
    {/if}

    <!-- Progress -->
    {#if loading}
      <div class="progress-card">
        {#each steps as s}
          {@const isDone = steps.indexOf(step) > steps.indexOf(s)}
          {@const isActive = step === s}
          <div class="step-row" class:done={isDone} class:active={isActive}>
            <div class="step-dot" class:done={isDone} class:active={isActive}>
              {#if isDone}<CheckCircle size={16} />{/if}
            </div>
            <span>{stepLabels[s]}</span>
            {#if isActive}<div class="step-spinner"></div>{/if}
          </div>
        {/each}
      </div>
    {/if}

    <!-- Error -->
    {#if error}<div class="error-banner">{error}</div>{/if}

    <!-- Duplicate warning -->
    {#if duplicate}
      <div class="duplicate-card">
        <p>⚠️ Already saved as <strong>{duplicate.title}</strong> in <em>{duplicate.cookbookName}</em></p>
        <button class="btn-primary" style="margin-top:12px"
          onclick={() => onNavigate('recipe', { recipeId: duplicate.recipeId, cookbookId: duplicate.cookbookId })}>
          View saved recipe
        </button>
      </div>
    {/if}

    <!-- Result preview -->
    {#if result}
      {@const r = result.recipe}
      <div class="result-card">
        {#if result.meta?.thumbnail}
          <img src={result.meta.thumbnail} alt={r.title} class="result-thumb" />
        {/if}
        <div class="result-content">
          <h2>{r.title}</h2>
          {#if r.description}<p class="result-desc">{r.description}</p>{/if}
          <div class="pills" style="margin:10px 0">
            {#if r.servings}<span class="pill">🍽 {r.servings}</span>{/if}
            {#if r.prepTime}<span class="pill">⏱ {r.prepTime}</span>{/if}
            {#if r.cookTime}<span class="pill">🔥 {r.cookTime}</span>{/if}
          </div>

          <div class="divider" style="margin:14px 0"></div>
          <h3 style="margin-bottom:10px;font-size:0.92rem">Ingredients</h3>
          <Ingredients recipe={r} />

          <div class="divider" style="margin:14px 0"></div>
          <h3 style="margin-bottom:10px;font-size:0.92rem">Instructions</h3>
          <ol class="result-steps">
            {#each r.instructions as s, i}
              <li>
                <div class="step-num-sm">{i+1}</div>
                <p>{s.replace(/^Step \d+:\s*/i, '')}</p>
              </li>
            {/each}
          </ol>

          <div class="divider" style="margin:14px 0"></div>

          <!-- Cookbook picker -->
          <div class="cookbook-row">
            <span class="cookbook-label">📁 Save to</span>
            <select class="cookbook-select" bind:value={selectedCookbookId}>
              {#each cookbooks as cb}
                <option value={cb.id}>{cb.name}</option>
              {/each}
            </select>
          </div>

          <div class="result-actions">
            <button class="btn-primary save-btn" onclick={save} disabled={saving || !selectedCookbookId}>
              {saving ? 'Saving…' : '✓ Save Recipe'}
            </button>
            <button class="btn-ghost" onclick={reset}>Discard</button>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>

<Toast message="Recipe saved! 🎉" bind:show={showToast} />
<BottomNav {route} {onNavigate} />

<style>
  .top-bar { background: var(--surface); }

  .body { padding: 16px; display: flex; flex-direction: column; gap: 14px; }

  /* Tabs */
  .tabs {
    display: flex;
    background: var(--surface);
    border-radius: var(--radius);
    padding: 4px;
    box-shadow: var(--shadow);
    gap: 4px;
  }
  .tab {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 10px;
    border: none;
    border-radius: calc(var(--radius) - 4px);
    background: none;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-3);
    cursor: pointer;
    transition: background 0.15s, color 0.15s;
  }
  .tab.active {
    background: var(--bg);
    color: var(--text);
  }

  .input-card {
    background: var(--surface);
    border-radius: var(--radius);
    padding: 16px;
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .input-label {
    display: flex; align-items: center; gap: 6px;
    font-size: 0.8rem; font-weight: 600; color: var(--text-2);
    text-transform: uppercase; letter-spacing: 0.05em;
  }
  .hint { font-size: 0.8rem; color: var(--accent); margin-top: -4px; }

  /* Progress */
  .progress-card {
    background: var(--surface);
    border-radius: var(--radius);
    padding: 16px 20px;
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .step-row {
    display: flex; align-items: center; gap: 12px;
    font-size: 0.9rem; color: var(--text-3);
    transition: color 0.3s;
  }
  .step-row.done { color: var(--success); }
  .step-row.active { color: var(--text); font-weight: 600; }
  .step-dot {
    width: 20px; height: 20px;
    border-radius: 50%;
    border: 2px solid var(--border);
    flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    transition: border-color 0.3s, background 0.3s;
  }
  .step-dot.done { border-color: var(--success); color: var(--success); }
  .step-dot.active { border-color: var(--accent); background: var(--accent-light); }
  .step-spinner {
    width: 16px; height: 16px;
    border: 2px solid var(--border);
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    margin-left: auto;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* Duplicate */
  .duplicate-card {
    background: #FFFBE6;
    border: 1px solid #FFE58F;
    border-radius: var(--radius);
    padding: 16px;
    font-size: 0.9rem;
    color: #7A5F00;
    line-height: 1.5;
  }

  /* Result */
  .result-card {
    background: var(--surface);
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
  }
  .result-thumb {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: center top;
    display: block;
  }
  .result-content { padding: 16px; }
  .result-content h2 { font-size: 1.2rem; margin-bottom: 6px; }
  .result-desc { font-size: 0.88rem; color: var(--text-2); line-height: 1.5; }

  .result-steps { list-style: none; display: flex; flex-direction: column; gap: 12px; }
  .result-steps li { display: flex; gap: 10px; align-items: flex-start; }
  .step-num-sm {
    width: 22px; height: 22px; flex-shrink: 0;
    border-radius: 50%;
    background: var(--accent);
    color: #fff;
    font-size: 0.72rem; font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    margin-top: 2px;
  }
  .result-steps p { font-size: 0.88rem; line-height: 1.55; color: var(--text); }

  /* Cookbook picker */
  .cookbook-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 14px;
  }
  .cookbook-label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-2);
    white-space: nowrap;
  }
  .cookbook-select {
    flex: 1;
    padding: 8px 12px;
    border: 1.5px solid var(--border);
    border-radius: var(--radius-sm);
    background: var(--bg);
    font-size: 0.88rem;
    color: var(--text);
    cursor: pointer;
    appearance: auto;
  }
  .cookbook-select:focus { outline: none; border-color: var(--accent); }

  .result-actions { display: flex; flex-direction: column; gap: 10px; }
  .save-btn { background: var(--success); }
  .save-btn:hover:not(:disabled) { background: #259052; }
  .divider { height: 1px; background: var(--border); }

  .generate-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .btn-spinner {
    width: 14px; height: 14px;
    border: 2px solid rgba(255,255,255,0.4);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    flex-shrink: 0;
  }
</style>

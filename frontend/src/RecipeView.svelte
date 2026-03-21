<script>
  import { ArrowLeft, ExternalLink, Clock, Users, Flame, Copy } from 'lucide-svelte'
  import Ingredients from './Ingredients.svelte'
  import Toast from './Toast.svelte'
  import BottomNav from './BottomNav.svelte'

  let { recipeId, cookbookId, onNavigate, route } = $props()
  let recipe = $state(null)
  let error = $state(null)
  let cookbooks = $state([])
  let currentCookbookId = $state(cookbookId)
  let moving = $state(false)
  let moveSuccess = $state(false)
  let showCopyToast = $state(false)
  let checkedIngredients = $state(new Set())
  let checkedSteps = $state(new Set())

  async function saveChecked(ingredients, steps) {
    await fetch(`/api/recipes/${recipeId}/checked`, {
      method: 'PATCH',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ingredients: [...ingredients], steps: [...steps] })
    })
  }

  function toggleIngredient(key) {
    const next = new Set(checkedIngredients)
    next.has(key) ? next.delete(key) : next.add(key)
    checkedIngredients = next
    saveChecked(next, checkedSteps)
  }

  function toggleStep(i) {
    const next = new Set(checkedSteps)
    next.has(i) ? next.delete(i) : next.add(i)
    checkedSteps = next
    saveChecked(checkedIngredients, next)
  }

  function copyIngredients(r) {
    const groups = r.ingredientGroups ?? (r.ingredients ? [{ group: null, items: r.ingredients }] : [])
    const lines = []
    for (const g of groups) {
      if (g.group) lines.push(`${g.emoji ? g.emoji + ' ' : ''}${g.group}`)
      for (const ing of g.items) {
        const item = [ing.amount, ing.unit, ing.item].filter(Boolean).join(' ')
        lines.push(g.group ? `  ${item}` : item)
      }
    }
    navigator.clipboard.writeText(lines.join('\n'))
    showCopyToast = true
  }

  async function load() {
    try {
      const [recRes, cbRes] = await Promise.all([
        fetch(`/api/recipes/${recipeId}`, { credentials: 'include' }),
        fetch('/api/cookbooks', { credentials: 'include' })
      ])
      if (!recRes.ok) throw new Error('Recipe not found')
      recipe = await recRes.json()
      cookbooks = await cbRes.json()
      currentCookbookId = recipe.cookbook_id
      checkedIngredients = new Set(recipe.checked_json?.ingredients ?? [])
      checkedSteps = new Set(recipe.checked_json?.steps ?? [])
    } catch (err) {
      error = err.message
    }
  }

  async function moveRecipe(newCookbookId) {
    if (newCookbookId === currentCookbookId || moving) return
    moving = true
    moveSuccess = false
    try {
      const res = await fetch(`/api/recipes/${recipeId}/move`, {
        method: 'PATCH',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cookbookId: newCookbookId })
      })
      if (!res.ok) throw new Error('Move failed')
      currentCookbookId = newCookbookId
      moveSuccess = true
      setTimeout(() => { moveSuccess = false }, 2000)
    } catch {}
    moving = false
  }

  load()
</script>

<div class="page-with-nav">
  {#if error}
    <div class="top-bar">
      <button class="icon-btn" onclick={() => onNavigate('cookbook', { cookbookId })}>
        <ArrowLeft size={20} />
      </button>
    </div>
    <div class="error-banner">{error}</div>
  {:else if !recipe}
    <div class="loading">
      <div class="spinner"></div>
    </div>
  {:else}
    {@const r = recipe.recipe_json}

    <!-- Hero image -->
    <div class="hero">
      {#if recipe.thumbnail_url}
        <img src={recipe.thumbnail_url} alt={r.title} class="hero-img" />
      {:else}
        <div class="hero-placeholder">🍳</div>
      {/if}
      <div class="hero-gradient"></div>
      <button class="back-btn icon-btn" onclick={() => onNavigate('cookbook', { cookbookId })}>
        <ArrowLeft size={20} />
      </button>
    </div>

    <!-- Content -->
    <div class="content">
      <h1>{r.title}</h1>
      {#if r.description}
        <p class="description">{r.description}</p>
      {/if}

      <!-- Meta pills -->
      <div class="pills">
        {#if r.servings}
          <span class="pill"><Users size={13} /> {r.servings}</span>
        {/if}
        {#if r.prepTime}
          <span class="pill"><Clock size={13} /> Prep {r.prepTime}</span>
        {/if}
        {#if r.cookTime}
          <span class="pill"><Flame size={13} /> Cook {r.cookTime}</span>
        {/if}
      </div>

      {#if recipe.source_url}
        <a class="source-link" href={recipe.source_url} target="_blank" rel="noopener">
          <ExternalLink size={13} />
          View original TikTok
        </a>
      {/if}

      <!-- Move to cookbook -->
      {#if cookbooks.length > 1}
        <div class="move-row">
          <span class="move-label">📁</span>
          <select
            class="move-select"
            value={currentCookbookId}
            onchange={(e) => moveRecipe(parseInt(e.target.value))}
            disabled={moving}
          >
            {#each cookbooks as cb}
              <option value={cb.id}>{cb.name}</option>
            {/each}
          </select>
          {#if moveSuccess}<span class="move-ok">Moved ✓</span>{/if}
        </div>
      {/if}

      <div class="divider"></div>

      <section>
        <div class="section-header">
          <h2 class="section-title">Ingredients</h2>
          <button class="copy-btn" onclick={() => copyIngredients(r)}>
            <Copy size={14} />
            Copy all
          </button>
        </div>
        <Ingredients recipe={r} checked={checkedIngredients} onToggle={toggleIngredient} />
      </section>

      <div class="divider"></div>

      <section>
        <h2 class="section-title">Instructions</h2>
        <ol class="steps">
          {#each r.instructions as step, i}
            <li class="step" class:checked={checkedSteps.has(i)} onclick={() => toggleStep(i)}>
              <div class="step-num">{i + 1}</div>
              <p>{step.replace(/^Step \d+:\s*/i, '')}</p>
            </li>
          {/each}
        </ol>
      </section>

      {#if r.tips?.length}
        <div class="divider"></div>
        <section>
          <h2 class="section-title">Tips</h2>
          <ul class="tips">
            {#each r.tips as tip}
              <li>💡 {tip}</li>
            {/each}
          </ul>
        </section>
      {/if}
    </div>
  {/if}
</div>

<Toast message="Ingredients copied! 📋" bind:show={showCopyToast} />
<BottomNav {route} {onNavigate} />

<style>
  .loading {
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .spinner {
    width: 32px; height: 32px;
    border: 3px solid var(--border);
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* Hero */
  .hero {
    position: relative;
    height: 320px;
    background: #E8E0D8;
    overflow: hidden;
    flex-shrink: 0;
  }
  .hero-img {
    width: 100%; height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
  }
  .hero-placeholder {
    width: 100%; height: 100%;
    display: flex; align-items: center; justify-content: center;
    font-size: 4rem;
    background: linear-gradient(135deg, #F5F0EB 0%, #E8E0D8 100%);
  }
  .hero-gradient {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%);
  }
  .back-btn {
    position: absolute;
    top: calc(var(--safe-top) + 12px);
    left: 12px;
    background: rgba(255,255,255,0.9);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    box-shadow: 0 2px 12px rgba(0,0,0,0.15);
  }

  /* Content */
  .content {
    background: var(--surface);
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    margin-top: -24px;
    position: relative;
    padding: 24px 16px 32px;
    min-height: 60vh;
  }

  h1 { font-size: 1.5rem; margin-bottom: 8px; }
  .description { color: var(--text-2); font-size: 0.93rem; line-height: 1.5; margin-bottom: 14px; }

  .pills { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; }

  .source-link {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.82rem;
    color: var(--text-3);
    text-decoration: none;
    margin-bottom: 4px;
  }
  .source-link:hover { color: var(--accent); }

  .divider { height: 1px; background: var(--border); margin: 14px 0; }

  section { margin: 0; }

  .section-header {
    display: flex;
    align-items: start;

    margin-bottom: 14px;
  }
  .section-title {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 14px;
  }
  .section-header .section-title { margin-bottom: 0; }
  .copy-btn {
    display: flex;
    align-items: center;
    gap: 5px;
    background: none;
    border: 1.5px solid var(--border);
    border-radius: 20px;
    padding: 5px 12px;
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--text-2);
    cursor: pointer;
    transition: border-color 0.15s, color 0.15s;
  }
  .copy-btn:active { border-color: var(--accent); color: var(--accent); }

  /* Steps */
  .steps { list-style: none; display: flex; flex-direction: column; gap: 12px; }
  .step {
    display: flex; gap: 10px; padding-bottom: 2px; align-items: flex-start;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  .step-num {
    width: 28px; height: 28px;
    border-radius: 50%;
    background: var(--accent);
    color: #fff;
    font-size: 0.8rem;
    font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
    transition: background 0.2s;
  }
  .step p { font-size: 0.95rem; line-height: 1.6; color: var(--text); transition: color 0.2s; }
  .step.checked .step-num { background: var(--border); }
  .step.checked p { text-decoration: line-through; color: var(--text-3); }

  /* Tips */
  .tips { list-style: none; display: flex; flex-direction: column; gap: 10px; }
  .tips li { font-size: 0.9rem; line-height: 1.5; color: var(--text-2); }

  /* Move */
  .move-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 10px;
    margin-bottom: -2px;
  }
  .move-label { font-size: 1rem; }
  .move-select {
    flex: 1;
    padding: 7px 10px;
    border: 1.5px solid var(--border);
    border-radius: var(--radius-sm);
    background: var(--bg);
    font-size: 0.85rem;
    color: var(--text);
    cursor: pointer;
    appearance: auto;
  }
  .move-select:focus { outline: none; border-color: var(--accent); }
  .move-ok { font-size: 0.8rem; color: var(--success); font-weight: 600; white-space: nowrap; }
</style>

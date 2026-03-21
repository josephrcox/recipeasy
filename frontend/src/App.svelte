<script>
  import Login from './Login.svelte'
  import Cookbooks from './Cookbooks.svelte'
  import CookbookView from './CookbookView.svelte'
  import RecipeView from './RecipeView.svelte'
  import Analyze from './Analyze.svelte'

  let userId = $state(null)
  let sessionChecked = $state(false)

  function parseUrl() {
    const p = new URLSearchParams(window.location.search)
    return {
      page:       p.get('page') || 'cookbooks',
      cookbookId: p.get('cookbookId') ? parseInt(p.get('cookbookId')) : null,
      recipeId:   p.get('recipeId')   ? parseInt(p.get('recipeId'))   : null,
    }
  }

  let route = $state(parseUrl())

  function navigate(to, params = {}) {
    if (to === 'cookbooks') {
      history.pushState({}, '', '/')
    } else {
      const qs = new URLSearchParams({ page: to, ...filterNull(params) })
      history.pushState({}, '', `?${qs}`)
    }
    route = parseUrl()
  }

  function filterNull(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([, v]) => v != null))
  }

  $effect(() => {
    function onPop() { route = parseUrl() }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  })

  async function checkSession() {
    const [res] = await Promise.all([
      fetch('/api/me', { credentials: 'include' }),
      new Promise(r => setTimeout(r, 500))
    ])
    const data = await res.json()
    userId = data.userId || null
    sessionChecked = true
  }

  checkSession()
</script>

{#if !sessionChecked}
  <div class="splash"><div class="splash-logo">🍳</div></div>
{:else if !userId}
  <Login onLogin={(id) => { userId = id; navigate('cookbooks') }} />
{:else if route.page === 'cookbooks'}
  <Cookbooks {userId} {route} onNavigate={navigate} onLogout={() => { userId = null }} />
{:else if route.page === 'cookbook'}
  <CookbookView cookbookId={route.cookbookId} {route} onNavigate={navigate} />
{:else if route.page === 'recipe'}
  <RecipeView recipeId={route.recipeId} cookbookId={route.cookbookId} {route} onNavigate={navigate} />
{:else if route.page === 'analyze'}
  <Analyze {route} onNavigate={navigate} />
{/if}

<style>
  .splash {
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(160deg, #1A1A1A 0%, #2D1810 50%, #E8532A 100%);
  }
  .splash-logo {
    font-size: 4rem;
    animation: pulse 0.8s ease-in-out infinite alternate;
  }
  @keyframes pulse {
    from { transform: scale(1); opacity: 0.8; }
    to   { transform: scale(1.12); opacity: 1; }
  }
</style>

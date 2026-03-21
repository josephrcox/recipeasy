<script>
  import Login from './Login.svelte'
  import Cookbooks from './Cookbooks.svelte'
  import CookbookView from './CookbookView.svelte'
  import RecipeView from './RecipeView.svelte'
  import Analyze from './Analyze.svelte'

  let userId = $state(null)

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
    const res = await fetch('/api/me', { credentials: 'include' })
    const data = await res.json()
    userId = data.userId || null
  }

  checkSession()
</script>

{#if !userId}
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

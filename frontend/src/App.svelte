<script>
  import Login from './Login.svelte'
  import Cookbooks from './Cookbooks.svelte'
  import CookbookView from './CookbookView.svelte'
  import RecipeView from './RecipeView.svelte'
  import Analyze from './Analyze.svelte'

  let userId = $state(null)
  let page = $state('cookbooks') // cookbooks | cookbook | recipe | analyze
  let activeCookbookId = $state(null)
  let activeRecipeId = $state(null)

  async function checkSession() {
    const res = await fetch('/api/me', { credentials: 'include' })
    const data = await res.json()
    userId = data.userId || null
  }

  checkSession()

  function navigate(to, params = {}) {
    page = to
    if (params.cookbookId !== undefined) activeCookbookId = params.cookbookId
    if (params.recipeId !== undefined) activeRecipeId = params.recipeId
  }
</script>

{#if !userId}
  <Login onLogin={(id) => { userId = id }} />
{:else if page === 'cookbooks'}
  <Cookbooks {userId} onNavigate={navigate} onLogout={() => { userId = null }} />
{:else if page === 'cookbook'}
  <CookbookView cookbookId={activeCookbookId} onNavigate={navigate} />
{:else if page === 'recipe'}
  <RecipeView recipeId={activeRecipeId} cookbookId={activeCookbookId} onNavigate={navigate} />
{:else if page === 'analyze'}
  <Analyze cookbookId={activeCookbookId} onNavigate={navigate} />
{/if}

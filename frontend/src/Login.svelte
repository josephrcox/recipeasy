<script>
  let { onLogin } = $props()
  let userId = $state('')
  let error = $state(null)
  let loading = $state(false)

  async function login() {
    if (!userId.trim()) return
    loading = true
    error = null
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: userId.trim() })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      onLogin(data.userId)
    } catch (err) {
      error = err.message
    } finally {
      loading = false
    }
  }
</script>

<div class="screen">
  <div class="hero">
    <div class="logo">🍳</div>
    <h1>Recipeasy</h1>
    <p>Save recipes from TikTok videos into your personal cookbooks</p>
  </div>

  <div class="card">
    <h2>Welcome back</h2>
    <p class="sub">Enter your user ID to continue</p>

    <div class="field">
      <input
        class="input"
        type="text"
        bind:value={userId}
        placeholder="Your user ID"
        onkeydown={(e) => e.key === 'Enter' && login()}
        disabled={loading}
        autocomplete="off"
        autocapitalize="none"
        autofocus
      />
    </div>
    {#if error}<p class="err">{error}</p>{/if}

    <button class="btn-primary" onclick={login} disabled={loading || !userId.trim()}>
      {loading ? 'Signing in…' : 'Sign in'}
    </button>
  </div>
</div>

<style>
  .screen {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: env(safe-area-inset-bottom, 24px);
    background: linear-gradient(160deg, #1A1A1A 0%, #2D1810 50%, #E8532A 100%);
  }

  .hero {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px 32px 40px;
    text-align: center;
    color: #fff;
  }

  .logo {
    font-size: 4rem;
    margin-bottom: 16px;
    filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));
  }

  .hero h1 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #fff;
    margin-bottom: 10px;
    letter-spacing: -0.03em;
  }

  .hero p {
    font-size: 1rem;
    color: rgba(255,255,255,0.7);
    line-height: 1.5;
    max-width: 260px;
  }

  .card {
    background: var(--surface);
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    padding: 32px 24px 24px;
  }

  .card h2 { font-size: 1.5rem; margin-bottom: 4px; }
  .sub { color: var(--text-2); font-size: 0.9rem; margin-bottom: 24px; }

  .field { margin-bottom: 12px; }
  .err { color: var(--accent); font-size: 0.85rem; margin-bottom: 12px; }
</style>

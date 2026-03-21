<script>
  import { onMount } from 'svelte'

  let { onLogin } = $props()
  let error = $state(null)
  let loading = $state(false)
  let btnEl

  onMount(async () => {
    const res = await fetch('/api/config')
    const { googleClientId } = await res.json()

    await loadGsi()

    google.accounts.id.initialize({
      client_id: googleClientId,
      callback: handleCredential,
      use_fedcm_for_prompt: true,
    })

    google.accounts.id.renderButton(btnEl, {
      theme: 'outline',
      size: 'large',
      shape: 'rectangular',
      width: 320,
      text: 'continue_with',
    })
  })

  function loadGsi() {
    return new Promise((resolve) => {
      if (window.google?.accounts) { resolve(); return }
      const s = document.createElement('script')
      s.src = 'https://accounts.google.com/gsi/client'
      s.onload = resolve
      document.head.appendChild(s)
    })
  }

  async function handleCredential({ credential }) {
    loading = true
    error = null
    try {
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ credential })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      onLogin(data.userId)
    } catch (err) {
      error = err.message
      loading = false
    }
  }
</script>

<div class="screen">
  <div class="hero">
    <div class="logo">🍳</div>
    <h1>Recipeasy</h1>
    <p>Save and generate recipes into your personal cookbooks</p>
  </div>

  <div class="card">
    <h2>Welcome</h2>
    <p class="sub">Sign in to continue</p>

    {#if loading}
      <div class="loading-row">
        <div class="spinner"></div>
        <span>Signing in…</span>
      </div>
    {:else}
      <div bind:this={btnEl} class="google-btn-wrap"></div>
    {/if}

    {#if error}<p class="err">{error}</p>{/if}
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

  .google-btn-wrap {
    display: flex;
    justify-content: center;
  }

  .loading-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px 0;
    color: var(--text-2);
    font-size: 0.9rem;
  }

  .spinner {
    width: 20px; height: 20px;
    border: 2px solid var(--border);
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  .err { color: var(--accent); font-size: 0.85rem; margin-top: 12px; text-align: center; }
</style>

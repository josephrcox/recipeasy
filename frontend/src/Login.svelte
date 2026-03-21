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

<div class="login-wrap">
  <div class="login-box">
    <h1>Recipeasy</h1>
    <p>Enter your user ID to access your cookbooks</p>
    <input
      type="text"
      bind:value={userId}
      placeholder="e.g. 1234"
      onkeydown={(e) => e.key === 'Enter' && login()}
      disabled={loading}
    />
    {#if error}<p class="error">{error}</p>{/if}
    <button onclick={login} disabled={loading || !userId.trim()}>
      {loading ? 'Signing in...' : 'Sign in'}
    </button>
  </div>
</div>

<style>
  .login-wrap {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f9f9f9;
  }
  .login-box {
    background: white;
    border: 1px solid #eee;
    border-radius: 16px;
    padding: 40px;
    width: 340px;
    text-align: center;
  }
  h1 { margin: 0 0 8px; font-size: 1.8rem; }
  p { color: #666; margin: 0 0 24px; font-size: 0.95rem; }
  input {
    width: 100%;
    padding: 10px 14px;
    font-size: 1rem;
    border: 1.5px solid #ddd;
    border-radius: 8px;
    box-sizing: border-box;
    outline: none;
    margin-bottom: 12px;
  }
  input:focus { border-color: #000; }
  button {
    width: 100%;
    padding: 11px;
    font-size: 1rem;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  button:disabled { opacity: 0.4; cursor: not-allowed; }
  .error { color: #c00; font-size: 0.9rem; margin: 0 0 12px; }
</style>

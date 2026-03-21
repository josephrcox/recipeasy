<script>
  let { message = '', show = $bindable(false) } = $props()

  $effect(() => {
    if (show) {
      const t = setTimeout(() => { show = false }, 2500)
      return () => clearTimeout(t)
    }
  })
</script>

{#if show}
  <div class="toast">{message}</div>
{/if}

<style>
  .toast {
    position: fixed;
    bottom: 28px;
    left: 50%;
    transform: translateX(-50%);
    background: #111;
    color: #fff;
    padding: 12px 22px;
    border-radius: 100px;
    font-size: 0.9rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    white-space: nowrap;
    z-index: 999;
    animation: slidein 0.2s ease;
    box-shadow: 0 4px 16px rgba(0,0,0,0.2);
  }
  @keyframes slidein {
    from { opacity: 0; transform: translateX(-50%) translateY(10px); }
    to   { opacity: 1; transform: translateX(-50%) translateY(0); }
  }
</style>

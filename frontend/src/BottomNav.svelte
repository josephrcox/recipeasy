<script>
  import { Home, NotebookPen, Plus } from 'lucide-svelte'
  let { route, onNavigate } = $props()

  const isHome = $derived(route.page === 'cookbooks')
  const isNotes = $derived(route.page === 'notes')
</script>

<nav class="bottom-nav">
  <button class="nav-item" class:active={isHome} onclick={() => onNavigate('cookbooks')}>
    <Home size={22} strokeWidth={isHome ? 2.5 : 1.8} />
    <span>Cookbooks</span>
  </button>

  <button class="nav-fab" onclick={() => onNavigate('analyze')}>
    <Plus size={26} strokeWidth={2.5} />
  </button>

  <button class="nav-item" class:active={isNotes} onclick={() => onNavigate('notes')}>
    <NotebookPen size={22} strokeWidth={isNotes ? 2.5 : 1.8} />
    <span>Notes</span>
  </button>
</nav>

<style>
  .bottom-nav {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 430px;
    height: calc(72px + env(safe-area-inset-bottom, 0px));
    padding-bottom: env(safe-area-inset-bottom, 0px);
    background: rgba(255,255,255,0.92);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-top: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 100;
  }

  .nav-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-3);
    padding: 8px 0;
    transition: color 0.15s;
  }
  .nav-item.active { color: var(--accent); }
  .nav-item span { font-size: 0.68rem; font-weight: 500; }

  .nav-fab {
    width: 52px; height: 52px;
    border-radius: 50%;
    background: var(--accent);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    box-shadow: 0 4px 16px rgba(232,83,42,0.4);
    transition: transform 0.15s, box-shadow 0.15s;
    flex-shrink: 0;
  }
  .nav-fab:active { transform: scale(0.93); box-shadow: 0 2px 8px rgba(232,83,42,0.3); }
</style>

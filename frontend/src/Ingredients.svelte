<script>
  import { tick } from 'svelte'

  let { recipe, onEdit = null, onDelete = null } = $props()

  const groups = $derived(
    recipe.ingredientGroups ?? (
      recipe.ingredients ? [{ group: null, emoji: null, items: recipe.ingredients }] : []
    )
  )

  function formatItem(ing) {
    return [ing.amount, ing.unit, ing.item].filter(Boolean).join(' ')
  }

  let editingKey = $state(null)
  let editValue = $state('')
  let editOriginalValue = $state('')
  let editInput = $state(null)

  function startEdit(key, text) {
    if (!onEdit) return
    editingKey = key
    editValue = text
    editOriginalValue = text
    tick().then(() => editInput?.focus())
  }

  function commitEdit(gi, ii) {
    const key = `${gi}-${ii}`
    if (editingKey !== key) return
    editingKey = null
    const trimmed = editValue.trim()
    if (trimmed && trimmed !== editOriginalValue) {
      onEdit(gi, ii, trimmed)
    }
  }

  function handleDeleteBtn(gi, ii) {
    if (!confirm('Delete this ingredient?')) return
    editingKey = null
    onDelete?.(gi, ii)
  }
</script>

<div class="ingredients">
  {#each groups as g, gi}
    {#if g.group}
      <div class="group-label">
        {#if g.emoji}<span>{g.emoji}</span>{/if}
        {g.group}
      </div>
    {/if}
    <ul class:indented={!!g.group}>
      {#each g.items as ing, ii}
        {@const key = `${gi}-${ii}`}
        {#if editingKey === key}
          <li class="editing">
            <input
              bind:this={editInput}
              bind:value={editValue}
              class="edit-input"
              onblur={() => commitEdit(gi, ii)}
              onkeydown={(e) => {
                if (e.key === 'Enter') { e.preventDefault(); editInput?.blur() }
                if (e.key === 'Escape') { e.preventDefault(); editingKey = null }
              }}
            />
            <button
              class="del-btn"
              onpointerdown={(e) => { e.preventDefault(); handleDeleteBtn(gi, ii) }}
            >✕</button>
          </li>
        {:else}
          <li onclick={() => startEdit(key, formatItem(ing))} class:tappable={!!onEdit}>
            {formatItem(ing)}
          </li>
        {/if}
      {/each}
    </ul>
  {/each}
</div>

<style>
  .ingredients { display: flex; flex-direction: column; gap: 2px; }

  .group-label {
    display: flex; align-items: center; gap: 6px;
    font-size: 0.82rem;
    font-weight: 700;
    color: var(--text-2);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin-top: 14px;
    margin-bottom: 8px;
  }
  .group-label:first-child { margin-top: 0; }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  ul.indented { padding-left: 8px; }

  li {
    display: flex;
    align-items: center;
    padding: 9px 12px;
    background: var(--bg);
    border-radius: var(--radius-sm);
    font-size: 0.92rem;
    line-height: 1.4;
    color: var(--text);
    margin-bottom: 4px;
    -webkit-tap-highlight-color: transparent;
    gap: 6px;
  }
  li.tappable { cursor: pointer; }
  li.editing { padding: 6px 8px; }

  .edit-input {
    flex: 1;
    border: none;
    background: none;
    font-size: 0.92rem;
    color: var(--text);
    outline: none;
    padding: 4px 0;
    min-width: 0;
  }

  .del-btn {
    flex-shrink: 0;
    background: none;
    border: none;
    padding: 2px 6px;
    font-size: 0.8rem;
    color: var(--text-3);
    cursor: pointer;
    border-radius: 4px;
    line-height: 1;
    transition: color 0.15s;
  }
  .del-btn:active { color: #e53e3e; }
</style>

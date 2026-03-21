<script>
  let { recipe, checked = new Set(), onToggle = () => {} } = $props()

  const groups = $derived(
    recipe.ingredientGroups ?? (
      recipe.ingredients ? [{ group: null, emoji: null, items: recipe.ingredients }] : []
    )
  )

  function formatItem(ing) {
    return [ing.amount, ing.unit, ing.item].filter(Boolean).join(' ')
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
        <li
          class:checked={checked.has(key)}
          onclick={() => onToggle(key)}
        >{formatItem(ing)}</li>
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
    padding: 9px 12px;
    background: var(--bg);
    border-radius: var(--radius-sm);
    font-size: 0.92rem;
    line-height: 1.4;
    color: var(--text);
    margin-bottom: 4px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: color 0.2s, text-decoration 0.2s;
  }
  li.checked {
    text-decoration: line-through;
    color: var(--text-3);
  }
</style>

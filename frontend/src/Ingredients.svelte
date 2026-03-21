<script>
  let { recipe } = $props()

  // Support both old flat `ingredients` and new `ingredientGroups`
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
  {#each groups as g}
    {#if g.group}
      <div class="group-label">
        {#if g.emoji}<span class="group-emoji">{g.emoji}</span>{/if}
        {g.group}
      </div>
    {/if}
    <ul class:indented={!!g.group}>
      {#each g.items as ing}
        <li>{formatItem(ing)}</li>
      {/each}
    </ul>
  {/each}
</div>

<style>
  .ingredients { margin: 0; }

  .group-label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
    font-size: 0.95rem;
    margin: 16px 0 6px;
    color: #333;
  }
  .group-label:first-child { margin-top: 0; }

  .group-emoji { font-size: 1.1rem; }

  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 4px;
  }

  ul.indented { padding-left: 12px; }

  li {
    padding: 5px 0;
    font-size: 0.95rem;
    line-height: 1.5;
    border-bottom: 1px solid #f3f3f3;
    color: #222;
  }

  li::before {
    content: '·';
    margin-right: 8px;
    color: #bbb;
  }
</style>

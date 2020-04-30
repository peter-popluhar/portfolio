<script>
  export let items
</script>

<style lang="scss">
  @import "labels";
</style>

<ul>
  {#each items as item, i}
    <li>
      <span class="text--xs">
        {item}
      </span>
    </li>
  {/each}
</ul>

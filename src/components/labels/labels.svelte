<script>
  export let tags
</script>

<style lang="scss">
  @import "labels";
</style>

<ul>
  {#each tags as {tag}, i}
    <li>
      <span class="text--xs">
        {tag}
      </span>
    </li>
  {/each}
</ul>

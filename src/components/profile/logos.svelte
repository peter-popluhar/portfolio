<script>
  export let icons;
</script>

<style lang="scss">
  @import "logos";
</style>

<ul>
  {#each icons as { icon }}
    <li>
      <img src={icon.url} alt={icon.alt} title={icon.alt} role="presentation" />
    </li>
  {/each}
</ul>

<style lang="scss">
  @import "logos";
</style>

<script>
  export let icons;
</script>

<ul>
  {#each icons as {icon}}
    <li><img src={icon.url} alt={icon.alt} title={icon.alt} role="presentation"></li>
  {/each}
</ul>

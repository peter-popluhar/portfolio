<script>
  export let name;
</script>

<style lang="scss">
  @import "breadcrumbs";
</style>

<nav aria-label="breadcrumb">
  <ol>
    <li><a href="." class="text-normal styled-link">Home</a></li>
    <li class="text-normal active">{name}</li>
  </ol>
</nav>

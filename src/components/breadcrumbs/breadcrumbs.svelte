<script>
  export let name;
</script>

<style lang="scss">
  @import "breadcrumbs";
</style>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href=".">Home</a></li>
    <li class="breadcrumb-item active">{name}</li>
  </ol>
</nav>

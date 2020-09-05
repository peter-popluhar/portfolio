<style lang="scss">
  @import "../../style/media-queries";
  @import "../../style/mixins";

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    @include md {
      justify-content: flex-start;
    }
  }
  
  li {
    margin-bottom: 10px;
    filter: var(--filter);
    
    &:not(:last-of-type) {
      margin-right: 10px;
    }
  }
  
  img, svg {
    width: 24px;
    height: 24px;

    @include lg {
      width: 36px;
      height: 36px;
    }
  }
</style>

<script>
  export let icons;
</script>

<ul>
  {#each icons as {icon}}
    <li><img src={icon.url} alt="" role="presentation"></li>
  {/each}
</ul>

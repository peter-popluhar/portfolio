<script>
  export let image;
</script>

<style lang="scss">
  @import "../../style/media-queries";
  @import "../../style/mixins";

  div {
    background-color: transparent;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% auto;
    width: 100%;
    height: 100%;
    max-width: 100%;

    @include xl {
      background-size: 700px 320px;
      background-position: center center;
    }
  }
</style>

<div style="background-image: url({image})" />

<style lang="scss">
  @import "../../style/media-queries";
  div {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: var(--header-height) 16px var(--header-height-floating);

    @include sm {
      max-width: 542px;
      padding-top: var(--header-height-sm);
    }

    @include md {
      max-width: 752px;
      padding-top: var(--header-height-md);
    }

    @include lg {
      max-width: 972px;
      padding-bottom: 0;
    }

    @include xl {
      max-width: 1200px;
    }
  }
</style>

<div>
  <slot />
</div>

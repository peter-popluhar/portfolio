<style lang="scss">
  @import "../../style/media-queries";
	div {
    width: 100%;
    padding-right: 16px;
    padding-left: 16px;
    margin-right: auto;
    margin-left: auto;
    padding-top: var(--header-height);

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
    }
    
    @include xl {
      max-width: 1200px;
    }
	}
</style>

<div>
	<slot></slot>
</div>

<style lang="scss">
  @import "../../style/media-queries";
	div {
		max-width: 1200px;
		margin: 0 auto;
    padding-top: var(--header-height);

    @include sm {
      padding-top: var(--header-height-sm);
    }

    @include md {
      padding-top: var(--header-height-md);
    }
	}
</style>

<div>
	<slot></slot>
</div>

<script>
	import PortfolioItem from './porfolio-item.svelte'
  export let posts
</script>

<style lang="scss">
  @import "porfolio-list";
</style>

<section>
	{#each posts as post, i}
		<PortfolioItem {...post} />
	{/each}
</section>



<script>
	import PortfolioItem from './porfolio-item.svelte'
  export let posts
</script>

<section>
	{#each posts as post, i}
		<PortfolioItem {...post} />
	{/each}
</section>



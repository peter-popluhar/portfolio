<script context="module">
	export async function preload({ params, query }) {

		const res = await this.fetch(`${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
  import { fade } from "svelte/transition";
  import {fadeIn} from '../utils/page-transition'
  import Grid from '../components/layout/grid.svelte'
  import Showcase from './../components/showcase/showcase.svelte'
	export let post;
</script>

<svelte:head>
	<title>{post.name} | Peter Popluhar</title>
</svelte:head>

<main in:fade={fadeIn}>
  
  <Grid>
    <Showcase post={post}  />
  </Grid>
</main>

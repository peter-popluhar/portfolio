<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`index.json`).then(r => r.json()).then(posts => {
      return { posts };
    });
  }
</script>

<script>
	import { fly } from "svelte/transition";
	import {flyIn} from '../utils/page-transition'
	import Portfolio from '../components/portfolio/porfolio-list.svelte';
	import Grid from '../components/layout/grid.svelte'
  import Toolbar from '../components/toolbar/toolbar.svelte';
  export let posts;
</script>

<svelte:head>
	<title>Peter Popluhar | portfolio</title>
</svelte:head>

<Toolbar />
<main in:fly={flyIn}>
	<Grid>
		<Portfolio posts={posts} />
    <div id="about">
      About me
    </div>
	</Grid>
</main>


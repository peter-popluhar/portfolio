<script>
	import Header from '../components/header/header.svelte';
	import Footer from '../components/footer/footer.svelte';
  import { theme } from '../stores'
  import Grid from "../components/layout/grid.svelte";
  import Toolbar from "../components/toolbar/toolbar.svelte";
</script>

<style lang="scss" global>
	@import "./../style/global.scss";
</style>

<Toolbar />
<div class={!$theme ? 'theme--color' : ''} id="top">
  <Grid>
    <Header />
    <slot></slot>
    <Footer />
  </Grid>
</div>

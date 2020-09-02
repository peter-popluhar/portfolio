<script>
	import Header from '../components/header/header.svelte';
	import Footer from '../components/footer/footer.svelte';
  import { theme } from '../stores'
  import Grid from "../components/layout/grid.svelte";
</script>

<style lang="scss" global>
	@import "./../style/global.scss";
</style>

<div class="theme--{$theme}" id="top">
  <Grid>
    <Header />
    <slot></slot>
    <Footer />
  </Grid>
</div>

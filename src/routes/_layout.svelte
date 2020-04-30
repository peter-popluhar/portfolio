<script>
	import Header from '../components/header/header.svelte';
  import { theme } from '../stores'
</script>

<style lang="scss" global>
	@import "./../style/global.scss";
</style>

<div class="theme--{$theme}" id="top">
  <Header />
  <slot></slot>
</div>

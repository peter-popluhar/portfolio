<script>
  import { isHeaderFloating } from "../../stores";
  import { handleHeader } from "./header";
  import { onMount } from "svelte";
  import Logo from "./../logo/logo.svelte";

  onMount(() => {
    const observedItem = document.querySelector(".js-intersection-detector");
    handleHeader(observedItem);
  });
</script>

<style lang="scss">
  @import "header";
</style>

<div class="js-intersection-detector" />
<header class={$isHeaderFloating ? 'header-is-floating' : ''}>
  <a href=".">
    <Logo />
  </a>
</header>

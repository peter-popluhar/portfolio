<script>
  import { intersectionObserver } from "./../../utils/interstion-observer";
  import PortfolioItem from "./porfolio-item.svelte";
  export let posts;
  import { onMount } from "svelte";

  onMount(() => {
    intersectionObserver(".main-image");
    intersectionObserver(".slice");
  });
</script>

<section>
  {#each posts as post, i}
    <PortfolioItem {post} />
  {/each}
</section>

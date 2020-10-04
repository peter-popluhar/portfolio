<script>
  import Labels from "../labels/labels.svelte";
  import { isHeaderFloating } from "../../stores";
  import ImageMain from "../image/image.svelte";
  import PrismicDOM from "prismic-dom";
  import { Client, linkResolver } from "../../../prismic-config";
  import { onMount } from "svelte";
  import { animateItems } from "./animate-items.js";

  export let post;
  const { data } = post;
  const { title, position, tags, year, bg_image, sliced_image } = data;

  onMount(() => {
    animateItems();
  });
</script>

<style lang="scss">
  @import "porfolio-item";
</style>

<a rel="prefetch" href={linkResolver(post)} class="portfolio-item item">
  <h2 class={$isHeaderFloating ? 'header-is-floating' : ''}>
    {PrismicDOM.RichText.asText(title)}
  </h2>
  <div class="content-holder">
    <h2>{PrismicDOM.RichText.asText(title)}</h2>
    <h3>{PrismicDOM.RichText.asText(position)}</h3>
    <p>{PrismicDOM.RichText.asText(year)}</p>
    <Labels {tags} />
  </div>
  <div class="frame">
    <ImageMain image={bg_image.url} />
    <div class="slices">
      {#each Array(10) as _, i}
        <div
          class="slice slice-{i + 1}"
          style="background-image: none"
          data-src="url({sliced_image.url})" />
      {/each}
    </div>
  </div>
</a>
<hr />

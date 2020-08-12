<script>
  import Labels from "../labels/labels.svelte";
  import { isHeaderFloating } from "../../stores";

  export let slug;
  export let name;
  export let role;
  export let img;
  export let year;
  export let tags;

  const { listingPoster, listingPosterSliced } = img;
</script>

<style lang="scss">
  @import "porfolio-item";
</style>

<a rel="prefetch" href={slug} class="portfolio-item">
  <h2 class={$isHeaderFloating ? 'header-is-floating' : ''}>{name}</h2>
  <div class="content-holder">
    <h2>{name}</h2>
    <h3>{role}</h3>
    <p>{year}</p>
    <Labels items={tags} />
  </div>
  <div class="frame">
    <img src={listingPoster} alt={name} class="img" />
    <div class="slices">
      {#each Array(10) as _, i}
        <div
          class="slice slice-{i + 1}"
          style="background-image: url({listingPosterSliced})" />
      {/each}
    </div>

  </div>
</a>
<hr />

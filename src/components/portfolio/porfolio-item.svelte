<script>
  import Labels from "../labels/labels.svelte";
  import { isHeaderFloating } from "../../stores";
  import Picture from '../picture/picture.svelte'
  import PrismicDOM from 'prismic-dom';
  import { Client, linkResolver } from '../../../prismic-config';
  
  export let post;
  const {data} = post
  const {title, position, tags, year, image, sliced_image} = data
  const {md, lg, xl} = image;
</script>

<style lang="scss">
  @import "porfolio-item";
</style>

<a rel="prefetch" href={linkResolver(post)} class="portfolio-item">
  <h2 class={$isHeaderFloating ? 'header-is-floating' : ''}>{PrismicDOM.RichText.asText(title)}</h2>
  <div class="content-holder">
    <h2>{PrismicDOM.RichText.asText(title)}</h2>
    <h3>{PrismicDOM.RichText.asText(position)}</h3>
    <p>{PrismicDOM.RichText.asText(year)}</p>
    <Labels tags={tags} />
  </div>
  <div class="frame">
    <Picture css="img" imgMd={md.url} imgLg={lg.url} imgXl={xl.url} name={PrismicDOM.RichText.asText(title)}/>
    <div class="slices">
      {#each Array(10) as _, i}
        <div
          class="slice slice-{i + 1}"
          style="background-image: url({sliced_image.url})" />
      {/each}
    </div>

  </div>
</a>
<hr />

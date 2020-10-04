<script>
  import Labels from "../labels/labels.svelte";
  import { isHeaderFloating } from "../../stores";
  import ImageMain from "../image/image.svelte";
  import PrismicDOM from "prismic-dom";
  import { Client, linkResolver } from "../../../prismic-config";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMount } from "svelte";

  export let post;
  const { data } = post;
  const { title, position, tags, year, bg_image, sliced_image } = data;

  gsap.registerPlugin(ScrollTrigger);
  onMount(() => {
    let boxes = gsap.utils.toArray(".item");

    boxes.forEach(box => {
      const animBoxes = gsap.fromTo(
        box,
        { autoAlpha: 0.1 },
        { duration: 0.2, autoAlpha: 1 }
      );
      ScrollTrigger.create({
        trigger: box,
        animation: animBoxes,
        scrub: 1,
        start: "top 70%",
        end: "bottom 60%"
      });

      const animHr = gsap.fromTo(
        box.nextElementSibling,
        { width: 0 },
        { width: "100%" }
      );
      ScrollTrigger.create({
        trigger: box,
        animation: animHr,
        scrub: true,
        start: "top 40%",
        end: "bottom 40%"
      });
    });
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

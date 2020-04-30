<script>
  import Labels from '../labels/labels.svelte'
  import { isHeaderFloating } from '../../stores'
  
	export let slug
	export let name
	export let role
  export let img
	export let year
	export let tags
  
  const {listingPoster, listingPosterSliced} = img
</script>

<style lang="scss">
	@import "porfolio-item";
</style>

<a rel='prefetch' href={slug} class="portfolio-item">
	<h2 class="{$isHeaderFloating ? 'header-is-floating' : ''}">{name}</h2>
	<div class="content-holder">
		<h2>{name}</h2>
		<h3>{role}</h3>
		<p>{year}</p>
    <Labels items={tags} />
	</div>
  <div class="frame">
    <img src='{listingPoster}' alt="{name}" class="">
    <div class="slices">
      <div class="slice slice-1" style="background-image: url({listingPosterSliced})"></div>
      <div class="slice slice-2" style="background-image: url({listingPosterSliced})"></div>
      <div class="slice slice-3" style="background-image: url({listingPosterSliced})"></div>
      <div class="slice slice-4" style="background-image: url({listingPosterSliced})"></div>
      <div class="slice slice-5" style="background-image: url({listingPosterSliced})"></div>
      <div class="slice slice-6" style="background-image: url({listingPosterSliced})"></div>
      <div class="slice slice-7" style="background-image: url({listingPosterSliced})"></div>
      <div class="slice slice-8" style="background-image: url({listingPosterSliced})"></div>
      <div class="slice slice-9" style="background-image: url({listingPosterSliced})"></div>
      <div class="slice slice-10" style="background-image: url({listingPosterSliced})"></div>
    </div>
  </div>
</a>
<hr />

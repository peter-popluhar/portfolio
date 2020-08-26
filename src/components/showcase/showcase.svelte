<script>
  import PrismicDOM from 'prismic-dom';
  import Labels from '../labels/labels.svelte'
  import Breadcrumbs from '../breadcrumbs/breadcrumbs.svelte'
  
  export let data
  const {title, position, tags, year, link, job_description} = data
</script>

<style lang="scss">
  @import "showcase";
</style>

<div class="container">
  <div class="head">
    <Breadcrumbs name={PrismicDOM.RichText.asText(title)} />
    <h2>{PrismicDOM.RichText.asText(title)}</h2>
  </div>
  
  <div class="description">
    <h3>{PrismicDOM.RichText.asText(position)}</h3>
    <ul>
      {#each job_description as {item}}
        <li>{item}</li>
      {/each}
    </ul>
    <p>Visit page: <a href={link} class="styled-link" rel="noopener nofollow" target="_blank">{link}</a></p>
  </div>

  <div class="tags">
    <Labels tags={tags} />
  </div>

<!--  <div class="video-holder">-->
<!--    <video class="desk" playsinline="true" muted="true" loop autoplay>-->
<!--      <source src="{video}"-->
<!--              type="video/mp4">-->
<!--    </video>-->

<!--    <img src="{img.imgXl}" alt="">-->
<!--      -->
<!--  </div>-->
</div>

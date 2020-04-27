<script>
  import Labels from '../labels/labels.svelte'
  import Breadcrumbs from '../breadcrumbs/breadcrumbs.svelte'
  
  export let post
  
  const {name, jobDescription, tags, role, video, img, link} = post
</script>

<style lang="scss">
  @import "showcase";
</style>

<div class="container">
  <div class="head">
    <Breadcrumbs name={name} />
    <h2>{name}</h2>
    <p>{role}</p>
  </div>
  
  
  <ul class="description">
    {#each jobDescription as item}
      <li>{item}</li>
    {/each}
    <li>Visit page: <a href="{link}" target="_blank">{link}</a></li>
  </ul>

  <div class="tags">
    <Labels items={tags} />
  </div>

  <div class="video-holder">
    <video class="desk" playsinline="true" muted="true" loop autoplay>
      <source src="{video}"
              type="video/mp4">
    </video>

    <img src="{img.listingPoster}" alt="">
      
  </div>
</div>

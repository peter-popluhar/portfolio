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
  </div>
  
  <div class="description">
    <h3>{role}</h3>
    <ul>
      {#each jobDescription as item}
        <li>{item}</li>
      {/each}
    </ul>
    <p>Visit page: <a href="{link}" class="styled-link" target="_blank">{link}</a></p>
  </div>

  <div class="tags">
    <Labels items={tags} />
  </div>

  <div class="video-holder">
    <video class="desk" playsinline="true" muted="true" loop autoplay>
      <source src="{video}"
              type="video/mp4">
    </video>

    <img src="{img.imgXl}" alt="">
      
  </div>
</div>

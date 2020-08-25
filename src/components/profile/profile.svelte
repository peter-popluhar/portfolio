<script>
  import PrismicDOM from 'prismic-dom';
  import IconYes from './icon-yes.svelte'
  import Logos from './logos.svelte'
  
  export let data;
  const {profile_title_1, profile_title_2, profile_title_3, skills_title, skills, profile_icons} = data
</script>

<style lang="scss">
  @import "./profile";
</style>

<section id="profile">
  <div>
    <p class="text--md">{profile_title_1}</p>
    <p class="text--md"> {profile_title_2}</p>
    <p class=" text--primary">{profile_title_3}</p>
    <div>
      <Logos icons={profile_icons} />
    </div>
  </div>
  <div>
    <p class="text--md">{PrismicDOM.RichText.asText(skills_title)}</p>
    <ul>
      {#each skills as {skill}}
        <li><IconYes />{skill}</li>
      {/each}
    </ul>
  </div>
</section>

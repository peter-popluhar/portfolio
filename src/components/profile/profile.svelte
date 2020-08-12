<script>
  import IconYes from './icon-yes.svelte'
  import Logos from './logos.svelte'
</script>

<style lang="scss">
  @import "./profile";
</style>

<section id="profile">
  <div>
    <p class="text--md">I'm Creator of the Things</p>
    <p class="text--md">I'm JS, HTML & CSS Bounty Hunter</p>
    <p class=" text--primary">I'm Frontend Web developer</p>
    <div>
      <Logos />
    </div>
  </div>
  <div>
    <p class="text--md">Key skills & interests:</p>
    <ul>
      <li><IconYes /> <span>Responsive Web Design</span></li>
      <li><IconYes /> <span>Website Speed and Performance</span></li>
      <li><IconYes /> <span>CSS and JavaScript Frameworks</span></li>
      <li><IconYes /> <span>Version Control</span></li>
      <li><IconYes /> <span>Testing and Debugging</span></li>
      <li><IconYes /> <span>Browser Developer Tools</span></li>
      <li><IconYes /> <span>Building and Automation Tools</span></li>
      <li><IconYes /> <span>Command Line</span></li>
    </ul>
  </div>
</section>

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
      <li><IconYes /> Responsive Web Design</li>
      <li><IconYes /> Website Speed and Performance</li>
      <li><IconYes /> CSS and JavaScript Frameworks</li>
      <li><IconYes /> Version Control</li>
      <li><IconYes /> Testing and Debugging</li>
      <li><IconYes /> Building and Automation Tools</li>
      <li><IconYes /> Command Line</li>
      <li><IconYes /> UI pattern libraries</li>
    </ul>
  </div>
</section>

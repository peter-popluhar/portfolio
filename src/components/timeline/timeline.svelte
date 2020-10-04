<script>
  import { onMount } from "svelte";
  import { animateRocket } from "./animate-rocket";

  onMount(() => {
    animateRocket();
  });
</script>

<style lang="scss">
  @import "timeline";
</style>

<section id="timeline">

  <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500">

    <path
      class="pointer"
      d="m620.508.003c-4.685-.084-10.028 2.365-13.41 6.164-3.232.061-6.379
      1.386-8.696
      3.703-.135.133-.183.332-.124.512.06.181.216.312.404.339l3.854.552-.476.533c-.177.198-.168.499.02.687l6.427
      6.427c.097.097.225.146.354.146.119 0 .238-.042.333-.127l.533-.476.552
      3.854c.027.188.175.326.354.386.046.015.094.022.143.022.142 0
      .287-.062.387-.161 2.285-2.285 3.61-5.432 3.671-8.664 3.803-3.389
      6.272-8.73 6.163-13.409-.007-.266-.222-.481-.489-.488zm-4.608
      8.632c-.487.487-1.127.731-1.768.731s-1.281-.244-1.768-.731c-.974-.975-.974-2.561
      0-3.536.975-.975 2.561-.975 3.536 0s.975 2.562 0 3.536z" />
    <path class="timeline" d="M 600 0 C 300 100 550 350 0 500 " id="path" />

    <circle class="circle circle--1" r="15px" cx="455" cy="100" />
    <text class="text text--1 text--position" x="0" y="100">
      FE/JS developer
    </text>
    <text class="text text--1 text--company" x="0" y="100">Socialbakers</text>
    <text class="text text--1 text--date" x="0" y="100">12/2016 - present</text>
    <text class="text--1 text--year" x="455" y="90">2016</text>

    <circle class=" circle circle--2" r="15px" cx="406" cy="200" />
    <text class="text text--2 text--position" x="0" y="200">
      Front-end developer
    </text>
    <text class="text text--2 text--company" x="0" y="200">LMC</text>
    <text class="text text--2 text--date" x="0" y="200">07/2015 - 12/2016</text>
    <text class="text--2 text--year" x="406" y="190">2015</text>

    <circle class="circle circle--3" r="15px" cx="349" cy="300" />
    <text class="text text--3 text--position" x="0" y="300">
      Front-end developer
    </text>
    <text class="text text--3 text--company" x="0" y="300">AVG</text>
    <text class="text text--3 text--date" x="0" y="300">01/2013 - 06/2015</text>
    <text class="text--3 text--year" x="349" y="290">2013</text>

    <circle class="circle circle--4" r="15px" cx="250" cy="400" />
    <text class="text text--4 text--position" x="0" y="400">
      Web coder - junior
    </text>
    <text class="text text--4 text--company" x="0" y="400">AVG</text>
    <text class="text text--4 text--date" x="0" y="400">08/2011 - 12/2012</text>
    <text class="text--4 text--year" x="250" y="390">2011</text>

  </svg>

</section>

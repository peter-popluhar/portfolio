<script>
  export let imgMd;
  export let imgLg;
  export let imgXl;
  export let name;
  export let css;
</script>

<picture>
  <source media="(max-width: 991px)" srcset="{imgMd} 1x" type="image/jpg">
  <source media="(max-width: 1199)" srcset="{imgLg} 1x" type="image/jpg">
  <source media="(min-width: 1200px)" srcset="{imgXl} 1x" type="image/jpg">
  <img src="{imgXl}" alt="{name}" class="{css}" />
</picture>

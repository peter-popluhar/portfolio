<script>
  export let imgMd;
  export let imgMd2x;
  export let imgLg;
  export let imgLg2x;
  export let imgXl;
  export let imgXl2x;
  export let name;
  export let css;
</script>

<!--FIXME-->
<!--Picture should have dynamic width, and type-->

<picture>
  <source media="(max-width: 991px)" srcset="{imgMd} 1x, {imgMd2x} 2x" type="image/jpg">
  <source media="(max-width: 1199)" srcset="{imgLg} 1x, {imgLg2x} 2x" type="image/jpg">
  <source media="(min-width: 1200px)" srcset="{imgXl} 1x, {imgXl2x} 2x" type="image/jpg">
  <img src="{imgXl}" alt="{name}" class="{css}" />
</picture>

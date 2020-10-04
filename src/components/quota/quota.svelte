<script>
  export let author;
  export let text;
</script>

<style lang="scss">
  @import "quota";
</style>

<section>
  <q class="text-normal">
    {text}
    <p>{author}</p>
  </q>

</section>

<script context="module">
  import PrismicDOM from 'prismic-dom';
  import {Client, linkResolver} from '../../prismic-config'
  
  let article = null;
  
  export async function preload({params, query}) {
    const uid = params.uid;
    article = await Client.getByUID('article', uid)
    
    if(article) {
      return {article}
    } else {
      this.error(res.status, data.message)
    }
  }
</script>

<script>
  import { fade } from "svelte/transition";
  import {fadeIn} from '../utils/page-transition'
  import Grid from '../components/layout/grid.svelte'
  import Showcase from './../components/showcase/showcase.svelte'
  import ThemeSwitcher from './../components/theme-switcher/theme-switcher.svelte'

  export let article;
  const {data} = article
</script>

<svelte:head>
  <title>{PrismicDOM.RichText.asText(data.title)} | Peter Popluhar</title>
</svelte:head>

<main in:fade={fadeIn}>
  
  <Grid>
    
    <Showcase data={data} />
  </Grid>
</main>

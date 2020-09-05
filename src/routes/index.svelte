<script context="module">
  import Prismic from 'prismic-javascript';
  import PrismicDOM from 'prismic-dom';
  import { Client } from '../../prismic-config.js';

  let homepage = null;
  let posts = null;

  export async function preload({ params, query }) {
    homepage = await Client.getSingle('homepage');

    const postResponse = await Client.query(
            Prismic.Predicates.at('document.type', 'article'),
            { orderings: '[my.article.order]' }
    )

    posts = postResponse.results

    if (homepage && posts) {
      return { homepage, posts };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { fly } from "svelte/transition";
  import { flyIn } from "../utils/page-transition";
  import Portfolio from "../components/portfolio/porfolio-list.svelte";
  import Profile from "../components/profile/profile.svelte";
  import Quota from "../components/quota/quota.svelte";

  export let homepage;
  export let posts;
  const {data} = homepage
  const {title, quota_author, quota_text} = homepage.data
</script>

<svelte:head>
  <title>{PrismicDOM.RichText.asText(title)}</title>
</svelte:head>

<main in:fly={flyIn}>
  <Profile data={homepage.data} />
  <Portfolio posts={posts} />
  <Quota author={quota_author} text={quota_text} />
</main>

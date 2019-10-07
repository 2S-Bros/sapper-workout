<script>
  export let title = "";
  export let segment;
  export let description = "";
  export let siteImage = "";

  let robots;
  let siteUrl = "";
  let siteName = "";
  let twitterId = "";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="image" content={siteImage} />
  <meta name="robots" content={robots} />
  <link rel="canonical" href={`${siteUrl}${segment}`} />
  <!-- Social  -->
  <meta itemProp="name" content={siteName} />
  <meta property="st:title" content={title} />
  <meta property="st:info" content={description} />
  <!-- OG  -->
  <meta property="og:url" content={`${siteUrl}${segment}`} />
  <meta property="og:site_name" content={siteName} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={siteImage} />
  <!-- Twitter -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:creator" content={twitterId} />
  <meta name="twitter:site" content={twitterId} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={siteImage} />
</svelte:head>

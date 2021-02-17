<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  import SEO from "../components/SEO.svelte";

  export let segment;
</script>

<style lang="scss" global>
  @import "./styles/global.scss";
</style>

<SEO {segment} />
<Nav {segment} />

<main>
  <slot />
</main>

<Footer />

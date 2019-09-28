<script>
  import Modal from "../components/Modal.svelte";
  let isActive = false;
  let maxWidth = "375px";
</script>

<style lang="scss" scoped>
  h1,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Epic Gains</title>
</svelte:head>

<h1>Epic Gains</h1>
<p>(Name still in progress :p)</p>

<button on:click={() => (isActive = true)}>Test Modal</button>
{#if isActive}
  <Modal on:close={() => (isActive = false)} {maxWidth}>
    <p>I'm a test modal</p>
  </Modal>
{/if}

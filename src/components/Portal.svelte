<script>
  import { onMount, onDestroy } from "svelte";
  let ref;
  let portal;

  onMount(() => {
    portal = document.createElement(`div`);
    portal.setAttribute(`id`, `portal`);
    document.body.appendChild(portal);
    portal.appendChild(ref);
  });

  onDestroy(() => {
    document.body.removeChild(portal);
  });
</script>

<div bind:this={ref}>
  <slot />
</div>

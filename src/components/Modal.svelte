<script>
  import Portal from "./Portal.svelte";
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let maxWidth;
</script>

<style lang="scss" scoped>
  .modal.fullscreen-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
    z-index: var(--highestLevel);
    overflow-y: scroll;
    padding: 10%;
    pointer-events: none;
    .modal--background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      pointer-events: all;
      background: rgba(0, 0, 0, 0.25);
      width: 100vw;
      height: 100vh;
    }
    .modal--wrapper {
      background: var(--bgColor);
      position: relative;
      width: 100%;
      margin-top: auto;
      margin-bottom: auto;
      max-width: 95%;
    }
  }
</style>

<Portal>
  <div transition:fade>
    <div class="modal fullscreen-modal">
      <div class="modal--background" on:click={() => dispatch('close')} />

      <div class="modal--wrapper" style="max-width: {maxWidth}">
        <button type="button" on:click={() => dispatch('close')}>X</button>
        <slot />
      </div>
    </div>
  </div>
</Portal>

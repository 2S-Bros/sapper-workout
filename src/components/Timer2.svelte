<script>
  import { onDestroy } from "svelte";

  let elapsed = 0;
  let duration = 5000;
  let isActive = false;

  let lastTime = window.performance.now();
  let frame = undefined;

  function tick() {
    frame = requestAnimationFrame(tick);
    const time = window.performance.now();
    elapsed += Math.min(time - lastTime, duration - elapsed);

    lastTime = time;
    if (elapsed >= duration) {
      reset();
    }
  }

  function reset() {
    cancelAnimationFrame(frame);
    elapsed = 0;
    isActive = false;
  }

  function toggleTimer() {
    if (isActive) {
      isActive = false;
      cancelAnimationFrame(frame);
      frame = undefined;
    } else {
      isActive = true;
      frame = requestAnimationFrame(tick);
    }
  }

  onDestroy(() => {
    cancelAnimationFrame(frame);
  });
</script>

<label>
  elapsed time:
  <progress value={elapsed / duration} />
</label>

<div>{(elapsed / 1000).toFixed(1)}s</div>

<label>
  duration:
  <input type="range" bind:value={duration} min="1" max="20000" />
</label>

<div>{duration}</div>

<button on:click={toggleTimer}>{isActive ? 'pause' : 'start'}</button>
<button on:click={reset}>reset</button>

<script>
  import { onDestroy, onMount } from "svelte";
  import { formatTime } from "../utils/format";

  let duration = 45;
  let currentTime = duration;
  let timer = undefined;
  let isTimerInProgress = false;

  function toggleTimer() {
    if (!isTimerInProgress) {
      timer = setInterval(tick, 1000);
      isTimerInProgress = true;
    } else {
      clearInterval(timer);
      timer = undefined;
      isTimerInProgress = false;
    }
  }

  function tick() {
    const time = currentTime - 1;
    if (time <= 0) {
      resetTimer();
    } else {
      currentTime = time;
    }
  }

  function resetTimer() {
    currentTime = duration;
    clearInterval(timer);
  }

  onDestroy(() => {
    clearInterval(timer);
    clearInterval(tick);
  });
</script>

<div>{formatTime(currentTime)}</div>
<br />
<label>
  exercise duration:
  <input type="number" bind:value={duration} min="1" max="3600" />
</label>
<br />
<button on:click={resetTimer}>reset</button>
<button on:click={toggleTimer}>{isTimerInProgress ? 'Pause' : 'Start'}</button>

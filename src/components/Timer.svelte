<script>
  import { onDestroy } from "svelte";
  import { formatTime } from "../utils/format";
  // const audio1 = new Audio("/champ.mp3");

  export let numberOfExercises = 3;
  export let numberOfSets = 2;
  export let duration = 45;
  export let restDuration = 15;
  export let roundRestDuration = 30;

  let timer = undefined;
  let isTimerInProgress = false;
  let isResting = false;
  let currentTime = duration;
  let currentExerciseNumber = 1;
  let currentSetNumber = 1;

  function tick() {
    const time = currentTime - 1;
    if (time <= 0) {
      isResting = !isResting;
      checkReset();
    } else {
      currentTime = time;
    }
  }

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

  function checkReset(willSkipExercise) {
    let isHardReset = false;
    if (!willSkipExercise) {
      // audio1.play();
    }

    if (isResting) {
      return resetTimer(isHardReset, willSkipExercise);
    } else if (currentExerciseNumber >= numberOfExercises) {
      if (currentSetNumber >= numberOfSets) {
        isHardReset = true;
      } else {
        currentExerciseNumber = 1;
        currentSetNumber += 1;
      }
    } else {
      currentExerciseNumber += 1;
    }
    return resetTimer(isHardReset, willSkipExercise);
  }

  function resetTimer(isHardReset, willSkipExercise) {
    clearInterval(timer);

    if (isHardReset) {
      timer = undefined;
      isTimerInProgress = false;
      currentTime = duration;
      currentSetNumber = 1;
      currentExerciseNumber = 1;
      isResting = false;
    } else {
      timer =
        willSkipExercise && !isTimerInProgress
          ? undefined
          : setInterval(tick, 1000);
      const restTime =
        currentExerciseNumber >= numberOfExercises
          ? roundRestDuration
          : restDuration;
      currentTime = isResting ? restTime : duration;
    }
  }

  onDestroy(() => {
    clearInterval(timer);
    clearInterval(tick);
  });
</script>

<style>

</style>

<h2>Set: {currentSetNumber} / {numberOfSets}</h2>

<h2>Exercise: {currentExerciseNumber} / {numberOfExercises}</h2>

<h2>{isResting ? 'Rest' : 'Exercise'} Time Remaining</h2>
<h1>{formatTime(currentTime)}</h1>

<button on:click={toggleTimer}>{isTimerInProgress ? 'Pause' : 'Start'}</button>
<button on:click={() => checkReset(true)}>Skip</button>
<button on:click={() => resetTimer(true)}>Reset</button>

<h2>Now: {isResting ? 'Rest' : 'PLACEHOLDER'}</h2>
<h2>
  Next: {currentExerciseNumber > numberOfExercises ? 'PLACEHOLDER' : 'Rest'}
</h2>

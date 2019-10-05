<script>
  import marked from "marked";

  export let workout;

  let name = (workout && workout.name) || "";
  let intensity = (workout && workout.intensity) || 1;
  let description = (workout && workout.description) || "";
  let exercises = (workout && workout.exercises) || [];

  function submit() {
    console.log("submitted");
  }
</script>

<style lang="scss">
  textarea {
    width: 100%;
    height: 200px;
  }
  label > span {
    display: block;
  }
</style>

<form action={submit}>
  <label for="workout-name">
    <span>Name</span>
    <input id="workout-name" bind:value={name} />
  </label>

  <label>
    <span>Intensity</span>
    <input
      id="workout-intensity-number"
      type="number"
      bind:value={intensity}
      min="1"
      max="4" />
    <input
      id="workout-intensity-range"
      type="range"
      bind:value={intensity}
      min="1"
      max="4" />
  </label>

  <label for="workout-description">
    <span>Description</span>
    <textarea id="workout-description" bind:value={description} />
    {@html marked(description)}
  </label>

  <h4>Exercises</h4>
  {#each exercises as exercise}
    <label>
      <input type="checkbox" bind:group={exercises} value={exercise} />
      {exercise.name}
    </label>
  {/each}
  {#if !workout}
    <button class="submit">Create Exercise</button>
  {/if}
</form>

<script>
  import marked from "marked";

  export let exercise;

  let name = (exercise && exercise.name) || "";
  let intensity = (exercise && exercise.intensity) || 1;
  let description = (exercise && exercise.description) || "";
  let categories = (exercise && exercise.categories) || [];

  let allCategories = ["arms", "chest", "legs", "cardio", "abs", "full body"];
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

<label for="exercise-name">
  <span>Name</span>
  <input id="exercise-name" bind:value={name} />
</label>

<label>
  <span>Intensity</span>
  <input
    id="exercise-intensity-number"
    type="number"
    bind:value={intensity}
    min="1"
    max="4" />
  <input
    id="exercise-intensity-range"
    type="range"
    bind:value={intensity}
    min="1"
    max="4" />
</label>

<label for="exercise-description">
  <span>Description</span>
  <textarea id="exercise-description" bind:value={description} />
  {@html marked(description)}
</label>

<h4>Categories</h4>
{#each allCategories as category}
  <label>
    <input type="checkbox" bind:group={categories} value={category} />
    {category}
  </label>
{/each}

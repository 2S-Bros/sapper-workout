<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`exercises.json`)
      .then(r => r.json())
      .then(exercises => {
        return { exercises };
      });
  }
</script>

<script>
  export let exercises;
</script>

<svelte:head>
  <title>Exercises</title>
</svelte:head>

<h1>Exercises here</h1>
<p>
  List of exercise cards should go here with a filter to search by type, name,
  intensity etc
</p>

<ul>
  {#each exercises as exercise}
    <li>
      <a rel="prefetch" href="exercises/{exercise.id}">{exercise.title}</a>
    </li>
  {/each}
</ul>

<h4>
  <a href="exercises/new">Create new exercise</a>
</h4>

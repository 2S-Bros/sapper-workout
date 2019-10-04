<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`workouts/${params.id}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { workout: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let workout;
</script>

<svelte:head>
  <title>{workout.title}</title>
</svelte:head>

<h1>{workout.title}</h1>
<h3>Intensity: {workout.intensity}</h3>
<p>{workout.description}</p>

<h3>Exercises:</h3>
<ul>
  {#each workout.exercises as exercise}
    <li>
      <a rel="prefetch" href="exercises/{exercise.id}">{exercise.title}</a>
    </li>
  {/each}
</ul>

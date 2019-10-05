<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`workouts.json`)
      .then(r => r.json())
      .then(workouts => {
        return { workouts };
      });
  }
</script>

<script>
  export let workouts;
</script>

<svelte:head>
  <title>Workouts</title>
</svelte:head>

<h1>Workouts here</h1>
<p>
  List of workout cards should go here with a filter to search by type, name,
  intensity etc
</p>

<ul>
  {#each workouts as workout}
    <li>
      <a rel="prefetch" href="workouts/{workout.id}">{workout.name}</a>
    </li>
  {/each}
</ul>

<h4>
  <a href="workouts/new">Create new workout</a>
</h4>

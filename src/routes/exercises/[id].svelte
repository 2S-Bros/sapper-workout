<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`exercises/${params.id}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { exercise: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let exercise;
  import ExerciseForm from "../../components/ExerciseForm.svelte";
</script>

<svelte:head>
  <title>{exercise.name}</title>
</svelte:head>

<h1>{exercise.name}</h1>
<!-- <h3>Intensity: {exercise.intensity}</h3>
<p>{exercise.description}</p>

<h3>Body parts worked:</h3>
<ul>
  {#each exercise.categories as category}
    <li>{category}</li>
  {/each}
</ul> -->

<ExerciseForm {exercise} />

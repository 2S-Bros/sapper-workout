<script>
  import Switch from "../components/Switch.svelte";
</script>

<svelte:head>
  <title>User Settings</title>
</svelte:head>

<h1>User Settings</h1>
<p>
  Should only be accessible to logged in users and home should redirect here for
  people logged in. This will have a link from user menu in the nav.
</p>

<Switch />

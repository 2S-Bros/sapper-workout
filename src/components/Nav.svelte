<script>
  export let segment;
</script>

<style lang="scss" scoped>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    &.selected {
      position: relative;
      display: inline-block;
      border-bottom: 1px solid var(--red);
    }
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <ul>
    <li class={segment === undefined ? 'selected' : ''}>
      <a href=".">
        <strong>EPIC GAINS</strong>
      </a>
    </li>
    <li class={segment === 'dashboard' ? 'selected' : ''}>
      <a href="dashboard">Dashboard</a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li class={segment === 'exercises' ? 'selected' : ''}>
      <a rel="prefetch" href="exercises">Exercises</a>
    </li>
    <li class={segment === 'workouts' ? 'selected' : ''}>
      <a rel="prefetch" href="workouts">Workouts</a>
    </li>
    <li class={segment === 'library' ? 'selected' : ''}>
      <a rel="prefetch" href="library">Library</a>
    </li>
  </ul>
</nav>

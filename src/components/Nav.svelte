<script>
  export let segment;
</script>

<style lang="scss" scoped>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    color: var(--textColor);
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
    <li class={segment === 'exercises' ? 'selected' : ''}>
      <a rel="prefetch" href="exercises">Exercises</a>
    </li>
    <li class={segment === 'workouts' ? 'selected' : ''}>
      <a rel="prefetch" href="workouts">Workouts</a>
    </li>
    <li class={segment === 'timer' ? 'selected' : ''}>
      <a href="timer">Timer</a>
    </li>
    <li />
    <li />
  </ul>
</nav>

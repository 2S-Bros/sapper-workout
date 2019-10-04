<script>
  export let segment;
</script>

<style lang="scss" scoped>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(249, 170, 51, 0.2);
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
      border-bottom: 1px solid var(--primaryColor);
    }
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
    color: var(--textColor);
    &.brand {
      color: var(--primaryColor);
    }
  }
</style>

<nav>
  <ul>
    <li class={segment === undefined ? 'selected' : ''}>
      <a href="." class="brand">
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
  </ul>
</nav>

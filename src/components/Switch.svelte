<script>
  import { onMount } from "svelte";

  onMount(() => {
    const toggleSwitch = document.querySelector(
      '.theme-switch input[type="checkbox"]'
    );
    function switchTheme(e) {
      document.documentElement.setAttribute(
        "data-theme",
        e.target.checked ? "dark" : "light"
      );
    }
    toggleSwitch.addEventListener("change", switchTheme, false);
  });
</script>

<style lang="scss" scoped>
  .theme-switch {
    display: inline-block;
    height: 34px;
    position: relative;
    width: 60px;
    &-wrapper {
      display: flex;
      align-items: center;
      em {
        margin-left: 10px;
        font-size: 1rem;
      }
    }
    input {
      display: none;
    }
  }

  .slider {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
    &.round {
      border-radius: 34px;
      &:before {
        border-radius: 50%;
      }
    }
    &:before {
      background-color: #fff;
      bottom: 4px;
      content: "";
      height: 26px;
      left: 4px;
      position: absolute;
      transition: 0.4s;
      width: 26px;
    }
  }

  input:checked + .slider {
    background-color: #66bb6a;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }
</style>

<!-- TODO: Make dynamic and update styles, not just static switch for darkmode -->
<div class="theme-switch-wrapper">
  <label class="theme-switch" for="checkbox">
    <input type="checkbox" id="checkbox" />
    <div class="slider round" />
  </label>
</div>

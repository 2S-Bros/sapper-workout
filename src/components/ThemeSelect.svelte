<script>
  import { onMount } from "svelte";

  onMount(() => {
    const toggleSelect = document.querySelector("#theme-select");
    function switchTheme(e) {
      document.documentElement.setAttribute("data-theme", e.target.value);
    }
    toggleSelect.addEventListener("change", switchTheme, false);
  });
</script>

<!-- TODO: Make dynamic and update styles, not just static switch for darkmode -->
<label for="theme-select">Theme</label>
<select name="theme-select" id="theme-select">
  <option value="light">Light</option>
  <option value="dark">Dark</option>
  <option value="oled">OLED</option>
</select>

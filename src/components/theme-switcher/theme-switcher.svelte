<script>
  import { theme } from "../../stores";

  let themeValue = false;

  const handleTheme = themeValue => {
    theme.update(current => (themeValue ? "bw" : "color"));
  };
</script>

<style lang="scss">
  @import "theme-switcher";
</style>

<div>
  <label id="switch" on:click={() => handleTheme(themeValue)}>
    Change theme color
    <input type="checkbox" id="slider" bind:checked={themeValue} />
    <svg>
      <path
        d="m26.7 15.9c-0.9 0-1.7-0.8-1.7-1.7s0.8-1.7 1.7-1.7 1.7 0.8 1.7 1.7c0
        1-0.7 1.7-1.7 1.7zm-4.9 8.4c-0.7-0.7-0.7-1.8 0-2.4 0.7-0.7 1.8-0.7 2.4 0
        0.7 0.7 0.7 1.8 0 2.4-0.6 0.6-1.7 0.6-2.4 0zm0-17.7c-0.7-0.7-0.7-1.8
        0-2.4 0.7-0.7 1.8-0.7 2.4 0 0.7 0.7 0.7 1.8 0 2.4-0.6 0.7-1.7 0.7-2.4
        0zm-7.5 15.7c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8
        8zm-5.9-7.6c0.2 3.1 2.8 5.6 5.9 5.6s5.7-2.5 5.9-5.6h-11.8zm5.8-11.3c-0.9
        0-1.7-0.8-1.7-1.7s0.8-1.7 1.7-1.7 1.7 0.8 1.7 1.7-0.7 1.7-1.7 1.7zm-10
        3.2c-0.7-0.7-0.7-1.8 0-2.4 0.7-0.7 1.8-0.7 2.4 0 0.7 0.7 0.7 1.8 0
        2.4s-1.8 0.7-2.4 0zm-2.5 9.3c-0.9 0-1.7-0.8-1.7-1.7s0.8-1.7 1.7-1.7 1.7
        0.8 1.7 1.7c0 1-0.7 1.7-1.7 1.7zm4.9 5.9c0.7 0.7 0.7 1.8 0 2.4s-1.8
        0.7-2.4 0c-0.7-0.7-0.7-1.8 0-2.4 0.6-0.6 1.7-0.6 2.4 0zm7.6 3.2c0.9 0
        1.7 0.8 1.7 1.7s-0.8 1.7-1.7 1.7-1.7-0.8-1.7-1.7 0.8-1.7 1.7-1.7z"
        clip-rule="evenodd"
        fill="#0D0D0D"
        fill-rule="evenodd" />
    </svg>
  </label>
</div>

<script>
  import { isHeaderFloating } from "../../stores";
  import ThemeSwitcher from "./../theme-switcher/theme-switcher.svelte";
</script>

<style lang="scss">
  @import "./../../style/media-queries";

  nav {
    position: fixed;
    bottom: calc(var(--header-height-floating) * -1);
    left: 0;
    width: 100%;
    height: var(--header-height-floating);
    display: flex;
    align-items: center;
    background: #fff;
    transition: all var(--default-transition-time) ease;
    z-index: var(--header-z-index);

    @include md {
      bottom: calc(var(--header-height-floating-md) * -1);
      height: var(--header-height-floating-md);
    }

    @include lg {
      bottom: auto;
      top: calc(var(--header-height-floating-md) * -1);
      right: 0;
      left: auto;
      transform: translateY(-100%);
      background-color: #fff;
      width: 50vw;
    }

    @include rwd(1340) {
      top: 50%;
      transform: translate(100%, -50%);
      width: 60px;
      height: 60vh;
    }

    &.show-navigation {
      transform: translateY(-100%);

      @include lg {
        transform: translate(0, 100%);
      }

      @include rwd(1340) {
        transform: translate(0, -50%);
      }
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    @include rwd(1340) {
      flex-direction: column;
      height: 100%;
    }
  }
</style>

<nav class={$isHeaderFloating ? 'show-navigation' : ''}>
  <ul>
    <li>
      <a href="#profile" class="icon">
        <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="#2a2e3b" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><circle cx="8.5" cy="8.5" r="8"/><path d="m14.5 13.5c-.6615287-2.2735217-3.1995581-3.0251263-6-3.0251263-2.72749327 0-5.27073171.8688092-6 3.0251263m6-11c1.6568542 0 3 1.34314575 3 3v1c0 1.65685425-1.3431458 3-3 3-1.65685425 0-3-1.34314575-3-3v-1c0-1.65685425 1.34314575-3 3-3z"/></g></svg>
      </a>
    </li>
    <li>
      <a href="#timeline" class="icon">
        <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="#2a2e3b" stroke-linecap="round" stroke-linejoin="round" transform="matrix(0 -1 -1 0 18.5 18.5)"><path d="m14.5 10.379v4.242" transform="matrix(-.70710678 .70710678 .70710678 .70710678 15.914145 -6.591855)"/><path d="m0 2v6c0 3.3650233 2.07760003 6.2447971 5.0200433 7.4265646.92098687.3698941 1.92670197.5734354 2.9799567.5734354 4.418278 0 8-3.581722 8-8s-3.581722-8-8-8c-1.48966767 0-3.47247085.36985163-5.09136684 1.53807623" transform="matrix(-1 0 0 -1 16 16)"/><path d="m10.25 4.75v4h-3.5" transform="matrix(0 1 -1 0 15.25 -1.75)"/></g></svg>
      </a>
    </li>
    <li>
<!--      <ThemeSwitcher />-->
      <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="#2a2e3b" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 5)"><circle cx="6.5" cy="6.5" r="6"/><path d="m7.5 12.5h3c3.3137085 0 6-2.6862915 6-6s-2.6862915-6-6-6h-2"/></g></svg>
    </li>
    <li>
      <a href="#top" class="icon">
        <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="#2a2e3b" stroke-linecap="round" stroke-linejoin="round" transform="matrix(0 -1 1 0 2 19)"><circle cx="8.5" cy="8.5" r="8"/><path d="m11.621 6.379v4.242h-4.242" transform="matrix(.70710678 .70710678 .70710678 -.70710678 -3.227683 7.792317)"/><path d="m8.5 4.5v8" transform="matrix(0 1 -1 0 17 0)"/></g></svg>
      </a>
    </li>
  </ul>
</nav>

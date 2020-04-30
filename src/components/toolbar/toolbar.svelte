<script>
  import { isHeaderFloating } from "../../stores";
  import FaUserSecret from "svelte-icons/fa/FaUserSecret.svelte";
  import FaHistory from "svelte-icons/fa/FaHistory.svelte";
  import MdAssignmentInd from "svelte-icons/md/MdAssignmentInd.svelte";
  import FaAngleDoubleUp from "svelte-icons/fa/FaAngleDoubleUp.svelte";
  import MdFolderShared from "svelte-icons/md/MdFolderShared.svelte";
  import FaClock from "svelte-icons/fa/FaClock.svelte";
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
    background: var(--color-text);
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

  .icon {
    color: #fff;
    width: 16px;
    height: 16px;
    display: block;

    @include md {
      width: 24px;
      height: 24px;
    }

    @include lg {
      color: #000;
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
        <MdAssignmentInd />
      </a>
    </li>
    <li>
      <a href="#timeline" class="icon">
        <FaClock />
      </a>
    </li>
    <li>
      <ThemeSwitcher />
    </li>
    <li>
      <a href="#top" class="icon">
        <FaAngleDoubleUp />
      </a>
    </li>
  </ul>
</nav>

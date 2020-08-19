<script>
  import { onMount, onDestroy } from "svelte";
  import navStore from "../stores/nav-store.js";
  let mobile = false;
  let homeIsActive;
  let aboutIsActive;
  let practiceIsActive;
  let locationsIsActive;
  let pageIsActive;

  const unsubscribeNav = navStore.subscribe(activeClass => {
    pageIsActive = activeClass;
  });

  onDestroy(() => {
    if (unsubscribeNav) {
      unsubscribeNav();
    }
  });
</script>

<style>
  nav {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex !important;
    flex-flow: row wrap;
    background-color: rgb(65, 107, 176) !important;
  }
  li.uk-active > a,
  a:hover {
    color: rgb(170, 174, 214) !important;
  }
  a {
    color: white !important;
    font-family: "Fira Sans", sans-serif !important;
    font-size: 1.2rem;
  }

  .nav-logo {
    max-width: 75px;
    position: fixed;
    top: 5px;
    left: 5px;
  }
  @media (max-width: 991.98px) {
  }

  @media (max-width: 578.98px) {
  }
</style>

<nav class="uk-navbar-container" uk-navbar>
  <a class="uk-navbar-item uk-logo" href="/">
    <img class="nav-logo" src="./images/logos/dwsd-logo.jpg" alt="DSWD Logo" />
  </a>
  <div class="uk-navbar-center uk-flex">
    <ul class="uk-navbar-nav">
      <li class={pageIsActive.activePage == 'home' ? 'uk-active' : ''}>
        <a href="/">Home</a>
      </li>
      <li class={pageIsActive.activePage == 'about' ? 'uk-active' : ''}>
        <a href="about">About</a>
      </li>
      <li class={pageIsActive.activePage == 'practice' ? 'uk-active' : ''}>
        <a href="practice">Areas of Practice</a>
      </li>
      <li class={pageIsActive.activePage == 'locations' ? 'uk-active' : ''}>
        <a href="locations">Locations</a>
      </li>
    </ul>
  </div>
</nav>

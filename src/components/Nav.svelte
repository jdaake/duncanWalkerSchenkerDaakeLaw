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
    position: sticky;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex !important;
    flex-flow: row wrap;
    background-color: navy !important;
  }
  li.uk-active > a,
  a:hover {
    color: gold !important;
  }
  a {
    color: white !important;
  }
</style>

<nav class="uk-navbar-container" uk-navbar>
  <div class="uk-navbar-center uk-flex">
    <a class="uk-navbar-item uk-logo" href="/">Logo</a>
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
      <li class={pageIsActive.activePage == 'contact' ? 'uk-active' : ''}>
        <a href="contact">Contact</a>
      </li>
    </ul>
  </div>
</nav>

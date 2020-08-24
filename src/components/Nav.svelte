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

  .sub-item {
    color: rgb(65, 107, 176) !important;
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
      <!-- <li> -->
      <li>
        <a href="">Contact Us</a>
        <div class="uk-navbar-dropdown">
          <ul class="uk-nav uk-navbar-dropdown-nav">
            <li>
              <a class="sub-item" href="about">Our Team</a>
            </li>
            <li>
              <a
                class="sub-item"
                href="https://www.facebook.com/DucanWalkerSchenkerDaakePCLLO/"
                target="_blank">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </li>
      <!-- <a
          href="https://www.facebook.com/DucanWalkerSchenkerDaakePCLLO/"
          target="_blank"
          uk-icon="icon: facebook"
          title="Facebook" /> -->
      <!-- </li> -->
    </ul>
  </div>
</nav>

<!-- Mobile Nav-->
{#if mobile}
  <button
    class="uk-button uk-button-default uk-margin-small-right"
    type="button"
    uk-toggle="target: #offcanvas-usage">
    Open
  </button>
  <div id="offcanvas-usage" uk-offcanvas>
    <div class="uk-offcanvas-bar">

      <button class="uk-offcanvas-close" type="button" uk-close />

      <h3>Title</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

    </div>
  </div>
{/if}

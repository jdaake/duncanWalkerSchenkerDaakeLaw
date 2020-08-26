<script>
  import { onMount, onDestroy } from "svelte";
  import navStore from "../stores/nav-store.js";
  let mobile = true;
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
  .facebook-logo {
    position: fixed;
    top: 25px;
    right: 25px;
  }
  .mobile-nav {
    visibility: hidden;
  }

  @media (max-width: 991.98px) {
  }

  @media (max-width: 660px) {
    .main-nav {
      display: none !important;
    }
    .mobile-nav {
      visibility: visible;
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 1;
      height: 50px;
      background-color: rgb(65, 107, 176) !important;
    }
    .menu-icon {
      position: fixed;
      top: 5px;
      left: 5px;
      color: white;
    }
    .nav-logo {
      max-width: 30px;
      position: fixed;
      top: 11px;
      left: 90%;
    }
  }
</style>

<nav class="uk-navbar-container main-nav" uk-navbar>
  <a class="uk-navbar-item uk-logo" href="/" title="Home">
    <img class="nav-logo" src="./images/logos/dwsd-logo.jpg" alt="DSWD Logo" />
  </a>
  <div class="uk-navbar-center">
    <ul class="uk-navbar-nav">
      <li
        class={pageIsActive.activePage == 'home' ? 'uk-active' : ''}
        title="Home">
        <a href="/">Home</a>
      </li>
      <li
        class={pageIsActive.activePage == 'about' ? 'uk-active' : ''}
        title="View our Team">
        <a href="about">About</a>
      </li>
      <li
        class={pageIsActive.activePage == 'practice' ? 'uk-active' : ''}
        title="View our Areas of Practices">
        <a href="practice">Areas of Practice</a>
      </li>
      <li
        class={pageIsActive.activePage == 'locations' ? 'uk-active' : ''}
        title="View our Locations">
        <a href="locations">Locations</a>
      </li>
    </ul>
  </div>
  <a
    class="facebook-logo"
    href="https://www.facebook.com/DucanWalkerSchenkerDaakePCLLO/"
    target="_blank"
    title="Visit our Facebook page">
    <span uk-icon="icon: facebook" />
  </a>
</nav>

<!-- Mobile Nav-->
<nav class="mobile-nav">
  <div>
    <span
      uk-icon="icon: menu"
      uk-toggle="target: #offcanvas-slide"
      ratio="2"
      class="menu-icon" />
    <a class="" href="/" title="Home">
      <img
        class="nav-logo"
        src="./images/logos/dwsd-logo.jpg"
        alt="DSWD Logo" />
    </a>
  </div>
  <div id="offcanvas-slide" uk-offcanvas>
    <div class="uk-offcanvas-bar">
      <ul class="uk-nav uk-nav-default">
        <li
          class={pageIsActive.activePage == 'home' ? 'uk-active' : ''}
          title="Home">
          <a href="/">Home</a>
        </li>
        <li
          class={pageIsActive.activePage == 'about' ? 'uk-active' : ''}
          title="View our Team">
          <a href="about">About</a>
        </li>
        <li
          class={pageIsActive.activePage == 'practice' ? 'uk-active' : ''}
          title="View our Areas of Practices">
          <a href="practice">Areas of Practice</a>
        </li>
        <li
          class={pageIsActive.activePage == 'locations' ? 'uk-active' : ''}
          title="View our Locations">
          <a href="locations">Locations</a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/DucanWalkerSchenkerDaakePCLLO/"
            target="_blank"
            title="Visit our Facebook page">
            <span uk-icon="icon: facebook" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

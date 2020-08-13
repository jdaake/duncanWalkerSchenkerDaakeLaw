<script>
  import { onMount } from "svelte";
  let mobile = false;
  let homeIsActive;
  let aboutIsActive;
  let practiceIsActive;
  let locationsIsActive;

  onMount(() => {
    homeIsActive = true;
    aboutIsActive = false;
    practiceIsActive = false;
    locationsIsActive = false;
  });

  function setActive(e) {
    var target = e.target.innerText.toLowerCase();
    switch (target) {
      case "home":
        homeIsActive = true;
        aboutIsActive = false;
        practiceIsActive = false;
        locationsIsActive = false;
        break;
      case "about":
        homeIsActive = false;
        aboutIsActive = true;
        practiceIsActive = false;
        locationsIsActive = false;
        break;
      case "areas of practice":
        homeIsActive = false;
        aboutIsActive = false;
        practiceIsActive = true;
        locationsIsActive = false;
        break;
      case "locations":
        homeIsActive = false;
        aboutIsActive = false;
        practiceIsActive = false;
        locationsIsActive = true;
        break;
      default:
        homeIsActive = true;
        aboutIsActive = false;
        practiceIsActive = false;
        locationsIsActive = false;
    }
  }
</script>

<style>
  nav {
    border-bottom: 1px solid navy !important;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    flex-flow: row wrap;
  }
</style>

{#if !mobile}
  <!-- Desktop Nav -->
  <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-center">
      <a class="uk-navbar-item uk-logo" href="">Logo</a>
      <ul class="uk-navbar-nav">
        <li class={homeIsActive ? 'uk-active' : ''}>
          <a on:click={e => setActive(e)} href="">Home</a>
        </li>
        <li class={aboutIsActive ? 'uk-active' : ''}>
          <a on:click={e => setActive(e)} href="about">About</a>
        </li>
        <li class={practiceIsActive ? 'uk-active' : ''}>
          <a on:click={e => setActive(e)} href="practice">Areas of Practice</a>
        </li>
        <li class={locationsIsActive ? 'uk-active' : ''}>
          <a on:click={e => setActive(e)} href="locations">Locations</a>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
              <li>
                <a href="locations">Franklin, NE</a>
              </li>
              <li>
                <a href="locations">Alma, NE</a>
              </li>
              <li>
                <a href="locations">Oxford, NE</a>
              </li>
              <li>
                <a href="locations">Hildreth, NE</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
{/if}

<!-- Mobile Nav -->
{#if mobile}
  <nav class="uk-navbar uk-navbar-container uk-margin">
    <div class="uk-navbar-left">
      <li>
        <a class="uk-navbar-toggle" href="#">
          <span uk-navbar-toggle-icon />
          <span class="uk-margin-small-left">Menu</span>
        </a>
        <div class="uk-navbar-dropdown">
          <ul class="uk-nav uk-navbar-dropdown-nav">
            <li class="uk-active">
              <a href=".">Home</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="areasofpractice">Areas of Practice</a>
            </li>
            <li>
              <a href="locations">Locations</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </li>
    </div>
  </nav>
{/if}

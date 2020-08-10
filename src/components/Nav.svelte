<script>
  import { onMount } from "svelte";
  let mobile = false;
  export let homeIsActive;
  export let aboutIsActive;
  export let practiceIsActive;
  export let locationsIsActive;
</script>

<style>

</style>

{#if !mobile}
  <!-- Desktop Nav -->
  <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-center">
      <a class="uk-navbar-item uk-logo" href="#">Logo</a>
      <ul class="uk-navbar-nav">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="practice">Areas of Practice</a>
        </li>
        <li>
          <a href="locations">Locations</a>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
              <li>
                <a href="#">Franklin, NE</a>
              </li>
              <li>
                <a href="#">Alma, NE</a>
              </li>
              <li>
                <a href="#">Oxford, NE</a>
              </li>
              <li>
                <a href="#">Hildreth, NE</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">Contact</a>
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

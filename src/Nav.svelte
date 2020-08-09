<script>
  let mobile = false;
  export let active;
  export let homePage = true;
  export let aboutPage = false;
  export let practicePage = false;
  export let locationsPage = false;
  export let contactPage = false;
  function assignActive() {}
</script>

<style>

</style>

{#if !mobile}
  <!-- Desktop Nav -->
  <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
    <div class="uk-navbar-center">
      <a class="uk-navbar-item uk-logo" href="#">Logo</a>
      <ul class="uk-navbar-nav">
        <li class="">
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Areas of Practice</a>
        </li>
        <li>
          <a href="#">Locations</a>
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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Areas of Practice</a>
            </li>
            <li>
              <a href="#">Locations</a>
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

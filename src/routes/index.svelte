<script>
  import { fade } from "svelte/transition";
  import { onMount, onDestroy } from "svelte";
  import Footer from "../components/Footer.svelte";
  import navStore from "../stores/nav-store.js";
  let pageIsActive;

  const unsubscribeNav = navStore.subscribe(activePage => {
    pageIsActive = activePage;
  });

  navStore.update(() => {
    return { activePage: "home" };
  });

  onDestroy(() => {
    if (unsubscribeNav) {
      unsubscribeNav();
    }
  });
</script>

<style>
  h3,
  p {
    font-family: "Fira Sans", sans-serif;
  }
  .home-container {
    margin: auto;
    max-width: 80vw;
  }

  .uk-card {
    border: 1px solid rgba(0, 0, 0, 0.08);
  }

  .main-logo {
    max-width: 600px;
    height: auto;
    display: flex;
    margin: auto;
  }

  @media (max-width: 991.98px) {
    .main-logo {
      max-width: 400px;
      height: auto;
      display: flex;
      margin: auto;
    }
  }

  @media (max-width: 578.98px) {
    .main-logo {
      max-width: 250px;
      height: auto;
      display: flex;
      margin: auto;
    }
  }
</style>

<svelte:head>
  <title>Duncan, Walker, Schenker, & Daake</title>
</svelte:head>

<div class="home-container" in:fade={{ duration: 400, delay: 100 }}>
  <div>
    <img class="main-logo" src="./images/logos/dwsdLogoColor.jpg" alt="" />
  </div>
  <!-- card 1 -->
  <div
    class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s
    uk-margin uk-box-shadow-medium"
    uk-grid>
    <div class="uk-card-media-left uk-cover-container">
      <img src="./images/ladyjustice.jpg" alt="Lady Justice" uk-cover />
      <canvas width="400" height="300" />
    </div>
    <div>
      <div class="uk-card-body">
        <h3 class="uk-card-title">Our Practice</h3>
        <p>
          Duncan, Walker, Schenker & Daake, is a general law practice serving
          individuals, families, farmers, banks, and small business in South
          Central Nebraska.
        </p>
        <p>
          Our experience in law allows us to meet the often complex and
          interdisciplinary needs of our communities
        </p>
        <p>Our client's interest are at the heart of everything we do.</p>
      </div>
    </div>
  </div>
</div>
<Footer />

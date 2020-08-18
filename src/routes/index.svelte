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
  .home-container {
    margin: auto;
    max-width: 75vw;
    padding-top: 1rem;
  }

  .uk-card {
    border: 1px solid rgba(0, 0, 0, 0.08);
  }
</style>

<svelte:head>
  <title>Duncan, Walker, Schenker, & Daake</title>
</svelte:head>
<div class="home-container" in:fade={{ duration: 400, delay: 100 }}>
  <!-- three cards with images -->
  <!-- card 1 -->
  <div
    class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s
    uk-margin uk-box-shadow-medium"
    uk-grid>
    <div class="uk-card-media-left uk-cover-container">
      <img src="./images/farming.jpg" alt="Farming" uk-cover />
      <canvas width="300" height="300" />
    </div>
    <div>
      <div class="uk-card-body">
        <h3 class="uk-card-title">Our Firm</h3>
        <p>
          Duncan, Walker, Schenker & Daake, P.C., L.L.O. represents individuals,
          families, farmers, banks, and small businesses.
        </p>
        <p>
          With our extensive experience, our practice has developed into a
          comprehensive law firm handling an assortment of legal issues.
        </p>
      </div>
    </div>
  </div>
  <!-- card 2 -->
  <div
    class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s
    uk-margin uk-box-shadow-medium"
    uk-grid>
    <div class="uk-card-media-left uk-cover-container">
      <img src="./images/ladyJustice.jpg" alt="Lady Justice" uk-cover />
      <canvas width="300" height="300" />
    </div>
    <div>
      <div class="uk-card-body">
        <h3 class="uk-card-title">A Client First Approach</h3>
        <p>
          Our background in law allows us to meet the often complex and
          interdisciplinary needs of our local citizens. Our clients' interests
          are at the heart of everything we do.
        </p>
        <p>
          We place a strong emphasis on professionalism and serving the needs of
          the residents of South Central Nebraska.
        </p>
      </div>
    </div>
  </div>
  <!-- card 3 -->
  <div
    class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s
    uk-margin uk-box-shadow-medium"
    uk-grid>
    <div class="uk-card-media-left uk-cover-container">
      <img src="./images/mainStreet.jpg" alt="Main Street" uk-cover />
      <canvas width="300" height="300" />
    </div>
    <div>
      <div class="uk-card-body">
        <h3 class="uk-card-title">Here When You Need Us</h3>
        <p>
          We are grateful for our communities, our clients, and friends and
          welcome the opportunity to assist you with your particular legal
          situation.
        </p>
        <p>Feel free to stop by or call to discuss your legal needs.</p>
      </div>
    </div>
  </div>
</div>
<Footer />

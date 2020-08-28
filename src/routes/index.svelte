<script>
  import { fade } from "svelte/transition";
  import { onMount, onDestroy } from "svelte";
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
    width: 80vw;
    padding-bottom: 3rem;
  }

  .uk-card {
    border: 1px solid rgba(0, 0, 0, 0.08) !important;
  }

  .main-logo {
    max-width: 575px;
    height: auto;
    display: flex;
    margin: auto;
  }

  @media (max-width: 991.98px) {
    .home-container {
      margin-top: 2.5rem;
      width: 90vw;
      padding-bottom: 2rem;
    }
    .main-logo {
      max-width: 450px;
    }
  }
  @media (max-width: 768px) {
    .home-container {
      margin-top: -0.5rem;
    }
    .main-logo {
      max-width: 450px;
    }
  }
  @media (max-width: 740px) {
    .home-container {
      margin-top: 2rem;
    }
  }

  @media (max-width: 667px) {
    h3 {
      text-align: center;
    }
    .home-container {
      margin-top: 2rem;
      padding-bottom: 1rem;
      width: 90vw;
    }
    .main-logo {
      max-width: 325px;
    }
  }

  @media (max-width: 568px) {
    .home-container {
      margin-top: 1rem;
      width: 80vw;
    }
    .main-logo {
      max-width: 225px;
    }
  }

  @media (max-width: 414px) {
    .home-container {
      margin-top: -1rem;
    }
  }

  @media (max-width: 375px) {
    .home-container {
      margin-top: -1rem;
    }
  }

  @media (max-width: 320px) {
    .home-container {
      margin-top: 0rem;
    }
  }
</style>

<svelte:head>
  <title>Duncan, Walker, Schenker, & Daake, PC, LLO</title>
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
      <img src="./images/farmingSmall.jpg" alt="Farming" uk-cover />
      <canvas width="400" height="300" />
    </div>
    <div>
      <div class="uk-card-body">
        <h3 class="uk-card-title">Our Practice</h3>
        <p>
          Duncan, Walker, Schenker & Daake, P.C., L.L.O. represents individuals,
          families, farmers, banks, and small businesses. With our extensive
          experience, our practice has developed into a comprehensive law firm
          handling an assortment of legal issues.
        </p>
        <p>
          Our respective backgrounds allow us to meet the often complex and
          interdisciplinary needs of our local citizens as a team. Our clients'
          interests are at the heart of everything we do, and we place a strong
          emphasis on professionalism in serving the needs of our fellow South
          Central Nebraskans.
        </p>
        <p>
          We are grateful for our community, our clients, and friends and
          welcome the opportunity to assist you with your particular situation.
          Feel free to stop by or call to discuss your legal needs.
        </p>
      </div>
    </div>
  </div>
</div>

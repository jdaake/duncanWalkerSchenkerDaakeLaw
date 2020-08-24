<script>
  import { onDestroy } from "svelte";
  import navStore from "../stores/nav-store.js";
  import { fade } from "svelte/transition";
  let pageIsActive;

  const unsubscribeNav = navStore.subscribe(activePage => {
    pageIsActive = activePage;
  });

  navStore.update(() => {
    return { activePage: "practice" };
  });

  onDestroy(() => {
    if (unsubscribeNav) {
      unsubscribeNav();
    }
  });
</script>

<style>
  h3,
  li,
  p {
    font-family: "Fira Sans", sans-serif;
  }

  .practice-container {
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    justify-content: center;
    margin: auto;
    max-width: 70vw;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
</style>

<svelte:head>
  <title>Areas of Practice</title>
</svelte:head>

<div class="practice-container" in:fade={{ duration: 400, delay: 100 }}>

  <!-- card 1 -->
  <div
    class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s
    uk-margin uk-box-shadow-medium"
    uk-grid>
    <div class="uk-card-media-left uk-cover-container">
      <img src="./images/ladyJustice.jpg" alt="Lady Justice" uk-cover />
      <canvas width="500" height="450" />
    </div>
    <div>
      <div class="uk-card-body">
        <h3 class="uk-card-title">Areas of Practice</h3>
        <p>Our team specializes in the following areas of practice:</p>
        <ul>
          <li>Agricultural Law</li>
          <li>Business Law</li>
          <li>Family Law</li>
          <li>Civil Litigation</li>
          <li>Estate Planning</li>
          <li>Real Estate</li>
          <li>Tax Preparation and Advice</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<script>
  import { onDestroy } from "svelte";
  import navStore from "../stores/nav-store.js";
  import Footer from "../components/footer.svelte";
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
  .practice-container {
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    justify-content: center;
    margin: auto;
    max-width: 90vw;
  }
</style>

<svelte:head>
  <title>Areas of Practice</title>
</svelte:head>

<div class="practice-container">
  <p>This is the areas of practice page</p>
</div>
<Footer />

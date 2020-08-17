<script>
  import { onDestroy } from "svelte";
  import navStore from "../stores/nav-store.js";
  import Footer from "../components/footer.svelte";

  let pageIsActive;

  const unsubscribeNav = navStore.subscribe(activePage => {
    pageIsActive = activePage;
  });

  navStore.update(() => {
    return { activePage: "locations" };
  });

  onDestroy(() => {
    if (unsubscribeNav) {
      unsubscribeNav();
    }
  });
</script>

<style>
  .locations-container {
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    justify-content: center;
    margin: auto;
    max-width: 90vw;
  }
</style>

<svelte:head>
  <title>Locations</title>
</svelte:head>
<div class="locations-container">
  <p>This is the locations page</p>
</div>
<Footer />

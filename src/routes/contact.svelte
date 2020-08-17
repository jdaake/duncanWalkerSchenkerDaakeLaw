<script>
  import { onDestroy } from "svelte";
  import navStore from "../stores/nav-store.js";
  import Footer from "../components/footer.svelte";

  let pageIsActive;

  const unsubscribeNav = navStore.subscribe(activePage => {
    pageIsActive = activePage;
  });

  navStore.update(() => {
    return { activePage: "contact" };
  });

  onDestroy(() => {
    if (unsubscribeNav) {
      unsubscribeNav();
    }
  });
</script>

<style>
  .contact-container {
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    justify-content: center;
    margin: auto;
    max-width: 90vw;
  }
</style>

<svelte:head>
  <title>Contact Us</title>
</svelte:head>
<div class="contact-container">
  <p>This is the contact page</p>
</div>
<Footer />

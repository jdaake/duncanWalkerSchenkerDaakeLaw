<script>
  import { onDestroy } from "svelte";
  import locationData from "../stores/locations-store.js";
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
  {#each $locationData as location}
    <div class="uk-child-width-1-2@m">
      <div>
        <div class="uk-card uk-card-default">
          <div class="uk-card-media-top">
            <img src={location.imgUrl} alt={location.officeLocation} />
          </div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">{location.officeLocation}</h3>
            <p>{location.street}</p>
            <p>{location.poBox}</p>
            <p>{location.city}, {location.state} {location.zip}</p>
            <p />
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
<Footer />

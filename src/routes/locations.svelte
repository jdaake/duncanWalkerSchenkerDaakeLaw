<script>
  import { onDestroy } from "svelte";
  import { fade } from "svelte/transition";
  import LocationCard from "../components/LocationCard.svelte";
  import locationData from "../stores/locations-store.js";
  import navStore from "../stores/nav-store.js";
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
    padding: 1rem 0rem;
  }

  @media (max-width: 991.98px) {
    .locations-container {
      margin-top: 2rem;
      max-width: 90vw;
    }
  }
  @media (max-width: 768px) {
    .locations-container {
      margin-top: -2rem;
    }
  }
  @media (max-width: 740px) {
    .locations-container {
      margin-top: 2rem;
    }
  }

  @media (max-width: 667px) {
    .locations-container {
      max-width: 90vw;
      margin-top: 2rem;
      padding-bottom: 1rem;
    }
  }

  @media (max-width: 570px) {
    .locations-container {
      margin-top: 1rem;
    }
  }
  @media (max-width: 414px) {
    .locations-container {
      margin-top: -2rem;
    }
  }
  @media (max-width: 375px) {
    .locations-container {
      margin-top: -2rem;
    }
  }

  @media (max-width: 320px) {
    .locations-container {
      margin-top: -2rem;
    }
  }
</style>

<svelte:head>
  <title>Locations</title>
</svelte:head>
<div class="locations-container" in:fade={{ duration: 400, delay: 100 }}>
  {#each $locationData as location}
    <LocationCard
      officeLocation={location.officeLocation}
      street={location.street}
      poBox={location.poBox}
      city={location.city}
      state={location.state}
      zip={location.zip}
      phone={location.phone}
      fax={location.fax}
      email={location.email}
      imgUrl={location.imgUrl}
      mapUrl={location.mapUrl} />
  {/each}
</div>

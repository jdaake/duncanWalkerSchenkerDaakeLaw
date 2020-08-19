<script>
  import { onDestroy } from "svelte";
  import aboutData from "../stores/about-store";
  import { fade } from "svelte/transition";
  import Card from "../components/Card.svelte";
  import Footer from "../components/Footer.svelte";
  import ContactModal from "../components/ContactModal.svelte";
  import navStore from "../stores/nav-store.js";
  // let attorneys;
  let pageIsActive;

  // const unsubscribeLawyer = aboutData.subscribe(lawyer => {
  //   attorneys = lawyer;
  // });

  const unsubscribeNav = navStore.subscribe(activePage => {
    pageIsActive = activePage;
  });

  navStore.update(() => {
    return { activePage: "about" };
  });

  onDestroy(() => {
    if (unsubscribeNav) {
      unsubscribeNav();
    }
  });

  function showModal(modalName) {
    console.log(modalName);
    UIkit.modal(`#${modalName}`).show();
  }
</script>

<style>
  section {
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    justify-content: center;
    margin: auto;
    max-width: 90vw;
  }
  .header-container {
    display: flex;
    margin: auto;
    width: 50vw;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
  }
  .header-container > h2 {
    margin-bottom: -0.5rem;
    font-family: "Fira Sans", sans-serif;
  }
  .header-container > p {
    text-align: center;
    font-family: "Fira Sans", sans-serif;
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>
<div class="header-container" in:fade={{ duration: 400, delay: 100 }}>
  <h2>Meet Our Experienced Legal Team</h2>
  <p>
    All of our lawyers and experienced professional staff are focused on
    providing you with first-rate legal representation and services, regardless
    of the size or complexity of your case.
  </p>
</div>
<!-- card -->
<section in:fade={{ duration: 400, delay: 100 }}>
  {#each $aboutData as attorney}
    <Card
      name={attorney.name}
      image={attorney.img}
      phone={attorney.phone}
      email={attorney.email}
      location={attorney.location}
      linkedin={attorney.linkedin}
      facebook={attorney.facebook}
      twitter={attorney.twitter}
      instagram={attorney.instagram}
      on:click={showModal(attorney.modalName)} />
    <ContactModal
      id={attorney.modalName}
      bio={attorney.bio}
      name={attorney.name} />
  {/each}
</section>

<Footer />

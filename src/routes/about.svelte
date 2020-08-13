<script>
  import aboutData from "../stores/about-store";
  import { fade } from "svelte/transition";
  import Card from "../components/Card.svelte";
  import Footer from "../components/Footer.svelte";
  import ContactModal from "../components/ContactModal.svelte";

  let attorneys;

  aboutData.subscribe(lawyer => {
    attorneys = lawyer;
  });
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

<div class="header-container" in:fade={{ duration: 400, delay: 200 }}>
  <h2>Meet Our Experienced Legal Team</h2>
  <p>
    All of our lawyers and experienced professional staff are focused on
    providing you with first-rate legal representation and services, regardless
    of the size or complexity of your case.
  </p>
</div>
<!-- card -->
<section in:fade={{ duration: 800, delay: 500 }}>
  {#each attorneys as attorney}
    <Card
      name={attorney.name}
      image={attorney.img}
      phone={attorney.phone}
      email={attorney.email}
      bio={attorney.bio} />
  {/each}
</section>
<Footer />
{#each attorneys as attorney}
  <ContactModal name={attorney.name} />
{/each}

<script>
  import ContactModal from "./ContactModal.svelte";
  export let name;
  export let image;
  export let phone;
  export let email;
  export let location;
  export let linkedin;
  export let facebook;
  export let twitter;
  export let instagram;
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

  .card-container {
    width: 25;
    display: inline-flexbox;
    border: 1px solid rgba(0, 0, 0, 0.08);
    justify-content: space-around;
    align-items: center;
    margin: 2rem;
    min-width: 250px;
    background-color: white;
  }

  .image {
    width: 100%;
    display: flex;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .details {
    /* font-family: "Permanent Marker", cursive; */
    font-size: 1rem;
    font-family: "Fira Sans", sans-serif;
    padding: 1rem;
    text-align: left;
  }
  div > h4:hover {
    color: gold;
  }

  h4 {
    font-family: "Fira Sans", sans-serif;
    text-align: center;
  }

  header {
    cursor: pointer;
  }
</style>

<section>
  <div class="card-container uk-box-shadow-medium">
    <header class="image uk-inline" on:click>
      <img src={image} alt={name} />
      <div class="uk-overlay uk-overlay-primary uk-position-bottom">
        <h4>{name}</h4>
      </div>
    </header>
    <div>
      <div class="details">
        <div>
          <span uk-icon="icon: receiver" />
          {phone}
        </div>
        <div>
          <span uk-icon="icon: mail" />
          <a href="mailto:{email}">{email}</a>
        </div>
        <div>Office Location: {location}</div>
        <div>
          {#if linkedin}
            <a href={linkedin} target="_blank" uk-icon="icon: linkedin" />
          {/if}
          {#if facebook}
            <a href={facebook} target="_blank" uk-icon="icon: facebook" />
          {/if}
          {#if twitter}
            <a href={twitter} target="_blank" uk-icon="icon: twitter" />
          {/if}
          {#if instagram}
            <a href={instagram} target="_blank" uk-icon="icon: instagram" />
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>

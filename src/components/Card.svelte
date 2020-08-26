<script>
  export let name;
  export let image;
  export let phone;
  export let email;
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

  div > h4:hover {
    color: rgb(170, 174, 214);
  }

  h4 {
    font-family: "Fira Sans", sans-serif;
    text-align: center;
  }

  header {
    cursor: pointer;
  }
  span {
    margin-right: 0.1rem;
  }
  .card-container {
    /* width: 30%; */
    display: inline-flexbox;
    border: 1px solid rgba(0, 0, 0, 0.08);
    justify-content: space-around;
    align-items: center;
    margin: 1.5rem;
    width: 259px;
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
    font-size: 1rem;
    font-family: "Fira Sans", sans-serif;
    padding: 1rem;
    text-align: left;
  }

  .view-more {
    text-decoration: none;
    font-style: italic;
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
          {#if name == 'Patrick A. Duncan'}
            <span uk-icon="icon: more-vertical" />
            Of Counsel
          {:else}
            <span uk-icon="icon: receiver" title="Phone" />
            <a href="tel:{phone}">{phone}</a>
          {/if}
        </div>
        <div>
          {#if name == 'Patrick A. Duncan'}
            <span uk-icon="icon: more-vertical" />
          {:else}
            <span uk-icon="icon: mail" title="Email" />
            <a href="mailto:{email}">{email}</a>
          {/if}
        </div>
        <div>
          <span
            uk-icon="icon: info"
            title="View more information about {name}" />
          <a class="view-more" on:click>View More</a>
        </div>
      </div>
    </div>
  </div>
</section>

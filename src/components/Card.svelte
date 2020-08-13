<script>
  export let name;
  export let image;
  export let phone;
  export let email;
  export let bio;
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
    /* border: 1px solid rgba(0, 0, 0, 0.08); */
    /* box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
      0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
      0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
      0 100px 80px rgba(0, 0, 0, 0.07); */
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
    text-align: center;
  }
  div > h4:hover {
    color: #999999;
  }

  h4 {
    font-family: "Fira Sans", sans-serif;
    text-align: center;
  }
</style>

<section>
  <div class="card-container uk-box-shadow-large">
    <header class="image uk-inline">
      <img src={image} alt={name} />
      <div class="uk-overlay uk-overlay-primary uk-position-bottom">
        <h4>{name}</h4>
      </div>
    </header>
    <div>
      <div class="details">
        <div>Phone: {phone}</div>
        <!-- <hr /> -->
        <div>
          Email:
          <a href="mailto:{email}">{email}</a>
        </div>
        <!-- <hr />
       <div>About: {bio}</div> -->
      </div>
    </div>
  </div>
</section>

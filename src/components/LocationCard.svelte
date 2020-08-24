<script>
  export let officeLocation;
  export let street;
  export let poBox;
  export let city;
  export let state;
  export let zip;
  export let phone;
  export let fax;
  export let imgUrl;
  export let mapUrl;
</script>

<style>
  h3 {
    font-family: "Fira Sans", sans-serif;
  }
  .details {
    font-size: 1rem;
    font-family: "Fira Sans", sans-serif;
    /* padding: 1rem; */
    text-align: left;
  }
  .uk-card-body {
    width: 175px !important;
  }
  .uk-card {
    margin: 1rem;
  }
</style>

<!-- <section> -->
<div
  class="uk-card uk-card-default uk-grid-collapse uk-margin uk-card-hover"
  uk-grid>
  <div class="uk-card-media-left uk-cover-container">
    <a href={mapUrl} target="_blank">
      <img src={imgUrl} alt={officeLocation} uk-cover title="View on Map" />
    </a>
    <canvas width="275" height="200" />
  </div>
  <div>
    <div class="uk-card-body">
      <h3 class="uk-card-title">{officeLocation}</h3>
      <div class="details">
        <div>{street}</div>
        <div>{poBox}</div>
        <div>{city}, {state} {zip}</div>
        <a href={mapUrl} target="_blank">
          <span uk-icon="location" />
          View on Map
        </a>
        <hr />
        <div>Phone: {phone}</div>
        <div>Fax: {fax}</div>
      </div>
    </div>
  </div>
</div>
<!-- </section> -->

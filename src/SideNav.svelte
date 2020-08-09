<style>
  /* li {
    font-size: 1rem !important;
  } */
  .aside-grid {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 49% 49%;
    grid-gap: 1rem;
  }

  .contact-numbers {
    grid-row-start: 1;
  }

  .hours-of-operations {
    grid-row-start: 2;
    display: flex;
    flex-flow: row wrap;
  }
</style>

<aside class="aside-grid">
  <div class="contact-numbers">
    <div class="uk-card uk-card-default uk-card-body">
      <h4 class="uk-card-title">Call us!</h4>
      <ul class="uk-list">
        <li>Franklin office: (308) 425-6273</li>
        <hr />
        <li>Alma office: (308) 928-2165</li>
        <hr />
        <li>Oxford office: (308) 824-3231</li>
        <hr />
        <li>Hildreth office: (308) 938-4585</li>
      </ul>
    </div>
  </div>

  <div class="hours-of-operations">
    <div class="uk-card uk-card-default uk-card-body">
      <h3 class="uk-card-title">Operating Hours</h3>
      <p>
        Lorem ipsum
        <a href="#">dolor</a>
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>
</aside>

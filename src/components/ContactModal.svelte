<script>
  export let id;
  export let bio1;
  export let bio2;
  export let bio3;
  export let nameOnModal;
  export let linkedin;
</script>

<style>
  h2,
  p {
    font-family: "Fira Sans", sans-serif;
  }
</style>

<div {id} uk-modal>
  <div class="uk-modal-dialog uk-modal-body">
    <h2 class="uk-modal-title">{nameOnModal}</h2>

    <p>{bio1}</p>
    <p>{bio2}</p>
    <p>{bio3}</p>
    {#if linkedin}
      <a href={linkedin} target="_blank" title="View on LinkedIn">
        <span uk-icon="icon: linkedin" ratio="1.5" />
      </a>
    {/if}
    <p class="uk-text-right">
      <button class="uk-button uk-button-default uk-modal-close" type="button">
        Close
      </button>
    </p>
  </div>
</div>

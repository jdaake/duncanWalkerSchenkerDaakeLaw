<script>
  export let id;
  export let bio;
  export let name;
</script>

<div {id} uk-modal>
  <div class="uk-modal-dialog uk-modal-body">
    <h2 class="uk-modal-title">{name}</h2>
    <p>{bio}</p>
    <p class="uk-text-right">
      <button class="uk-button uk-button-default uk-modal-close" type="button">
        Close
      </button>
    </p>
  </div>
</div>

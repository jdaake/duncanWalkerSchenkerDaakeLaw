<script>
  import { fade } from "svelte/transition";
</script>

<style>
  footer {
    display: flex;
    background-color: rgba(222, 220, 220, 0.3);
    padding: 1rem 0rem;
    width: 100vw;
    margin: auto;
    border-top: 1px solid navy;
  }

  footer > p {
    font-size: 0.7rem;
    margin: 1rem 1rem 0 1rem;
  }
</style>

<footer in:fade={{ duration: 400, delay: 200 }}>
  <p>
    * Information on this website is general in nature and should not be
    considered legal advice or applicable to a specific factual situation. The
    firm's practice may be limited to the State of Nebraska. Sending
    communication through this website does not create an attorney-client
    relationship and information might not be kept confidential or privileged.
    Sending information to the firm will not create a conflict for the firm in
    subsequent representations unless the firm has agreed to establish an
    attorney-client relationship with the sender.
  </p>
</footer>

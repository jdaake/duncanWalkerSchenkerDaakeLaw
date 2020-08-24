<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<style>

</style>

<div class="grid">
  <Nav />
  <main>
    <slot />
  </main>
</div>
<!-- <Footer /> -->

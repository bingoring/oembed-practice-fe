<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand to="/embed/urlInput" class="navbar">Embed Test</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
    };
  }
};
</script>

<style>
* {
  font-family: sans-serif;
}
</style>

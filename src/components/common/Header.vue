<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand to="/main" class="navbar">MAIN</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/crud">CRUD</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item to="/auth/getUsers">Users</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item to="/auth/modifyUser">Modify</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item to="/auth/deleteUser">Delete</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>

<style>
* {
  font-family: sans-serif;
}
</style>

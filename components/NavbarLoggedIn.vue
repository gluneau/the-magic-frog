<template>
  <b-navbar toggleable="md">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="mx-auto">
        <!--<b-nav-item href="#">Story Archive</b-nav-item>-->
        <b-nav-item v-b-modal.whatIsThisModal>What is this?</b-nav-item>
        <b-nav-item v-b-modal.userModal>{{ user.name }}</b-nav-item>
        <b-nav-item @click="logout">logout</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    props: ['user'],
    methods: {
      logout() {
        this.$parent.logout();
      }
    }
  };
</script>
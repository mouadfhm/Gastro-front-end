<template>
      <AppNavbar />
      <v-container>
        <GesteForm />
      </v-container>
  </template>
  
  <script>
  import AppNavbar from '../components/Navbar.vue';
  import GesteForm from '../components/GesteForm.vue';

  export default {
    components: {
      AppNavbar,
      GesteForm,
    },
  };
  </script>
  
  <style >
  .v-application__wrap {
  background-color: #D1C8E1;
  }
  
  </style>
  
<template>
  <v-app-bar app color="teal" dark>
    <v-toolbar-title>Gastro Management</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text @click='getGeste'>Geste</v-btn>
    <v-btn text @click='getPatient'>Patient</v-btn>
    <v-btn text @click='getClinique'>Clinique</v-btn>
  </v-app-bar>
</template>

<script>

export default {
  name: 'AppNavbar',

  methods: {
    getGeste() {
      this.$router.push('/GestePage');
    },
    getPatient() {
      this.$router.push('/PatientPage');
    },
    getClinique() {
      this.$router.push('/CliniquePage');
    }
}}
</script>

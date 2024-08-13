<template>
    <AppNavbar />
    <v-container>
      <v-card-title>Liste des gestes</v-card-title>
      <FilterSection />
      <PatientTable />
      <AddButton />
    </v-container>
</template>

<script>
import AppNavbar from '../components/Navbar.vue';
import FilterSection from '../components/FilterSection.vue';
import PatientTable from '../components/PatientTable.vue';
import AddButton from '../components/AddButton.vue';
export default {
  components: {
    AppNavbar,
    FilterSection,
    PatientTable,
    AddButton,
  },
};
</script>
<style>
  .v-application__wrap {
  background-color: #D1C8E1;
  }

</style>
<style scoped>
.v-container {
    background-color: white;
    border-radius: 15px;
    margin-top: 5%;
}
.v-card-title{
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    color: teal;
    padding: 1%;
}
</style>

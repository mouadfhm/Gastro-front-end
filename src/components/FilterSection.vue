<template>
    <v-row >
      <v-col cols="4">
        <v-select
          v-model="selectedClinique"
          :items="cliniques"
          label="Clinique"
          dense
          outlined
        ></v-select>
      </v-col>
      <v-col cols="4">
        <v-select
          v-model="selectedPatient"
          :items="patients"
          label="Patient"
          dense
          outlined
        ></v-select>
      </v-col>
      <v-col cols="4">
        <v-text-field
          v-model="selectedDate"
          label="Date"
          type="date"
          dense
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="text-right">
        <v-btn append-icon="mdi-filter" color="teal" @click="applyFilter" >Filtre</v-btn>
      </v-col>
    </v-row>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedClinique: '',
        selectedPatient: '',
        selectedDate: '',
        cliniques: ['Casa', 'Settat'],
        patients: ['Mouad Fahimi', 'Khadija Doublali'],
      };
    },
    methods: {
      applyFilter() {
        // Implement filter logic here
        console.log(this.selectedClinique, this.selectedPatient, this.selectedDate);
      },
    },
  };
  </script>
  

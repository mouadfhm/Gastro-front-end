<template>
  <v-row>
    <v-col cols="4">
      <v-select v-model="selectedClinique" :items="cliniques" label="Clinique" dense outlined></v-select>
    </v-col>
    <v-col cols="4">
      <v-select v-model="selectedPatient" :items="patients" label="Patient" dense outlined></v-select>
    </v-col>
    <v-col cols="4">
      <v-text-field v-model="selectedDate" label="Date" type="date" dense outlined></v-text-field>
    </v-col>
    <v-col cols="12" class="text-right">
      <v-btn append-icon="mdi-filter" color="teal" @click="applyFilter">Filtre</v-btn>
      <v-btn append-icon="mdi-close" color="white" @click="clearFilter">clear</v-btn>
    </v-col>
  </v-row>


  <v-data-table :headers="headers" :items="tableData" class="elevation-1 custom-table"></v-data-table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      filteredGestes: [],
      selectedClinique: '',
      selectedPatient: '',
      selectedDate: '',
      cliniques: [""],
      patients: [""],

      gestes: [],
      headers: [
        { title: 'Clinique', value: 'clinique.name' }, // Change title to text (Vuetify uses `text` for header labels)
        { title: 'Date', value: 'date' },
        { title: 'Nom', value: 'patient.lastname' },
        { title: 'Prenom ', value: 'patient.firstname' },
        { title: 'Geste', value: 'type' },
        { title: 'Resultat', value: 'patient.result' },
      ],
      tableData: [],
    };
  },

  computed: {
    ...mapGetters(['getGestes']),
  },
  mounted() {
    this.getGestesMethod();
  },
  methods: {
    ...mapActions(['fetchGestes']),

    getGestesMethod() {
      this.fetchGestes().then(() => {
        this.gestes = this.getGestes;
        this.tableData = this.gestes;
        this.cliniques = [...new Set(this.gestes.map(geste => geste.clinique.name))];
        this.patients = [...new Set(this.gestes.map(geste => geste.patient.firstname + ' ' + geste.patient.lastname))];
        console.log(this.gestes);
      });
    },

    applyFilter() {
      let filteredGestes = this.gestes;

      // Filter by selected clinique
      if (this.selectedClinique) {
        filteredGestes = filteredGestes.filter(geste =>
          geste.clinique && geste.clinique.name === this.selectedClinique
        );
      }

      // Filter by selected patient
      if (this.selectedPatient) {
        filteredGestes = filteredGestes.filter(geste =>
          geste.patient && (geste.patient.firstname + ' ' + geste.patient.lastname === this.selectedPatient)
        );
      }

      // Filter by selected date
      if (this.selectedDate) {
        filteredGestes = filteredGestes.filter(geste =>
          geste.date === this.selectedDate
        );
      }

      // Update tableData with the filtered results
      this.tableData = filteredGestes;
    },

    clearFilter() {
      this.selectedClinique = '';
      this.selectedPatient = '';
      this.selectedDate = '';
      this.tableData = this.gestes;
    },
  },

};
</script>

<style>
.custom-table {
  border-radius: 15px;
  background-color: #D1C8E1;
  color: #000;
}

.custom-table .v-data-table-header {
  background-color: #D1C8E1;
  /* Match the table background color */
  color: #000;
  /* Header text color */
}

.custom-table .v-data-table-header th {
  color: #000;
  /* Header text color */
}

.custom-table .v-data-table__wrapper {
  background-color: #D1C8E1;
  /* Background color for table body */
}

.custom-table .v-data-table__tbody td {
  color: #000;
  /* Text color for table rows */
}
</style>
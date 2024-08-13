<template>
    <v-data-table
      :headers="headers"
      :items="tableData"
      class="elevation-1 custom-table"
    ></v-data-table>
  </template>
  
  <script>
  export default {
    data() {
      return {
        headers: [
          { title: 'Clinique', value: 'clinique' }, // Change title to text (Vuetify uses `text` for header labels)
          { title: 'Date', value: 'date' },
          { title: 'Nom du patient', value: 'patient' },
          { title: 'Geste', value: 'geste' },
          { title: 'Resultat', value: 'result' },
        ],
        tableData: [
          { clinique: 'Casa', date: '13/08/2024', patient: 'Mouad Fahimi', geste: 'test', result: 'negative' },
          { clinique: 'Settat', date: '12/08/2024', patient: 'Khadija Doublali', geste: 'test', result: 'negative' },
        ],
      };
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
    background-color: #D1C8E1; /* Match the table background color */
    color: #000; /* Header text color */
  }
  
  .custom-table .v-data-table-header th {
    color: #000; /* Header text color */
  }
  
  .custom-table .v-data-table__wrapper {
    background-color: #D1C8E1; /* Background color for table body */
  }
  
  .custom-table .v-data-table__tbody td {
    color: #000; /* Text color for table rows */
  }
  </style>
  
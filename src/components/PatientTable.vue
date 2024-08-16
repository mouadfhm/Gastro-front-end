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


  <v-data-table :headers="headers" :items="tableData" class="elevation-1 custom-table">            <template v-slot:item.actions="{ item }">
                <v-btn 
                    color="blue" 
                    @click="openEditDialog(item)"
                    small
                    append-icon="mdi-pencil"
                >
                    Modifier
                </v-btn>
            </template>
</v-data-table>
  <!-- Edit Patient Dialog -->
  <v-dialog v-model="editDialogG" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">Modifier Geste</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="editForm">
          <v-select v-model="editedGeste.clinique" :items="cliniques" label="Clinique*" aria-required="true"></v-select>
          <v-text-field v-model="editedGeste.date" label="Date*" type="date" required></v-text-field>
          <v-text-field v-model="editedGeste.lastname" label="Nom" required></v-text-field>
          <v-text-field v-model="editedGeste.firstname" label="Prénom" required></v-text-field>
          <v-text-field v-model="editedGeste.age" label="Age" type="number" required></v-text-field>
          <v-text-field v-model="editedGeste.phone" label="Numero de telephone" required></v-text-field>
          <v-text-field v-model="editedGeste.RC" label="RC" required></v-text-field>
          <v-select v-model="editedGeste.typeGeste" :items="typesGeste" label="Type du geste*" required></v-select>
          <v-text-field v-model="editedGeste.result" label="Résultat" required></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeEditDialog">Annuler</v-btn>
        <v-btn color="blue darken-1" text @click="saveGeste">Sauvegarder</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-snackbar v-model="snackbar" top timeout="2000" color="green">Modification reussi</v-snackbar>
  <v-snackbar v-model="redSnackbar" top timeout="1000" color="red">Remplir les champs obligatoires</v-snackbar>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      editDialogG: false,
      snackbar: false,
      redSnackbar: false,
      filteredGestes: [],
      selectedClinique: '',
      selectedPatient: '',
      selectedDate: '',
      cliniques: [""],
      patients: [""],
      gestes: [],
      headers: [
        { title: 'Clinique', value: 'clinique.name' },
        { title: 'Date', value: 'date' },
        { title: 'Nom', value: 'patient.lastname' },
        { title: 'Prenom ', value: 'patient.firstname' },
        { title: 'Geste', value: 'type' },
        { title: 'Resultat', value: 'patient.result' },
        { title: 'Actions', value: 'actions', sortable: false },
      ],
      tableData: [],
      editedGeste: {
        clinique: '',
        date: '',
        lastname: '',
        firstname: '',
        age: '',
        phone: '',
        RC: '',
        typeGeste: '',
        result: '',
      }
    };
  },

  computed: {
    ...mapGetters(['getGestes']),
  },

  mounted() {
    this.getGestesMethod();
  },

  methods: {
    ...mapActions(['fetchGestes', 'updateGeste']),

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

      if (this.selectedClinique) {
        filteredGestes = filteredGestes.filter(geste =>
          geste.clinique && geste.clinique.name === this.selectedClinique
        );
      }

      if (this.selectedPatient) {
        filteredGestes = filteredGestes.filter(geste =>
          geste.patient && (geste.patient.firstname + ' ' + geste.patient.lastname === this.selectedPatient)
        );
      }

      if (this.selectedDate) {
        filteredGestes = filteredGestes.filter(geste => geste.date === this.selectedDate);
      }

      this.tableData = filteredGestes;
    },

    clearFilter() {
      this.selectedClinique = '';
      this.selectedPatient = '';
      this.selectedDate = '';
      this.tableData = this.gestes;
    },

    openEditDialog(geste) {
    this.editedGeste = {
      clinique: geste.clinique.name || '',
      date: geste.date || '',
      lastname: geste.patient.lastname || '',
      firstname: geste.patient.firstname || '',
      age: geste.age || '',
      phone: geste.phone || '',
      RC: geste.RC || '',
      typeGeste: geste.type || '',
      result: geste.patient.result || '',
    };
    this.editDialogG = true;
  },

    closeEditDialog() {
      this.editDialogG = false;
      this.$refs.editForm.resetValidation();
    },

    saveGeste() {
      this.updateGeste(this.editedGeste).then(() => {
        this.snackbar = true;
        this.editDialogG = false;
        this.getGestesMethod(); // Refresh the list after saving
      });
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
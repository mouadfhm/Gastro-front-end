<template>
  <v-container>
    <v-row>
      <v-card-title>Enregistrer un nouveau geste</v-card-title>
      <v-col cols="12" md="6">
        <v-select v-model="clinique" :items="cliniques" label="Clinique*" outlined dense></v-select>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field v-model="date" label="Date*" type="date" outlined dense></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field v-model="nomPatient" label="Nom de Patient*" outlined dense></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field v-model="prenomPatient" label="Prenom de Patient*" outlined dense></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field v-model="age" label="Age" type="number" outlined dense></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field v-model="phone" label="Numero de telephone"  outlined dense></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field v-model="rc" label="RC" outlined dense></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-select v-model="typeGeste" :items="typesGeste" label="Type du geste*" outlined dense></v-select>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field v-model="resultatGeste" label="Resultat du geste" outlined dense></v-text-field>
      </v-col>

      <v-col cols="12" class="text-center">
        <v-btn color="teal" class="mx-auto" @click="enregistrer">
          Enregistrer
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
  <v-snackbar v-model="snackbar" top timeout="2000" color="green">Enregistrement reussi</v-snackbar>
  <v-snackbar v-model="redSnackbar" top timeout="1000" color="red">Remplir les champs obligatoires</v-snackbar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      snackbar: false,
      redSnackbar: false,
      data: {},
      clinique: '',
      date: '',
      nomPatient: '',
      prenomPatient: '',
      age: '',
      phone: '',
      rc: '',
      typeGeste: '',
      resultatGeste: '',
      cliniques: [], // Example items
      gestes: [], // Example gestures
      typesGeste: ['test', 'test2', 'test3'],
    };
  },
  computed: {
    ...mapGetters(['getGestes', 'getCliniques', 'getTypeGeste']),
  },
  mounted() {
    this.getCliniquesMethod();
    this.getTypeGesteMethod();
  },

  methods: {
    ...mapActions(['fetchCliniques','fetchGestes','addGeste','fetchTypeGeste']),
    getCliniquesMethod() {
        this.fetchCliniques().then(() => {
          this.cliniques = [...new Set(this.getCliniques.map(clinique => clinique.name))];
        });
    },
    getTypeGesteMethod() {
        this.fetchTypeGeste().then(() => {
          this.typesGeste = [...new Set(this.getTypeGeste.map(typeGeste => typeGeste.name))];
        });
    },
    enregistrer() {
      // Handle form submission
      if (!this.clinique || !this.date || !this.nomPatient || !this.prenomPatient ||  !this.typeGeste ) {
        this.redSnackbar = true;
        return;
      }
      this.data = {
        clinique_name: this.clinique,
        date: this.date,
        patient_lastname: this.nomPatient,
        patient_firstname: this.prenomPatient,
        age: this.age,
        phone: this.phone,
        RC: this.rc,
        type: this.typeGeste,
        result: this.resultatGeste

      }
      console.log(this.data);
      this.addGeste(this.data).then((response) => {
        this.fetchGestes();
        this.snackbar = true;
        this.$router.push('/GestePage');
      });

    },
  },
};
</script>
<style scoped>
.v-container {
  background-color: white;
  border-radius: 15px;
  margin-top: 5%;
  padding-bottom: 3%;
}

.v-card-title {
  width: 100%;
  text-align: center;
  font-weight: bold;
  color: teal;
  padding: 1%;
}
</style>
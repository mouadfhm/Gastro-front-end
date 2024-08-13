<template>
    <v-container >
      <v-row>
        <v-card-title >Enregistrer un nouveau geste</v-card-title>
        <v-col cols="12" md="6">
          <v-select
            v-model="clinique"
            :items="cliniques"
            label="Clinique"
            outlined
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="date"
            label="Date"
            type="date"
            outlined
            dense
          ></v-text-field>
        </v-col>
  
        <v-col cols="12" md="6">
          <v-text-field
            v-model="nomPatient"
            label="Nom de Patient"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="prenomPatient"
            label="Prenom de Patient"
            outlined
            dense
          ></v-text-field>
        </v-col>
  
        <v-col cols="12" md="6">
          <v-text-field
            v-model="dateNaissance"
            label="Date naissance"
            type="date"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="rc"
            label="RC"
            outlined
            dense
          ></v-text-field>
        </v-col>
  
        <v-col cols="12" md="6">
          <v-select
            v-model="typeGeste"
            :items="gestes"
            label="Type du geste"
            outlined
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="resultatGeste"
            label="Resultat du geste"
            outlined
            dense
          ></v-text-field>
        </v-col>
  
        <v-col cols="12" class="text-center">
          <v-btn color="teal" class="mx-auto" @click="enregistrer">
            Enregistrer
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        clinique: '',
        date: '',
        nomPatient: '',
        prenomPatient: '',
        dateNaissance: '',
        rc: '',
        typeGeste: '',
        resultatGeste: '',
        cliniques: ['Casa', 'Settat'], // Example items
        gestes: ['Test', 'Procedure'], // Example gestures
      };
    },
    methods: {
      enregistrer() {
        // Handle form submission
        console.log("Form data: ", {
          clinique: this.clinique,
          date: this.date,
          nomPatient: this.nomPatient,
          prenomPatient: this.prenomPatient,
          dateNaissance: this.dateNaissance,
          rc: this.rc,
          typeGeste: this.typeGeste,
          resultatGeste: this.resultatGeste,
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
.v-card-title{
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    color: teal;
    padding: 1%;
}
  </style>
  
  
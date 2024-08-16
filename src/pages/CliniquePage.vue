<template>
    <AppNavbar />
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card-title>Enregistrer un nouveau Clinique</v-card-title>
            </v-col>
            <v-col cols="12">
                <v-text-field v-model="name" label="Clinique" outlined dense></v-text-field>
            </v-col>
            <v-col cols="12" class="text-center">
                <v-btn color="teal" class="mx-auto" @click="enregistrer">
                    Enregistrer
                </v-btn>
            </v-col>

        </v-row>
    </v-container>
    <v-snackbar v-model="snackbar" top timeout="1000" color="green">Enregistrement reussi</v-snackbar>
    <v-snackbar v-model="redSnackbar" top timeout="1000" color="red">Clinique existe deja</v-snackbar>
</template>

<script>
import AppNavbar from '../components/Navbar.vue';

import { mapActions } from 'vuex';

export default {
    components: {
        AppNavbar,
    },

    data() {
        return {
            name: '',
            clinique: {},
            snackbar: false,
            redSnackbar: false
        };
    },

    methods: {
        ...mapActions(['addClinique']),

        enregistrer() {
            this.clinique = {
                name: this.name
            }
            this.addClinique(this.clinique).then((response) => {
                if (!response) {
                    this.redSnackbar = true;
                } else {
                    this.name = '';
                    this.snackbar = true;
                    console.log(this.clinique);
                }
            });
        },
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
    width: 50%;
}

.v-card-title {
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    color: teal;
    padding: 1%;
}
</style>
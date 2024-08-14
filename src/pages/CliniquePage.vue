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
            clinique : {},
        };
    },

    methods: {
        ...mapActions([ 'addClinique']),

        enregistrer() {
            this.clinique={
                name: this.name
            }
            console.log(this.clinique);
            this.addClinique( this.clinique).then(() => {
                this.fetchCliniques();
                this.name = '';
                console.log(this.clinique);
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
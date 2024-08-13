<template>
    <AppNavbar />
    <v-container>
        <v-card-title>Liste des patients</v-card-title>
        <v-data-table :headers="headers" :items="tableData" class="elevation-1 custom-table"></v-data-table>
    </v-container>
</template>

<script>
import AppNavbar from '../components/Navbar.vue';
export default {
    components: {
        AppNavbar,
    },
    data() {
        return {
            headers: [
                { title: 'Nom', value: 'nom' }, // Change title to text (Vuetify uses `text` for header labels)
                { title: 'Prénom', value: 'prenom' },
                { title: 'Age', value: 'age' },
                { title: 'RC', value: 'rc' },
                { title: 'Resultat', value: 'result' },
            ],
            tableData: [
                { nom: 'Fahimi', prenom: 'mouad', age: '24', rc: 'test', result: 'negative' },
                { nom: 'Doublali', prenom: 'Khadija', age: '17', rc: 'test', result: 'negative' },
            ],
        };
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
    margin-top: 10%;
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
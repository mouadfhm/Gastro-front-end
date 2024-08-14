<template>
    <AppNavbar />
    <v-container>
        <v-card-title>Liste des patients</v-card-title>
        <v-data-table 
            :headers="headers" 
            :items="tableData" 
            class="elevation-1 custom-table"
        >
            <template v-slot:item.actions="{ item }">
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
        <v-dialog v-model="editDialog" max-width="500px">
            <v-card>
                <v-card-title>
                    <span class="headline">Modifier Patient</span>
                </v-card-title>
                <v-card-text>
                    <v-form ref="editForm">
                        <v-text-field 
                            v-model="editedPatient.lastname" 
                            label="Nom" 
                            required
                        ></v-text-field>
                        <v-text-field 
                            v-model="editedPatient.firstname" 
                            label="Prénom" 
                            required
                        ></v-text-field>
                        <v-text-field 
                            v-model="editedPatient.age" 
                            label="Age" 
                            type="number"
                            required
                        ></v-text-field>
                        <v-text-field 
                            v-model="editedPatient.phone" 
                            label="Numero de telephone" 
                            required
                        ></v-text-field>
                        <v-text-field 
                            v-model="editedPatient.RC" 
                            label="RC" 
                            required
                        ></v-text-field>
                        <v-text-field 
                            v-model="editedPatient.result" 
                            label="Résultat" 
                            required
                        ></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeEditDialog">Annuler</v-btn>
                    <v-btn color="blue darken-1" text @click="savePatient">Sauvegarder</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import AppNavbar from '../components/Navbar.vue';

export default {
    components: {
        AppNavbar,
    },
    data() {
        return {
            patients: [],
            headers: [
                { title: 'Nom', value: 'lastname' },
                { title: 'Prénom', value: 'firstname' },
                { title: 'Age', value: 'age' },
                { title: 'numero de telephone', value: 'phone' },
                { title: 'RC', value: 'RC' },
                { title: 'Résultat', value: 'result' },
                { title: 'Actions', value: 'actions', sortable: false },
            ],
            tableData: [],
            editDialog: false,
            editedPatient: {
                lastname: '',
                firstname: '',
                age: '',
                phone: '',
                RC: '',
                result: '',
            },
        };
    },
    computed: {
        ...mapGetters(['getPatients']),
    },
    mounted() {
        this.getPatientsMethod();
    },
    methods: {
        ...mapActions(['fetchPatients', 'updatePatient']),
        getPatientsMethod() {
            this.fetchPatients().then(() => {
                this.patients = this.getPatients;
                this.tableData = this.patients;
            });
        },
        openEditDialog(patient) {
            this.editedPatient = { ...patient }; // Clone the patient object
            this.editDialog = true;
        },
        closeEditDialog() {
            this.editDialog = false;
            this.$refs.editForm.resetValidation();
        },
        savePatient() {
            console.log(this.editedPatient);
            this.updatePatient(this.editedPatient).then(() => {
                this.editDialog = false;
                this.getPatientsMethod();
            })
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
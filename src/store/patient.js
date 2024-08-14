import CustomizedAxios from '../services/axios';

const state = {
    patients: [],
};

const mutations = {
    SET_PATIENTS(state, patients) {
        state.patients = patients;
    },
};

const getters = {
  getPatients: (state) => state.patients,
};

const actions = {

    fetchPatients({ commit }) {
        return new Promise((resolve, reject) => {
            CustomizedAxios.get("/patient/show")
              .then((response) => {
                commit("SET_PATIENTS", response.data.payload);
                resolve(response.data.payload);
              })
              .catch((error) => {
                reject(error);
              });
          });
    },
    addPatient({ commit }, patient) {
        return new Promise((resolve, reject) => {
            CustomizedAxios.post("/patient/add", patient)
              .then((response) => {
                resolve(response.data.payload);
              })
              .catch((error) => {
                reject(error);
              });
          });
    },
    updatePatient({ commit }, patient) {
        return new Promise((resolve, reject) => {
            CustomizedAxios.post("/patient/update", patient)
              .then((response) => {
                resolve(response.data.payload);
              })
              .catch((error) => {
                reject(error);
              });
          });
    },
    deletePatient({ commit }, patient) {
        return new Promise((resolve, reject) => {
            CustomizedAxios.post("/patient/delete", patient)
              .then((response) => {
                resolve(response.data.payload);
              })
              .catch((error) => {
                reject(error);
              });
          });
    }

};

export default {
    state,
    mutations,
    getters,
    actions,    
};

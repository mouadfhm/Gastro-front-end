import CustomizedAxios from '../services/axios';

const state = {
    cliniques: [],
};

const mutations = {
    SET_CLINIQUES(state, cliniques) {
        state.cliniques = cliniques;
    },
};

const getters = {
    getCliniques: (state) => state.cliniques,
};

const actions = {

    fetchCliniques({ commit }) {
        return new Promise((resolve, reject) => {
            CustomizedAxios.get("/clinique/show")
              .then((response) => {
                commit("SET_CLINIQUES", response.data.payload);
                resolve(response.data.payload);
              })
              .catch((error) => {
                reject(error);
              });
          });
    },
    addClinique({ commit }, clinique) {
        return new Promise((resolve, reject) => {
            CustomizedAxios.post("/clinique/add", clinique)
              .then((response) => {
                resolve(response.data.payload);
              })
              .catch((error) => {
                reject(error);
              });
          });
    },

};

export default {
    state,
    mutations,
    getters,
    actions,    
};

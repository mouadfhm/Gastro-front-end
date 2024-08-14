import CustomizedAxios from '../services/axios';

const state = {
    gestes: [],
};

const mutations = {
    SET_GESTES(state, gestes) {
        state.gestes = gestes;
    },
};

const getters = {
  getGestes: (state) => state.gestes,
};

const actions = {

    fetchGestes({ commit }) {
        return new Promise((resolve, reject) => {
            CustomizedAxios.get("/geste/show")
              .then((response) => {
                commit("SET_GESTES", response.data.payload);
                resolve(response.data.payload);
              })
              .catch((error) => {
                reject(error);
              });
          });
    },
    addGeste({ commit }, geste) {
        return new Promise((resolve, reject) => {
            CustomizedAxios.post("/geste/add", geste)
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

import CustomizedAxios from '../services/axios';

const state = {
    typeGeste: [],
};

const mutations = {
    SET_TYPEGESTE(state, typeGeste) {
        state.typeGeste = typeGeste;
    },
};

const getters = {
    getTypeGeste: (state) => state.typeGeste,
};

const actions = {

    fetchTypeGeste({ commit }) {
        return new Promise((resolve, reject) => {
            CustomizedAxios.get("/type-geste/show")
              .then((response) => {
                commit("SET_TYPEGESTE", response.data.payload);
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

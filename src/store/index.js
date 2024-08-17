import { createStore } from 'vuex';
import VuexPersist from 'vuex-persist';
import geste from './geste.js';
import patient from './patient.js';
import clinique from './clinique.js';
import typeGeste from './typeGeste.js';

const vuexLocalStorage = new VuexPersist({
    key: 'my-app', // The key to store the state
    storage: window.localStorage, // or window.sessionStorage or localForage
    // Function that passes the state and returns the state with only the objects you want to store
    reducer: state => ({
        geste: state.geste,
        patient: state.patient,
        clinique: state.clinique,
        typeGeste: state.typeGeste

    })
});

const store = createStore({
    modules: {
        geste: geste,
        patient: patient,
        clinique: clinique,
        typeGeste: typeGeste
    },
    plugins: [vuexLocalStorage.plugin]
});


export default store;

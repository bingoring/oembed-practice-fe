'use strict'

import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const tore = new Vue.Store({
    state: {
        id: "",
    },
    getters: {
        fetchedId(state) {
            return state.id;
        }
    },
    mutations,
    actions
})
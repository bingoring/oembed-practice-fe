'use strict'

import Vue from 'vue';
import Vuex from 'vuex';
//import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const CLICK_USER = 'CLICK_USER';

export const store = new Vuex.Store({
    state: {
        id: "",
    },
    getters: {
        getFetchedId(state) {
            return state.id;
        }
    },
    mutations: {
        [CLICK_USER](state, { id }) {
            state.id = id;
        }
    },
    actions
})
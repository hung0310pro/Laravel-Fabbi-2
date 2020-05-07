import Vue from 'vue'
import Vuex from 'vuex'
import app from './app'
import i18n from './lang/i18n'

Vue.use(Vuex)

const mutations = {
    SET_LANG (state, payload) {
        app.$i18n.locale = payload
    },

    setName(state, payload){
        this.state.name = payload.name;
    }
}

const actions = {
    setLang({commit}, payload) {
        commit('SET_LANG', payload)
    },

    setInfo({commit}, payload) {
        commit('setName', payload)
    },
}

export default new Vuex.Store({
    mutations,
    actions,
    state: {
        name:''
    }
});

import Vue from 'vue'
import Vuex from 'vuex'
import app from './app'
import i18n from './lang/i18n'

import {apiAddTodo, apiEditTodo, redirect} from './notifications/apinotifications'

// create notification when created notification
import apiuser from "./apiuser";
import Firebase from "firebase";
// end

Vue.use(Vuex)

const TODO_ADD = 'todo_add'
const TODO_TOGGLE_STATUS = 'todo_toggle_status'

const mutations = {
    SET_LANG(state, payload) {
        app.$i18n.locale = payload
    },

    setName(state, payload) {
        this.state.name = payload.name;
    },


    [TODO_ADD](state, notifications) {
        return state.notifications = [notifications, ...state.notifications]
    },

    [TODO_TOGGLE_STATUS](state, response) {
        return state.notifications = [response.data]
    },
}

const actions = {
    setLang({commit}, payload) {
        commit('SET_LANG', payload)
    },

    setInfo({commit}, payload) {
        commit('setName', payload)
    },

    async actionTodoChangeStatus({commit}, {id}) {
        let response = await apiEditTodo(id)

        if (response.status == 200) {
            return commit(TODO_TOGGLE_STATUS, response)
        } else {
            return redirect();
        }
    },

    async actionTodoAdd({commit}, notifications) {
        let response = await apiAddTodo(notifications)

        if (response.status == 200) {
            // create notification when created notification
            apiuser.getNotification();
            // end
            app.$router.push('/listNotificationsComponent');
            return commit(TODO_ADD, response.data)
        }
    },
}

export default new Vuex.Store({
    mutations,
    actions,
    state: {
        name: '',
        notifications: []
    }
});

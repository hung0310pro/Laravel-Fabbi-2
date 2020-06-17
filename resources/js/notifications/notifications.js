import Vue from 'vue'
import Vuex from 'vuex'
import app from './../app'

import {apiAddTodo } from './apinotifications'

const TODO_ADD = 'todo_add'

const state = {
    notifications: []
}

const mutations = {
    [TODO_ADD](state, notifications) {
        return state.notifications = [notifications, ...state.notifications]
    },
}

const actions = {
    async actionTodoAdd1({ commit }, notifications) {
        console.log(notifications);
    },
}

export default {
    state,
    actions,
    mutations
}


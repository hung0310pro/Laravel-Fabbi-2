/*
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
    async actionTodoAdd({ commit }, notifications) {
        let response = await apiAddTodo(notifications)

        if (response.status == 200) {
            return commit(TODO_ADD, response.data)
        }
    },
}

export default {
    state,
    actions,
    mutations
}
*/

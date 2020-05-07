import Vue from 'vue'
import store from './store'
import Vuex from 'vuex'

Vue.use(Vuex)

const functiongetInfo = function () {
    axios.get('/Code/Laravel-Fabbi/laravel/public/auth/me')
        .then(response => {
            var info = response.data;
            store.dispatch('setInfo', info);
        })
        .catch(error => {

        })
}

export default functiongetInfo;


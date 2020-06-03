import Vue from 'vue'
import store from './store'
import Vuex from 'vuex'
import app from './app'

Vue.use(Vuex)

const functiongetInfo = function (page) {
    axios.get('/Code/Laravel-Fabbi/laravel/public/auth/me')
        .then(response => {

            if (response.data.id) {
                var info = response.data;
                store.dispatch('setInfo', info);
                if(page === 'notificationsComponent'){
                    if(response.data.level !== 1){
                        app.$router.push('/redirectComponent');
                    }
                }
            } else {
                app.$router.push('/logincustom');
            }
        })
        .catch(error => {

        })
}

export default functiongetInfo;


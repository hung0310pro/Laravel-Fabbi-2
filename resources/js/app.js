import Vuex from "vuex";

require('./bootstrap');

window.Vue = require('vue');

// i18n và vux
import Vue from 'vue'
import i18n from './lang/i18n'
import store from './store'


//router
import VueRouter from 'vue-router'
import { routes }  from './index';

Vue.component('header-component', require('./components/HeaderComponent.vue').default);

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes
})

const app = new Vue({
    el: '#app',
    i18n,
    store,
    router,
});

export default app;

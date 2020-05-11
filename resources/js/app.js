import Vuex from "vuex";

require('./bootstrap');

window.Vue = require('vue');

// i18n và vux
import Vue from 'vue'
import i18n from './lang/i18n'
import store from './store'
import apiuser from './apiuser'

//router
import VueRouter from 'vue-router'
import {routes} from './index';

// notifications
import notifications from './notifications/notifications'

Vue.component('header-component', require('./components/HeaderComponent.vue').default);
/*Vue.component('view-notification', require('./components/ViewNotification.vue').default);*/

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes
});

router.beforeEach((to, from, next) => {
    if (to.name === 'redirectComponent' || to.name === 'notificationsComponent' || to.name === 'listNotificationsComponent' || to.name === 'viewDetailComponent') {
        apiuser(to.name);
    } else if (to.name === 'logincustom') {
        store.state.name = '';
    }
    next();
})

const app = new Vue({
    el: '#app',
    i18n,
    store,
    router,
    notifications
});

export default app;



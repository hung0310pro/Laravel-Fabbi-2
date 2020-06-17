import Vue from 'vue'
import store from './store'
import Vuex from 'vuex'
import app from './app'
// create notification when created notification
import Firebase from "firebase";
// end
Vue.use(Vuex)


// create notification when created notification
// info in firebase
var config = {
    apiKey: "AIzaSyAmEaS1hlIG-VrADEA0NsfaZtLJ9-uuJa8",
    authDomain: "laravel-project-80837.firebaseapp.com",
    databaseURL: "https://laravel-project-80837.firebaseio.com",
    projectId: "laravel-project-80837",
    storageBucket: "laravel-project-80837.appspot.com",
    messagingSenderId: "714037707060",
    appId: "1:714037707060:web:f3f2b97963923debe2a561",
    measurementId: "G-8MVQ6R6FXF"
};
Firebase.initializeApp(config);



const messaging = Firebase.messaging.isSupported() ? Firebase.messaging() : null;

// end

const functiongetInfo = function (page) {
    axios.get('/auth/me')
        .then(response => {

            if (response.data.id) {
                var info = response.data;
                store.dispatch('setInfo', info);
                if (page === 'notificationsComponent') {
                    if (response.data.level !== 1) {
                        app.$router.push('/redirectComponent');
                    }
                }
            } else {
                app.$router.push('/logincustom');
            }
        })
        .catch(error => {

        })
};

// create notification when created notification
messaging.onMessage(function (payload) {

    alert(payload.notification.body);

    /*navigator.serviceWorker.ready.then(registration => {
        registration.showNotification(title, options);
    });*/
});

const getNotification = function () {
    axios.post('/auth/notifications/token')
        .then(response => {

        })
        .catch(error => {

        })
}
// end


const data = {
    functiongetInfo,
    getNotification
}

export default data


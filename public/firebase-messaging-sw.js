importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-messaging.js')

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

firebase.initializeApp(config)

const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        '[firebase-messaging-sw.js] Received background message ',
        payload
    )

    const {
        notification: {title, body, image},
    } = payload

    const notificationTitle = title
    const notificationOptions = {
        body: body,
        icon: image,
    }

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    )
})

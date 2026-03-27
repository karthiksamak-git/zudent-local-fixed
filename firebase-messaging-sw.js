importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyC1BnBoAf1NB2ccwTp1L6w9UHeZjFxrKEU",
    authDomain: "rove-erp.firebaseapp.com",
    projectId: "rove-erp",
    storageBucket: "rove-erp.firebasestorage.app",
    messagingSenderId: "695569836848",
    appId: "1:695569836848:web:d0399e38922bffd905f6f5",
    measurementId: "G-12FSTEGQC8"
});

const messaging = firebase.messaging();


messaging.onBackgroundMessage(payload => {
    console.log('Received background message', payload);

    // Check notification permission
    if (Notification.permission !== 'granted') {
        console.log('Notification permission not granted. Cannot show notification.');
        return;
    }

    const title = payload.data ? .title || '';

    const options = {
        body: payload.data ? .body || '',
        icon: payload.data ? .icon || undefined,
        badge: payload.data ? .badge || undefined,
        image: payload.data ? .image || undefined, // Optional big image
        actions: payload.data ? .actions ? JSON.parse(payload.data ? .actions) : [],
        data: {
            url: payload.data ? .url || '/'
        }
    };

    self.registration.showNotification(title, options);

    self.addEventListener('notificationclick', event => {
        event.notification.close();
        if (event.notification.data ? .url) {
            event.waitUntil(clients.openWindow(event.notification.data.url));
        }
    });

    // Show notification and handle errors
    // self.registration.showNotification(notificationTitle, notificationOptions).catch(err => {
    //   console.log('Error showing notification:', err);
    // });
});
importScripts(
  'https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js',
);
importScripts(
  'https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js',
);

firebase.initializeApp({
  apiKey: 'AIzaSyDD5RWgMJdwJmxx9IBZpBhL4iAgVIeE91k',
  authDomain: 'sportytime-d49ed.firebaseapp.com',
  projectId: 'sportytime-d49ed',
  storageBucket: 'sportytime-d49ed.appspot.com',
  messagingSenderId: '796890637573',
  appId: '1:796890637573:web:146c1cbb9528e6a2ef836c',
  // measurementId: 'G-VC50FBZ5EK',
});

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

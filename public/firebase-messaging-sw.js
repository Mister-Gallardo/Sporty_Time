importScripts(
  'https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js',
);
importScripts(
  'https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js',
);

firebase.initializeApp({
  apiKey: 'AIzaSyCL7ELmGH9RmiSKe00OU_NtRSOTIDHAyio',
  authDomain: 'st-ionic-push-notifications.firebaseapp.com',
  projectId: 'st-ionic-push-notifications',
  storageBucket: 'st-ionic-push-notifications.appspot.com',
  messagingSenderId: '591915381041',
  appId: '1:591915381041:web:3e316679e6b5edeb8cc010',
  measurementId: 'G-VC50FBZ5EK',
});

firebase.messaging();

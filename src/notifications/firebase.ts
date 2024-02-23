import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyCL7ELmGH9RmiSKe00OU_NtRSOTIDHAyio',
  authDomain: 'st-ionic-push-notifications.firebaseapp.com',
  projectId: 'st-ionic-push-notifications',
  storageBucket: 'st-ionic-push-notifications.appspot.com',
  messagingSenderId: '591915381041',
  appId: '1:591915381041:web:3e316679e6b5edeb8cc010',
  measurementId: 'G-VC50FBZ5EK',
};

export const vapidKey =
  'BEaS7-j1KK2P0QqZtjo2LMsBmE6NE8QOiyA4KLSmIjheYdxhlcmkyygc7I9FKRr0pI-TQJwaITVC-7EpqBEdT3g';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

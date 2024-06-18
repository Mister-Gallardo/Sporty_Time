import { initializeApp } from 'firebase/app';

// Firebase configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyDD5RWgMJdwJmxx9IBZpBhL4iAgVIeE91k',
  authDomain: 'sportytime-d49ed.firebaseapp.com',
  projectId: 'sportytime-d49ed',
  storageBucket: 'sportytime-d49ed.appspot.com',
  messagingSenderId: '796890637573',
  appId: '1:796890637573:web:146c1cbb9528e6a2ef836c',
};

export const vapidKey =
  'BNnz71nLq5vf9AeIDyGBse6k2qbguEFAq-tvZf2kv1kLKOlQSS0JFXXGu_q0rB0F63sbGkZMBs5FL3lf4IZ8wlY';

// Initialize Firebase
initializeApp(firebaseConfig);

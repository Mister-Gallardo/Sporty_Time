import {
  FirebaseMessaging,
  GetTokenOptions,
} from '@capacitor-firebase/messaging';
import { Capacitor } from '@capacitor/core';
import { vapidKey } from './firebase';

export const requestPermissions = async () => {
  await FirebaseMessaging.requestPermissions();
};

export const getToken = async () => {
  const options: GetTokenOptions = { vapidKey };

  if (Capacitor.getPlatform() === 'web') {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('../firebase-messaging-sw.js')
        .then(
          (registration) => (options.serviceWorkerRegistration = registration),
        )
        .catch(console.error);
    }
  }
  const { token } = await FirebaseMessaging.getToken(options);
  console.log('token: ', token);
};

export const addListeners = () => {
  FirebaseMessaging.addListener('notificationReceived', (event) => {
    console.log('notificationReceived: ', { event });
  });
  FirebaseMessaging.addListener('notificationActionPerformed', (event) => {
    console.log('notificationActionPerformed: ', { event });
  });
  if (Capacitor.getPlatform() === 'web') {
    navigator.serviceWorker.addEventListener('message', (event: any) => {
      console.log('serviceWorker message: ', { event });
      const notification = new Notification(event.data.notification.title, {
        body: event.data.notification.body,
      });
      notification.onclick = (event) => {
        console.log('notification clicked: ', { event });
      };
    });
  }
};

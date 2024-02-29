import { useEffect, useState } from 'react';
import {
  FirebaseMessaging,
  GetTokenOptions,
} from '@capacitor-firebase/messaging';
import { Capacitor } from '@capacitor/core';
import { vapidKey } from '../services/notifications/firebase';

const addListeners = () => {
  FirebaseMessaging.addListener('notificationReceived', (event) => {
    console.log(event);
  });
  FirebaseMessaging.addListener('notificationActionPerformed', (event) => {
    console.log('notificationActionPerformed: ', { event });
  });
};

const serviceWorkerListener = (event: any) => {
  const notification = new Notification(event.data.notification.title, {
    body: event.data.notification.body,
  });
  notification.onclick = (event) => {
    console.log('notification clicked: ', { event });
  };
};

export const useNotifications = () => {
  const [isGranted, setIsGranted] = useState<boolean>(true);

  const requestPermission = async () => {
    try {
      const { receive } = await FirebaseMessaging.requestPermissions();
      setIsGranted(receive === 'granted');
    } catch (error) {
      console.log('error: ', error);
    }
  };

  useEffect(() => {
    if (isGranted) {
      addListeners();

      const options: GetTokenOptions = { vapidKey };

      if (Capacitor.getPlatform() === 'web') {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker
            .register('../firebase-messaging-sw.js', {
              scope: './',
            })
            .then(
              (registration) =>
                (options.serviceWorkerRegistration = registration),
            )
            .catch(console.error);

          navigator.serviceWorker.addEventListener(
            'message',
            serviceWorkerListener,
          );
        }
      }
      FirebaseMessaging.getToken(options).then(({ token }) => {
        console.log('token: ', token);
      });
    } else {
      requestPermission();
    }

    return () => {
      navigator.serviceWorker.removeEventListener(
        'message',
        serviceWorkerListener,
      );
    };
  }, []);
};

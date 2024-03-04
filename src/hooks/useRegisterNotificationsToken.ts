import { useEffect } from 'react';
import {
  FirebaseMessaging,
  GetTokenOptions,
} from '@capacitor-firebase/messaging';
import { Capacitor } from '@capacitor/core';
import { vapidKey } from '../services/notifications/firebase';
import { useMutation } from '@tanstack/react-query';
import { registerDeviceToken } from '../services/notifications/service';
import { useLocalStorage } from 'usehooks-ts';
import { toast } from 'react-toastify';

export const useRegisterNotificationsToken = () => {
  const [deviceToken, setDeviceToken] = useLocalStorage('deviceToken', '');

  const addListeners = () => {
    FirebaseMessaging.addListener('notificationReceived', (event) => {
      console.log(event);
      if (Capacitor.getPlatform() !== 'web') {
        toast(event.notification.title);
      }
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

  const registerTokenMutation = useMutation({
    mutationFn: registerDeviceToken,
  });

  useEffect(() => {
    FirebaseMessaging.requestPermissions().then(({ receive }) => {
      if (receive === 'granted') {
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
          if (!deviceToken) {
            setDeviceToken(token);
            registerTokenMutation.mutate(token);
          }
        });
      } else {
        if (deviceToken) localStorage.removeItem('deviceToken');
        FirebaseMessaging.requestPermissions();
      }
    });

    return () => {
      navigator.serviceWorker.removeEventListener(
        'message',
        serviceWorkerListener,
      );
    };
  }, []);

  return;
};

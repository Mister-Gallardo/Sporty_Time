import { useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import { vapidKey } from '../services/notifications/firebase';
import { useMutation } from '@tanstack/react-query';
import { registerDeviceToken } from '../services/notifications/service';
import { useLocalStorage } from 'usehooks-ts';
import {
  PushNotifications,
  Token,
  ActionPerformed,
} from '@capacitor/push-notifications';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { useIsAuthorized } from '../services/api/hooks';

export const useRegisterNotificationsToken = () => {
  const [, setDeviceToken] = useLocalStorage('deviceToken', '');

  const registerTokenMutation = useMutation({
    mutationFn: registerDeviceToken,
  });

  const addListeners = async () => {
    await PushNotifications.addListener('registration', (token: Token) => {
      setDeviceToken(token.value);
      registerTokenMutation.mutate(token.value);
    });

    await PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        const url = notification?.notification?.data?.redirect;
        window.location.href = url;
      },
    );
  };

  const registerNotifications = async () => {
    let permStatus = await PushNotifications.checkPermissions();

    if (permStatus.receive === 'prompt') {
      permStatus = await PushNotifications.requestPermissions();
    }

    if (permStatus.receive !== 'granted') {
      throw new Error('User denied permissions!');
    }

    await PushNotifications.register();
  };

  const isAuthorized = useIsAuthorized();
  useEffect(() => {
    if (!isAuthorized) return;
    if (Capacitor.getPlatform() === 'web') {
      const messaging = getMessaging();

      if ('Notification' in window) {
        const status = Notification.permission;

        if (status === 'granted') {
          getToken(messaging, { vapidKey }).then((token) => {
            setDeviceToken(token);
            registerTokenMutation.mutate(token);
          });

          new Promise((resolve) => {
            onMessage(messaging, (payload) => resolve(payload));
          })
            .then((event: any) => {
              const notification = new Notification(
                event?.notification?.title,
                {
                  body: event?.notification?.body,
                  data: event?.data?.redirect.replace(
                    'app.sportytime.ru',
                    'dev.sportytime.ru',
                  ),
                },
              );
              notification.onclick = (event: any) => {
                window.location.href = event?.target?.data;
              };
            })
            .catch(console.error);
        } else {
          Notification.requestPermission();
        }
      }
    } else {
      // Request permission to use push notifications
      // iOS will prompt user and return if they granted permission or not
      // Android will just grant without prompting
      PushNotifications.requestPermissions().then((result) => {
        if (result.receive === 'granted') {
          // Register with Apple / Google to receive push via APNS/FCM
          registerNotifications();
          addListeners();
        } else {
          PushNotifications.requestPermissions();
        }
      });
    }
  }, []);

  return;
};

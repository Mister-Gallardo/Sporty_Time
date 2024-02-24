import { Route, Redirect } from 'react-router-dom';
import { setupIonicReact } from '@ionic/react';
import React, { Suspense, useCallback, useEffect } from 'react';
import { mobileRoutes } from './routes';
import { LoadingCircle } from './components/atoms/LoadingCircle';
import { Capacitor } from '@capacitor/core';
import { initializeApp } from 'firebase/app';
import { firebaseConfig, vapidKey } from './notifications/firebase';
import {
  FirebaseMessaging,
  GetTokenOptions,
} from '@capacitor-firebase/messaging';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Geolocation } from '@capacitor/geolocation';

setupIonicReact({ mode: 'ios' });
const MobileLayout = React.lazy(() => import('./components/MobileLayout'));

const App: React.FC = () => {
  useEffect(() => {
    if (Capacitor.isNativePlatform()) return;
    initializeApp(firebaseConfig);
  }, []);

  useEffect(() => {
    Geolocation.getCurrentPosition();
  }, []);

  const addListeners = useCallback(() => {
    FirebaseMessaging.addListener('notificationReceived', (event) => {
      toast(
        <>
          <p>{event.notification?.title}</p>
          <p>{event.notification?.body}</p>
        </>,
      );
    });

    FirebaseMessaging.addListener('notificationActionPerformed', (event) => {
      console.log('notificationActionPerformed: ', { event });
    });
  }, []);

  useEffect(() => {
    // for android 13+
    // FirebaseMessaging.checkPermissions()

    FirebaseMessaging.requestPermissions().then(({ receive }) => {
      if (receive === 'granted') {
        addListeners();

        const options: GetTokenOptions = { vapidKey: vapidKey };

        if (Capacitor.getPlatform() === 'web') {
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker
              .register('../firebase-messaging-sw.js')
              .then(
                (registration) =>
                  (options.serviceWorkerRegistration = registration),
              )
              .catch(console.error);

            navigator.serviceWorker.addEventListener(
              'message',
              (event: any) => {
                const notification = new Notification(
                  event.data.notification.title,
                  {
                    body: event.data.notification.body,
                  },
                );
                notification.onclick = (event) => {
                  console.log('notification clicked: ', { event });
                };
              },
            );
          }
        }
        FirebaseMessaging.getToken(options).then(({ token }) => {
          console.log('token: ', token);
        });
      } else {
        // console.log('safari test: ', receive);
        FirebaseMessaging.requestPermissions();
      }
    });
  }, []);

  return (
    <>
      <Suspense fallback={<LoadingCircle />}>
        <MobileLayout>
          {mobileRoutes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
          <Redirect to="/" />
        </MobileLayout>
      </Suspense>
      <ToastContainer />
    </>
  );
};

export default App;

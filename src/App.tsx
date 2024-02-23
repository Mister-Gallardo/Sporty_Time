import { Route, Redirect } from 'react-router-dom';
import { setupIonicReact } from '@ionic/react';
import React, { Suspense, useEffect } from 'react';
import { mobileRoutes } from './routes';
import { LoadingCircle } from './components/atoms/LoadingCircle';
import { Capacitor } from '@capacitor/core';
import { initializeApp } from 'firebase/app';
import { firebaseConfig, vapidKey } from './firebase/firebase';
import {
  FirebaseMessaging,
  GetTokenOptions,
} from '@capacitor-firebase/messaging';

setupIonicReact({ mode: 'ios' });
const MobileLayout = React.lazy(() => import('./components/MobileLayout'));

const App: React.FC = () => {
  useEffect(() => {
    if (Capacitor.isNativePlatform()) return;
    initializeApp(firebaseConfig);
  }, []);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    const requestPermissions = async () => {
      await FirebaseMessaging.requestPermissions();
    };
    requestPermissions();
  }, []);

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    const options: GetTokenOptions = { vapidKey };

    if (Capacitor.getPlatform() === 'web') {
      options.serviceWorkerRegistration =
        await navigator.serviceWorker.register('/firebase-messaging-sw.ts');
    }
    const { token } = await FirebaseMessaging.getToken(options);
    console.log('token: ', token);
  };

  return (
    <Suspense fallback={<LoadingCircle />}>
      <MobileLayout>
        {mobileRoutes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
        <Redirect to="/" />
      </MobileLayout>
    </Suspense>
  );
};

export default App;

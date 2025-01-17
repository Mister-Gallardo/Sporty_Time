import React, { Suspense, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { setupIonicReact } from '@ionic/react';
import { useRegisterNotificationsToken } from './hooks/useRegisterNotificationsToken';
import { mobileRoutes } from './routes';
import { LoadingCircle } from './components/atoms/LoadingCircle';
import { Capacitor } from '@capacitor/core';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './services/notifications/firebase';
import { Geolocation } from '@capacitor/geolocation';

setupIonicReact({ mode: 'ios' });
const MobileLayout = React.lazy(() => import('./components/MobileLayout'));

const App: React.FC = () => {
  useEffect(() => {
    Geolocation.getCurrentPosition();
    if (Capacitor.isNativePlatform()) return;
    initializeApp(firebaseConfig);
  }, []);

  useRegisterNotificationsToken();

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
    </>
  );
};

export default App;

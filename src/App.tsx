import { Route, Redirect } from 'react-router-dom';
import { setupIonicReact } from '@ionic/react';
import React, { Suspense, useEffect } from 'react';
import { mobileRoutes } from './routes';
import { LoadingCircle } from './components/atoms/LoadingCircle';
import { Capacitor } from '@capacitor/core';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './services/notifications/firebase';
import { Geolocation } from '@capacitor/geolocation';
import { useRegisterNotificationsToken } from './hooks/useRegisterNotificationsToken';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      {Capacitor.getPlatform() === 'android' && (
        <ToastContainer autoClose={5000} />
      )}
    </>
  );
};

export default App;

import { Route, Redirect } from 'react-router-dom';
import { setupIonicReact } from '@ionic/react';
import React, { Suspense, useEffect } from 'react';
import { mobileRoutes } from './routes';
import { LoadingCircle } from './components/atoms/LoadingCircle';
import { Capacitor } from '@capacitor/core';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './notifications/firebase';
import { ToastContainer } from 'react-toastify';
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

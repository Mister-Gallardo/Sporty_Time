import { Route, Redirect } from 'react-router-dom';
import { setupIonicReact } from '@ionic/react';
import React, { Suspense } from 'react';
import { mobileRoutes } from './routes';
import { LoadingCircle } from './components/atoms/LoadingCircle';

setupIonicReact({ mode: 'ios' });
const MobileLayout = React.lazy(() => import('./components/MobileLayout'));

const App: React.FC = () => {
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

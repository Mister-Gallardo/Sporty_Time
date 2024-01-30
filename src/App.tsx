import { Route, Switch, Redirect } from 'react-router-dom';
import { isPlatform, setupIonicReact } from '@ionic/react';
import React, { Suspense } from 'react';
import { desktopRoutes, mobileRoutes } from './routes';

const MobileLayout = React.lazy(() => import('./components/MobileLayout'));
const DesktopLayout = React.lazy(() => import('./components/DesktopLayout'));

setupIonicReact({ mode: 'ios' });

const App: React.FC = () => {
  const isMobile = isPlatform('mobile');

  return (
    <Suspense fallback=" ">
      {isMobile ? (
        <MobileLayout>
          {mobileRoutes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
          <Redirect to="/" />
        </MobileLayout>
      ) : (
        <DesktopLayout>
          <Switch>
            {desktopRoutes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
            <Redirect to="/" />
          </Switch>
        </DesktopLayout>
      )}
    </Suspense>
  );
};

export default App;

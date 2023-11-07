import { Route, Switch } from 'react-router-dom';
import { isPlatform, setupIonicReact } from '@ionic/react';
import React from 'react';

const MobileLayout = React.lazy(() => import('./components/MobileLayout'));
const DesktopLayout = React.lazy(() => import('./components/DesktopLayout'));

setupIonicReact();

const desktopRoutes = [] as React.ComponentProps<typeof Route>[];

const mobileRoutes = [] as React.ComponentProps<typeof Route>[];

const App: React.FC = () => {
  const isMobile = isPlatform('mobile');
  return (
    <>
      {isMobile ? (
        <MobileLayout>
          {mobileRoutes.map((route) => (
            <Route {...route} />
          ))}
        </MobileLayout>
      ) : (
        <DesktopLayout>
          <Switch>
            {desktopRoutes.map((route) => (
              <Route {...route} />
            ))}
          </Switch>
        </DesktopLayout>
      )}
    </>
  );
};

export default App;

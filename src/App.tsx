import { Route, Switch } from 'react-router-dom';
import { isPlatform, setupIonicReact } from '@ionic/react';
import React from 'react';
import MobilePlayPage from './pages/play/mobile';
import { BookCourt } from './pages/book-court';
import { SingleCourtPage } from './pages/book-court/[id]';
import { MobileBookCourt } from './pages/book-court/index.mobile';
import { MobileSingleCourtPage } from './pages/book-court/[id]/index.mobile';
import { DesktopHomePage } from './pages/play/desktop';

const MobileLayout = React.lazy(() => import('./components/MobileLayout'));
const DesktopLayout = React.lazy(() => import('./components/DesktopLayout'));

setupIonicReact();

const desktopRoutes = [
  {
    path: '/',
    exact: true,
    component: DesktopHomePage,
  },
  {
    path: '/book-court',
    exact: true,
    component: BookCourt,
  },
  {
    path: '/book-court/:courtId',
    exact: true,
    component: SingleCourtPage,
  },
] as React.ComponentProps<typeof Route>[];

const mobileRoutes = [
  {
    path: '/',
    exact: true,
    component: MobilePlayPage,
  },
  {
    path: '/book-court',
    exact: true,
    component: MobileBookCourt,
  },
  {
    path: '/book-court/:courtId',
    exact: true,
    component: MobileSingleCourtPage,
  },
] as React.ComponentProps<typeof Route>[];

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

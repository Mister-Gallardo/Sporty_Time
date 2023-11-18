import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { isPlatform, setupIonicReact } from '@ionic/react';
import React from 'react';
import MobilePlayPage from './pages/play/mobile';
import { BookCourt } from './pages/book-court';
import { SingleCourtPage } from './pages/book-court/[id]';
import { MobileBookCourt } from './pages/book-court/index.mobile';
import { DesktopHomePage } from './pages/play/desktop';
import { MobileAuthPage } from './pages/auth/index.mobile';
import { useIsAuthorized } from './services/api/hooks';
import { AuthPage } from './pages/auth';

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
    component: SingleCourtPage,
  },
  {
    path: '/auth',
    exact: true,
    component: MobileAuthPage,
  },
] as React.ComponentProps<typeof Route>[];

const App: React.FC = () => {
  const isMobile = isPlatform('mobile');

  const isAuthorized = useIsAuthorized();
  if (!isAuthorized && location.pathname !== '/auth') {
    window.open('/auth', '_self');
  }

  return (
    <>
      {isMobile ? (
        <BrowserRouter>
          <Route path="/auth" component={MobileAuthPage} exact />
          <MobileLayout>
            {mobileRoutes.map((route) => (
              <Route {...route} />
            ))}
          </MobileLayout>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Route component={AuthPage} path="/auth" exact />
          <DesktopLayout>
            <Switch>
              {desktopRoutes.map((route) => (
                <Route {...route} />
              ))}
            </Switch>
          </DesktopLayout>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;

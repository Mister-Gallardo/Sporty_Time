import { Route, Switch } from 'react-router-dom';
import { isPlatform, setupIonicReact } from '@ionic/react';
import React from 'react';
import MobilePlayPage from './pages/play/mobile';
import { BookCourt } from './pages/book-court';
import { SingleCourtPage } from './pages/book-court/[id]';
import { MobileBookCourt } from './pages/book-court/index.mobile';
import { DesktopHomePage } from './pages/play/desktop';
import { AuthPage } from './pages/auth';
import { MobileAuthPage } from './pages/auth/index.mobile';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
  {
    path: '/auth',
    exact: true,
    component: AuthPage,
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
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </>
  );
};

export default App;

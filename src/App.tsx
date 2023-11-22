import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { isPlatform, setupIonicReact } from '@ionic/react';
import React from 'react';
import MobilePlayPage from './pages/play/mobile';
import { BookCourt } from './pages/book-court';
import { SingleCourtPage } from './pages/book-court/[id]';
import { MobileBookCourt } from './pages/book-court/index.mobile';
import { DesktopHomePage } from './pages/play/desktop';
import { MobileAuthPage } from './pages/auth/index.mobile';
import { AuthPage } from './pages/auth';
import { MobileSingleCourtPage } from './pages/book-court/[id]/index.mobile';
import { MobileQuestionFormPage } from './pages/question-form/index.mobile';
import { QuestionFormPage } from './pages/question-form';

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
    path: '/question-form',
    exact: true,
    component: QuestionFormPage,
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
  {
    path: '/auth',
    exact: true,
    component: MobileAuthPage,
  },
  {
    path: '/question-form',
    exact: true,
    component: MobileQuestionFormPage,
  },
] as React.ComponentProps<typeof Route>[];

const App: React.FC = () => {
  const isMobile = isPlatform('mobile');

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

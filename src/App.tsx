import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isPlatform, setupIonicReact } from '@ionic/react';
import React, { Suspense } from 'react';
import MobilePlayPage from './pages/play/mobile';
import { BookCourt } from './pages/book-court';
import { SingleCourtPage } from './pages/book-court/[id]';
import { MobileBookCourt } from './pages/book-court/index.mobile';
// import { DesktopHomePage } from './pages/play/desktop';
import { MobileAuthPage } from './pages/auth/index.mobile';
import { AuthPage } from './pages/auth';
import { MobileSingleCourtPage } from './pages/book-court/[id]/index.mobile';
import { MobileQuestionFormPage } from './pages/question-form/index.mobile';
import { QuestionFormPage } from './pages/question-form';
import { MobileMatchesPage } from './pages/matches/index.mobile';
import { MatchesPage } from './pages/matches';
import { SingleMatchPage } from './pages/matches/[id]';
import { MobileSingleMatchPage } from './pages/matches/[id]/index.mobile';
import { ProfilePage } from './pages/profile';
import { MobileProfilePage } from './pages/profile/index.mobile';
import { MobileResetPassword } from './pages/auth/reset-password/index.mobile';
import { ResetPassword } from './pages/auth/reset-password';
import { ChatsPage } from './pages/chats';
import { MobileChatsPage } from './pages/chats/index.mobile';
import { MobileSingleChatPage } from './pages/chats/[id]/index.mobile';
import { SingleChatPage } from './pages/chats/[id]';
import { EditProfilePage } from './pages/profile/nested-pages/edit';
import { MobileEditProfilePage } from './pages/profile/nested-pages/edit/index.mobile';
import { MobileProfileNavPage } from './pages/profile/nested-pages/navigation/index.mobile';
import { ProfileNavPage } from './pages/profile/nested-pages/navigation';
import { AboutPage } from './pages/about';

const MobileLayout = React.lazy(() => import('./components/MobileLayout'));
const DesktopLayout = React.lazy(() => import('./components/DesktopLayout'));

setupIonicReact({ mode: 'ios' });

const desktopRoutes = [
  // {
  //   path: '/',
  //   exact: true,
  //   component: DesktopHomePage,
  // },
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/book-court" />,
  },
  {
    path: '/book-court',
    exact: true,
    component: BookCourt,
  },
  {
    path: '/book-court/:clubId',
    exact: true,
    component: SingleCourtPage,
  },
  {
    path: '/question-form',
    exact: true,
    component: QuestionFormPage,
  },
  {
    path: '/matches',
    exact: true,
    component: MatchesPage,
  },
  {
    path: '/matches/:matchId',
    exact: true,
    component: SingleMatchPage,
  },
  {
    path: '/profile',
    exact: true,
    component: ProfilePage,
  },
  {
    path: '/chats',
    exact: true,
    component: ChatsPage,
  },
  {
    path: '/chats/:chatId',
    exact: true,
    component: SingleChatPage,
  },
  {
    path: '/profile/edit',
    exact: true,
    component: EditProfilePage,
  },
  {
    path: '/profile/navigation',
    exact: true,
    component: ProfileNavPage,
  },
  {
    path: '/about',
    exact: true,
    component: AboutPage,
  },
] as React.ComponentProps<typeof Route>[];

const mobileRoutes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/play" />,
  },
  {
    path: '/play',
    exact: true,
    component: MobilePlayPage,
  },
  {
    path: '/book-court',
    exact: true,
    component: MobileBookCourt,
  },
  {
    path: '/book-court/:clubId',
    exact: true,
    component: MobileSingleCourtPage,
  },
  {
    path: '/auth',
    exact: true,
    component: MobileAuthPage,
  },
  {
    path: '/auth/reset-password',
    exact: true,
    component: MobileResetPassword,
  },
  {
    path: '/question-form',
    exact: true,
    component: MobileQuestionFormPage,
  },
  {
    path: '/matches',
    exact: true,
    component: MobileMatchesPage,
  },
  {
    path: '/matches/:matchId',
    exact: true,
    component: MobileSingleMatchPage,
  },
  {
    path: '/profile',
    exact: true,
    component: MobileProfilePage,
  },
  {
    path: '/chats',
    exact: true,
    component: MobileChatsPage,
  },
  {
    path: '/chats/:chatId',
    exact: true,
    component: MobileSingleChatPage,
  },
  {
    path: '/profile/edit',
    exact: true,
    component: MobileEditProfilePage,
  },
  {
    path: '/profile/navigation',
    exact: true,
    component: MobileProfileNavPage,
  },
] as React.ComponentProps<typeof Route>[];

export const DesktopRouter = () => (
  <DesktopLayout>
    <Switch>
      {desktopRoutes.map((route, i) => (
        <Route key={i} {...route} />
      ))}
      <Redirect to="/" />
    </Switch>
  </DesktopLayout>
);

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
        <BrowserRouter>
          <Switch>
            <Route path="/auth" component={AuthPage} exact />
            <Route path="/auth/reset-password" component={ResetPassword} />
            <Route path="/" component={DesktopRouter} />
          </Switch>
        </BrowserRouter>
      )}
    </Suspense>
  );
};

export default App;

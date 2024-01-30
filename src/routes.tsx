import MobilePlayPage from './pages/play/mobile';
import { BookCourt } from './pages/book-court';
import { SingleCourtPage } from './pages/book-court/[id]';
import { MobileBookCourt } from './pages/book-court/index.mobile';
// import { DesktopHomePage } from './pages/play/desktop';
import { MobileAuthPage } from './pages/auth/index.mobile';
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
import { ChatsPage } from './pages/chats';
import { MobileChatsPage } from './pages/chats/index.mobile';
import { MobileSingleChatPage } from './pages/chats/[id]/index.mobile';
import { SingleChatPage } from './pages/chats/[id]';
import { EditProfilePage } from './pages/profile/nested-pages/edit';
import { MobileEditProfilePage } from './pages/profile/nested-pages/edit/index.mobile';
import { MobileProfileNavPage } from './pages/profile/nested-pages/navigation/index.mobile';
import { ProfileNavPage } from './pages/profile/nested-pages/navigation';
import { AboutPage } from './pages/about';
import { Redirect, Route } from 'react-router';
import { AuthPage } from './pages/auth';
import { ResetPassword } from './pages/auth/reset-password';

export interface RouteExtraProps {
  showTabBar: boolean;
}

export const desktopRoutes = [
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
    path: '/auth',
    exact: true,
    component: AuthPage,
  },
  {
    path: '/auth/reset-password',
    exact: true,
    component: ResetPassword,
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

export const mobileRoutes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/play" />,
    showTabBar: true,
  },
  {
    path: '/play',
    exact: true,
    component: MobilePlayPage,
    showTabBar: true,
  },
  {
    path: '/book-court',
    exact: true,
    component: MobileBookCourt,
    showTabBar: true,
  },
  {
    path: '/book-court/:clubId',
    exact: true,
    component: MobileSingleCourtPage,
    showTabBar: true,
  },
  {
    path: '/auth',
    exact: true,
    component: MobileAuthPage,
    showTabBar: false,
  },
  {
    path: '/auth/reset-password',
    exact: true,
    component: MobileResetPassword,
    showTabBar: false,
  },
  {
    path: '/question-form',
    exact: true,
    component: MobileQuestionFormPage,
    showTabBar: false,
  },
  {
    path: '/matches',
    exact: true,
    component: MobileMatchesPage,
    showTabBar: true,
  },
  {
    path: '/matches/:matchId',
    exact: true,
    component: MobileSingleMatchPage,
    showTabBar: true,
  },
  {
    path: '/profile',
    exact: true,
    component: MobileProfilePage,
    showTabBar: true,
  },
  {
    path: '/chats',
    exact: true,
    component: MobileChatsPage,
    showTabBar: true,
  },
  {
    path: '/chats/:chatId',
    exact: true,
    component: MobileSingleChatPage,
    showTabBar: true,
  },
  {
    path: '/profile/edit',
    exact: true,
    component: MobileEditProfilePage,
    showTabBar: true,
  },
  {
    path: '/profile/navigation',
    exact: true,
    component: MobileProfileNavPage,
    showTabBar: true,
  },
] as React.ComponentProps<typeof Route<RouteExtraProps>>[];

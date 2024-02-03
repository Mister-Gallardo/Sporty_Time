import MobilePlayPage from './pages/play/mobile';
import { MobileBookCourt } from './pages/book-court/index.mobile';
// import { DesktopHomePage } from './pages/play/desktop';
import { MobileAuthPage } from './pages/auth/index.mobile';
import { MobileSingleCourtPage } from './pages/book-court/[id]/index.mobile';
import { MobileQuestionFormPage } from './pages/question-form/index.mobile';
import { MobileMatchesPage } from './pages/matches/index.mobile';
import { MobileSingleMatchPage } from './pages/matches/[id]/index.mobile';
import { MobileProfilePage } from './pages/profile/index.mobile';
import { MobileResetPassword } from './pages/auth/reset-password/index.mobile';
import { MobileChatsPage } from './pages/chats/index.mobile';
import { MobileSingleChatPage } from './pages/chats/[id]/index.mobile';
import { MobileEditProfilePage } from './pages/profile/nested-pages/edit/index.mobile';
import { MobileProfileNavPage } from './pages/profile/nested-pages/navigation/index.mobile';
import { Redirect, Route } from 'react-router';

import React from 'react';

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
    component: React.lazy(() => import('./pages/book-court')),
  },
  {
    path: '/book-court/:clubId',
    exact: true,
    component: React.lazy(() => import('./pages/book-court/[id]')),
  },
  {
    path: '/auth',
    exact: true,
    component: React.lazy(() => import('./pages/auth')),
  },
  {
    path: '/auth/reset-password',
    exact: true,
    component: React.lazy(() => import('./pages/auth/reset-password')),
  },
  {
    path: '/question-form',
    exact: true,
    component: React.lazy(() => import('./pages/question-form')),
  },
  {
    path: '/matches',
    exact: true,
    component: React.lazy(() => import('./pages/matches')),
  },
  {
    path: '/matches/:matchId',
    exact: true,
    component: React.lazy(() => import('./pages/matches/[id]')),
  },
  {
    path: '/profile',
    exact: true,
    component: React.lazy(() => import('./pages/profile')),
  },
  {
    path: '/chats',
    exact: true,
    component: React.lazy(() => import('./pages/chats')),
  },
  {
    path: '/chats/:chatId',
    exact: true,
    component: React.lazy(() => import('./pages/chats/[id]')),
  },
  {
    path: '/profile/edit',
    exact: true,
    component: React.lazy(() => import('./pages/profile/nested-pages/edit')),
  },
  {
    path: '/profile/navigation',
    exact: true,
    component: React.lazy(
      () => import('./pages/profile/nested-pages/navigation'),
    ),
  },
  {
    path: '/about',
    exact: true,
    component: React.lazy(() => import('./pages/about')),
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

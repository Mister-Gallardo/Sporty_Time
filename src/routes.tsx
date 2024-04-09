import React from 'react';
import { isPlatform } from '@ionic/react';
import { Redirect, Route } from 'react-router';
import { MobilePlayPage } from './pages/play/mobile';
import { MobileBookCourt } from './pages/book-court/index.mobile';
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
import { MobileAboutPage } from './pages/about/index.mobile';
import { MobilePrivacyPolicyPage } from './pages/privacy-policy/index.mobile';
import { MobileSpecificProfilePage } from './pages/profile/[id]/index.mobile';

export interface RouteExtraProps {
  showTabBar: boolean;
}

export const mobileRoutes = [
  isPlatform('mobile') && {
    path: '/',
    exact: true,
    component: () => <Redirect to="/play" />,
    showTabBar: true,
  },
  isPlatform('desktop') && {
    path: '/',
    exact: true,
    component: () => <Redirect to="/book-court" />,
  },
  isPlatform('mobile') && {
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
    path: '/profile/:userId',
    exact: true,
    component: MobileSpecificProfilePage,
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
    component: isPlatform('mobile') ? MobileSingleChatPage : MobileChatsPage,
    showTabBar: false,
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
  {
    path: '/about',
    exact: true,
    component: MobileAboutPage,
  },
  {
    path: '/privacy-policy',
    exact: true,
    component: MobilePrivacyPolicyPage,
  },
].filter(Boolean) as React.ComponentProps<typeof Route<RouteExtraProps>>[];

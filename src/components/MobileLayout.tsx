import React from 'react';
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  isPlatform,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import { person, tennisball } from 'ionicons/icons';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '../mobile.css';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { Box, Typography } from '@mui/material';
import { history } from '../services/history/service';
import { RouteExtraProps, mobileRoutes } from '../routes';
import { useCurrentRoute } from '../hooks/useCurrentRoute';
import DesktopHeader from './organisms/DesktopHeader';

export interface IMobileLayoutProps {
  children: React.ReactNode;
}

export const MobileLayout: React.FC<IMobileLayoutProps> = (props) => {
  const { children } = props;
  const route = useCurrentRoute<RouteExtraProps>({ routes: mobileRoutes });
  const { showTabBar } = route || {};

  return (
    <IonApp style={{ minHeight: '100dvh' }}>
      <IonReactRouter history={history}>
        <DesktopHeader />

        <Box position="relative" height="100%">
          <IonTabs
            onIonTabsWillChange={() =>
              Haptics.impact({ style: ImpactStyle.Light })
            }
          >
            <IonRouterOutlet animated={isPlatform('mobile')}>
              {children}
            </IonRouterOutlet>
            <IonTabBar
              slot={showTabBar && isPlatform('mobile') ? 'bottom' : undefined}
              style={{
                borderTop: '1px solid #cdcccc',
                paddingTop: '0.5rem',
              }}
            >
              <IonTabButton tab="play" href="/play">
                <IonIcon size="medium" icon={tennisball} />
                <Typography variant="body2">Играть</Typography>
              </IonTabButton>
              {/* <IonTabButton tab="discovery" href="/" disabled>
              <IonIcon size="medium" icon={book} />
              <Typography variant="body2">Исследовать</Typography>
            </IonTabButton>
            <IonTabButton tab="community" href="/" disabled>
              <IonIcon size="medium" icon={home} />
              <Typography variant="body2">Сообщество</Typography>
            </IonTabButton> */}
              <IonTabButton tab="profile" href="/profile">
                <IonIcon size="medium" icon={person} />
                <Typography variant="body2">Профиль</Typography>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </Box>
      </IonReactRouter>
    </IonApp>
  );
};

export default MobileLayout;

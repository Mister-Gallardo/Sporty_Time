import {
  IonApp,
  IonContent,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { book, home, person, tennisball } from 'ionicons/icons';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

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
import { useRef } from 'react';
import { Typography } from '@mui/material';

export interface IMobileLayoutProps {
  children: React.ReactNode;
}

export const MobileLayout: React.FC<IMobileLayoutProps> = (props) => {
  const { children } = props;
  const defaultRef = useRef<HTMLIonIconElement>(null);

  return (
    <IonApp style={{ minHeight: '100vh' }}>
      <IonReactRouter>
        <IonTabs
          onIonTabsWillChange={() =>
            Haptics.impact({ style: ImpactStyle.Light })
          }
        >
          <IonRouterOutlet>
            <IonContent class="scroll-content">{children}</IonContent>
          </IonRouterOutlet>
          <IonTabBar
            slot="bottom"
            style={{
              paddingBlock: '.75rem',
              borderRadius: '0',
              borderTop: '1px solid #cdcccc',
            }}
          >
            <IonTabButton ref={() => defaultRef} tab="play" href="/">
              <IonIcon size="medium" icon={tennisball} />
              <Typography variant="body2">Играть</Typography>
            </IonTabButton>
            <IonTabButton tab="discovery" href="/">
              <IonIcon size="medium" icon={book} />
              <Typography variant="body2">Исследовать</Typography>
            </IonTabButton>
            <IonTabButton tab="community" href="/">
              <IonIcon size="medium" icon={home} />
              <Typography variant="body2">Сообщество</Typography>
            </IonTabButton>
            <IonTabButton tab="profile" href="/">
              <IonIcon size="medium" icon={person} />
              <Typography variant="body2">Профиль</Typography>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default MobileLayout;

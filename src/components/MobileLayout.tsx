import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { albumsOutline, addCircle, personOutline } from 'ionicons/icons';
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

export interface IMobileLayoutProps {
  children: React.ReactNode;
}

export const MobileLayout: React.FC<IMobileLayoutProps> = (props) => {
  const { children } = props;
  const defaultRef = useRef<HTMLIonIconElement>(null);

  return (
    <IonApp style={{ height: '100dvh' }}>
      <IonReactRouter>
        <IonTabs
          onIonTabsWillChange={() =>
            Haptics.impact({ style: ImpactStyle.Light })
          }
        >
          <IonRouterOutlet>{children}</IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton
              ref={() => defaultRef}
              tab="publications"
              href="/publications"
            >
              <IonIcon size="large" icon={albumsOutline} />
            </IonTabButton>
            <IonTabButton tab="orders-new" href="/orders/new">
              <IonIcon
                style={{ width: 50, minHeight: 50 }}
                color="primary"
                icon={addCircle}
              />
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
              <IonIcon size="large" icon={personOutline} />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default MobileLayout;

import {
  IonBackButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { ArrowBackIosNewOutlined } from '@mui/icons-material';
import { MatchesPage } from '.';

export function MobileMatchesPage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonBackButton
            text={''}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
            }}
          >
            <ArrowBackIosNewOutlined style={{ color: '#000' }} />
          </IonBackButton>
          <IonTitle
            style={{
              fontSize: '1.25rem',
            }}
          >
            Матчи
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <MatchesPage />
      </IonContent>
    </IonPage>
  );
}

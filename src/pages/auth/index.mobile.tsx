import {
  IonBackButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { AuthPage } from '.';
import { ArrowBackIosNewOutlined } from '@mui/icons-material';

export function MobileAuthPage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ paddingTop: '15px' }}>
          <IonBackButton
            text={''}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '30px',
              height: '40px',
            }}
          >
            <ArrowBackIosNewOutlined sx={{ color: '#fff' }} />
          </IonBackButton>
          <IonTitle
            style={{
              fontSize: '1.25rem',
            }}
          >
            Sign in
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <AuthPage />
      </IonContent>
    </IonPage>
  );
}

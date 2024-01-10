import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from '@ionic/react';
import { ArrowBackIosNewOutlined } from '@mui/icons-material';
import { ProfileNavPage } from '.';

export function MobileProfileNavPage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="" color="dark">
              <ArrowBackIosNewOutlined />
            </IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ProfileNavPage />
      </IonContent>
    </IonPage>
  );
}
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { ArrowBackIosNewOutlined } from '@mui/icons-material';
import { EditProfilePage } from '.';

export function MobileEditProfilePage() {
  return (
    <IonPage>
      <IonHeader style={{ boxShadow: '0px 1px 4px #0000001a' }}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="" color="dark">
              <ArrowBackIosNewOutlined />
            </IonBackButton>
          </IonButtons>
          <IonTitle>Изменить профиль</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <EditProfilePage />
      </IonContent>
    </IonPage>
  );
}
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
import { SingleChatPage } from '.';

export function MobileSingleChatPage() {
  return (
    <IonPage>
      <IonHeader style={{ boxShadow: '0px 1px 4px #0000001a' }}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="" color="dark">
              <ArrowBackIosNewOutlined />
            </IonBackButton>
          </IonButtons>
          <IonTitle>Chat title</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <SingleChatPage />
      </IonContent>
    </IonPage>
  );
}
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { ProfilePage } from '.';

export function MobileProfilePage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{ fontSize: '1.25rem' }}>Profile</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <ChatBubbleOutlineRoundedIcon sx={{ color: '#000' }} />
            </IonButton>
            <IonButton>
              <MenuRoundedIcon sx={{ color: '#000' }} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <ProfilePage />
      </IonContent>
    </IonPage>
  );
}

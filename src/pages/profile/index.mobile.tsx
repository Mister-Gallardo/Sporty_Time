import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { ProfilePage } from '.';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useHistory } from 'react-router';

export function MobileProfilePage() {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{ fontSize: '1.2rem' }}>Profile</IonTitle>

          <IonButtons slot="end">
            <IonButton onClick={() => history.push('/chats')}>
              <ChatBubbleOutlineRoundedIcon sx={{ color: '#000' }} />
            </IonButton>
            <IonButton onClick={() => console.log('menu')}>
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

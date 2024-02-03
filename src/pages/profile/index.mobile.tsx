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
import React from 'react';
import { useHistory } from 'react-router';

const ProfilePage = React.lazy(() => import('.'));

export function MobileProfilePage() {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{ fontSize: '1.2rem' }}>Профиль</IonTitle>

          <IonButtons slot="end">
            <IonButton onClick={() => history.push('/chats')}>
              <ChatBubbleOutlineRoundedIcon sx={{ color: '#000' }} />
            </IonButton>
            <IonButton onClick={() => history.push('/profile/navigation')}>
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

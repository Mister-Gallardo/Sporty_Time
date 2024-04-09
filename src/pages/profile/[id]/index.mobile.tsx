import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  isPlatform,
} from '@ionic/react';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import React, { Suspense } from 'react';
import { useHistory } from 'react-router';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';

const SpecificProfilePage = React.lazy(() => import('.'));

export function MobileSpecificProfilePage() {
  const history = useHistory();

  return (
    <IonPage>
      {isPlatform('mobile') && (
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
      )}
      <IonContent>
        <Suspense fallback={<LoadingCircle />}>
          <SpecificProfilePage />
        </Suspense>
      </IonContent>
    </IonPage>
  );
}

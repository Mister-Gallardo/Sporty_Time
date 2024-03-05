import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  isPlatform,
} from '@ionic/react';
import { ArrowBackIosNewOutlined } from '@mui/icons-material';
import React, { Suspense } from 'react';
import { LoadingCircle } from '../../components/atoms/LoadingCircle';
import { ChatsList } from './components/ChatsList';

const ChatsPage = React.lazy(() => import('.'));

const isMobile = isPlatform('mobile');

export function MobileChatsPage() {
  return (
    <IonPage>
      {isPlatform('mobile') && (
        <IonHeader style={{ boxShadow: '0px 1px 4px #0000001a' }}>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton text="" color="dark">
                <ArrowBackIosNewOutlined />
              </IonBackButton>
            </IonButtons>
            <IonTitle>Чаты</IonTitle>
          </IonToolbar>
        </IonHeader>
      )}
      <IonContent fullscreen>
        <Suspense fallback={<LoadingCircle />}>
          {isMobile ? <ChatsList /> : <ChatsPage />}
        </Suspense>
      </IonContent>
    </IonPage>
  );
}

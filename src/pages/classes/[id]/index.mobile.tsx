import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  isPlatform,
} from '@ionic/react';
import React, { Suspense } from 'react';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { SingleClassesPage } from '.';

export function MobileSingleClassesPage() {
  return (
    <IonPage>
      {isPlatform('mobile') && (
        <IonHeader>
          <IonToolbar>
            <IonTitle style={{ fontSize: '1.2rem' }}>Профиль</IonTitle>

            <IonButtons slot="end">
              {/* <IonButton onClick={() => history.push('/chats')}>
                <ChatBubbleOutlineRoundedIcon sx={{ color: '#000' }} />
              </IonButton>
              <IonButton onClick={() => history.push('/profile/navigation')}>
                <MenuRoundedIcon sx={{ color: '#000' }} />
              </IonButton> */}
            </IonButtons>
          </IonToolbar>
        </IonHeader>
      )}
      <IonContent>
        <Suspense fallback={<LoadingCircle />}>
          <SingleClassesPage />
        </Suspense>
      </IonContent>
    </IonPage>
  );
}

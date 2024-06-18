import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  isPlatform,
} from '@ionic/react';
import { ArrowBackIosNewOutlined } from '@mui/icons-material';
import React, { Suspense } from 'react';
import { LoadingCircle } from '../../../../components/atoms/LoadingCircle';

const ProfileNavPage = React.lazy(() => import('.'));

export function MobileProfileNavPage() {
  return (
    <IonPage>
      {isPlatform('mobile') && (
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton text="" color="dark">
                <ArrowBackIosNewOutlined />
              </IonBackButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
      )}
      <IonContent fullscreen>
        <Suspense fallback={<LoadingCircle />}>
          <ProfileNavPage />
        </Suspense>
      </IonContent>
    </IonPage>
  );
}

import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  isPlatform,
} from '@ionic/react';
import { Suspense } from 'react';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { ArrowBackIosNewOutlined } from '@mui/icons-material';
import { SingleClassesPage } from '.';

export function MobileSingleClassesPage() {
  return (
    <IonPage>
      {isPlatform('mobile') && (
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/classes" text="" color="dark">
                <ArrowBackIosNewOutlined />
              </IonBackButton>
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

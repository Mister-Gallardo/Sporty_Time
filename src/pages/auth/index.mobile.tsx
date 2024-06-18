import { IonContent, IonPage } from '@ionic/react';
import React, { Suspense } from 'react';
import { LoadingCircle } from '../../components/atoms/LoadingCircle';

const AuthPage = React.lazy(() => import('.'));

export function MobileAuthPage() {
  return (
    <IonPage>
      <IonContent>
        <Suspense fallback={<LoadingCircle />}>
          <AuthPage />
        </Suspense>
      </IonContent>
    </IonPage>
  );
}

export default MobileAuthPage;

import { IonContent, IonPage } from '@ionic/react';
import React, { Suspense } from 'react';
import { LoadingCircle } from '../../components/atoms/LoadingCircle';

const AboutPage = React.lazy(() => import('.'));

export function MobilePrivacyPolicyPage() {
  return (
    <IonPage>
      <IonContent>
        <Suspense fallback={<LoadingCircle />}>
          <AboutPage />
        </Suspense>
      </IonContent>
    </IonPage>
  );
}

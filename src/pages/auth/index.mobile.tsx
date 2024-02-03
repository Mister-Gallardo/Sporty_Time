import { IonContent, IonPage } from '@ionic/react';
import React from 'react';

const AuthPage = React.lazy(() => import('.'));

export function MobileAuthPage() {
  return (
    <IonPage>
      <IonContent>
        <AuthPage />
      </IonContent>
    </IonPage>
  );
}

export default MobileAuthPage;

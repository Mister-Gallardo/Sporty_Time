import { IonContent, IonPage } from '@ionic/react';
import { AuthPage } from '.';

export function MobileAuthPage() {
  return (
    <IonPage>
      <IonContent>
        <AuthPage />
      </IonContent>
    </IonPage>
  );
}

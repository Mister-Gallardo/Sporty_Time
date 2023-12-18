import { IonContent, IonPage } from '@ionic/react';
import { AuthPage } from '.';

export function MobileAuthPage() {
  return (
    <IonPage className="notabs">
      <IonContent>
        <AuthPage />
      </IonContent>
    </IonPage>
  );
}

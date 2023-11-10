import { IonContent, IonPage } from '@ionic/react';
import { SingleCourtPage } from '.';

export function MobileSingleCourtPage() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <SingleCourtPage />
      </IonContent>
    </IonPage>
  );
}

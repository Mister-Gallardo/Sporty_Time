import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { ProfilePage } from '.';

export function MobileProfilePage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{ fontSize: '1.25rem' }}>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <ProfilePage />
      </IonContent>
    </IonPage>
  );
}

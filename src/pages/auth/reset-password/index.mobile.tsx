import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { ResetPassword } from '.';

export function MobileResetPassword() {
  return (
    <IonPage>
      <IonHeader style={{ boxShadow: '0px 1px 4px #0000001a' }}>
        <IonToolbar>
          <IonTitle style={{ fontSize: '1.25rem' }}>Изменение пароля</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ResetPassword />
      </IonContent>
    </IonPage>
  );
}

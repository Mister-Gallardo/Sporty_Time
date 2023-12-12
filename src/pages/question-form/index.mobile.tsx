import { IonContent, IonHeader, IonPage } from '@ionic/react';
import { QuestionFormPage } from '.';

export function MobileQuestionFormPage() {
  return (
    <IonPage>
      <IonHeader style={{ border: 'none' }}></IonHeader>
      <IonContent
        fullscreen
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <QuestionFormPage />
      </IonContent>
    </IonPage>
  );
}

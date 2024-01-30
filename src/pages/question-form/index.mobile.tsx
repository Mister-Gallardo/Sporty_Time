import { IonContent, IonPage } from '@ionic/react';
import { QuestionFormPage } from '.';

export function MobileQuestionFormPage() {
  return (
    <IonPage>
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

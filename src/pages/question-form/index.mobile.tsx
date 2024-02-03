import { IonContent, IonPage } from '@ionic/react';
import React from 'react';

const QuestionFormPage = React.lazy(() => import('.'));

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

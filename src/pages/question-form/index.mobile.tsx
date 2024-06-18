import { IonContent, IonPage } from '@ionic/react';
import React, { Suspense } from 'react';
import { LoadingCircle } from '../../components/atoms/LoadingCircle';

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
        <Suspense fallback={<LoadingCircle />}>
          <QuestionFormPage />
        </Suspense>
      </IonContent>
    </IonPage>
  );
}

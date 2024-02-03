import {
  IonBackButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { ArrowBackIosNewOutlined } from '@mui/icons-material';
import React, { Suspense } from 'react';
import { LoadingCircle } from '../../components/atoms/LoadingCircle';

const MatchesPage = React.lazy(() => import('.'));

export function MobileMatchesPage() {
  return (
    <IonPage>
      <IonHeader style={{ boxShadow: '0px 1px 4px #0000001a' }}>
        <IonToolbar style={{ display: 'flex' }}>
          <IonBackButton
            text={''}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
            }}
          >
            <ArrowBackIosNewOutlined style={{ color: '#000' }} />
          </IonBackButton>
          <IonTitle
            style={{
              fontSize: '1.25rem',
            }}
          >
            Матчи
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Suspense fallback={<LoadingCircle />}>
          <MatchesPage />
        </Suspense>
      </IonContent>
    </IonPage>
  );
}

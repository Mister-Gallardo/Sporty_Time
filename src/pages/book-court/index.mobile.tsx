import {
  IonBackButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  isPlatform,
} from '@ionic/react';
import { ArrowBackIosNewOutlined } from '@mui/icons-material';
import React, { Suspense } from 'react';
import { LoadingCircle } from '../../components/atoms/LoadingCircle';

const BookCourt = React.lazy(() => import('.'));

export function MobileBookCourt() {
  return (
    <IonPage>
      {isPlatform('mobile') && (
        <IonHeader>
          <IonToolbar>
            <IonBackButton
              text={''}
              style={{
                background: 'hsl(0deg 0% 89.8% / 34%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
              }}
            >
              <ArrowBackIosNewOutlined sx={{ color: '#fff' }} />
            </IonBackButton>
            <IonTitle
              style={{
                fontSize: '1.25rem',
              }}
            >
              Поиск
            </IonTitle>
          </IonToolbar>
        </IonHeader>
      )}
      <IonContent style={{ position: 'relative' }}>
        <Suspense fallback={<LoadingCircle />}>
          <BookCourt />
        </Suspense>
      </IonContent>
    </IonPage>
  );
}

export default MobileBookCourt;

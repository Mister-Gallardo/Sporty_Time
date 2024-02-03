import {
  IonBackButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { ArrowBackIosNewOutlined } from '@mui/icons-material';
import React from 'react';

const BookCourt = React.lazy(() => import('.'));

export function MobileBookCourt() {
  return (
    <IonPage>
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
            Search
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <BookCourt />
      </IonContent>
    </IonPage>
  );
}

export default MobileBookCourt;

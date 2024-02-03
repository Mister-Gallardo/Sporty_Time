import { IonBackButton, IonContent, IonPage } from '@ionic/react';
import { Box } from '@mui/material';
import { ArrowBackIosNewOutlined } from '@mui/icons-material';
import React from 'react';

const SingleCourtPage = React.lazy(() => import('.'));

export function MobileSingleCourtPage() {
  return (
    <IonPage>
      <IonContent scrollEvents={true}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            position: 'fixed',
            zIndex: 1,
            top: '1.5rem',
            px: 2,
          }}
        >
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
              color: '#fff',
            }}
          >
            <ArrowBackIosNewOutlined sx={{ color: '#fff' }} />
          </IonBackButton>
        </Box>
        <SingleCourtPage />
      </IonContent>
    </IonPage>
  );
}

export default MobileSingleCourtPage;

import { IonBackButton, IonContent, IonPage } from '@ionic/react';
import { ArrowBackIosNewOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';
import React, { Suspense } from 'react';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';

const SingleMatchPage = React.lazy(() => import('.'));

export function MobileSingleMatchPage() {
  return (
    <IonPage>
      <IonContent scrollEvents>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            position: 'fixed',
            zIndex: 1,
            top: '2.5rem',
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
          {/* <Box sx={{ display: 'flex', gap: '10px' }}>
            <IconButton
              sx={{
                background: 'hsl(0deg 0% 89.8% / 34%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ShareOutlined sx={{ color: '#fff' }} />
            </IconButton>
            <IconButton
              sx={{
                background: 'hsl(0deg 0% 89.8% / 34%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MoreVert sx={{ color: '#fff' }} />
            </IconButton>
          </Box> */}
        </Box>
        <Suspense fallback={<LoadingCircle />}>
          <SingleMatchPage />
        </Suspense>
      </IonContent>
    </IonPage>
  );
}

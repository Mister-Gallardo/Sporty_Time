import { IonBackButton, IonContent, IonHeader, IonPage } from '@ionic/react';
import { SingleMatchPage } from '.';
import {
  ArrowBackIosNewOutlined,
  MoreVert,
  ShareOutlined,
} from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

export function MobileSingleMatchPage() {
  return (
    <IonPage>
      <IonHeader style={{ border: 'none' }}></IonHeader>
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
          <Box sx={{ display: 'flex', gap: '10px' }}>
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
          </Box>
        </Box>
        <SingleMatchPage />
      </IonContent>
    </IonPage>
  );
}
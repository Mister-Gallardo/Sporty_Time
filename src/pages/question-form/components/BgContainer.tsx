import { Box } from '@mui/material';
import mobile_bg from '../../../images/question-form/bg_events_tennis_mobile.png';
import desktop_bg from '../../../images/question-form/bg_events_tennis_desktop.png';
import { IonContent, IonPage, isPlatform } from '@ionic/react';

export const BgContainer = ({ children }: { children: JSX.Element[] }) => {
  const isMobile = isPlatform('mobile');
  return (
    <>
      {isMobile ? (
        <IonPage>
          <IonContent fullscreen>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100dvh',
                backgroundImage: `url(${mobile_bg})`,
                backgroundSize: 'cover',
                paddingX: 2,
              }}
            >
              {children}
            </Box>
          </IonContent>
        </IonPage>
      ) : (
        <>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              minWidth: '100vw',
              minHeight: '100vh',
              backgroundImage: `url(${desktop_bg})`,
              backgroundSize: 'cover',
            }}
          />
          <Box display="flex" justifyContent="center">
            <Box
              position="relative"
              zIndex={1}
              maxWidth="550px"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              {children}
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

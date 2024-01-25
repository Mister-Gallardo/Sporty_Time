import { Box } from '@mui/material';
import mobile_bg from '../../../images/question-form/bg_events_tennis_mobile.png';
import desktop_bg from '../../../images/question-form/bg_events_tennis_desktop.png';
import { isPlatform } from '@ionic/react';

const isMobile = isPlatform('mobile');
export const BgContainer = ({ children }: { children: JSX.Element[] }) => {
  return (
    <Box>
      {isMobile ? (
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
          <Box
            position="absolute"
            top={0}
            right={0}
            left={0}
            bottom={0}
            bgcolor="#1f1f1fb0"
          />
          <Box zIndex={1}>{children}</Box>
        </Box>
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
          <Box
            position="absolute"
            top={0}
            right={0}
            left={0}
            bottom={0}
            bgcolor="#1f1f1fb0"
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
    </Box>
  );
};

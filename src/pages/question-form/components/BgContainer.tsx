import { Box } from '@mui/material';
import mobile_bg from '../../../images/question-form/bg_events_tennis_mobile.png';
import desktop_bg from '../../../images/question-form/bg_events_tennis_desktop.png';
import { isPlatform } from '@ionic/react';

export const BgContainer = ({ children }: { children: JSX.Element[] }) => {
  const isModile = isPlatform('mobile');
  return (
    <>
      <Box
        position="absolute"
        top={0}
        right={0}
        bottom={0}
        left={0}
        sx={{
          backgroundImage: `url(${isModile ? mobile_bg : desktop_bg})`,
          backgroundSize: 'cover',
        }}
      ></Box>
      <Box
        position="relative"
        zIndex={1}
        paddingTop={isModile ? 3 : 10}
        paddingBottom={isModile ? 4 : 10}
        paddingX={2}
        display="flex"
        justifyContent="center"
        height={isModile ? '100vh' : 'none'}
      >
        <Box
          maxWidth="550px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          height="100%"
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

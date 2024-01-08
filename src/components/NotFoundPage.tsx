import { Box, Button, Typography } from '@mui/material';
import { useHistory } from 'react-router';
import notFound from '../images/not-found.svg';
import { isPlatform } from '@ionic/react';

export const NotFoundPage = () => {
  const isMobile = isPlatform('mobile');
  const history = useHistory();

  return (
    <Box
      height="70dvh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={2}
      px={2}
    >
      <Box
        component="img"
        src={notFound}
        width="100%"
        maxWidth={isMobile ? 300 : 500}
      />

      <Typography fontSize={18} textAlign="center">
        Страница не найдена
      </Typography>
      <Button onClick={() => history.push('/')} variant="contained">
        Вернуться на главную страницу
      </Button>
    </Box>
  );
};

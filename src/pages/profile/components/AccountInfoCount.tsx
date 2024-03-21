import React from 'react';
import { isPlatform } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

interface IAccountInfoCountProps {
  title: string;
  count: number;
  navPath?: string;
}
const isMobile = isPlatform('mobile');

export const AccountInfoCount: React.FC<IAccountInfoCountProps> = ({
  title,
  count,
  navPath,
}) => {
  const history = useHistory();

  return (
    <Button
      disabled={!navPath}
      onClick={() => {
        if (navPath) {
          history.push(navPath);
        }
      }}
      sx={{
        maxWidth: isMobile ? '100%' : '150px',
      }}
      fullWidth
    >
      <Box width="100%">
        <Typography fontSize={isMobile ? 18 : 23} textAlign="center">
          {count}
        </Typography>
        <Typography fontSize={isMobile ? 12 : 15} textAlign="center">
          {title}
        </Typography>
      </Box>
    </Button>
  );
};

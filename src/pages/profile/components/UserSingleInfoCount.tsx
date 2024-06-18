import React from 'react';
import { isPlatform } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

interface IUserSingleInfoCountProps {
  title: string;
  count?: number;
  navPath?: string;
}
const isMobile = isPlatform('mobile');

export const UserSingleInfoCount: React.FC<IUserSingleInfoCountProps> = ({
  title,
  count = 0,
  navPath,
}) => {
  const history = useHistory();

  return (
    <Button
      onClick={() => {
        if (navPath) {
          history.push(navPath);
        }
      }}
      sx={{
        maxWidth: isMobile ? '100%' : 130,
      }}
      fullWidth
    >
      <Box width="100%">
        <Typography fontSize={isMobile ? 18 : 23} textAlign="center">
          {count}
        </Typography>
        <Typography
          fontSize={isMobile ? 12 : 15}
          textAlign="center"
          whiteSpace="nowrap"
        >
          {title}
        </Typography>
      </Box>
    </Button>
  );
};

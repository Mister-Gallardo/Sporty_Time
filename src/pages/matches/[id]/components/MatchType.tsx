import React from 'react';
import { Box, Typography } from '@mui/material';

interface IMatchType {
  type: string;
}

export const MatchType: React.FC<IMatchType> = ({ type }) => {
  const title = type.toLowerCase();
  return (
    <Box border="1px solid #ddd" borderRadius={2} p={1} bgcolor="#fff">
      <Typography textTransform="capitalize">{title}</Typography>
      <Typography color="gray">{`Результат этого матча ${
        type === 'FRIENDLY' ? 'не' : ''
      } повлияет на уровень`}</Typography>
    </Box>
  );
};

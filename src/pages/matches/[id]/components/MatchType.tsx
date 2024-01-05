import React from 'react';
import { Box, Typography } from '@mui/material';
import { EMatchType } from '../../../../services/matches/interface';

interface IMatchType {
  type: string;
}

export const MatchType: React.FC<IMatchType> = ({ type }) => {
  const isFriendly =
    type === EMatchType.FRIENDLY ? 'Дружеский' : 'Соревновательный';

  return (
    <Box border="1px solid #ddd" borderRadius={2} p={1} bgcolor="#fff" mb={2}>
      <Typography textTransform="capitalize">{isFriendly}</Typography>
      <Typography color="gray">{`Результат этого матча ${
        isFriendly ? 'не' : ''
      } повлияет на уровень`}</Typography>
    </Box>
  );
};

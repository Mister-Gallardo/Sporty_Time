import { isPlatform } from '@ionic/react';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from './SectionTitle';

interface IMatchesListProps {}

const isMobile = isPlatform('mobile');

export const MatchesList: React.FC<IMatchesListProps> = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <SectionTitle title="Матчи" />
        <Link to="/matches?tab=2">Все</Link>
      </Box>
      <Box
        display="flex"
        gap={2}
        maxWidth={isMobile ? '100%' : '360px'}
        overflow="auto"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
          (match) => {
            return (
              <Box>
                <Typography>{match}</Typography>
              </Box>
            );
          },
        )}
      </Box>
    </Box>
  );
};

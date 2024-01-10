import React from 'react';
import { matchResults } from '../../../../services/matches/interface';
import { Box, Typography } from '@mui/material';

interface IResultsTable {
  matchResults: matchResults;
}

export const ResultsTable: React.FC<IResultsTable> = ({ matchResults }) => {
  if (!matchResults) return;
  return (
    <Box
      sx={{
        border: '1px solid #e5e5e5',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '.75rem',
        marginBottom: '1.5rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '1.75rem',
          opacity: '.5',
        }}
      >
        <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
          {matchResults[0][0]}
        </Typography>
        <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
          {matchResults[1][0]}
        </Typography>
        <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
          {matchResults[2][0]}
        </Typography>
      </Box>

      <Box
        sx={{
          width: '100%',
          height: '1px',
          background: '#e5e5e5',
        }}
      />

      <Box sx={{ display: 'flex', gap: '1.75rem', opacity: '.5' }}>
        <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
          {matchResults[0][1]}
        </Typography>
        <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
          {matchResults[1][1]}
        </Typography>
        <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
          {matchResults[2][1]}
        </Typography>
      </Box>
    </Box>
  );
};

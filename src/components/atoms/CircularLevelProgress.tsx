import React, { ReactNode } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

interface ICircularLevelProgressProps {
  rating: number;
  children: ReactNode;
}

export const CircularLevelProgress: React.FC<ICircularLevelProgressProps> = ({
  rating,
  children,
}) => {
  const minValue = 0;
  const maxValue = 7;
  const progressValue = (rating - minValue) / (maxValue - minValue);

  return (
    <Box
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress
        variant="determinate"
        value={progressValue * 100}
        size={55}
        thickness={2.5}
        style={{
          transform: 'rotate(90deg)',
          borderRadius: '50%',
          boxShadow: `inset 0 0 0 2.5px #eee`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

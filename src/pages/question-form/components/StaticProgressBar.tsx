import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface CircleStaticProgressBarProps {
  value: number;
  text: string;
}
const MIN = 0;
const MAX = 7;
const normalise = (value: number) => ((value - MIN) * 100) / (MAX - MIN);
const CircleStaticProgressBar: React.FC<CircleStaticProgressBarProps> = ({
  value,
  text,
}) => {
  return (
    <Box
      position="relative"
      display="inline-flex"
      bgcolor="#eee"
      borderRadius={50}
    >
      <CircularProgress
        variant="determinate"
        value={normalise(value)}
        sx={{
          rotate: '-110deg',
          color: '1c6dff',
        }}
      />
      <Box
        top={3}
        left={3}
        bottom={3}
        right={3}
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        borderRadius={50}
        bgcolor="white"
      >
        <Typography variant="caption" component="div" color="textSecondary">
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default CircleStaticProgressBar;

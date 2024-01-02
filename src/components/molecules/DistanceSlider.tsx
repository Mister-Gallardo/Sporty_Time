import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 30,
    label: '30',
  },
  {
    value: 40,
    label: '40',
  },
  {
    value: 50,
    label: '50',
  },
];

interface IDistanceSliderProps {}

export const DistanceSlider: React.FC<IDistanceSliderProps> = () => {
  return (
    <Box px={1}>
      <Slider
        aria-label="Distance"
        defaultValue={40}
        min={1}
        max={50}
        getAriaValueText={(value) => value.toString()}
        step={10}
        marks={marks}
      />
    </Box>
  );
};

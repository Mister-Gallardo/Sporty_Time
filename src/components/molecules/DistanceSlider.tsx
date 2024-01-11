import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '0',
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

interface IDistanceSliderProps {
  value?: number;
  setValue?: any;
}

export const DistanceSlider: React.FC<IDistanceSliderProps> = ({
  value,
  setValue,
}) => {
  const handleChange = (_: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Box px={0.5}>
      <Slider
        min={0}
        max={50}
        step={10}
        marks={marks}
        value={value}
        onChange={handleChange}
        aria-label="'Distance range"
      />
    </Box>
  );
};

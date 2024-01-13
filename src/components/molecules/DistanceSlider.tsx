import React, { useEffect, useState } from 'react';
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

interface IDistanceSliderProps {
  value: number;
  setValue: (range: number) => void;
}

export const DistanceSlider: React.FC<IDistanceSliderProps> = ({
  value,
  setValue,
}) => {
  const [point, setPoint] = useState(value || 1);
  useEffect(() => {
    setPoint(value);
  }, [value]);
  return (
    <Box px={0.5}>
      <Slider
        min={0}
        max={50}
        step={10}
        marks={marks}
        value={point}
        onChange={(_, value) => setPoint(value as number)}
        onChangeCommitted={(_, value) => setValue(value as number)}
        aria-label="Distance"
      />
    </Box>
  );
};

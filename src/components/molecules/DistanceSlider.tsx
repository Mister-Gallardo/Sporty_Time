import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useFormContext } from 'react-hook-form';

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

export const DistanceSlider = () => {
  const { watch, setValue } = useFormContext();
  const { range } = watch();

  const [point, setPoint] = useState(range || 1);

  useEffect(() => {
    setPoint(range);
  }, [range]);

  return (
    <Box px={0.5}>
      <Slider
        min={0}
        max={50}
        step={10}
        marks={marks}
        value={point}
        onChange={(_, value) => setPoint(value as number)}
        onChangeCommitted={(_, value) => setValue('range', value as number)}
        aria-label="Distance"
      />
    </Box>
  );
};

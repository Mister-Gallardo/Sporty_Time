import React, { useState } from 'react';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IonAvatar, isPlatform } from '@ionic/react';
import { useFormContext } from 'react-hook-form';

interface ThumbComponentProps extends React.HTMLAttributes<unknown> {}

interface IMultiThumbSlider {
  rating?: number;
}

const marks = Array.from({ length: 8 }, (_, index) => ({
  value: index,
  label: index,
}));

export const MultiThumbSlider: React.FC<IMultiThumbSlider> = ({
  rating = 0,
}) => {
  const isMobile = isPlatform('mobile');

  const userIcon: any = () => (
    <Box
      position="relative"
      alignItems="center"
      display="flex"
      gap={1}
      px={0.8}
      py={0.6}
      borderRadius={0.8}
      bgcolor="#fff"
      boxShadow="1px 1px 10px #eeeeeed6"
      mt={-11}
      sx={{ cursor: isMobile ? 'unset' : 'pointer' }}
    >
      <IonAvatar style={{ width: 30, height: 30 }}>
        <img
          alt="Silhouette of a person's head"
          src="https://ionicframework.com/docs/img/demos/avatar.svg"
        />
      </IonAvatar>
      <Typography color="#000">{rating}</Typography>
      <Box
        sx={{
          position: 'absolute',
          bottom: -7,
          right: '40%',
          width: 0,
          height: 0,
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderTop: '8px solid #fff',
        }}
      ></Box>
    </Box>
  );

  marks.forEach((elem, i) => {
    if (i === marks.length - 1) return;

    const curValue = elem.value;
    const nextValue = marks[i + 1].value;

    if (rating > curValue && rating < nextValue) {
      marks.splice(curValue, 0, {
        value: rating,
        label: userIcon(),
      });
    }
  });

  const { setValue, watch } = useFormContext();
  const { ratingFrom, ratingTo } = watch();

  const [rangeMinValue, setRangeMinValue] = useState<number>(ratingFrom);
  const [rangeMaxValue, setRangeMaxValue] = useState<number>(ratingTo);

  const handleChange = (_: Event, values: number | number[]) => {
    if (Array.isArray(values)) {
      if (rangeMinValue !== values[0]) setRangeMinValue(values[0]);
      if (rangeMaxValue !== values[1]) setRangeMaxValue(values[1]);
    }
  };

  return (
    <CustomSlider
      getAriaLabel={(index) => (index === 0 ? 'min' : 'max')}
      slots={{ thumb: ThumbComponent }}
      value={[rangeMinValue, rangeMaxValue]}
      onChange={handleChange}
      onChangeCommitted={(_, newValue) => {
        if (Array.isArray(newValue)) {
          setValue('ratingFrom', newValue[0] as number);
          setValue('ratingTo', newValue[1] as number);
        }
      }}
      min={0}
      max={7}
      marks={marks}
      valueLabelDisplay="on"
      step={0.1}
    />
  );
};

const ThumbComponent = (props: ThumbComponentProps) => {
  const { children, className, ...other } = props;

  const thumbIndex = (other as any)['data-index'];
  const extraClassName = thumbIndex === 0 ? 'first-thumb' : 'second-thumb';

  return (
    <SliderThumb {...other} className={`${className} ${extraClassName}`}>
      {children}
    </SliderThumb>
  );
};

const CustomSlider = styled(Slider)(() => ({
  height: 2,
  padding: '15px 0',
  '& .MuiSlider-thumb>span': {
    display: 'none',
  },
  '& .first-thumb': {
    zIndex: 1,
    height: 15,
    width: 15,
  },
  '& .second-thumb': {
    zIndex: 1,
    height: 20,
    width: 20,
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 12,
    fontWeight: 'normal',
    top: -6,
    backgroundColor: 'unset',
    '&:before': {
      display: 'none',
    },
    '& *': {
      background: 'transparent',
    },
  },
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  '& .MuiSlider-mark': {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    '&.MuiSlider-markActive': {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
  },
}));

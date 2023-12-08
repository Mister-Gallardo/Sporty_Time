import { IonAvatar } from '@ionic/react';
import { Box, Typography } from '@mui/material';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

interface IMultiThumbSlider {
  curentMinValue: number;
  curentMaxValue: number;
  handleChange: (_: Event, values: number | number[]) => void;
}

export const MultiThumbSlider = ({
  curentMinValue,
  curentMaxValue,
  handleChange,
}: IMultiThumbSlider) => {
  return (
    <CustomSlider
      getAriaLabel={(index) => (index === 0 ? 'min' : 'max')}
      slots={{ thumb: ThumbComponent }}
      value={[curentMinValue, 2.5, curentMaxValue]}
      onChange={handleChange}
      min={0}
      max={7}
      marks={marks}
      valueLabelDisplay="on"
      step={0.1}
    />
  );
};

interface ThumbComponentProps extends React.HTMLAttributes<unknown> {}

function ThumbComponent(props: ThumbComponentProps) {
  const { children, className, ...other } = props;
  const thumbIndex = other['data-index'];

  const extraClassName =
    thumbIndex === 0
      ? 'first-thumb'
      : thumbIndex === 1
      ? 'second-thumb'
      : 'third-thumb';

  const custonthumb = (
    <Box
      position="relative"
      alignItems="center"
      display="flex"
      gap={1}
      px={0.8}
      py={0.6}
      borderRadius={0.8}
      boxShadow="1px 1px 12px #dadada"
      mb={15}
    >
      <IonAvatar style={{ width: 30, height: 30 }}>
        <img
          alt="Silhouette of a person's head"
          src="https://ionicframework.com/docs/img/demos/avatar.svg"
        />
      </IonAvatar>
      <Typography color="#000">2.5</Typography>
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

  return (
    <SliderThumb {...other} className={`${className} ${extraClassName}`}>
      {children}
      {thumbIndex && thumbIndex === 1 && custonthumb}
    </SliderThumb>
  );
}

const marks = [
  {
    value: 0,
    label: 0,
  },
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
  {
    value: 4,
    label: 4,
  },
  {
    value: 5,
    label: 5,
  },
  {
    value: 6,
    label: 6,
  },
  {
    value: 7,
    label: 7,
  },
];

const boxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const CustomSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#3880ff' : '#3880ff',
  height: 2,
  padding: '15px 0',

  '& .MuiSlider-thumb': {
    boxShadow: boxShadow,
    '&:focus, &:hover, &.Mui-active': {
      boxShadow:
        '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      '@media (hover: none)': {
        boxShadow: boxShadow,
      },
    },
  },
  '& .MuiSlider-thumb>span': {
    display: 'none',
  },
  '& .first-thumb': {
    height: 15,
    width: 15,
  },
  '& .second-thumb': {
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
  '& .second-thumb:before': {
    boxShadow: 'none',
  },
  '& .third-thumb': {
    height: 20,
    width: 20,
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 12,
    fontWeight: 'normal',
    top: -6,
    backgroundColor: 'unset',
    color: theme.palette.text.primary,
    '&:before': {
      display: 'none',
    },
    '& *': {
      background: 'transparent',
      color: theme.palette.mode === 'dark' ? '#fff' : '#000',
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

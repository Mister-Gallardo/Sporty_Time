import { Box, Checkbox, Typography } from '@mui/material';
import React from 'react';
import image from '../../images/home/booking-bg.png';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import useToggle from '../../hooks/useToggle';

interface ISelectClubBlockProps {
  onCheck: () => void;
}

export const SelectClubBlock: React.FC<ISelectClubBlockProps> = ({
  onCheck,
}) => {
  const [check, setCheck] = useToggle();
  return (
    <Box
      minWidth={110}
      position="relative"
      borderRadius={1.2}
      boxShadow="0 1px 8px #0000000f"
    >
      <Box position="absolute" right={-7} top={-10} zIndex={1}>
        <Checkbox
          id="club-check"
          value={check}
          onChange={() => {
            setCheck();
            onCheck();
          }}
          icon={<RadioButtonUncheckedIcon color="primary" />}
          checkedIcon={<CheckCircleIcon />}
          sx={{ padding: 0, backgroundColor: '#fff' }}
        />
      </Box>
      <Box
        component="img"
        src={image}
        width="100%"
        height={60}
        sx={{
          objectFit: 'cover',
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
          transition: 'opacity .2s ease',
          opacity: check ? 1 : 0.5,
        }}
      />
      <Typography fontSize={11} px={0.5} py={1}>
        Club Title
      </Typography>
    </Box>
  );
};

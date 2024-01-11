import { Box, Checkbox, Typography } from '@mui/material';
import React from 'react';
import noImage from '../../images/no-image.jpg';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface ISelectClubBlockProps {
  title: string;
  img: string;
  isChecked: boolean;
  onCheck: () => void;
}

export const SelectClubBlock: React.FC<ISelectClubBlockProps> = ({
  img,
  title,
  isChecked,
  onCheck,
}) => {
  return (
    <label htmlFor={`check-${title}`}>
      <Box
        minWidth={110}
        position="relative"
        borderRadius={1.2}
        boxShadow="0 1px 8px #0000000f"
      >
        <Box position="absolute" right={-7} top={-10} zIndex={1}>
          <Checkbox
            id={`check-${title}`}
            checked={isChecked}
            onChange={() => onCheck()}
            icon={
              <RadioButtonUncheckedIcon
                color="primary"
                sx={{ borderRadius: 5, backgroundColor: '#fff' }}
              />
            }
            checkedIcon={
              <CheckCircleIcon
                sx={{ borderRadius: 5, backgroundColor: '#fff' }}
              />
            }
            sx={{ padding: 0, backgroundColor: '#fff' }}
          />
        </Box>
        <Box
          component="img"
          src={img ? img : noImage}
          width="100%"
          height={60}
          sx={{
            objectFit: 'cover',
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
            transition: 'opacity .2s ease',
            opacity: isChecked ? 1 : 0.5,
          }}
        />
        <Typography height={38} fontSize={11} px={0.5} py={1} lineHeight={1}>
          {title.length > 35 ? `${title.slice(0, 35)}...` : title}
        </Typography>
      </Box>
    </label>
  );
};

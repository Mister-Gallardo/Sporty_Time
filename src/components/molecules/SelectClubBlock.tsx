import React from 'react';
import { Box, Checkbox, Typography } from '@mui/material';
import noImage from '../../images/no-image.jpg';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Club } from '../../services/club/interface';

interface ISelectClubBlockProps extends Club {
  isChecked: boolean;
  onCheck: () => void;
}

export const SelectClubBlock: React.FC<ISelectClubBlockProps> = ({
  img,
  title,
  city,
  isChecked,
  onCheck,
}) => {
  return (
    <Box
      minWidth={110}
      position="relative"
      borderRadius={1.2}
      boxShadow="0 1px 8px #0000000f"
      onClick={onCheck}
    >
      <Box position="absolute" right={-7} top={-10} zIndex={1}>
        <Checkbox
          checked={!!isChecked || false}
          onChange={onCheck}
          icon={
            <CheckBoxOutlineBlankOutlinedIcon
              sx={{ backgroundColor: '#fff' }}
            />
          }
          checkedIcon={<CheckBoxIcon sx={{ backgroundColor: '#fff' }} />}
          sx={{ padding: 0 }}
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
      <Box
        height={55}
        p={0.5}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Typography fontSize={11} lineHeight={1}>
          {title.length > 35 ? `${title.slice(0, 35)}...` : title}
        </Typography>

        <Typography
          color="gray"
          fontSize={10}
          textAlign="end"
          maxWidth={102}
          noWrap
        >
          {city}
        </Typography>
      </Box>
    </Box>
  );
};

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
  images,
  title,
  city,
  isChecked,
  onCheck,
}) => {
  const previewImg =
    !images || images.length === 0 ? noImage : images[0]?.formats.small;

  return (
    <Box
      minWidth={130}
      maxWidth={130}
      position="relative"
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
        src={previewImg}
        width="100%"
        height={60}
        sx={{
          objectFit: 'cover',
          transition: 'opacity .2s ease',
          opacity: isChecked ? 1 : 0.5,
        }}
        onError={(e) => ((e.target as HTMLImageElement).src = noImage)}
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

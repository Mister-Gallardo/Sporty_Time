import React from 'react';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Box, Button, Typography } from '@mui/material';

interface INavButtonProps {
  primaryText: string;
  secondaryText?: string;
  startIcon: any;
  onClick: () => void;
  disabled?: boolean;
}

export const NavButton: React.FC<INavButtonProps> = ({
  primaryText,
  secondaryText,
  startIcon,
  onClick,
  disabled,
}) => {
  return (
    <Button
      onClick={onClick}
      startIcon={startIcon}
      endIcon={
        <ArrowForwardIosRoundedIcon
          sx={{ color: disabled ? '#ccc' : '#000' }}
        />
      }
      fullWidth
      disabled={disabled}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        flexGrow={1}
      >
        <Typography color={disabled ? '#ccc' : '#000'} fontWeight={500}>
          {primaryText}
        </Typography>
        <Typography color={disabled ? '#ccc' : 'gray'} fontSize={13}>
          {secondaryText}
        </Typography>
      </Box>
    </Button>
  );
};

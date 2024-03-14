import React from 'react';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Box, Button, Typography } from '@mui/material';

interface INavButtonProps {
  primaryText: string;
  secondaryText?: string;
  primaryTextColor?: string;
  secondaryTextColor?: string;
  disabledTextColor?: string;
  iconColor?: string;
  startIcon: any;
  onClick: () => void;
  disabled?: boolean;
}

export const NavButton: React.FC<INavButtonProps> = ({
  primaryText,
  secondaryText,
  primaryTextColor = '#000',
  secondaryTextColor = 'gray',
  disabledTextColor = '#ccc',
  iconColor = '#000',
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
          sx={{ color: disabled ? disabledTextColor : iconColor }}
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
        <Typography
          color={disabled ? disabledTextColor : primaryTextColor}
          textAlign="start"
          fontWeight={500}
        >
          {primaryText}
        </Typography>
        <Typography
          color={disabled ? disabledTextColor : secondaryTextColor}
          textAlign="start"
          fontSize={13}
        >
          {secondaryText}
        </Typography>
      </Box>
    </Button>
  );
};

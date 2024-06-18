import { Button, Typography, ButtonProps } from '@mui/material';
import React from 'react';

interface IDateBox extends ButtonProps {
  startTime: string;
  gameDuration?: number;
  onClick: any;
  disabled?: boolean;
  isSelected?: boolean;
}

export const DateBox: React.FC<IDateBox> = ({
  startTime,
  gameDuration,
  onClick,
  disabled,
  isSelected,
}) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      sx={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textTransform: 'initial',
        color: isSelected ? '#fff' : '#000',
        backgroundColor: isSelected ? '#0D2433' : '#fff',
        border: '1px solid #ddd',
        borderRadius: 1,
        minHeight: '38px',
        paddingY: 0.5,
        paddingX: 1,
        '&:disabled': {
          opacity: 0.8,
        },
        '&:hover': {
          opacity: 0.8,
          backgroundColor: isSelected ? '#0d2433de' : '#0D2433',
          color: '#fff',
        },
      }}
    >
      <Typography whiteSpace="nowrap" fontWeight={600}>
        {startTime}
      </Typography>
      {gameDuration && (
        <Typography textAlign="center" color="gray" fontSize={12}>
          {gameDuration}мин
        </Typography>
      )}
    </Button>
  );
};

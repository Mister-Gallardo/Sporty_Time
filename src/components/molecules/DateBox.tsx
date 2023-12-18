import { Button, Typography, ButtonProps } from '@mui/material';
import React from 'react';

interface IDateBox extends ButtonProps {
  startTime: string;
  gameDuration?: number;
  onClick: any;
  disabled?: boolean;
}

export const DateBox: React.FC<IDateBox> = ({
  startTime,
  gameDuration,
  onClick,
  disabled,
}) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textTransform: 'initial',
        color: '#000',
        border: '1px solid #ddd',
        borderRadius: 1,
        minHeight: '38px',
        paddingY: 0.5,
        paddingX: 1,
        '&:disabled': {
          opacity: 0.8,
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

import { Button } from '@mui/material';
import React, { PropsWithChildren } from 'react';

interface IFilterButtonProps extends PropsWithChildren {
  handleClick: () => void;
  disabled?: boolean;
}

export const FilterButton: React.FC<IFilterButtonProps> = ({
  handleClick,
  children,
  disabled,
}) => {
  return (
    <Button
      onClick={handleClick}
      sx={{
        backgroundColor: 'secondary.main',
        textTransform: 'initial',
        color: '#fff',
        borderRadius: 10,
        fontWeight: 600,
        py: 1.1,
        transition: 'all .2s ease',
        '&:disabled': {
          opacity: 0.4,
          color: '#fff',
        },
        '&:hover': {
          backgroundColor: '#000',
        },
      }}
      fullWidth
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

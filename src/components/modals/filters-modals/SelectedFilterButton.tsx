import { Button } from '@mui/material';
import React, { PropsWithChildren } from 'react';

interface ISelectedFilterButtonProps extends PropsWithChildren {
  handleClick: () => void;
}

export const SelectedFilterButton: React.FC<ISelectedFilterButtonProps> = ({
  handleClick,
  children,
}) => {
  return (
    <Button
      onClick={handleClick}
      sx={{
        backgroundColor: '#0D2433',
        color: '#fff',
        whiteSpace: 'nowrap',
        padding: 0,
        paddingX: 1.5,
        borderRadius: 5,
        fontSize: 13,
        '&:hover': {
          backgroundColor: '#0d2433de',
        },
      }}
    >
      {children}
    </Button>
  );
};

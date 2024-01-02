import { Box, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

interface IModalContentContainerProps {
  title: string;
  children: ReactNode;
}

export const ModalContentContainer: React.FC<IModalContentContainerProps> = ({
  title,
  children,
}) => {
  return (
    <Box flexGrow={1}>
      <Typography mb={1.5} fontSize={16} fontWeight={600}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

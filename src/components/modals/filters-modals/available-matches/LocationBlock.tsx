import { Box, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

interface ILocationBlockProps {
  icon: ReactNode;
  title: string;
  subTitle?: string;
  handleClick?: () => void;
}

export const LocationBlock: React.FC<ILocationBlockProps> = ({
  icon,
  title,
  subTitle,
  handleClick,
}) => {
  return (
    <Box
      onClick={handleClick}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height={100}
      minWidth={120}
      width={120}
      borderRadius={2}
      boxShadow="1px 2px 6px #00000008"
      p={1}
      sx={{ cursor: handleClick ? 'pointer' : 'default' }}
    >
      <Box>
        {icon}
        <Typography mt={0.5} color="gray" fontSize={10} lineHeight={1.1}>
          {title}
        </Typography>
      </Box>
      <Typography
        fontSize={11}
        lineHeight={1.1}
        fontWeight={600}
        color="primary.main"
      >
        {subTitle}
      </Typography>
    </Box>
  );
};

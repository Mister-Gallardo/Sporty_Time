import React from 'react';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Typography } from '@mui/material';

interface IPrivacyType {
  isPrivate: boolean;
}

export const PrivacyType: React.FC<IPrivacyType> = ({ isPrivate }) => {
  return (
    <Box
      border="1px solid #ddd"
      borderRadius={2}
      py={1.5}
      px={1}
      display="flex"
      alignItems="center"
      gap={0.8}
      bgcolor="#fff"
    >
      {isPrivate ? (
        <LockOutlinedIcon fontSize="small" />
      ) : (
        <LockOpenOutlinedIcon fontSize="small" />
      )}
      <Typography>{isPrivate ? 'Приватный матч' : 'Открытый матч'}</Typography>
    </Box>
  );
};

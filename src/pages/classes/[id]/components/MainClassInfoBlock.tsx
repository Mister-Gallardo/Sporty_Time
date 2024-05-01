import React from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

export const MainClassInfoBlock = () => {
  return (
    <Box width="100%" border="1px solid #eee" p={1.5}>
      <Box mb={1} display="flex" gap={0.5}>
        <PaidOutlinedIcon fontSize="small" />
        <Typography color="#696969">price per place</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={2}>
        <Typography textTransform="uppercase" fontWeight={600} flexGrow={1}>
          day and time
        </Typography>
        <Divider orientation="vertical" flexItem variant="fullWidth" />
        <Stack alignItems="center">
          <AccessTimeOutlinedIcon />
          <Typography>play time</Typography>
        </Stack>
      </Box>
    </Box>
  );
};

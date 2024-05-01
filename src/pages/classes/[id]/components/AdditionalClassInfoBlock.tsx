import React from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';

export const AdditionalClassInfoBlock = () => {
  return (
    <Box width="100%" border="1px solid #eee" p={1.5}>
      <Typography color="#696969">Конец регистрации</Typography>
      <Typography
        mb={2}
        textTransform="uppercase"
        fontWeight={600}
        flexGrow={1}
      >
        day and time
      </Typography>

      <Box display="flex" justifyContent="space-between" gap={2}>
        <Box>
          <Typography color="#696969">Категория</Typography>
          <Typography textTransform="uppercase" fontWeight={600} flexGrow={1}>
            open
          </Typography>
        </Box>
        <Divider orientation="vertical" flexItem variant="fullWidth" />
        <Stack alignItems="center">
          <Typography color="#696969">Уровень</Typography>
          <Typography fontSize={18} fontWeight={600}>
            0
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { SectionTitle } from './SectionTitle';

interface IStatisticsProps {}

export const Statistics: React.FC<IStatisticsProps> = () => {
  return (
    <Box width="100%" maxWidth={370}>
      <SectionTitle title="Статистика" />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        border="1px solid #eee"
        p={1.5}
      >
        <Box>
          <Box display="flex" mb={2}>
            <Stack alignItems="center" width={100}>
              <Typography fontSize={25} fontWeight={400}>
                145
              </Typography>
              <Typography fontSize={12}>Всего</Typography>
            </Stack>
            <Divider variant="middle" flexItem orientation="vertical" />
            <Stack alignItems="center" width={100}>
              <Typography fontSize={25} fontWeight={400} color="success.main">
                100
              </Typography>
              <Typography fontSize={12} color="success.main">
                Побед
              </Typography>
            </Stack>
          </Box>
          <Box display="flex">
            <Stack alignItems="center" width={100}>
              <Typography fontSize={25} fontWeight={400}>
                10
              </Typography>
              <Typography fontSize={12}>Последние</Typography>
            </Stack>
            <Divider variant="middle" flexItem orientation="vertical" />
            <Stack alignItems="center" width={100}>
              <Typography fontSize={25} fontWeight={400} color="success.main">
                5
              </Typography>
              <Typography fontSize={12} color="success.main">
                Побед
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography fontSize={35} fontWeight={500}>
              50%
            </Typography>
            <Typography fontSize={10}>Эффективность</Typography>
            <Typography fontSize={10}>Последние 10</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

import { Box, Stack } from '@mui/material';
import React from 'react';
import { FeedbackCard } from '../../../components/molecules/FeedbackCard';

export default function FeedbackTab() {
  return (
    <Box bgcolor="#fff">
      <Box width="100%" m="auto" maxWidth={700} px={2} pt={3} bgcolor="#fff">
        <Stack spacing={1}>
          {[1, 2, 3, 4, 5, 6, 7].map((feedback) => {
            return <FeedbackCard key={feedback} />;
          })}
        </Stack>
      </Box>
    </Box>
  );
}

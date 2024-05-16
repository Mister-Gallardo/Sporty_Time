import { Box, Stack } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router';
import { FeedbackCard } from '../../../../components/molecules/FeedbackCard';

export function FeedbacksTab() {
  const { clubId } = useParams<{ clubId: string }>();
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

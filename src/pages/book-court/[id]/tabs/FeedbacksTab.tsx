import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router';
import { FeedbackCard } from '../../../../components/molecules/FeedbackCard';
import { useQuery } from '@tanstack/react-query';
import { getClubReviews } from '../../../../services/club/service';
import { LoadingCircle } from '../../../../components/atoms/LoadingCircle';
import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp';

export function FeedbacksTab() {
  const { clubId } = useParams<{ clubId: string }>();

  const { data, isLoading } = useQuery({
    queryKey: ['feedbacks', +clubId],
    queryFn: () => getClubReviews(+clubId),
  });

  const feedbacksList = data?.feedbacks;

  return (
    <Box bgcolor="#fff">
      <Box width="100%" m="auto" maxWidth={700} px={2} pt={3} bgcolor="#fff">
        {isLoading && <LoadingCircle />}
        {feedbacksList && feedbacksList.length === 0 ? (
          <Typography textAlign="center" color="gray">
            Пусто...
          </Typography>
        ) : (
          !isLoading && (
            <Box display="flex" justifyContent="center" gap={4} mb={4}>
              <Stack direction="row" spacing={1}>
                <Typography fontSize={16}>Рейтинг клуба:</Typography>
                <Box display="flex" alignItems="center">
                  <Typography fontSize={16} fontWeight={600}>
                    {data?.rating}
                  </Typography>
                  <StarPurple500SharpIcon />
                </Box>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Typography fontSize={16}>Отзывов:</Typography>
                <Typography fontSize={16} fontWeight={600}>
                  {feedbacksList?.length}
                </Typography>
              </Stack>
            </Box>
          )
        )}
        <Stack spacing={1}>
          {feedbacksList?.map((feedback) => {
            return <FeedbackCard key={feedback.id} {...feedback} />;
          })}
        </Stack>
      </Box>
    </Box>
  );
}

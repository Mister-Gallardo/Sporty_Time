import { Box, Stack, Typography } from '@mui/material';
import { FeedbackCard } from '../../../components/molecules/FeedbackCard';
import { useQuery } from '@tanstack/react-query';
import { getClassReviews } from '../../../services/classes';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp';
import { usePlayerProfile } from '../../../services/api/hooks';
import { useParams } from 'react-router';
import { getSpecificUser } from '../../../services/user/service';

export default function FeedbackTab() {
  const { userId } = useParams<{ userId: string }>();
  const [player] = usePlayerProfile();

  const { data: userData } = useQuery({
    queryKey: ['users', userId],
    queryFn: () => getSpecificUser(+userId),
    retry: 1,
    enabled: !!userId,
  });

  const playerId = userData?.data?.player?.id;

  const { data, isLoading } = useQuery({
    queryKey: ['feedbacks', player?.id],
    queryFn: () => getClassReviews((userId ? playerId : player?.id) || 0),
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
                <Typography fontSize={16}>Рейтинг тренера:</Typography>
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

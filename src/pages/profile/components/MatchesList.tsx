import { Box } from '@mui/material';
import { useParams } from 'react-router';
import { SectionTitle } from './SectionTitle';
import { useQuery } from '@tanstack/react-query';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { MyMatchCard } from '../../../components/molecules/match-cards/MyMatchCard';
import { getSpecificUserMatchBookings } from '../../../services/matches/service';
import { useUserInfo } from '../../../services/api/hooks';

export const MatchesList = () => {
  const { userId } = useParams<{ userId: string }>();

  const [user] = useUserInfo();
  const myUserId = user?.id;

  const currentUserId = userId ? userId : myUserId || 0;

  const { data, isLoading } = useQuery({
    queryKey: [`match-bookings`, currentUserId],
    queryFn: () => getSpecificUserMatchBookings(+currentUserId, 0),
  });

  const myMatchesData = data?.data;

  return (
    <Box mt={4}>
      <SectionTitle title="Матчи" />
      <Box
        display="flex"
        gap={2}
        overflow="auto"
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          msOverflowStyle: 'none',
        }}
      >
        {isLoading ? (
          <LoadingCircle />
        ) : (
          myMatchesData
            ?.map((card) => {
              return <MyMatchCard key={card.id} {...card?.match} />;
            })
            ?.reverse()
        )}
      </Box>
    </Box>
  );
};

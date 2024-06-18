import { Box } from '@mui/material';
import { useParams } from 'react-router';
import { SectionTitle } from './SectionTitle';
import { useQuery } from '@tanstack/react-query';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { MyMatchCard } from '../../../components/molecules/match-cards/MyMatchCard';
import { getSpecificUserMatchBookings } from '../../../services/matches/service';
import { useUserInfo } from '../../../services/api/hooks';
import { useFormContext } from 'react-hook-form';

export const MatchesList = () => {
  const { userId } = useParams<{ userId: string }>();

  const { watch } = useFormContext();
  const sport = watch('sport');

  const [user] = useUserInfo();
  const myUserId = user?.id;

  const currentUserId = userId ? userId : myUserId || 0;

  const { data, isLoading } = useQuery({
    queryKey: [`match-bookings`, currentUserId, sport],
    queryFn: () => getSpecificUserMatchBookings(+currentUserId, 0, sport),
  });

  const matchesList = data?.data;

  if (matchesList && matchesList.length === 0) return;

  return (
    <Box mt={4}>
      {isLoading && <LoadingCircle />}
      {matchesList && (
        <>
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
            {matchesList
              .map((card) => {
                return <MyMatchCard key={card.id} {...card?.match} />;
              })
              ?.reverse()}
          </Box>
        </>
      )}
    </Box>
  );
};

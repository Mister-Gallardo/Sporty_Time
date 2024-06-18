import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { SectionTitle } from './SectionTitle';
import { useQuery } from '@tanstack/react-query';
import { getSpecificUserMatchBookings } from '../../../services/matches/service';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { usePlayerProfile } from '../../../services/api/hooks';
import { MatchData } from '../../../services/matches/interface';
import { isPlatform } from '@ionic/react';
import { useParams } from 'react-router';
import { getSpecificUser } from '../../../services/user/service';
import { useFormContext } from 'react-hook-form';

interface IStatisticsProps {}

const isMobile = isPlatform('mobile');

// variable responsible for the number of last matches to calculate effectiveness
const matchesAmount = 10;

const countWins = (matches?: { match: MatchData }[], playerId?: number) => {
  if (!matches) return 0;

  const winStatistic = matches?.filter((data) => {
    const matchBookings = data?.match?.matchBookings;
    if (matchBookings) {
      const myPlayerBooking = matchBookings.find(
        (booking) => booking?.player?.id === playerId,
      );

      if (myPlayerBooking?.team === data?.match?.winningTeam) return data;
    }
  });

  return winStatistic.length;
};

export const Statistics: React.FC<IStatisticsProps> = () => {
  const { userId } = useParams<{ userId: string }>();

  const { watch } = useFormContext();
  const sport = watch('sport');

  const [player] = usePlayerProfile();
  const myUserId = player?.user?.id;
  const myPlayerId = player?.id;

  const { data: specificUser } = useQuery({
    queryKey: ['users', userId],
    queryFn: () => getSpecificUser(+userId),
    enabled: !!userId,
  });
  const playerId = specificUser?.data?.player?.id;

  const currentUserId = userId ? userId : myUserId || 0;
  const currentPlayerId = userId ? playerId : myPlayerId || 0;

  const { data, isLoading } = useQuery({
    queryKey: [`match-bookings`, currentUserId, sport],
    queryFn: () => getSpecificUserMatchBookings(+currentUserId, 0, sport),
  });

  const matchesList = data?.data;
  if (matchesList && matchesList.length === 0) return;

  const fullWinStatistic = countWins(matchesList, currentPlayerId);
  const lastTenWinStatistic = countWins(
    matchesList?.slice(0, 10),
    currentPlayerId,
  );

  // count effectiveness in percent(%)
  const effectiveness = (100 * lastTenWinStatistic) / matchesAmount;

  return (
    <Box width={isMobile ? '100%' : 400}>
      {isLoading && <LoadingCircle />}
      {matchesList && (
        <>
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
                <Stack alignItems="center" width={90}>
                  <Typography fontSize={25} fontWeight={400}>
                    {matchesList?.length}
                  </Typography>
                  <Typography fontSize={12}>Всего</Typography>
                </Stack>
                <Divider variant="middle" flexItem orientation="vertical" />
                <Stack alignItems="center" width={90}>
                  <Typography
                    fontSize={25}
                    fontWeight={400}
                    color="success.main"
                  >
                    {fullWinStatistic}
                  </Typography>
                  <Typography fontSize={12} color="success.main">
                    Побед
                  </Typography>
                </Stack>
              </Box>
              <Box display="flex">
                <Stack alignItems="center" width={90}>
                  <Typography fontSize={25} fontWeight={400}>
                    {matchesAmount}
                  </Typography>
                  <Typography fontSize={12}>Последние</Typography>
                </Stack>
                <Divider variant="middle" flexItem orientation="vertical" />
                <Stack alignItems="center" width={90}>
                  <Typography
                    fontSize={25}
                    fontWeight={400}
                    color="success.main"
                  >
                    {lastTenWinStatistic}
                  </Typography>
                  <Typography fontSize={12} color="success.main">
                    Побед
                  </Typography>
                </Stack>
              </Box>
            </Box>
            <Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                border="3px solid #333"
                p={2}
              >
                <Typography fontSize={35} fontWeight={500}>
                  {effectiveness}%
                </Typography>
                <Typography fontSize={10}>Эффективность</Typography>
                <Typography fontSize={10}>Последние {matchesAmount}</Typography>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

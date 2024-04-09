import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { ToggleButton } from '../../../components/atoms/ToggleButton';
import { RatingChart } from '../../../components/molecules/RatingChart';
import { SectionTitle } from './SectionTitle';
import { isPlatform } from '@ionic/react';
import { useQuery } from '@tanstack/react-query';
import { getSpecificUserMatchBookings } from '../../../services/matches/service';
import { MatchData } from '../../../services/matches/interface';
import { usePlayerProfile } from '../../../services/api/hooks';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { MatchHistoryCard } from './MatchHistoryCard';

const results = [
  {
    id: '5',
    title: '5 результатов',
    limit: 5,
  },
  {
    id: '10',
    title: '10 результатов',
    limit: 10,
  },
  {
    id: 'ALL',
    title: 'Все результаты',
    limit: 0,
  },
];

export interface ICurrentMatch extends MatchData {
  ratingAfterMatch: number;
  ratingProfit: number;
  match: MatchData;
}
interface ILevelProgressionProps {}

const isMobile = isPlatform('mobile');

export const LevelProgression: React.FC<ILevelProgressionProps> = () => {
  const { userId } = useParams<{ userId: string }>();

  const [player] = usePlayerProfile();
  const myUserId = player?.user?.id;

  const currentUserId = userId ? userId : myUserId || 0;

  const [matchesLimit, setMatchesLimit] = useState(5);

  const { data, isLoading, isError } = useQuery({
    queryKey: [`match-bookings`, matchesLimit, currentUserId],
    queryFn: () => getSpecificUserMatchBookings(+currentUserId, matchesLimit),
  });
  const bookingsList = data?.data;

  const [currentMatch, setCurrentMatch] = useState<ICurrentMatch | null>(null);

  // set the first match to chart by default
  useEffect(() => {
    if (!bookingsList || bookingsList.length < 1) return;
    setCurrentMatch(bookingsList[0]);
  }, [bookingsList]);

  return (
    <Box width="100%">
      <SectionTitle title="Прогресс уровня" />

      <Box>
        <Box
          mb={1}
          pb={1}
          display="flex"
          justifyContent={isMobile ? 'unset' : 'center'}
          width="100%"
          overflow="auto"
          gap={1}
          sx={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            msOverflowStyle: 'none',
          }}
        >
          {results.map((item) => (
            <ToggleButton
              key={item.id}
              value={item.id}
              aria-label={item.title}
              onClick={() => setMatchesLimit(item.limit)}
              selected={matchesLimit === item.limit}
            >
              {item.title}
            </ToggleButton>
          ))}
        </Box>
        {isError && (
          <Box
            height={115}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography color="gray">Матч не найден</Typography>
          </Box>
        )}
        {isLoading ? (
          <Box height={115}>
            <LoadingCircle />
          </Box>
        ) : currentMatch ? (
          <MatchHistoryCard {...currentMatch} />
        ) : (
          <Typography color="gray" textAlign="center" mt={2}>
            История матчей пуста
          </Typography>
        )}
      </Box>

      <RatingChart
        matchesLimit={matchesLimit}
        setCurrentMatch={setCurrentMatch}
      />
    </Box>
  );
};

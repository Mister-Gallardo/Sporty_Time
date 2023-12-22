import { Box, Typography } from '@mui/material';
import { MatchCard } from '../../../components/molecules/MatchCard';
import { isPlatform } from '@ionic/react';
import { useQuery } from '@tanstack/react-query';
import {
  getAvailableMatches,
  getAvailableNoRatingMatches,
} from '../../../services/matches/service';
import { ClubMultipleDatesCard } from '../../../components/molecules/ClubMultipleDatesCard';
import { Accordion } from '../../../components/molecules/Accordion';
import { getClubs } from '../../../services/club/service';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';

// static 'gameDates' array for daily requests with actual dates (just for now)
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
const dayAfterTomorrow = new Date(tomorrow);
dayAfterTomorrow.setDate(tomorrow.getDate() + 1);

const gameDates = [today, tomorrow, dayAfterTomorrow];

export function AvailableMatchesTab() {
  const isMobile = isPlatform('mobile');

  const availableMatches = useQuery({
    queryKey: [`available-matches`],
    queryFn: getAvailableMatches,
  });
  const availableArray = availableMatches.data?.data;

  const noRatingMatches = useQuery({
    queryKey: [`available-no-rating`],
    queryFn: getAvailableNoRatingMatches,
  });
  const noRatingArray = noRatingMatches.data?.data;

  const clubs = useQuery({
    queryKey: ['clubs', gameDates],
    queryFn: () => getClubs(gameDates),
  });

  const clubsArray = clubs.data;

  return (
    <Box
      position="relative"
      mb={isMobile ? '2.5rem' : 'unset'}
      paddingInline={isMobile ? '10px' : '2rem'}
      paddingBlock="1.25rem"
      bgcolor="white"
    >
      <Accordion
        title="Для вашего уровня"
        description="Эти матчи полностью соответствуют вашему запросу и текущему уровню"
      >
        <Box
          sx={{
            paddingBottom: '.75rem',
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
          }}
        >
          {availableMatches.isLoading ? (
            <LoadingCircle />
          ) : (
            !availableArray ||
            (availableArray.length === 0 ? (
              <Typography textAlign="center" width="100%" mt={3} color="gray">
                На данный момент нет доступных матчей для вашего уровня
              </Typography>
            ) : (
              availableArray.map((card, index) => {
                return <MatchCard key={index} {...card} />;
              })
            ))
          )}
        </Box>
      </Accordion>

      <Accordion
        title="Запросить место"
        description="Эти матчи не соответствуют вашему текущему уровню. Вам необходимо сделать запрос на присоединение"
      >
        <Box
          sx={{
            paddingBottom: '.75rem',
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
          }}
        >
          {noRatingMatches.isLoading ? (
            <LoadingCircle />
          ) : (
            !noRatingArray ||
            (noRatingArray.length === 0 ? (
              <Typography textAlign="center" width="100%" mt={3} color="gray">
                На данный момент нет доступных матчей
              </Typography>
            ) : (
              noRatingArray.map((card, index) => {
                return <MatchCard key={index} {...card} />;
              })
            ))
          )}
        </Box>
      </Accordion>

      <Accordion
        title="Стать первым игроком!"
        description="Создайте новый матч, выбрав подходящее время"
      >
        <Box
          display="flex"
          flexDirection={isMobile ? 'column' : 'row'}
          gap={2}
          width="100%"
        >
          {!clubsArray || clubsArray.length === 0 ? (
            <Typography textAlign="center" width="100%" mt={3} color="gray">
              На данный момент нет доступных матчей
            </Typography>
          ) : (
            clubsArray.map((club, index) => {
              return <ClubMultipleDatesCard key={index} {...club} />;
            })
          )}
        </Box>
      </Accordion>
    </Box>
  );
}

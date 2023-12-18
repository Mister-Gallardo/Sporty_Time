import { Box, Typography } from '@mui/material';
import { MatchCard } from '../../../components/molecules/MatchCard';
import { IonLoading, isPlatform } from '@ionic/react';
import { useQuery } from '@tanstack/react-query';
import { getAvailableMatches } from '../../../services/matches/service';
import { ClubMultipleDatesCard } from '../../../components/molecules/ClubMultipleDatesCard';
import { Accordion } from '../../../components/molecules/Accordion';
import { getClubs } from '../../../services/club/service';

// static 'gameDates' array for daily requests with actual dates (just for now)
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
const dayAfterTomorrow = new Date(tomorrow);
dayAfterTomorrow.setDate(tomorrow.getDate() + 1);

const gameDates = [today, tomorrow, dayAfterTomorrow];

export function AvailableMatchesTab() {
  const isMobile = isPlatform('mobile');

  const { data, isLoading } = useQuery({
    queryKey: [`available-matches`],
    queryFn: getAvailableMatches,
  });

  const availableMatchesArray = data?.data;

  const query = useQuery({
    queryKey: ['clubs', gameDates],
    queryFn: () => getClubs(gameDates),
  });

  if (isLoading) {
    return <IonLoading isOpen />;
  }

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
          {(data?.data.length === 0 || !data) && (
            <Typography
              sx={{
                fontSize: '1.1rem',
                paddingTop: '1.5rem',
                margin: '0 auto',
                fontWeight: '600',
              }}
            >
              Доступных матчей пока нет
            </Typography>
          )}
          {availableMatchesArray?.map((card, index) => {
            return <MatchCard key={index} {...card} />;
          })}
        </Box>
      </Accordion>
      <Accordion
        title="Запросите место"
        description="Эти матчи не соответствуют вашему уровню. Чтобы присоединиться к
        ним, вам необходимо запросить место."
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
          {(data?.data.length === 0 || !data) && (
            <Typography
              sx={{
                fontSize: '1.1rem',
                paddingTop: '1.5rem',
                margin: '0 auto',
                fontWeight: '600',
              }}
            >
              Доступных матчей пока нет
            </Typography>
          )}
          {availableMatchesArray?.map((card, index) => {
            return <MatchCard key={index} {...card} />;
          })}
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
          {query.data &&
            query.data.length > 0 &&
            query.data.map((club, index) => (
              <ClubMultipleDatesCard key={index} {...club} />
            ))}
        </Box>
      </Accordion>
    </Box>
  );
}

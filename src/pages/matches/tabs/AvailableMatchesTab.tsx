import { Box, Button, IconButton, Typography } from '@mui/material';
import { isPlatform } from '@ionic/react';
import { useQuery } from '@tanstack/react-query';
import {
  getAvailableMatches,
  getAvailableNoRatingMatches,
} from '../../../services/matches/service';
import { AdvancedFilterAvailableMatchesModal } from '../../../components/modals/AdvancedFilterAvailableMatchesModal';
import { FilterAvailableMatchesModal } from '../../../components/modals/FilterAvailableMatchesModal';
import { AvailableMatchCard } from '../../../components/molecules/match-cards/AvailableMatchCard';
import { ClubMultipleDatesCard } from '../../../components/molecules/ClubMultipleDatesCard';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { Accordion } from '../../../components/molecules/Accordion';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import { getClubs } from '../../../services/club/service';
import useToggle from '../../../hooks/useToggle';

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

  const [openFilterModal, setOpenFilterModal] = useToggle();
  const [openAdvancedFilterModal, setOpenAdvancedFilterModal] = useToggle();

  return (
    <Box position="relative">
      <Box
        position={isMobile ? 'fixed' : 'unset'}
        zIndex={1}
        width="100%"
        display="flex"
        bgcolor="#fff"
        borderBottom="1px solid #eaeaea"
        py={0.5}
      >
        <IconButton onClick={() => setOpenAdvancedFilterModal()}>
          <TuneOutlinedIcon sx={{ color: '#000' }} />
        </IconButton>
        <Button onClick={() => setOpenFilterModal()}>Set filter</Button>
      </Box>
      <Box
        maxWidth={isMobile ? 'unset' : 1000}
        mb={isMobile ? '2.5rem' : 'unset'}
        px={isMobile ? '10px' : '2rem'}
        pt={6}
        pb="1.25rem"
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
                  return <AvailableMatchCard key={index} matchData={card} />;
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
                  return <AvailableMatchCard key={index} matchData={card} />;
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

      <FilterAvailableMatchesModal
        openState={openFilterModal}
        handleModal={setOpenFilterModal}
      />
      <AdvancedFilterAvailableMatchesModal
        openState={openAdvancedFilterModal}
        handleModal={setOpenAdvancedFilterModal}
      />
    </Box>
  );
}

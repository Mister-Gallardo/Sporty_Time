import { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { isPlatform } from '@ionic/react';
import { useQuery } from '@tanstack/react-query';
import {
  getAvailableMatches,
  getAvailableNoRatingMatches,
} from '../../../services/matches/service';
import { FilterMatchesModal } from '../../../components/modals/filters-modals/available-matches/FilterMatchesModal';
import { AvailableMatchCard } from '../../../components/molecules/match-cards/AvailableMatchCard';
import { ClubMultipleDatesCard } from '../../../components/molecules/ClubMultipleDatesCard';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { Accordion } from '../../../components/molecules/Accordion';
import { MatchTimeRange } from '../../../services/club/interface';
import { getClubs } from '../../../services/club/service';
import { FormProvider, useForm } from 'react-hook-form';
import noResults from '../../../images/no-results.svg';
import { FiltersRow } from './components/FiltersRow';
import useToggle from '../../../hooks/useToggle';
import { useSearchParam } from '../../../hooks/useSearchParams';
import { usePlayerProfile } from '../../../services/api/hooks';
import { Sport } from '../../../types';

export interface FilterFormDate {
  sportLevel: string;
  sport: string;
  clubsId: number[];
  gamedates: { value: Date }[];
  lat: number;
  long: number;
  selectedLocation: string;
  time: MatchTimeRange;
  times: { value: string }[];
  range: number;
}

const isMobile = isPlatform('mobile');

export function AvailableMatchesTab() {
  const [, setQ] = useSearchParam('q');
  const [openFilterModal, setOpenFilterModal] = useToggle();

  const filtersFromLocalStorage = localStorage.getItem(
    'availableMatchesFilters',
  );
  const [localFilters] = useState(
    filtersFromLocalStorage ? JSON.parse(filtersFromLocalStorage) : null,
  );

  const filterParams = useForm<FilterFormDate>({
    defaultValues: {
      sportLevel: localFilters?.sportLevel || '',
      sport: localFilters?.sport || '',
      clubsId: localFilters?.clubsId || [],
      gamedates: localFilters?.gamedates || [],
      lat: localFilters?.lat || 0,
      long: localFilters?.long || 0,
      selectedLocation: localFilters?.selectedLocation || 'Выбрать локацию',
      time: localFilters?.time || MatchTimeRange.ALL,
      times: localFilters?.times || [],
      range: localFilters?.range || 50,
    },
  });
  const { watch, setValue } = filterParams;
  const { sport, gamedates, clubsId, time } = watch();

  const [user] = usePlayerProfile();

  // If user already passed some sport test - set this sport as default
  // and navigate him to the next filter-question
  useEffect(() => {
    if (!user) return;

    const isRating =
      user.ratingPadel || user.ratingTennis || user.ratingPickleball;
    if (isRating) setQ('3');

    if (user.ratingPadel) return setValue('sport', Sport.PADEL);
    if (user.ratingTennis) return setValue('sport', Sport.TENNIS);
    if (user.ratingPickleball) return setValue('sport', Sport.PICKLEBALL);
  }, [user]);

  // if filters history is emty - open filters modal
  useEffect(() => {
    if (localFilters) return;
    setOpenFilterModal(true);
  }, []);

  const gameDatesToString = gamedates
    .map((date) => new Date(date.value).toLocaleDateString('en-ca'))
    .join(',');
  const clubsIdToString = clubsId.map((clubVal) => clubVal).join(',');

  // Get Available matches
  const availableMatches = useQuery({
    queryKey: [`available-matches`],
    queryFn: () =>
      getAvailableMatches({
        sport,
        gamedates: gameDatesToString,
        clubs: clubsIdToString,
        time: 'ALL',
      }),
  });
  const availableArray = availableMatches.data?.data;

  // Get available matches with out of lvl range
  const noRatingMatches = useQuery({
    queryKey: [`available-no-rating`],
    queryFn: () =>
      getAvailableNoRatingMatches({
        sport,
        gamedates: gameDatesToString,
        clubs: clubsIdToString,
        time: 'ALL',
      }),
  });
  const noRatingArray = noRatingMatches.data?.data;

  //leave for now
  const [timefrom, timeto] = time.split('-');

  // Get available clubs
  const clubs = useQuery({
    queryKey: ['clubs'],
    queryFn: () =>
      getClubs({
        sport,
        gamedates: gameDatesToString,
        clubs: clubsIdToString,
        timefrom,
        timeto,
      }),
  });
  const clubsArray = clubs.data?.data;

  const onFiltersApply = () => {
    availableMatches.refetch();
    noRatingMatches.refetch();
    clubs.refetch();

    localStorage.setItem('availableMatchesFilters', JSON.stringify(watch()));
    if (openFilterModal) setOpenFilterModal();
  };

  const isMainFilters = !!sport && gamedates.length > 0;

  return (
    <Box position="relative">
      <FormProvider {...filterParams}>
        <FiltersRow handleModal={setOpenFilterModal} />
      </FormProvider>

      <Box
        maxWidth={isMobile ? 'unset' : 1240}
        mb={isMobile ? '2.5rem' : 'unset'}
        px={isMobile ? '10px' : '2rem'}
        pt={6}
        pb="1.25rem"
      >
        {isMainFilters ? (
          <>
            <Accordion
              title="Для вашего уровня"
              description="Эти матчи полностью соответствуют вашему запросу и текущему уровню"
            >
              <Box display="flex" gap={1.5} overflow="auto" pb={1}>
                {availableMatches.isLoading ? (
                  <LoadingCircle />
                ) : !availableArray || availableArray.length === 0 ? (
                  <Typography
                    textAlign="center"
                    width="100%"
                    mt={3}
                    color="gray"
                  >
                    На данный момент нет доступных матчей для вашего уровня по
                    текущему запросу
                  </Typography>
                ) : (
                  availableArray.map((card, index) => {
                    return <AvailableMatchCard key={index} matchData={card} />;
                  })
                )}
              </Box>
            </Accordion>
            <Accordion
              title="Запросить место"
              description="Эти матчи не соответствуют вашему текущему уровню. Вам необходимо сделать запрос на присоединение"
            >
              <Box display="flex" gap={1.5} overflow="auto" pb={1}>
                {noRatingMatches.isLoading ? (
                  <LoadingCircle />
                ) : !noRatingArray || noRatingArray.length === 0 ? (
                  <Typography
                    textAlign="center"
                    width="100%"
                    mt={3}
                    color="gray"
                  >
                    На данный момент нет доступных матчей по текущему запросу
                  </Typography>
                ) : (
                  noRatingArray.map((card, index) => {
                    return <AvailableMatchCard key={index} matchData={card} />;
                  })
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
                  <Typography
                    textAlign="center"
                    width="100%"
                    mt={3}
                    color="gray"
                  >
                    На данный момент нет доступных матчей
                  </Typography>
                ) : (
                  clubsArray.map((club, index) => {
                    return <ClubMultipleDatesCard key={index} {...club} />;
                  })
                )}
              </Box>
            </Accordion>
          </>
        ) : (
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box
              component="img"
              src={noResults}
              width="100%"
              maxWidth={isMobile ? 250 : 500}
            />
            <Button onClick={() => setOpenFilterModal()} sx={{ fontSize: 14 }}>
              Настройте фильтры, что бы увидеть доступные матчи
            </Button>
          </Box>
        )}
      </Box>

      <FormProvider {...filterParams}>
        <FilterMatchesModal
          openState={openFilterModal}
          handleModal={setOpenFilterModal}
          onApply={onFiltersApply}
        />
      </FormProvider>
    </Box>
  );
}

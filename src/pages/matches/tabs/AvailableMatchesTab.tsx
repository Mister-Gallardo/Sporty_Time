import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
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
import { useCheckUserSport } from '../../../hooks/useCheckUserSport';
import { Accordion } from '../../../components/molecules/Accordion';
import { getUserLocation } from '../../../helpers/getUserLocation';
import { MatchTimeRange } from '../../../services/club/interface';
import { getClubs } from '../../../services/club/service';
import { FormProvider, useForm } from 'react-hook-form';
import { FiltersRow } from './components/FiltersRow';
import useToggle from '../../../hooks/useToggle';
import { useLocalStorage } from 'usehooks-ts';
import { Sport } from '../../../types';

export interface FilterFormDate {
  sportLevel: string;
  sport: Sport;
  clubsId: never[];
  gamedates: { value: Date }[];
  lat: number;
  long: number;
  selectedLocation: string;
  time: MatchTimeRange;
  times: { value: string }[];
  range: number;
}

const isMobile = isPlatform('mobile');

const now = new Date();
const dates = Array.from(Array(7)).map((_, i) => ({
  value: new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + i),
  ),
}));

export function AvailableMatchesTab() {
  const [openFilterModal, setOpenFilterModal] = useToggle();

  const defaultSport = useCheckUserSport();

  const [localFilters, setLocalFilters] = useLocalStorage('matchesFilter', {
    sport: defaultSport,
    time: MatchTimeRange.ALL,
    gamedates: dates,
    clubsId: [],
    selectedLocation: 'Выбрать локацию',
    range: 50,
  });

  const filterParams = useForm<FilterFormDate>({
    defaultValues: localFilters,
  });

  const { watch, setValue } = filterParams;
  const { sport, lat, long, gamedates, clubsId, time, selectedLocation } =
    watch();

  const gameDatesToString = gamedates
    .map((date) => new Date(date.value).toLocaleDateString('en-ca'))
    .join(',');
  const clubsIdToString = clubsId.map((clubVal) => clubVal).join(',');

  // Get Available matches
  const availableMatches = useQuery({
    queryKey: [`available-matches`, gamedates, clubsId],
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
    queryKey: [`available-no-rating`, gamedates, clubsId],
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
    queryKey: ['clubs', gamedates, clubsId],
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

  const [, setIsLoadingLocaiton] = useToggle();

  // set user location as default
  useEffect(() => {
    if (!lat && !long) getUserLocation(setIsLoadingLocaiton, setValue);
  }, []);

  useEffect(() => {
    setLocalFilters(watch());
  }, [sport, lat, long, timefrom, timeto, selectedLocation]);

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
        <Accordion
          title="Для вашего уровня"
          description="Эти матчи полностью соответствуют вашему запросу и текущему уровню"
        >
          <Box display="flex" gap={1.5} overflow="auto" pb={1}>
            {availableMatches.isLoading ? (
              <LoadingCircle />
            ) : !availableArray || availableArray.length === 0 ? (
              <Typography textAlign="center" width="100%" mt={3} color="gray">
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
              <Typography textAlign="center" width="100%" mt={3} color="gray">
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
            overflow="auto"
            py={2}
            px={0.1}
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

      <FormProvider {...filterParams}>
        <FilterMatchesModal
          openState={openFilterModal}
          handleModal={setOpenFilterModal}
        />
      </FormProvider>
    </Box>
  );
}

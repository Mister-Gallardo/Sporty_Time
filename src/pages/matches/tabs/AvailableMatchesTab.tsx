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
import { Accordion } from '../../../components/molecules/Accordion';
import { getUserLocation } from '../../../helpers/getUserLocation';
import { MatchTimeRange, MatchTimes } from '../../../services/club/interface';
import { getClubs, getClubsByLocation } from '../../../services/club/service';
import { FormProvider, useForm } from 'react-hook-form';
import { FiltersRow } from './components/FiltersRow';
import useToggle from '../../../hooks/useToggle';
import { useLocalStorage } from 'usehooks-ts';
import { ELeveling } from '../../question-form/questions';
import { ESport } from '../../../services/matches/interface';
import { format } from 'date-fns';

const getMatchTime = (time: MatchTimeRange) => {
  switch (time) {
    case MatchTimeRange.ALL:
      return MatchTimes.ALL;
    case MatchTimeRange.MORNING:
      return MatchTimes.MORNING;
    case MatchTimeRange.AFTERNOON:
      return MatchTimes.AFTERNOON;
    case MatchTimeRange.EVENING:
      return MatchTimes.EVENING;

    default:
      return MatchTimes.ALL;
  }
};

export interface FilterFormDate {
  forceRating: ELeveling;
  sport: ESport;
  clubsId: number[];
  gamedates: { value: Date }[];
  lat: number;
  long: number;
  selectedLocation: string;
  time: MatchTimeRange;
  // times: { value: string }[];
  range: number;
}

const isMobile = isPlatform('mobile');

export function AvailableMatchesTab() {
  const [openFilterModal, setOpenFilterModal] = useToggle();

  const [globalSport] = useLocalStorage('sport', ESport.PADEL);

  const [localFilters, setLocalFilters] = useLocalStorage('matchesFilter', {
    sport: globalSport,
    lat: 0,
    long: 0,
    forceRating: ELeveling.BEGINNER,
    time: MatchTimeRange.ALL,
    gamedates: [{ value: new Date() }],
    selectedLocation: 'Выбрать локацию',
    range: 50,
  });

  const filterParams = useForm<FilterFormDate>({
    defaultValues: localFilters,
  });

  const { watch, setValue } = filterParams;
  const {
    sport,
    lat,
    long,
    gamedates,
    clubsId,
    time,
    selectedLocation,
    forceRating,
    range,
  } = watch();

  const gameDatesToString = gamedates
    ?.map((date) => format(new Date(date.value), 'yyyy-MM-dd'))
    .join(',');
  const clubsIdToString = clubsId?.map((clubVal) => clubVal).join(',');

  const isEnabled =
    (Array.isArray(clubsId) && clubsId.length === 0) || clubsId === undefined;

  // Get Available matches
  const availableMatches = useQuery({
    queryKey: [`available-matches`, gamedates, clubsId],
    queryFn: () =>
      getAvailableMatches({
        sport,
        gamedates: gameDatesToString,
        clubs: clubsIdToString,
        time: getMatchTime(time),
      }),
    enabled: !!gamedates.length && !isEnabled,
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
        time: getMatchTime(time),
      }),
    enabled: !!gamedates.length && !isEnabled,
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
    enabled: !!gamedates.length && lat !== undefined && long !== undefined,
  });
  const clubsArray = clubs.data?.data;

  const [isLoadingLocaiton, setIsLoadingLocaiton] = useToggle();

  // set user location as default
  useEffect(() => {
    if (!lat && !long) getUserLocation(setIsLoadingLocaiton, setValue);
  }, []);

  // get clubs by lat and lng
  const { data, isLoading: isAllClubsLoading } = useQuery({
    queryKey: ['clubs/all', lat, long, sport],
    queryFn: () => getClubsByLocation({ lat, long, sport }),
    enabled: lat !== undefined && long !== undefined,
  });

  useEffect(() => {
    setLocalFilters(watch());
  }, [
    sport,
    lat,
    long,
    timefrom,
    timeto,
    selectedLocation,
    gamedates,
    forceRating,
    clubsId,
    range,
  ]);

  useEffect(() => {
    if (!data) return;
    if (localFilters.range === range) return;

    const clubs: number[] = [];

    data.forEach((club) => {
      if (club.range && club.range <= range) clubs.push(club.id);
    });

    setValue('clubsId', clubs);
  }, [range, lat, long]);

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
            {availableMatches.isLoading ||
            isAllClubsLoading ||
            isLoadingLocaiton ? (
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
            {noRatingMatches.isLoading ||
            isAllClubsLoading ||
            isLoadingLocaiton ? (
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
            alignItems={isMobile ? 'unset' : 'start'}
            flexDirection={isMobile ? 'column' : 'row'}
            gap={2}
            width="100%"
            overflow="auto"
            py={2}
            px={0.1}
          >
            {isAllClubsLoading || isLoadingLocaiton ? (
              <LoadingCircle />
            ) : (
              clubsArray?.map((club, index) => {
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

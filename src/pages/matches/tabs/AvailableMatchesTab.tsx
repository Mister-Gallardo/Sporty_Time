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
import { EType, getDayFormat } from '../../../helpers/getTimeDateString';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { Accordion } from '../../../components/molecules/Accordion';
// import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import { getSportName } from '../../../helpers/getSportName';
import { getClubs } from '../../../services/club/service';
import { FormProvider, useForm } from 'react-hook-form';
import noResults from '../../../images/no-results.svg';
import useToggle from '../../../hooks/useToggle';
import { Sport } from '../../../types';
import { useEffect, useState } from 'react';
import { MatchTimeRange } from '../../../services/club/interface';

export interface FilterFormDate {
  sport: string;
  clubsId: { value: number }[];
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
  const [openFilterModal, setOpenFilterModal] = useToggle();
  const [openAdvancedFilterModal, setOpenAdvancedFilterModal] = useToggle();

  const filtersFromLocalStorage = localStorage.getItem(
    'availableMatchesFilters',
  );
  const [localFilters] = useState(
    filtersFromLocalStorage ? JSON.parse(filtersFromLocalStorage) : null,
  );

  useEffect(() => {
    if (localFilters) return;
    setOpenFilterModal(true);
  }, []);

  const filterParams = useForm<FilterFormDate>({
    defaultValues: {
      sport: localFilters?.sport || '',
      clubsId: localFilters?.clubsId || [],
      gamedates: localFilters?.gamedates || [],
      lat: localFilters?.lat || 0,
      long: localFilters?.long || 0,
      selectedLocation: localFilters?.selectedLocation || 'Выбрать локацию',
      time: localFilters?.time || MatchTimeRange.ALL,
      range: localFilters?.range || 1,
    },
  });
  const { watch, getValues } = filterParams;

  const { sport, gamedates, clubsId, time } = watch();

  const gameDatesToString = gamedates
    .map((date) => new Date(date.value).toLocaleDateString('en-ca'))
    .join(',');
  const clubsIdToString = clubsId.map((clubVal) => clubVal.value).join(',');

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
    enabled: false,
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
    enabled: false,
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
    enabled: false,
  });
  const clubsArray = clubs.data?.data;

  const onFiltersApply = () => {
    availableMatches.refetch();
    noRatingMatches.refetch();
    clubs.refetch();

    localStorage.setItem('availableMatchesFilters', JSON.stringify(watch()));
    if (openFilterModal) setOpenFilterModal();
    // if (openAdvancedFilterModal) setOpenAdvancedFilterModal();
  };

  const onClearFilters = () => {
    localStorage.removeItem('availableMatchesFilters');
    window.location.reload();
  };

  const isMainFilters = !!sport && gamedates.length > 0;

  return (
    <Box position="relative">
      <Box
        position={isMobile ? 'fixed' : 'unset'}
        zIndex={1}
        width="100%"
        display="flex"
        alignItems="center"
        gap={1}
        bgcolor="#fff"
        borderBottom="1px solid #eaeaea"
        height={50}
        px={1}
      >
        {/* {isMainFilters && (
          <IconButton
            onClick={() => setOpenAdvancedFilterModal()}
            sx={{ padding: 0 }}
            disabled
          >
            <TuneOutlinedIcon />
          </IconButton>
        )} */}
        {isMainFilters ? (
          <>
            <Box
              display="flex"
              overflow="auto"
              gap={1}
              onClick={() => setOpenFilterModal()}
              sx={{
                cursor: 'pointer',
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
                msOverflowStyle: 'none',
              }}
            >
              <Typography
                px={2}
                py={0.5}
                bgcolor="#0D2433"
                color="#fff"
                borderRadius={5}
                fontSize={13}
                lineHeight={1.2}
                whiteSpace="nowrap"
              >
                {getSportName(sport as Sport)}
              </Typography>
              <Typography
                px={2}
                py={0.5}
                bgcolor="#0D2433"
                color="#fff"
                borderRadius={5}
                fontSize={13}
                lineHeight={1.2}
                whiteSpace="nowrap"
                maxWidth={210}
                noWrap
              >
                {gamedates
                  .map((date) => getDayFormat(date.value, EType.MONTH_AND_DAY))
                  .join(' | ')}
              </Typography>
            </Box>
            <Button
              onClick={onClearFilters}
              variant="outlined"
              sx={{
                fontSize: 13,
                borderRadius: 5,
                py: 0,
                whiteSpace: 'nowrap',
              }}
            >
              Сбросить все
            </Button>
          </>
        ) : (
          <Button
            onClick={() => setOpenFilterModal()}
            sx={{
              fontSize: 13,
              color: '#333',
              border: '1px solid #eee',
              borderRadius: 5,
              padding: 0,
              paddingX: 1,
            }}
          >
            Спорт | Клубы | Даты и время
          </Button>
        )}
      </Box>
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
        <FilterAvailableMatchesModal
          openState={openFilterModal}
          handleModal={setOpenFilterModal}
          onApply={onFiltersApply}
          localFilters={localFilters}
        />
        <AdvancedFilterAvailableMatchesModal
          openState={openAdvancedFilterModal}
          handleModal={setOpenAdvancedFilterModal}
          onApply={onFiltersApply}
        />
      </FormProvider>
    </Box>
  );
}

import { useEffect, useState } from 'react';
import { isPlatform } from '@ionic/react';
import { Box, Button, Typography } from '@mui/material';
import { AdvancedFilterClubsModal } from '../../components/modals/AdvancedFilterClubsModal';
import SportsTennisOutlinedIcon from '@mui/icons-material/SportsTennisOutlined';
import { FilterClubsModal } from '../../components/modals/FilterClubsModal';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { EType, addTime, getDayFormat } from '../../helpers/getTimeDateString';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import { ClubCard } from '../../components/molecules/ClubCard';
// import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import NearMeSharpIcon from '@mui/icons-material/NearMeSharp';
import { FormProvider, useForm } from 'react-hook-form';
import { getClubs } from '../../services/club/service';
import noResults from '../../images/no-results.svg';
import { useQuery } from '@tanstack/react-query';
import useToggle from '../../hooks/useToggle';
import { SelectSportModal } from '../../components/modals/SelectSportModal';
import { getSportName } from '../../helpers/getSportName';
import { Sport } from '../../types';
import { LoadingCircle } from '../../components/atoms/LoadingCircle';
import { isBefore, isToday, parse } from 'date-fns';
import { SelectClubLocationModal } from '../../components/modals/filters-modals/SelectClubLocationModal';

export interface FilterFormDate {
  sport: Sport;
  gamedates: Date;
  lat: number;
  long: number;
  timefrom: string;
  timeto: string;
  selectedLocation: string;
}

const now = new Date();

const countDefaultTime = () => {
  const hours = now.getHours();
  const minutes = now.getMinutes();

  let defaultTime = '';
  if (minutes > 30) {
    defaultTime += hours !== 23 ? `${hours + 1}:00` : `${hours}:00`;
  } else {
    defaultTime += `${hours}:30`;
  }

  return defaultTime;
};

export function BookCourt() {
  const isMobile = isPlatform('mobile');

  const filtersFromLocalStorage = localStorage.getItem('clubsFilters');
  const [localFilters] = useState(
    filtersFromLocalStorage ? JSON.parse(filtersFromLocalStorage) : null,
  );

  const gameDate = Date.parse(localFilters?.gamedates)
    ? new Date(localFilters?.gamedates)
    : now;
  const filterParams = useForm<FilterFormDate>({
    defaultValues: {
      sport: localFilters?.sport || '',
      gamedates: gameDate < now ? now : gameDate,
      lat: localFilters?.lat || 0,
      long: localFilters?.long || 0,
      timefrom: localFilters?.timefrom || countDefaultTime(),
      timeto: localFilters?.timeto || addTime(countDefaultTime(), 5 * 60),
      selectedLocation: localFilters?.selectedLocation || 'Выбрать локацию',
    },
  });

  const { watch, getValues, setValue } = filterParams;
  const { sport, gamedates, lat, long, timefrom, timeto, selectedLocation } =
    watch();

  // If the date selected by the user in the past has gone, set current date
  const isSelectedDateToday = isToday(new Date(localFilters?.gamedates));
  const parsedTargetDate = parse(
    localFilters?.gamedates,
    'yyyy-MM-dd',
    new Date(),
  );

  useEffect(() => {
    if (isBefore(parsedTargetDate, new Date()) && !isSelectedDateToday) {
      setValue('gamedates', now);
    }
  }, []);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['clubs', gamedates, sport, lat, long],
    queryFn: () =>
      getClubs({
        sport,
        gamedates: new Date(gamedates).toLocaleDateString('en-ca'),
        lat,
        long,
        timefrom: timefrom,
        timeto: timeto,
      }),
  });

  const clubs = data?.data;

  const [openSelectSport, setOpenSelectSport] = useToggle();
  const [openClubLocation, setOpenClubLocation] = useToggle();
  const [openFilterModal, setOpenFilterModal] = useToggle();
  const [openAdvancedFilterModal, setOpenAdvancedFilterModal] = useToggle();

  const onFilterApply = () => {
    refetch();

    localStorage.setItem('clubsFilters', JSON.stringify(getValues()));

    if (openFilterModal) setOpenFilterModal();
    // if (openAdvancedFilterModal) setOpenAdvancedFilterModal();
  };

  useEffect(() => {
    if (!timeto) {
      setValue('timeto', addTime(timefrom, 5 * 60));
    }
  }, []);

  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="center">
      <Box
        position="fixed"
        zIndex={2}
        bgcolor="#fff"
        width="100%"
        maxWidth={isMobile ? 'unset' : 1240}
        mx="auto"
        px={2}
        pb={2}
        boxShadow="0 7px 8px -2px #0000000f"
      >
        <Box display="flex" gap={1} mb={1}>
          <Button
            onClick={() => setOpenSelectSport()}
            sx={{
              flexGrow: 1,
              display: 'flex',
              gap: 2,
              justifyContent: 'start',
              backgroundColor: '#f5f6f8',
              color: '#676767',
            }}
          >
            <SportsTennisOutlinedIcon
              fontSize="small"
              sx={{ justifySelf: 'end' }}
            />
            <Typography>{getSportName(sport) || 'Вид спорта'}</Typography>
          </Button>

          {/* <IconButton
            disabled
            sx={{
              backgroundColor: '#f5f6f8',
              borderRadius: 1.5,
              minWidth: '45px',
              '&:disabled': {
                backgroundColor: '#f5f6f8',
              },
            }}
          >
            <FavoriteBorderIcon fontSize="small" />
          </IconButton> */}
        </Box>

        <Box display="flex" gap={1}>
          <Button
            onClick={() => setOpenClubLocation()}
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: '#f5f6f8',
              color: '#676767',
            }}
          >
            <Box display="flex" gap={2}>
              <FmdGoodOutlinedIcon
                fontSize="small"
                sx={{ justifySelf: 'end' }}
              />
              <Typography>{selectedLocation}</Typography>
            </Box>
            <NearMeSharpIcon fontSize="small" sx={{ justifySelf: 'end' }} />
          </Button>

          {/* <IconButton
            disabled
            sx={{
              backgroundColor: '#f5f6f8',
              borderRadius: 1.5,
              minWidth: '45px',
              '&:disabled': {
                backgroundColor: '#f5f6f8',
              },
            }}
          >
            <MapOutlinedIcon fontSize="small" />
          </IconButton> */}
        </Box>

        <Box mt={2} display="flex" gap={1.5} alignItems="center">
          {/* <IconButton
            sx={{ padding: 0 }}
            onClick={() => setOpenAdvancedFilterModal()}
            disabled
          >
            <TuneOutlinedIcon fontSize="small" />
          </IconButton> */}
          <Button
            onClick={() => setOpenFilterModal()}
            sx={{
              backgroundColor: '#0D2433',
              color: '#fff',
              padding: 0,
              paddingX: 1.5,
              borderRadius: 5,
              fontSize: 13,
              '&:hover': {
                backgroundColor: '#0d2433de',
              },
            }}
          >
            {getDayFormat(gamedates, EType.MONTH_AND_DAY)} | {timefrom}
            {timeto ? ` - ${timeto}` : ''}
          </Button>
        </Box>
      </Box>

      {isLoading ? (
        <Box marginTop={30}>
          <LoadingCircle />
        </Box>
      ) : (
        <Box
          pt={18}
          pb={5}
          sx={{
            paddingInline: isMobile ? '0' : '10px',
            display: 'grid',
            justifyContent: 'center',
            gridTemplateColumns: 'repeat(auto-fit,minmax(260px,500px))',
            marginTop: '.5rem',
            gap: '1rem',
            maxWidth: isMobile ? 'unset' : 1240,
            mx: 'auto',
          }}
        >
          {!clubs || clubs.length === 0 ? (
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box
                component="img"
                src={noResults}
                width="100%"
                maxWidth={isMobile ? 250 : 300}
              />
              <Button
                onClick={() => setOpenFilterModal()}
                sx={{ fontSize: 14 }}
              >
                Свободных клубов не найдено. Настройте фильтры, что бы увидеть
                доступные клубы
              </Button>
            </Box>
          ) : (
            clubs?.map((club) => <ClubCard key={club.id} {...club} />)
          )}
        </Box>
      )}

      <FormProvider {...filterParams}>
        <FilterClubsModal
          openState={openFilterModal}
          handleModal={setOpenFilterModal}
          onApply={onFilterApply}
        />
        <AdvancedFilterClubsModal
          openState={openAdvancedFilterModal}
          handleModal={setOpenAdvancedFilterModal}
          onApply={onFilterApply}
        />
        <SelectSportModal
          openState={openSelectSport}
          handleModal={setOpenSelectSport}
        />
        <SelectClubLocationModal
          openState={openClubLocation}
          handleModal={setOpenClubLocation}
        />
      </FormProvider>
    </Box>
  );
}

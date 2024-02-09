import { useEffect } from 'react';
import { isPlatform } from '@ionic/react';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import SportsTennisOutlinedIcon from '@mui/icons-material/SportsTennisOutlined';
import { FilterClubsModal } from '../../components/modals/filters-modals/clubs/FilterClubsModal';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { EType, addTime, getDayFormat } from '../../helpers/getTimeDateString';
import { ClubCard } from '../../components/molecules/ClubCard';
import NearMeSharpIcon from '@mui/icons-material/NearMeSharp';
import { FormProvider, useForm } from 'react-hook-form';
import { getClubs } from '../../services/club/service';
import noResults from '../../images/no-results.svg';
import { useQuery } from '@tanstack/react-query';
import useToggle from '../../hooks/useToggle';
import { SelectClubLocationModal } from '../../components/modals/filters-modals/SelectClubLocationModal';
import { SelectSportModal } from '../../components/modals/SelectSportModal';
import { LoadingCircle } from '../../components/atoms/LoadingCircle';
import { getSportName } from '../../helpers/getSportName';
import { isBefore, isToday } from 'date-fns';
import { useLocalStorage } from 'usehooks-ts';
import { getUserLocation } from '../../helpers/getUserLocation';
import { SelectedFilterButton } from '../../components/modals/filters-modals/SelectedFilterButton';
import { ESport } from '../../services/matches/interface';
import { useHistory } from 'react-router';

export interface FilterFormDate {
  sport: ESport;
  gamedate: string;
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

const isMobile = isPlatform('mobile');

export function BookCourt() {
  const history = useHistory();

  const [localFilters, setLocalFilters] = useLocalStorage('clubsFilter', {
    gamedate: now.toString(),
    selectedLocation: 'Выбрать локацию',
  });

  const filterParams = useForm<FilterFormDate>({
    defaultValues: localFilters,
  });

  const { watch, setValue } = filterParams;
  const { sport, gamedate, lat, long, timefrom, timeto, selectedLocation } =
    watch();

  useEffect(() => {
    if (!timefrom) {
      setValue('timefrom', countDefaultTime());
    }
    if (!timeto) {
      setValue('timeto', addTime(countDefaultTime(), 5 * 60));
    }
    if (!gamedate) {
      setValue('gamedate', now.toString());
    }
  }, []);

  const [isLoadingLocation, setIsLoadingLocaiton] = useToggle();

  useEffect(() => {
    if (!lat && !long) getUserLocation(setIsLoadingLocaiton, setValue);
  }, []);

  // If the date selected by the user in the past has gone, set current date
  const isSelectedDateToday = isToday(new Date(localFilters?.gamedate));

  // check is prev selected date is already passed
  useEffect(() => {
    if (
      isBefore(new Date(localFilters?.gamedate), new Date()) &&
      !isSelectedDateToday
    ) {
      setValue('gamedate', now.toString());
    }
  }, []);

  const formatGameDate = new Date(gamedate).toLocaleDateString('en-ca');
  const { data, isLoading } = useQuery({
    queryKey: ['clubs', gamedate, sport, lat, long, timefrom, timeto],
    queryFn: () =>
      getClubs({
        sport,
        gamedates: formatGameDate,
        lat,
        long,
        timefrom,
        timeto,
      }),
  });

  const clubs = data?.data;

  const [openSelectSport, setOpenSelectSport] = useToggle();
  const [openClubLocation, setOpenClubLocation] = useToggle();
  const [openFilterModal, setOpenFilterModal] = useToggle();

  useEffect(() => {
    setLocalFilters(watch());
  }, [sport, gamedate, lat, long, timefrom, timeto, selectedLocation]);

  return (
    <Box
      width="100%"
      maxWidth={1240}
      mx="auto"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box
        top={isMobile ? 'unset' : 70}
        bgcolor="#fff"
        position="fixed"
        zIndex={2}
        width="100%"
        p={2}
        boxShadow="0 7px 8px -2px #0000000f"
      >
        <Box width="100%" mx="auto" maxWidth={1036}>
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

              {isLoadingLocation ? (
                <CircularProgress size={25} />
              ) : (
                <NearMeSharpIcon
                  fontSize="small"
                  sx={{ justifySelf: 'end' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    getUserLocation(setIsLoadingLocaiton, setValue);
                  }}
                />
              )}
            </Button>
          </Box>
          <Box mt={2}>
            <SelectedFilterButton handleClick={() => setOpenFilterModal()}>
              {getDayFormat(gamedate, EType.MONTH_AND_DAY)} | {timefrom}
              {timeto ? ` - ${timeto}` : ''}
            </SelectedFilterButton>
          </Box>
        </Box>
      </Box>

      {isLoading || isLoadingLocation ? (
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
            clubs?.map((club) => (
              <ClubCard
                key={club.id}
                {...club}
                onClick={() =>
                  history.push(
                    `/book-court/${club.id}?tab=2&day=${formatGameDate}`,
                  )
                }
              />
            ))
          )}
        </Box>
      )}

      <FormProvider {...filterParams}>
        <FilterClubsModal
          openState={openFilterModal}
          handleModal={setOpenFilterModal}
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

export default BookCourt;

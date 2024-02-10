import { useEffect } from 'react';
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { LocationBlock } from './available-matches/LocationBlock';
import { SelectClubBlock } from '../../molecules/SelectClubBlock';
import { LoadingCircle } from '../../atoms/LoadingCircle';
import { Box, Switch, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getClubsByLocation } from '../../../services/club/service';
import useToggle from '../../../hooks/useToggle';
import { useFormContext } from 'react-hook-form';
import { Geolocation } from '@capacitor/geolocation';
import { useLocalStorage } from 'usehooks-ts';

export const SelectClubsList = () => {
  const [, setIsLocationGranted] = useToggle();

  const { watch, setValue } = useFormContext();
  const { lat, long, sport, selectedLocation, clubsId } = watch();

  const [localFilters, setLocalFilters] = useLocalStorage('matchesFilter', {
    clubsId,
  });

  // const [] = useToggle();
  const [selectAll, setSelectAll] = useLocalStorage(
    'toggleSelectedClubs',
    false,
  );
  useEffect(() => {
    setValue('clubsId', []);
    setSelectAll(false);
  }, [selectedLocation]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['clubs/all', lat, long, sport],
    queryFn: () => getClubsByLocation({ lat, long, sport }),
    enabled: lat !== undefined && long !== undefined,
  });

  const checkLocationPermission = async () => {
    try {
      const { location } = await Geolocation.checkPermissions();

      if (location === 'granted') setIsLocationGranted(true);
      if (location === 'denied') setIsLocationGranted(false);
    } catch (error) {
      setIsLocationGranted(false);
    }
  };

  useEffect(() => {
    checkLocationPermission();
  }, []);

  return (
    <>
      <Box display="flex" alignItems="center" gap={1} my={0.5}>
        <Typography fontSize={14} color="gray">
          Выбрать все
        </Typography>
        <Switch
          checked={selectAll}
          onChange={(e) => {
            const value = e.target.checked;

            if (!value) {
              setValue('clubsId', []);
              setLocalFilters({ ...localFilters, clubsId: [] });
              setSelectAll(false);
            } else {
              const allId = data?.map((club) => club.id);
              setValue('clubsId', allId);
              setLocalFilters({ ...localFilters, clubsId: allId });
              setSelectAll(true);
            }
          }}
        />
      </Box>
      <Box
        mt={1}
        mb={3}
        py={1}
        display="flex"
        gap={2}
        width="100%"
        minHeight={135}
        overflow="auto"
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          msOverflowStyle: 'none',
        }}
      >
        {isError && (
          <LocationBlock
            icon={<ErrorOutlineOutlinedIcon color="error" />}
            title="Ошибка сервера"
            subTitle="Данные не найдены"
          />
        )}

        {isLoading ? (
          <LoadingCircle />
        ) : // if user selected his location, but theres no clubs
        selectedLocation === 'Рядом со мной' && data && data.length === 0 ? (
          <LocationBlock
            icon={<BeachAccessOutlinedIcon color="disabled" />}
            title="Поблизости с Вами нет клубов"
            subTitle="Измените локацию"
          />
        ) : data && data.length > 0 ? (
          data.map((club) => {
            const isSelected = clubsId?.find((id: any) => id === club.id);
            return (
              <SelectClubBlock
                key={club.id}
                {...club}
                isChecked={isSelected}
                onCheck={() => {
                  if (isSelected) {
                    setValue(
                      'clubsId',
                      clubsId?.filter((id: any) => id !== club.id),
                    );
                  } else {
                    setValue('clubsId', [...clubsId, club.id]);
                  }
                }}
              />
            );
          })
        ) : (
          <LocationBlock
            icon={<BeachAccessOutlinedIcon color="disabled" />}
            title="По Вашему запросу нет клубов"
            subTitle="Измените фильтры"
          />
        )}
      </Box>
    </>
  );
};

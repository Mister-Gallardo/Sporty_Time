import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';
import { Box, Fade, Typography } from '@mui/material';
import { DistanceSlider } from '../../../molecules/DistanceSlider';
import { FilterButton } from '../FilterButton';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import NotListedLocationOutlinedIcon from '@mui/icons-material/NotListedLocationOutlined';
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { getClubsByLocation } from '../../../../services/club/service';
import { LoadingCircle } from '../../../atoms/LoadingCircle';
import { SelectClubBlock } from '../../../molecules/SelectClubBlock';
import { Geolocation } from '@capacitor/geolocation';
import useToggle from '../../../../hooks/useToggle';
import { LocationBlock } from './LocationBlock';

interface IPlayLocationProps {
  handleStep: (step: number) => void;
  handleSelectLocation: () => void;
}

export const PlayLocation: React.FC<IPlayLocationProps> = ({
  handleStep,
  handleSelectLocation,
}) => {
  const [isLocationGranted, setIsLocationGranted] = useToggle();

  const { watch, setValue } = useFormContext();
  const { lat, long, sport, selectedLocation, clubsId, range } = watch();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['clubs/all', lat, long, sport],
    queryFn: () => getClubsByLocation({ lat, long, sport }),
    enabled: lat !== 0 && long !== 0,
  });

  const getUserLocation = () => Geolocation.getCurrentPosition();

  const checkLocationPermission = async () => {
    try {
      const { location } = await Geolocation.checkPermissions();

      if (location === 'granted') setIsLocationGranted(true);
      if (location === 'denied') setIsLocationGranted(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const clubs: number[] = [];
    data?.forEach((club) => {
      if (club.range && club.range <= range) clubs.push(club.id);
    });
    setValue('clubsId', clubs);
  }, [range, data]);

  useEffect(() => {
    checkLocationPermission();
  }, []);

  return (
    <>
      <Box mb={6} height="100%">
        <Fade in>
          <Box height="100%">
            <Box
              onClick={handleSelectLocation}
              bgcolor="#f5f6f8"
              borderRadius={2}
              display="flex"
              alignItems="center"
              py={1.2}
              px={1.5}
              sx={{ cursor: 'pointer' }}
            >
              <PlaceOutlinedIcon color="disabled" />
              <Typography ml={2} color="gray">
                {selectedLocation}
              </Typography>
            </Box>

            <Box
              mt={1}
              mb={3}
              py={1}
              display="flex"
              gap={2}
              width="100%"
              overflow="auto"
              sx={{
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
                msOverflowStyle: 'none',
              }}
            >
              {isLocationGranted || (
                <LocationBlock
                  icon={<NotListedLocationOutlinedIcon color="disabled" />}
                  title="Где Вы находитесь?"
                  subTitle="Определить локацию"
                  handleClick={getUserLocation}
                />
              )}

              {isError ? (
                <LocationBlock
                  icon={<ErrorOutlineOutlinedIcon color="error" />}
                  title="Ошибка сервера"
                  subTitle="Данные не найдены"
                />
              ) : isLoading ? (
                <LoadingCircle />
              ) : // if user selected his location, but theres no clubs
              selectedLocation === 'Рядом со мной' &&
                data &&
                data.length === 0 ? (
                <LocationBlock
                  icon={<BeachAccessOutlinedIcon color="disabled" />}
                  title="Поблизости с Вами нет клубов"
                  subTitle="Изменить локацию"
                  handleClick={() => console.log('click')}
                />
              ) : data && data.length > 0 ? (
                data.map((club) => {
                  const isSelected = clubsId.find((id: any) => id === club.id);
                  return (
                    <SelectClubBlock
                      key={club.id}
                      {...club}
                      isChecked={isSelected}
                      onCheck={() => {
                        if (isSelected) {
                          setValue(
                            'clubsId',
                            clubsId.filter((id: any) => id !== club.id),
                          );
                        } else {
                          setValue('clubsId', [...clubsId, club.id]);
                        }
                      }}
                    />
                  );
                })
              ) : null}
            </Box>

            <DistanceSlider
              value={range}
              setValue={(range) => setValue('range', range)}
            />
          </Box>
        </Fade>
      </Box>
      <FilterButton
        handleClick={() => handleStep(1)}
        disabled={!clubsId.length}
      >
        Далее
      </FilterButton>
    </>
  );
};

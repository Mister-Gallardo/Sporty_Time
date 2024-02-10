import React, { useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';
import {
  Box,
  Fade,
  TextField,
  CircularProgress,
  InputAdornment,
  Autocomplete,
  Typography,
  IconButton,
} from '@mui/material';
import { DistanceSlider } from '../../../molecules/DistanceSlider';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import NearMeIcon from '@mui/icons-material/NearMe';
import { FilterButton } from '../FilterButton';
import { getLocations } from '../../../../services/club/service';
import { SelectClubsList } from '../SelectClubsList';
import transliterate from '@sindresorhus/transliterate';
import { debounce } from 'lodash-es';
import useToggle from '../../../../hooks/useToggle';
import { getUserLocation } from '../../../../helpers/getUserLocation';

interface IPlayLocationProps {
  handleStep: (step: number) => void;
}

export const PlayLocation: React.FC<IPlayLocationProps> = ({ handleStep }) => {
  const { watch, setValue, resetField } = useFormContext();
  const { selectedLocation, clubsId } = watch();

  const [searchTerm, setSearchTerm] = useState<string>('');

  // get locations by search term
  const { data: searchLocations, isLoading: isLoadingLocations } = useQuery({
    queryKey: [searchTerm],
    queryFn: () => getLocations(searchTerm),
    enabled: searchTerm !== '',
  });

  // sort and format reseived locations
  const locationOptions = searchLocations
    ? searchLocations
        .sort((a, b) => a.properties.name.localeCompare(b.properties.name))
        .map((b) => ({
          title: `${b.properties.name} (${b.properties.country})`,
          coordinates: b.geometry.coordinates,
        }))
    : [];

  const delayedQuery = useCallback(
    debounce((query) => setSearchTerm(transliterate(query)), 300),
    [],
  );

  const [isLoadingUserLocation, setIsLoadingLocaiton] = useToggle();

  return (
    <>
      <Box mb={6} height="100%">
        <Fade in>
          <Box height="100%">
            <Autocomplete
              options={locationOptions}
              filterOptions={(x) => x}
              isOptionEqualToValue={(option, value) =>
                option.title === value.title
              }
              getOptionLabel={(option) => option.title}
              renderOption={(props, option) => (
                <Typography {...props} key={props.id} fontSize={14}>
                  {option.title}
                </Typography>
              )}
              onChange={(_, value) => {
                resetField('clubsId');
                if (value) {
                  const [lat, long] = value.coordinates;

                  setValue('long', long);
                  setValue('lat', lat);

                  setValue('selectedLocation', value.title);
                }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder={selectedLocation}
                  value={searchTerm}
                  onChange={(e) => delayedQuery(e.target.value)}
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                    startAdornment: (
                      <InputAdornment position="start">
                        <FmdGoodOutlinedIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <>
                        {isLoadingUserLocation || isLoadingLocations ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : (
                          <IconButton
                            onClick={() =>
                              getUserLocation(setIsLoadingLocaiton, setValue)
                            }
                            sx={{ p: 0 }}
                          >
                            <NearMeIcon />
                          </IconButton>
                        )}
                      </>
                    ),
                    disableUnderline: true,
                    sx: {
                      bgcolor: '#f5f6f8',
                      borderRadius: 1.5,
                      padding: '6px !important',
                    },
                  }}
                />
              )}
            />

            <SelectClubsList />

            <DistanceSlider />
          </Box>
        </Fade>
      </Box>
      <FilterButton
        handleClick={() => handleStep(1)}
        disabled={!clubsId || !clubsId.length}
      >
        Далее
      </FilterButton>
    </>
  );
};

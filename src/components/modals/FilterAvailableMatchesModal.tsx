import React, { useState, useCallback, useEffect } from 'react';
import { useFieldArray, Controller, useFormContext } from 'react-hook-form';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  Divider,
  Fade,
  InputAdornment,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { ModalContentContainer } from '../atoms/ModalContentContainer';
import { DistanceSlider } from '../molecules/DistanceSlider';
import { CalendarDay } from '../molecules/CalendarDay';
import { ERadioLabelType, Sport } from '../../types';
import { RadioLabel } from '../molecules/RadioLabel';
import { ModalContainer } from './ModalContainer';
import { getDatesList } from '../../helpers/getDatesList';
import { getClubsByLocation, getLocations } from '../../services/club/service';
import { useQuery } from '@tanstack/react-query';
import { debounce } from 'lodash-es';
import { SelectClubBlock } from '../molecules/SelectClubBlock';
import { LoadingCircle } from '../atoms/LoadingCircle';
import { FilterFormDate } from '../../pages/matches/tabs/AvailableMatchesTab';
import { transliterate } from 'transliteration';
import useToggle from '../../hooks/useToggle';
import { Geolocation } from '@capacitor/geolocation';
import { MatchTimeRange } from '../../services/club/interface';

// const times = [
//   '6:00',
//   '7:00',
//   '8:00',
//   '9:00',
//   '10:00',
//   '11:00',
//   '12:00',
//   '13:00',
//   '14:00',
//   '15:00',
//   '16:00',
//   '17:00',
//   '18:00',
//   '19:00',
//   '20:00',
//   '21:00',
//   '22:00',
//   '23:00',
// ];

interface IFilterAvailableMatchesModalProps {
  openState: boolean;
  handleModal: (val?: boolean) => void;
  onApply: () => void;
  localFilters: FilterFormDate | null;
}

export const FilterAvailableMatchesModal: React.FC<
  IFilterAvailableMatchesModalProps
> = ({ openState, handleModal, onApply }) => {
  const dates = getDatesList(14);

  const [searchTerm, setSearchTerm] = useState<string>('');

  const { control, watch, setValue, resetField } = useFormContext();
  const { sport, gamedates, lat, long, clubsId, range } = watch();

  const {
    fields: dateFields,
    append: dateAppend,
    remove: dateRemove,
  } = useFieldArray({
    control,
    name: 'gamedates',
    rules: { maxLength: 7 },
  });

  const {
    fields: clubsIdFields,
    append: clubsIdAppend,
    remove: clubsIdRemove,
  } = useFieldArray({
    control,
    name: 'clubsId',
  });

  // const {
  //   fields: timeFields,
  //   append: timeAppend,
  //   remove: timeRemove,
  // } = useFieldArray({
  //   control,
  //   name: 'times',
  //   rules: { maxLength: 6 },
  // });

  const { data: clubs, isLoading: isLoadingClubs } = useQuery({
    queryKey: ['clubs/all', lat, long, sport],
    queryFn: () => getClubsByLocation({ lat, long, sport }),
    enabled: lat !== 0 && long !== 0,
  });

  const { data, isLoading } = useQuery({
    queryKey: ['cities', searchTerm],
    queryFn: () => getLocations(searchTerm),
    enabled: searchTerm !== '',
  });

  const locationOptions = data
    ? data
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

  // When the range changes, filter clubs corresponding to this range
  useEffect(() => {
    if (!clubs) return;

    const filterClubs = clubs.filter((club) => club.range! <= range);

    const correspondingClubsId = filterClubs.map((club) => ({
      value: club.id,
    }));
    setValue('clubsId', correspondingClubsId);
  }, [range]);

  const [isUserLocationLoading, setIsUserLocationLoading] = useToggle();

  const setUserLocation = async () => {
    setIsUserLocationLoading(true);

    try {
      const { coords } = await Geolocation.getCurrentPosition();
      const { latitude, longitude } = coords;
      setIsUserLocationLoading(false);

      setValue('long', longitude);
      setValue('lat', latitude);

      setValue('selectedLocation', 'Рядом со мной');
    } catch (error: any) {
      setIsUserLocationLoading(false);
      if (error.message === 'User denied Geolocation') {
        setValue('selectedLocation', '');
      }
    }
  };

  return (
    <ModalContainer
      openState={openState}
      handleModal={handleModal}
      headerTitle="Фильтр"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap={2.5}
        mb={15}
        minHeight={400}
      >
        <ModalContentContainer title="Во что хотите играть?">
          <Controller
            name="sport"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <RadioGroup {...field} sx={{ gap: 1 }}>
                <RadioLabel
                  value={Sport.PADEL}
                  labelType={ERadioLabelType.TITLE_ONLY}
                  title="Падел"
                />
                <RadioLabel
                  value={Sport.TENNIS}
                  labelType={ERadioLabelType.TITLE_ONLY}
                  title="Теннис"
                />
                <RadioLabel
                  value={Sport.PICKLEBALL}
                  labelType={ERadioLabelType.TITLE_ONLY}
                  title="Пиклбол"
                />
              </RadioGroup>
            )}
          />
        </ModalContentContainer>

        {sport && (
          <>
            <Divider />
            <Fade in>
              <Box>
                <ModalContentContainer title="Где будете играть?">
                  <Button
                    disabled={isUserLocationLoading}
                    onClick={setUserLocation}
                    variant="contained"
                    sx={{
                      borderRadius: 5,
                      fontSize: 14,
                      fontWeight: 600,
                      mb: 2,
                      py: 0.5,
                    }}
                    endIcon={
                      isUserLocationLoading && (
                        <CircularProgress size={15} sx={{ color: '#fff' }} />
                      )
                    }
                  >
                    Рядом со мной
                  </Button>

                  <Autocomplete
                    filterOptions={(x) => x}
                    options={locationOptions}
                    isOptionEqualToValue={(option, value) =>
                      option.title === value.title
                    }
                    getOptionLabel={(option) => option.title}
                    renderOption={(props, option) => {
                      return (
                        <Typography {...props} key={props.id}>
                          {option.title}
                        </Typography>
                      );
                    }}
                    onChange={(_, value) => {
                      if (value) {
                        resetField('clubsId');
                        setValue('range', 1);

                        const [long, lat] = value.coordinates;
                        setValue('long', long);
                        setValue('lat', lat);

                        setValue('selectedLocation', value.title);
                      }
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder={watch('selectedLocation')}
                        value={searchTerm}
                        onChange={(e) => delayedQuery(e.target.value)}
                        InputProps={{
                          ...params.InputProps,
                          type: 'search',
                          startAdornment: (
                            <InputAdornment position="start">
                              <FmdGoodOutlinedIcon fontSize="small" />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <>
                              <InputAdornment position="end">
                                {isLoading ? (
                                  <CircularProgress color="inherit" size={20} />
                                ) : null}
                              </InputAdornment>
                              {params.InputProps.endAdornment}
                            </>
                          ),
                          disableUnderline: true,
                          fullWidth: true,
                          sx: {
                            bgcolor: '#f5f6f8',
                            borderRadius: 1.5,
                            padding: 1,
                          },
                        }}
                      />
                    )}
                  />

                  <Box
                    display="flex"
                    gap={1.5}
                    overflow="auto"
                    py={2}
                    px={1}
                    sx={{
                      '&::-webkit-scrollbar': {
                        display: 'none',
                      },
                      msOverflowStyle: 'none',
                    }}
                  >
                    {isLoadingClubs ? (
                      <LoadingCircle />
                    ) : clubs && clubs.length > 0 ? (
                      clubs.map((club) => {
                        const selectedIndx = clubsId.findIndex(
                          (item: { value: number }) => item.value == club.id,
                        );
                        const isSelected = selectedIndx !== -1;

                        return (
                          <SelectClubBlock
                            key={club.id}
                            {...club}
                            isChecked={isSelected}
                            onCheck={() => {
                              if (isSelected)
                                return clubsIdRemove(selectedIndx);
                              if (clubsIdFields.length < 7) {
                                clubsIdAppend({ value: club.id });
                              } else {
                                clubsIdRemove(0);
                                clubsIdAppend({ value: club.id });
                              }
                            }}
                          />
                        );
                      })
                    ) : (
                      <Typography py={2} textAlign="center" color="gray">
                        {!lat && !long ? '' : 'Клубы не найдены'}
                      </Typography>
                    )}
                  </Box>

                  {/* <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Недавние"
              sx={{ marginLeft: 0 }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Любимые клубы"
              sx={{ marginLeft: 0 }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Выбрать дистанцию"
              sx={{ marginLeft: 0 }}
            />
          </FormGroup> */}
                  {!!lat && !!long && (
                    <Fade in>
                      <Box>
                        <DistanceSlider
                          value={range}
                          setValue={(range) => setValue('range', range)}
                        />
                      </Box>
                    </Fade>
                  )}
                </ModalContentContainer>
              </Box>
            </Fade>
          </>
        )}

        {/* remove this line ('disatanceRange !== 0') after adding real location search */}
        {clubsId.length > 0 && (
          <>
            <Divider />
            <Fade in>
              <Box>
                <ModalContentContainer title="Когда вы хотите играть?">
                  <Typography color="gray" fontSize={13} mb={1}>
                    Вы можете выбрать до 7 дней
                  </Typography>
                  <Box py={1} display="flex" gap={0.6} overflow="auto">
                    {dates.map((date, i) => {
                      const selectedIndx = gamedates?.findIndex(
                        (item: { value: Date }) =>
                          new Date(item.value).toDateString() ===
                          date.toDateString(),
                      );
                      const isSelected = selectedIndx !== -1;
                      return (
                        <CalendarDay
                          key={i}
                          date={date}
                          selected={isSelected}
                          onSelect={() => {
                            if (isSelected) return dateRemove(selectedIndx);
                            if (dateFields.length < 7) {
                              dateAppend({ value: date });
                            } else {
                              dateRemove(0);
                              dateAppend({ value: date });
                            }
                          }}
                        />
                      );
                    })}
                  </Box>
                </ModalContentContainer>
              </Box>
            </Fade>
          </>
        )}

        {!!gamedates.length && !!clubsId.length && (
          <>
            <Divider />
            <Fade in>
              <Box>
                <ModalContentContainer title="Выберите время">
                  <Controller
                    name="time"
                    control={control}
                    defaultValue={MatchTimeRange.ALL}
                    render={({ field }) => (
                      <RadioGroup {...field} sx={{ gap: 1 }}>
                        <RadioLabel
                          value={MatchTimeRange.ALL}
                          labelType={ERadioLabelType.TITLE_ONLY}
                          title="Любое время"
                        />
                        <RadioLabel
                          value={MatchTimeRange.MORNING}
                          labelType={ERadioLabelType.TITLE_ONLY}
                          title="Утро (6:00 - 12:00)"
                        />
                        <RadioLabel
                          value={MatchTimeRange.AFTERNOON}
                          labelType={ERadioLabelType.TITLE_ONLY}
                          title="День (12:00 - 18:00)"
                        />
                        <RadioLabel
                          value={MatchTimeRange.EVENING}
                          labelType={ERadioLabelType.TITLE_ONLY}
                          title="Вечер (18:00 - 00:00)"
                        />
                        {/* <RadioLabel
                          value="SPECIFIC"
                          labelType={ERadioLabelType.TITLE_ONLY}
                          title="Выбрать конкретное время (максимум 6)"
                        /> */}
                      </RadioGroup>
                    )}
                  />

                  {/* {time === 'SPECIFIC' && (
                    <Fade in>
                      <Box
                        mt={1.6}
                        display="flex"
                        flexWrap="wrap"
                        gap="8px 5px"
                      >
                        {times.map((time) => {
                          const selectedIndx = watch('times').findIndex(
                            (item: { value: string }) => item.value === time,
                          );
                          const isSelected = selectedIndx !== -1;

                          return (
                            <DateBox
                              key={time}
                              startTime={time}
                              onClick={() => {
                                if (isSelected) return timeRemove(selectedIndx);
                                if (timeFields.length < 6) {
                                  timeAppend({ value: time });
                                } else {
                                  timeRemove(0);
                                  timeAppend({ value: time });
                                }
                              }}
                              isSelected={isSelected}
                            />
                          );
                        })}
                      </Box>
                    </Fade>
                  )} */}
                </ModalContentContainer>
              </Box>
            </Fade>
          </>
        )}
      </Box>
      <Box p={2} borderTop="1px solid #eee">
        <Button
          disabled={
            !sport || !gamedates.length || !lat || !long || !clubsId.length
          }
          onClick={onApply}
          sx={{
            backgroundColor: '#0e2432',
            color: '#fff',
            borderRadius: 20,
            py: 1,
            '&:disabled': {
              backgroundColor: '#ddd',
            },
            '&:hover': {
              backgroundColor: '#123347',
            },
          }}
          fullWidth
        >
          Применить
        </Button>
      </Box>
    </ModalContainer>
  );
};

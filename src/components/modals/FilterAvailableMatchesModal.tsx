import React from 'react';
import { useFieldArray, Controller, useFormContext } from 'react-hook-form';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import NearMeIcon from '@mui/icons-material/NearMe';
import {
  Box,
  Button,
  Divider,
  Fade,
  Input,
  InputAdornment,
  RadioGroup,
  Typography,
} from '@mui/material';
import { ModalContentContainer } from '../atoms/ModalContentContainer';
import { DistanceSlider } from '../molecules/DistanceSlider';
import { CalendarDay } from '../molecules/CalendarDay';
import { ERadioLabelType, Sport } from '../../types';
import { RadioLabel } from '../molecules/RadioLabel';
import { ModalContainer } from './ModalContainer';
import { DateBox } from '../molecules/DateBox';

const times = [
  '6:00',
  '7:00',
  '8:00',
  '9:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
];

const now = new Date();
const dates = Array.from(Array(14)).map(
  (_, i) =>
    new Date(
      Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + i),
    ),
);

interface IFilterAvailableMatchesModalProps {
  openState: boolean;
  handleModal: (val?: boolean) => void;
  onApply: () => void;
}

export const FilterAvailableMatchesModal: React.FC<
  IFilterAvailableMatchesModalProps
> = ({ openState, handleModal, onApply }) => {
  const { control, watch, setValue } = useFormContext();

  const { sport, gamedates, time, range } = watch();

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
    fields: timeFields,
    append: timeAppend,
    remove: timeRemove,
  } = useFieldArray({
    control,
    name: 'times',
    rules: { maxLength: 6 },
  });

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
                  <Input
                    disabled
                    id="location"
                    placeholder="Рядом со мной"
                    startAdornment={
                      <InputAdornment position="start">
                        <FmdGoodOutlinedIcon fontSize="small" />
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <NearMeIcon
                          fontSize="small"
                          sx={{ color: '#c1c1c1' }}
                        />
                      </InputAdornment>
                    }
                    fullWidth
                    disableUnderline
                    sx={{
                      bgcolor: '#f5f6f8',
                      padding: 1,
                      borderRadius: 1.5,
                      mb: 1,
                    }}
                  />

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
                  <DistanceSlider
                    value={range}
                    setValue={(val: number) => setValue('range', val)}
                  />
                </ModalContentContainer>
              </Box>
            </Fade>
          </>
        )}

        {/* remove this line ('range !== 0') after adding real location search */}
        {range !== 0 && (
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
                          item.value.toDateString() === date.toDateString(),
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

        {gamedates.length > 0 && (
          <>
            <Divider />
            <Fade in>
              <Box>
                <ModalContentContainer title="Выберите время">
                  <Controller
                    name="time"
                    control={control}
                    defaultValue="ANY"
                    render={({ field }) => (
                      <RadioGroup {...field} sx={{ gap: 1 }}>
                        <RadioLabel
                          value="ANY"
                          labelType={ERadioLabelType.TITLE_ONLY}
                          title="Любое время"
                        />
                        <RadioLabel
                          value="MORNING"
                          labelType={ERadioLabelType.TITLE_ONLY}
                          title="Утро (6:00 - 12:00)"
                        />
                        <RadioLabel
                          value="AFTERNOON"
                          labelType={ERadioLabelType.TITLE_ONLY}
                          title="День (12:00 - 18:00)"
                        />
                        <RadioLabel
                          value="EVENING"
                          labelType={ERadioLabelType.TITLE_ONLY}
                          title="Вечер (18:00 - 00:00)"
                        />
                        <RadioLabel
                          value="SPECIFIC"
                          labelType={ERadioLabelType.TITLE_ONLY}
                          title="Выбрать конкретное время (максимум 6)"
                        />
                      </RadioGroup>
                    )}
                  />

                  {time === 'SPECIFIC' && (
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
                  )}
                </ModalContentContainer>
              </Box>
            </Fade>
          </>
        )}
      </Box>
      <Box
        position="absolute"
        bottom={0}
        right={0}
        left={0}
        bgcolor="#fff"
        p={2}
        borderTop="1px solid #eee"
      >
        <Button
          onClick={onApply}
          sx={{
            backgroundColor: '#0e2432',
            color: '#fff',
            borderRadius: 20,
            py: 1,
          }}
          fullWidth
        >
          Применить
        </Button>
      </Box>
    </ModalContainer>
  );
};

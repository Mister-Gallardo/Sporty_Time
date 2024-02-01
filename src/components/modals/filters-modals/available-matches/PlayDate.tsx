import React from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { getDatesList } from '../../../../helpers/getDatesList';
import { CalendarDay } from '../../../molecules/CalendarDay';
import { Box, Fade, RadioGroup, Typography } from '@mui/material';
import { FilterButton } from '../FilterButton';
import { DateBox } from '../../../molecules/DateBox';
import { RadioLabel } from '../../../molecules/RadioLabel';
import { MatchTimeRange } from '../../../../services/club/interface';
import { ERadioLabelType } from '../../../../types';

interface IPlayDateProps {
  handleModal: (val?: boolean) => void;
  handleStep: () => void;
}

const timeList = [
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

export const PlayDate: React.FC<IPlayDateProps> = ({
  handleModal,
  handleStep,
}) => {
  const dates = getDatesList(14);

  const { watch, control } = useFormContext();
  const { gamedates, time, times } = watch();

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

  const isDisabled = time !== MatchTimeRange.SPECIFIC ? !time : !times.length;

  return (
    <>
      <Box
        mb={6}
        height="100%"
        overflow="auto"
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          msOverflowStyle: 'none',
        }}
      >
        <Fade in>
          <Box>
            <Box>
              <Typography fontSize={15} fontWeight={600}>
                Выберите дни (максимум 7)
              </Typography>
              <Typography color="gray" fontSize={13} mb={1}>
                Вы можете выбрать до 7 дней
              </Typography>
            </Box>

            <Box py={1} display="flex" gap={0.6} overflow="auto">
              {dates.map((date, i) => {
                const selectedIndx = gamedates?.findIndex(
                  (item: { value: Date }) =>
                    new Date(item.value).toDateString() === date.toDateString(),
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
          </Box>
        </Fade>
        {!!gamedates.length && (
          <Fade in>
            <Box mt={4}>
              <Typography mb={1.5} fontSize={15} fontWeight={600}>
                Выберите время
              </Typography>

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
                    <RadioLabel
                      value={MatchTimeRange.SPECIFIC}
                      labelType={ERadioLabelType.TITLE_ONLY}
                      title="Выбрать конкретное время (максимум 6)"
                    />
                  </RadioGroup>
                )}
              />
            </Box>
          </Fade>
        )}
        {time === 'SPECIFIC' && (
          <Fade in>
            <Box mt={1.6} display="flex" flexWrap="wrap" gap="8px 5px">
              {timeList.map((time) => {
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
      </Box>
      <FilterButton
        handleClick={() => handleModal(false)}
        disabled={isDisabled}
      >
        Посмотреть результаты
      </FilterButton>
    </>
  );
};

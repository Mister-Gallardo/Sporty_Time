import { Box, Button, RadioGroup, Typography } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { RadioLabel } from '../../../molecules/RadioLabel';
import { ERadioLabelType, SportLevel } from '../../../../types';
import { FilterButton } from '../FilterButton';

interface IAskForLevelProps {
  handleStep: (step: number) => void;
}

export const AskForLevel: React.FC<IAskForLevelProps> = ({ handleStep }) => {
  const { control, watch } = useFormContext();
  const { sportLevel } = watch();
  return (
    <>
      <Box height="100%" mb={6}>
        <Typography mb={2} fontSize={13} color="gray">
          Для того, что бы показать Вам подходящие результаты поиска, нам
          необходимо знать Ваш уровень.
        </Typography>
        <Controller
          name="sportLevel"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <RadioGroup {...field} sx={{ gap: 1 }}>
              <RadioLabel
                value={SportLevel.BEGINNER}
                labelType={ERadioLabelType.TITLE_ONLY}
                title="Новичок"
              />
              <RadioLabel
                value={SportLevel.INTERMEDIATE}
                labelType={ERadioLabelType.TITLE_ONLY}
                title="Средний"
              />
              <RadioLabel
                value={SportLevel.INTERMEDIATE_HIGHT}
                labelType={ERadioLabelType.TITLE_ONLY}
                title="Выше среднего"
              />
              <RadioLabel
                value={SportLevel.ADVANCED}
                labelType={ERadioLabelType.TITLE_ONLY}
                title="Продвинутый"
              />
              <RadioLabel
                value={SportLevel.COMPETITION}
                labelType={ERadioLabelType.TITLE_ONLY}
                title="Соревновательный"
              />
            </RadioGroup>
          )}
        />

        <Button sx={{ mt: 2, fontSize: 13 }}>
          Хотите пройти тестирование?
        </Button>
      </Box>
      <FilterButton handleClick={() => handleStep(1)} disabled={!sportLevel}>
        Далее
      </FilterButton>
    </>
  );
};

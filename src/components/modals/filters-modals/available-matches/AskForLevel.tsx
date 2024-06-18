import { Box, Button, RadioGroup, Typography } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { ERadioLabelType, RadioLabel } from '../../../molecules/RadioLabel';
import { FilterButton } from '../FilterButton';
import { useHistory } from 'react-router';
import { ELeveling } from '../../../../pages/question-form/questions';

interface IAskForLevelProps {
  handleModal: (val?: boolean) => void;
  handleStep: (step: number) => void;
}

export const AskForLevel: React.FC<IAskForLevelProps> = ({
  handleModal,
  handleStep,
}) => {
  const history = useHistory();

  const { control, watch } = useFormContext();
  const { sport, sportLevel } = watch();

  return (
    <Box>
      <Box height="100%" mb={6}>
        <Typography mb={2} fontSize={13} color="gray">
          Для того, что бы показать Вам подходящие результаты поиска, нам
          необходимо знать Ваш уровень.
        </Typography>
        <Controller
          name="forceRating"
          control={control}
          defaultValue={ELeveling.BEGINNER}
          render={({ field }) => (
            <RadioGroup {...field} sx={{ gap: 1 }}>
              <RadioLabel
                value={ELeveling.BEGINNER}
                labelType={ERadioLabelType.TITLE_ONLY}
                title="Новичок"
              />
              <RadioLabel
                value={ELeveling.INTERMEDIATE}
                labelType={ERadioLabelType.TITLE_ONLY}
                title="Средний"
              />
              <RadioLabel
                value={ELeveling.HIGHT_INTERMEDIATE}
                labelType={ERadioLabelType.TITLE_ONLY}
                title="Выше среднего"
              />
              <RadioLabel
                value={ELeveling.ADVANCED}
                labelType={ERadioLabelType.TITLE_ONLY}
                title="Продвинутый"
              />
              <RadioLabel
                value={ELeveling.COMPETITION}
                labelType={ERadioLabelType.TITLE_ONLY}
                title="Соревновательный"
              />
            </RadioGroup>
          )}
        />

        <Button
          sx={{ mt: 2, fontSize: 13 }}
          onClick={() => {
            handleModal(false);
            history.push(`/question-form?sport=${sport}&step=2&prev=filter`);
          }}
        >
          Хотите пройти тестирование?
        </Button>
      </Box>
      <FilterButton handleClick={() => handleStep(1)}>Далее</FilterButton>
    </Box>
  );
};

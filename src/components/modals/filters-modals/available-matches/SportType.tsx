import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Box, RadioGroup } from '@mui/material';
import { RadioLabel } from '../../../molecules/RadioLabel';
import { ERadioLabelType, Sport } from '../../../../types';
import { FilterButton } from '../FilterButton';

interface ISportTypeProps {
  handleStep: (step: number) => void;
}

export const SportType: React.FC<ISportTypeProps> = ({ handleStep }) => {
  const { watch, control } = useFormContext();
  const { sport } = watch();
  return (
    <>
      <Box height="100%" mb={6}>
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
      </Box>
      <FilterButton handleClick={() => handleStep(1)} disabled={!sport}>
        Далее
      </FilterButton>
    </>
  );
};

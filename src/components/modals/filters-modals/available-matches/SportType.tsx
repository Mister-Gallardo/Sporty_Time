import React, { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Box, RadioGroup } from '@mui/material';
import { ERadioLabelType, RadioLabel } from '../../../molecules/RadioLabel';
import { FilterButton } from '../FilterButton';
import { ESport } from '../../../../services/matches/interface';
import { useLocalStorage } from 'usehooks-ts';

interface ISportTypeProps {
  handleStep: (step: number) => void;
}

export const SportType: React.FC<ISportTypeProps> = ({ handleStep }) => {
  const { watch, control, setValue } = useFormContext();
  const { sport } = watch();

  const [filters] = useLocalStorage('matchesFilter', { sport });

  useEffect(() => {
    if (filters.sport !== sport) setValue('clubsId', []);
  }, [sport]);

  return (
    <Box height="100%">
      <Box height="100%" mb={5}>
        <Controller
          name="sport"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <RadioGroup {...field} sx={{ gap: 1 }}>
              <RadioLabel
                value={ESport.PADEL}
                labelType={ERadioLabelType.TITLE_ONLY}
                title="Падел"
              />
              <RadioLabel
                value={ESport.TENNIS}
                labelType={ERadioLabelType.TITLE_ONLY}
                title="Теннис"
              />
              <RadioLabel
                value={ESport.PICKLEBALL}
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
    </Box>
  );
};

import { isPlatform } from '@ionic/react';
import { ToggleButton } from '../../../components/atoms/ToggleButton';
import { Box, Stack } from '@mui/material';
import { ESport } from '../../../services/matches/interface';
import { LevelProgression } from '../components/LevelProgression';
import { MatchesList } from '../components/MatchesList';
import { Statistics } from '../components/Statistics';
import { CurrentSportLevel } from '../components/CurrentSportLevel';
import { FormProvider, useForm } from 'react-hook-form';

const sports = [
  {
    id: ESport.PADEL,
    title: 'Падел',
  },
  {
    id: ESport.TENNIS,
    title: 'Теннис',
  },
  {
    id: ESport.PICKLEBALL,
    title: 'Пиклбол',
  },
];

const isMobile = isPlatform('mobile');

export default function ActivitiesTab() {
  const sportForm = useForm({
    defaultValues: {
      sport: ESport.PADEL,
    },
  });
  const { watch, setValue } = sportForm;

  return (
    <Box width="100%">
      <Box>
        <Box mt={2} mb={4} display="flex" justifyContent="center" gap={1}>
          {sports.map((item) => (
            <ToggleButton
              key={item.id}
              value={item.id}
              aria-label={item.title}
              onClick={() => setValue('sport', item.id)}
              selected={watch('sport') === item.id}
            >
              {item.title}
            </ToggleButton>
          ))}
        </Box>
        <FormProvider {...sportForm}>
          {isMobile ? (
            <Stack spacing={3}>
              <CurrentSportLevel />
              <LevelProgression />
              <MatchesList />
              <Statistics />
            </Stack>
          ) : (
            <>
              <Box
                width="100%"
                display="flex"
                justifyContent="space-between"
                gap={8}
              >
                <Stack spacing={3}>
                  <CurrentSportLevel />
                  <Statistics />
                </Stack>
                <LevelProgression />
              </Box>
              <MatchesList />
            </>
          )}
        </FormProvider>
      </Box>
    </Box>
  );
}

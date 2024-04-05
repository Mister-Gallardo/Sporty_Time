import { useState } from 'react';
import { isPlatform } from '@ionic/react';
import { ToggleButton } from '../../../components/atoms/ToggleButton';
import { Box, Stack } from '@mui/material';
import { ESport } from '../../../services/matches/interface';
import { LevelProgression } from '../components/LevelProgression';
import { MatchesList } from '../components/MatchesList';
import { Statistics } from '../components/Statistics';
import { CurrentSportLevel } from '../components/CurrentSportLevel';

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
  const [activeSport, setActiveSport] = useState<ESport>(ESport.PADEL);

  return (
    <Box width="100%">
      <Box>
        <Box mb={4} display="flex" justifyContent="center" gap={1}>
          {sports.map((item) => (
            <ToggleButton
              key={item.id}
              value={item.id}
              aria-label={item.title}
              onClick={() => setActiveSport(item.id)}
              selected={activeSport === item.id}
            >
              {item.title}
            </ToggleButton>
          ))}
        </Box>
        {isMobile ? (
          <Stack spacing={3}>
            <CurrentSportLevel activeSport={activeSport} />
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
                <CurrentSportLevel activeSport={activeSport} />
                <Statistics />
              </Stack>
              <LevelProgression />
            </Box>
            <MatchesList />
          </>
        )}
      </Box>
    </Box>
  );
}

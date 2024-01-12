import { useState } from 'react';
import { ToggleButton } from '../../../components/atoms/ToggleButton';
import { getSportRating } from '../../../helpers/getSportRating';
import { usePlayerProfile } from '../../../services/api/hooks';
import { Box, Button, Typography } from '@mui/material';
import dummy from '../../../images/home/booking-bg.png';
import { InfoRounded } from '@mui/icons-material';
import { isPlatform } from '@ionic/react';
import { useHistory } from 'react-router';
import { Sport } from '../../../types';
import { RatingChart } from '../../../components/molecules/RatingChart';

export default function ActivitiesTab() {
  const isMobile = isPlatform('mobile');

  const history = useHistory();

  const [activeSport, setActiveSport] = useState<string>('Padel');
  const sport =
    activeSport === 'Padel'
      ? Sport.PADEL
      : activeSport === 'Tennis'
      ? Sport.TENNIS
      : Sport.PICKLEBALL;

  const [player] = usePlayerProfile();
  const sportLevel = player && getSportRating(player, sport);

  return (
    <Box
      p={2}
      display="flex"
      flexDirection="column"
      alignItems={isMobile ? 'flex-start' : 'center'}
      gap={4}
    >
      <Box display="flex" gap={1}>
        {['Padel', 'Tennis', 'Pickleball'].map((item: string) => (
          <ToggleButton
            key={item}
            value={item}
            aria-label={item}
            onClick={() => setActiveSport(item)}
            selected={activeSport === item}
          >
            {item}
          </ToggleButton>
        ))}
      </Box>

      {sportLevel ? (
        <Box
          display="flex"
          justifyContent="space-between"
          border="1px solid #eee"
          borderRadius={2}
          overflow="hidden"
          maxWidth={isMobile ? '100%' : '350px'}
        >
          <Box px={2} py={1}>
            <Box>
              <Typography color="GrayText">{activeSport}</Typography>
              <Typography fontSize={25}>Level {sportLevel}</Typography>
            </Box>
            <Box>
              <Box display="flex" alignItems="center">
                <Typography color="GrayText">Level reliability: 15%</Typography>
                <Button>
                  <InfoRounded color="disabled" />
                </Button>
              </Box>
              <Typography
                color="white"
                bgcolor="#6e8ffe"
                width="fit-content"
                fontSize={13}
                fontWeight={600}
                px={1}
                borderRadius={3}
              >
                LOW
              </Typography>
            </Box>
          </Box>
          <Box
            component="img"
            src={dummy}
            maxWidth="30%"
            sx={{ objectFit: 'cover' }}
          ></Box>
        </Box>
      ) : (
        <Box textAlign="center">
          <Typography fontSize={18} fontWeight={500}>
            Отслеживайте свой прогресс
          </Typography>
          <Typography color="gray" mt={1} mb={4}>
            Настройте свой начальный уровень, чтобы начать отслеживать свой
            прогресс.
          </Typography>
          <Button
            variant="contained"
            onClick={() => history.push(`/question-form?sport=${sport}`)}
            sx={{ borderRadius: 10 }}
          >
            Начать тестирование
          </Button>
        </Box>
      )}
      <RatingChart />
    </Box>
  );
}

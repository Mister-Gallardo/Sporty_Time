import { useState } from 'react';
import { ToggleButton } from '../../../components/atoms/ToggleButton';
import { getSportRating } from '../../../helpers/getSportRating';
import { usePlayerProfile } from '../../../services/api/hooks';
import { Box, Button, Typography } from '@mui/material';
import dummy from '../../../images/home/booking-bg.png';
import { isPlatform } from '@ionic/react';
import { useHistory } from 'react-router';
import { RatingChart } from '../../../components/molecules/RatingChart';
import { ESport } from '../../../services/matches/interface';

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

export default function ActivitiesTab() {
  const isMobile = isPlatform('mobile');

  const history = useHistory();

  const [activeSport, setActiveSport] = useState<ESport>(ESport.PADEL);

  const [player] = usePlayerProfile();
  const sportLevel = player && getSportRating(player, activeSport);

  return (
    <Box
      p={2}
      display="flex"
      flexDirection="column"
      alignItems={isMobile ? 'flex-start' : 'center'}
      gap={4}
    >
      <Box display="flex" gap={1}>
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
                <Typography color="GrayText">
                  Уровень подтверждён на: 15%
                </Typography>
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
                НИЗКИЙ
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
            onClick={() => history.push(`/question-form?sport=${activeSport}`)}
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

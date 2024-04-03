import React from 'react';
import { useHistory } from 'react-router';
import { getSportRating } from '../../../helpers/getSportRating';
import { usePlayerProfile } from '../../../services/api/hooks';
import { ESport } from '../../../services/matches/interface';
import { getSportName } from '../../../helpers/getNameOf';
import { Box, Button, Typography } from '@mui/material';
import dummy from '../../../images/home/booking-bg.png';
import { SectionTitle } from './SectionTitle';

interface ICurrentSportLevelProps {
  activeSport: ESport;
}

export const CurrentSportLevel: React.FC<ICurrentSportLevelProps> = ({
  activeSport,
}) => {
  const history = useHistory();
  const [player] = usePlayerProfile();
  const sportLevel = player && getSportRating(player, activeSport);

  return (
    <Box maxWidth={370}>
      <SectionTitle title="Уровень" />
      {sportLevel ? (
        <Box
          display="flex"
          justifyContent="space-between"
          border="1px solid #eee"
          overflow="hidden"
        >
          <Box px={2} py={1}>
            <Box>
              <Typography color="GrayText">
                {getSportName(activeSport)}
              </Typography>
              <Typography fontSize={25}>Уровень {sportLevel}</Typography>
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
    </Box>
  );
};

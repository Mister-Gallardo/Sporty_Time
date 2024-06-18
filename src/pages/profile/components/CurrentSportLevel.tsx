import { useHistory, useParams } from 'react-router';
import { getSportRating } from '../../../helpers/getSportRating';
import { usePlayerProfile } from '../../../services/api/hooks';
import { getSportName } from '../../../helpers/getNameOf';
import { Box, Button, Typography } from '@mui/material';
import dummy from '../../../images/home/booking-bg.png';
import noRating from '../../../images/question-form/bg_events_tennis_desktop.png';
import { SectionTitle } from './SectionTitle';
import { isPlatform } from '@ionic/react';
import { getSpecificUser } from '../../../services/user/service';
import { useQuery } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';

const isMobile = isPlatform('mobile');

export const CurrentSportLevel = () => {
  const history = useHistory();
  const { userId } = useParams<{ userId: string }>();

  const { watch } = useFormContext();
  const activeSport = watch('sport');

  const [player] = usePlayerProfile();

  const { data: specificUser } = useQuery({
    queryKey: ['users', userId],
    queryFn: () => getSpecificUser(+userId),
    enabled: !!userId,
  });
  const playerData = userId ? specificUser?.data?.player : player;

  const sportLevel = playerData && getSportRating(playerData, activeSport);

  const isMyUser = player?.user?.id === +userId;

  return (
    <Box width={isMobile ? '100%' : 400}>
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
          />
        </Box>
      ) : isMyUser ? (
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
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="end"
          px={2}
          width="100%"
          height={117}
          sx={{
            backgroundImage: `url(${noRating})`,
            backgroundPosition: 'center',
            objectFit: 'cover',
          }}
        >
          <Typography color="#fff" fontSize={22}>
            Нет уровня
          </Typography>
        </Box>
      )}
    </Box>
  );
};

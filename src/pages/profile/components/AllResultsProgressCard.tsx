import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getSpecificUserMatchBookings } from '../../../services/matches/service';
import { useParams } from 'react-router';
import { useFormContext } from 'react-hook-form';
import { usePlayerProfile } from '../../../services/api/hooks';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { isPlatform } from '@ionic/react';
import { getSpecificUser } from '../../../services/user/service';
import {
  getInitialSportRating,
  getSportRating,
} from '../../../helpers/getSportRating';

const isMobile = isPlatform('mobile');

export const AllResultsProgressCard = () => {
  const { userId } = useParams<{ userId: string }>();

  const { watch } = useFormContext();
  const sport = watch('sport');

  const [player] = usePlayerProfile();
  const myUserId = player?.user?.id;

  const currentUserId = userId ? userId : myUserId || 0;

  const { data: userData } = useQuery({
    queryKey: ['users', +userId],
    queryFn: () => getSpecificUser(+userId),
    enabled: !userId,
  });

  const currentPlayer = userId ? userData?.data?.player : player;

  const { data } = useQuery({
    queryKey: ['match-bookings', currentUserId, sport],
    queryFn: () => getSpecificUserMatchBookings(+currentUserId, 0, sport),
  });
  const bookingsList = data?.data;

  if (!bookingsList || bookingsList.length === 0) return;

  const min = bookingsList?.reduce((a, b) => {
    return a.ratingAfterMatch < b.ratingAfterMatch ? a : b;
  });

  const max = bookingsList?.reduce((a, b) => {
    return a.ratingAfterMatch < b.ratingAfterMatch ? b : a;
  });

  const initialRating = getInitialSportRating(currentPlayer, sport);
  const currentRating = getSportRating(currentPlayer, sport);

  return (
    <Box
      display="flex"
      justifyContent={isMobile ? 'unset' : 'center'}
      sx={{ cursor: 'default' }}
    >
      <Box
        bgcolor="#0d2432"
        p={1.5}
        width="100%"
        maxWidth={isMobile ? 'unset' : 300}
        color="#fff"
        marginBottom={2}
      >
        <Typography mb={1} fontWeight={500}>
          Прогресс
        </Typography>

        <Stack direction="row" justifyContent="space-evenly">
          <Stack alignItems="center">
            <Typography color="#d3d3d3">Старт.</Typography>
            <Typography>{initialRating}</Typography>
          </Stack>
          <Divider
            flexItem
            variant="fullWidth"
            orientation="vertical"
            sx={{ bgcolor: 'gray' }}
          />
          <Stack alignItems="center">
            <Typography color="#d3d3d3">Мин.</Typography>
            <Typography>{min?.ratingAfterMatch}</Typography>
          </Stack>
          <Divider
            flexItem
            variant="fullWidth"
            orientation="vertical"
            sx={{ bgcolor: 'gray' }}
          />

          <Stack alignItems="center">
            <Typography color="#d3d3d3">Макс.</Typography>
            <Typography>{max?.ratingAfterMatch}</Typography>
          </Stack>

          <Divider
            flexItem
            variant="fullWidth"
            orientation="vertical"
            sx={{ bgcolor: 'gray' }}
          />

          <Stack alignItems="center">
            <Typography color="#d3d3d3">Текущий</Typography>
            <Typography
              bgcolor="#fff"
              color="#333"
              px={2}
              border="1px solid gray"
            >
              {currentRating}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

import React from 'react';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { EType, getDayFormat } from '../../../../helpers/getTimeDateString';
import { MatchData } from '../../../../services/matches/interface';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import { Box, Divider, Typography } from '@mui/material';

export const MatchDataBlock: React.FC<MatchData> = ({
  minutes,
  sport,
  ratingFrom,
  ratingTo,
  price,
  paid,
  booking,
  // gender,
}) => {
  const isPremium = true;

  const startsAt = new Date(booking.startsAt);
  const matchDate = getDayFormat(
    startsAt,
    EType.WEEK_DAY_MONTH,
    startsAt.toLocaleTimeString('ru'),
    minutes,
  );

  return (
    <Box
      p={2}
      bgcolor="#fff"
      borderRadius={2}
      border={isPremium ? '2px solid gold' : 'one'}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <SportsTennisIcon />
          <Box>
            <Typography fontWeight={700}>{sport}</Typography>
            <Typography
              fontSize={13}
              fontWeight={600}
              textTransform="capitalize"
            >
              {matchDate}
            </Typography>
          </Box>
        </Box>

        {isPremium && (
          <Box
            width={30}
            height={30}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgcolor="#0d2432"
            color="gold"
            borderRadius="50%"
          >
            <WorkspacePremiumOutlinedIcon fontSize="small" />
          </Box>
        )}
      </Box>

      <Divider sx={{ my: 1.5 }} />

      <Box display="flex" justifyContent="space-evenly">
        <Box textAlign="center">
          <Typography color="gray">Пол</Typography>
          <Typography fontSize={16} fontWeight={600}>
            {/* {gender} */}
            Любой
          </Typography>
        </Box>
        <Box textAlign="center">
          <Typography color="gray">Уровень</Typography>
          <Typography fontSize={16} fontWeight={600}>
            {ratingFrom}-{ratingTo}
          </Typography>
        </Box>
        <Box textAlign="center">
          <Typography color="gray">Цена</Typography>
          <Typography fontSize={16} fontWeight={600}>
            ₽ {paid ? 0 : price / 4}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

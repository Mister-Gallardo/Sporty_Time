import React from 'react';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { countMatchEndTime } from '../../../../helpers/countMatchEndTime';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import { Box, Divider, Typography } from '@mui/material';

const dateOptions: any = { weekday: 'long', day: 'numeric', month: 'short' };

interface IMatchDataBlock {
  minutes: number;
  startTime: string;
  sport: string;
  ratingFrom: number;
  ratingTo: number;
  date: string;
  price: number;
  gender: string;
}

export const MatchDataBlock: React.FC<IMatchDataBlock> = ({
  minutes,
  startTime,
  sport,
  ratingFrom,
  ratingTo,
  date,
  price,
  gender,
}) => {
  const isPremium = true;

  const matchDate =
    date && new Date(date).toLocaleDateString('ru-RU', dateOptions);
  const MatchTimeRange =
    minutes && startTime
      ? startTime.slice(0, -3) + ' - ' + countMatchEndTime(startTime, minutes)
      : '';
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
              {matchDate} {MatchTimeRange}
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
            ₽ {price}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

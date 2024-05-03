import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { getOneAvailableMatch } from '../../../../services/matches/service';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import { Box, Divider, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { getGenderName, getSportName } from '../../../../helpers/getNameOf';

export const MatchDataBlock = () => {
  const { matchId } = useParams<{ matchId: string }>();

  const { data } = useQuery({
    queryKey: [`match`, Number(matchId)],
    queryFn: () => getOneAvailableMatch(Number(matchId)),
  });

  const singleMatchData = data?.data;
  if (!singleMatchData) return null;

  const { sport, ratingFrom, ratingTo, price, paid, booking, gender } =
    singleMatchData;

  const isPremium = true;
  const interval = booking?.interval;

  // match start date + start-end time
  const matchDate = interval
    ? `${interval.slice(2, 12)} | ${interval.slice(13, 18)}-${interval.slice(
        -10,
        -5,
      )}`
    : 'Матч отменён';

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
            <Typography fontWeight={700}>{getSportName(sport)}</Typography>
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
            {getGenderName(gender)}
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

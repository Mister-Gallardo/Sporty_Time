import { useHistory } from 'react-router';
import { EMatchType, MatchData } from '../../../services/matches/interface';
import { Box, Divider, Typography } from '@mui/material';
import { PlayerSlot } from '../player-slot/PlayerSlot';

interface IAvailableMatchCardProps {
  matchData: MatchData;
}

export const AvailableMatchCard: React.FC<IAvailableMatchCardProps> = ({
  matchData,
}) => {
  const history = useHistory();

  const teamAPlayers =
    matchData?.matchBookings
      ?.filter((booking) => booking.team === 'A')
      ?.map((booking) => booking.player) || [];

  const teamBPlayers =
    matchData?.matchBookings
      ?.filter((booking) => booking.team === 'B')
      ?.map((booking) => booking.player) || [];
  teamAPlayers.length = 2;
  teamBPlayers.length = 2;
  const players = [...Array.from(teamAPlayers), ...Array.from(teamBPlayers)];

  const matchType =
    matchData.type === EMatchType.COMPETITIVE
      ? 'Соревновательный'
      : matchData.type === EMatchType.FRIENDLY
      ? 'Дружеский'
      : '';

  const [startDate, startTime] = matchData.booking.startsAt.split('T');
  const matchTime = `${startDate} | ${startTime.slice(0, 5)}`;

  return (
    <Box
      onClick={() => history.push(`/matches/${matchData.id}`)}
      display="flex"
      flexDirection="column"
      width="100%"
      maxWidth={370}
      border="2px solid #EED790"
      borderRadius={2}
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      bgcolor="#fff"
      sx={{ cursor: 'pointer' }}
    >
      <Box px={2} py={1.5}>
        <Box display="flex" justifyContent="space-between" gap={2}>
          <Typography sx={{ fontSize: '.9rem', fontWeight: '700' }} noWrap>
            {matchTime}
          </Typography>

          <Box display="flex" alignItems="center" gap={1}>
            <Typography fontSize={13}>
              {matchData.paid ? 'Забронирован' : 'Нет брони'}
            </Typography>
            <Typography>{matchData.paid ? '✅' : '🔴'}</Typography>
          </Box>
        </Box>

        <Typography color="gray">11km · Dubai</Typography>

        <Box mt={2} display="flex" justifyContent="space-between">
          <PlayerSlot player={players[0]} sport={matchData.sport} />
          <PlayerSlot player={players[1]} sport={matchData.sport} />
          <Divider orientation="vertical" variant="middle" flexItem />
          <PlayerSlot player={players[2]} sport={matchData.sport} />
          <PlayerSlot player={players[3]} sport={matchData.sport} />
        </Box>
      </Box>

      <Box display="flex" gap={2} borderTop="1px solid #e8e8e8">
        <Box py={0.5} pl={2}>
          <Box display="flex">
            <Typography
              lineHeight={1.2}
              fontSize={13}
              fontWeight={600}
              mr={0.5}
              whiteSpace="nowrap"
            >
              {matchType} ·
            </Typography>
            <Typography fontSize={13} lineHeight={1.2} color="gray">
              Уровень {matchData.ratingFrom} - {matchData.ratingTo}
            </Typography>
          </Box>
          <Typography fontSize={13} color="gray">
            Смешанный
          </Typography>
        </Box>
        <Box
          width={125}
          color="#fff"
          bgcolor="#6E8FFF"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          borderRadius="0 0 7px 0"
        >
          <Typography lineHeight={1.2} fontSize={16} fontWeight={600}>
            {matchData.paid ? 'Оплачен' : `₽ ${matchData.price / 4}`}
          </Typography>
          <Typography fontSize={14} lineHeight={1.2}>
            {matchData.booking?.duration} мин
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

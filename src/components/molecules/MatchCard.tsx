import { Box, Typography } from '@mui/material';
import { useHistory } from 'react-router';
import { AvailableMatch } from '../../services/matches/interface';
import { PlayerSlot } from './PlayerSlot';

export function MatchCard(props: AvailableMatch) {
  const matchData = props;
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

  return (
    <Box
      onClick={() => history.push(`/matches/${matchData.id}`)}
      sx={{
        marginInline: '.75rem',
        marginTop: '.75rem',
        width: '100%',
        maxWidth: '370px',
        background: '#fff',
        border: '2px solid #EED790',
        borderRadius: '10px',

        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
      }}
    >
      <Box
        sx={{
          paddingInline: '15px',
        }}
      >
        <Box
          sx={{
            paddingTop: '.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ fontSize: '.9rem', fontWeight: '700' }}>
            {matchData.gameDate} | {matchData?.slot?.time.slice(0, -3)}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Typography sx={{ fontSize: '.9rem', fontWeight: '500' }}>
              {matchData.slot ? 'Корт забронирован' : 'Корт не забронирован'}
            </Typography>
            <Typography>{matchData.slot ? '✅' : '🔴'}</Typography>
          </Box>
        </Box>

        <Box>
          <Typography sx={{ paddingBlock: '.25rem' }}>11km · Dubai</Typography>
        </Box>

        <Box
          sx={{
            paddingBlock: '.75rem',
            display: 'flex',
            maxWidth: '320px',
            margin: '0 auto',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box sx={{ display: 'flex', gap: '14px' }}>
            <PlayerSlot player={players[0]} />
            <PlayerSlot player={players[1]} />
          </Box>
          <Box sx={{ width: '2px', height: '50px', background: '#e5e5e5' }} />
          <Box sx={{ display: 'flex', gap: '14px' }}>
            <PlayerSlot player={players[2]} />
            <PlayerSlot player={players[3]} />
          </Box>
        </Box>
      </Box>

      <Box sx={{ borderTop: '1px grey solid' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              paddingLeft: '14px',
              paddingTop: '.5rem',
            }}
          >
            <Typography sx={{ fontWeight: '600', paddingBottom: '.25rem' }}>
              Competetive ·{' '}
              <span style={{ fontWeight: '400' }}>
                Level {matchData.ratingFrom} - {matchData.ratingTo}
              </span>
            </Typography>
            <Typography sx={{ fontWeight: '600' }}>Mixed</Typography>
          </Box>
          <Box
            sx={{
              width: '100%',
              maxWidth: '125px',
              height: '100%',
              background: '#6E8FFF',
              textAlign: 'center',
              paddingBlock: '.27rem',
              borderRadius: '0 0 5px 0',
              color: '#fff',
            }}
          >
            <Typography sx={{ fontSize: '1.25rem', fontWeight: '700' }}>
              ₽ {matchData.price}
            </Typography>
            <Typography>{matchData.minutes} мин</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

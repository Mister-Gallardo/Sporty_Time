import { isPlatform } from '@ionic/react';
import { Player } from '../../../services/user/interface';
import { Box, Typography } from '@mui/material';
import { PlayerSlot } from '../PlayerSlot';

interface IPlayersMatchCardProps {
  players: Player[];
  playerAlreadyInSomeTeam: boolean;
  setPlayerInTeam: (team: string) => void;
}

export const PlayersMatchCard: React.FC<IPlayersMatchCardProps> = ({
  players,
  playerAlreadyInSomeTeam,
  setPlayerInTeam,
}) => {
  return (
    <Box
      sx={{
        padding: '1rem .75rem',
        marginBlock: '1.25rem',
        width: '100%',
        background: '#fff',
        border: '1px #e5e5e5 solid',
        borderRadius: '10px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: '.5rem',
        }}
      >
        <Typography sx={{ fontSize: '1.1rem', fontWeight: '600' }}>
          Игроки
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: isPlatform('mobile') ? '1rem' : '48px',
          justifyContent: 'center',
        }}
      >
        <PlayerSlot
          player={players[0]}
          onClick={() => {
            if (playerAlreadyInSomeTeam) return;
            setPlayerInTeam('A');
          }}
        />
        <PlayerSlot
          player={players[1]}
          onClick={() => {
            if (playerAlreadyInSomeTeam) return;
            setPlayerInTeam('A');
          }}
        />
        <Box
          sx={{
            width: '2px',
            height: '100px',
            background: '#e5e5e5',
          }}
        />
        <PlayerSlot
          player={players[2]}
          onClick={() => {
            if (playerAlreadyInSomeTeam) return;
            setPlayerInTeam('B');
          }}
        />
        <PlayerSlot
          player={players[3]}
          onClick={() => {
            if (playerAlreadyInSomeTeam) return;
            setPlayerInTeam('B');
          }}
        />
      </Box>
    </Box>
  );
};

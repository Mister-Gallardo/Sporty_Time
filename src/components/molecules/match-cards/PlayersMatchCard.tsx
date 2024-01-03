import { isPlatform } from '@ionic/react';
import { MatchPlayer } from '../../../services/user/interface';
import { Box, Button, Divider, Typography } from '@mui/material';
import { PlayerSlot } from '../player-slot/PlayerSlot';

interface IPlayersMatchCardProps {
  players: MatchPlayer[];
  playerAlreadyInSomeTeam: boolean;
  setPlayerInTeam: (team: string) => void;
  sport: string;
  handleEditModal: (val?: boolean) => void;
  isMatchPaid: boolean;
}
const isMobile = isPlatform('mobile');

export const PlayersMatchCard: React.FC<IPlayersMatchCardProps> = ({
  players,
  playerAlreadyInSomeTeam,
  setPlayerInTeam,
  sport,
  handleEditModal,
  isMatchPaid,
}) => {
  return (
    <Box
      py={1}
      border="1px #e5e5e5 solid"
      borderRadius={2.5}
      px={2}
      bgcolor="#fff"
      m={isMobile ? 'unset' : '0 auto'}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontSize={15} fontWeight={600}>
          Игроки
        </Typography>
        {playerAlreadyInSomeTeam && (
          <Button
            onClick={() => handleEditModal()}
            sx={{ fontSize: 13, padding: 0 }}
          >
            Изменить
          </Button>
        )}
      </Box>

      <Box py={1} display="flex" justifyContent="space-betweenF" gap={2}>
        <Box display="flex" justifyContent="space-between" width="100%">
          <PlayerSlot
            player={players[0]}
            onClick={() => setPlayerInTeam('A')}
            sport={sport}
            isMatchPaid={isMatchPaid}
            playerAlreadyInSomeTeam={playerAlreadyInSomeTeam}
          />
          <PlayerSlot
            player={players[1]}
            onClick={() => setPlayerInTeam('A')}
            sport={sport}
            isMatchPaid={isMatchPaid}
            playerAlreadyInSomeTeam={playerAlreadyInSomeTeam}
          />
        </Box>
        <Divider orientation="vertical" flexItem variant="middle" />
        <Box display="flex" justifyContent="space-between" width="100%">
          <PlayerSlot
            player={players[2]}
            onClick={() => setPlayerInTeam('B')}
            sport={sport}
            isMatchPaid={isMatchPaid}
            playerAlreadyInSomeTeam={playerAlreadyInSomeTeam}
          />
          <PlayerSlot
            player={players[3]}
            onClick={() => setPlayerInTeam('B')}
            sport={sport}
            isMatchPaid={isMatchPaid}
            playerAlreadyInSomeTeam={playerAlreadyInSomeTeam}
          />
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between">
        <Typography>A</Typography>
        <Typography>B</Typography>
      </Box>
    </Box>
  );
};

import { isPlatform } from '@ionic/react';
import { MatchPlayer } from '../../../services/user/interface';
import { Box, Button, Divider, Typography } from '@mui/material';
import { PlayerSlot } from '../player-slot/PlayerSlot';
import { MatchData, Status } from '../../../services/matches/interface';
import { getMatchStatus } from '../../../helpers/getMatchStatus';

interface IPlayersMatchCardProps {
  players: MatchPlayer[];
  playerAlreadyInSomeTeam: boolean;
  setPlayerInTeam: (team: string) => void;
  handleEditModal: (val?: boolean) => void;
  matchData: MatchData;
}
const isMobile = isPlatform('mobile');

export const PlayersMatchCard: React.FC<IPlayersMatchCardProps> = ({
  players,
  playerAlreadyInSomeTeam,
  setPlayerInTeam,
  handleEditModal,
  matchData,
}) => {
  const { sport, paid } = matchData;

  const matchStatus = getMatchStatus(matchData);
  const isEditActive =
    playerAlreadyInSomeTeam &&
    (matchStatus === Status.PENDING || matchStatus === Status.UPCOMING);

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
        {isEditActive && (
          <Button
            onClick={() => handleEditModal()}
            sx={{ fontSize: 13, padding: 0 }}
          >
            Изменить
          </Button>
        )}
      </Box>

      <Box py={1} display="flex" justifyContent="space-betweenF" gap={2}>
        <Box display="flex" justifyContent="space-between" gap={2} width="100%">
          <PlayerSlot
            player={players[0]}
            onClick={() => setPlayerInTeam('A')}
            sport={sport}
            isMatchPaid={paid}
            playerAlreadyInSomeTeam={playerAlreadyInSomeTeam}
            matchStatus={matchStatus}
          />
          <PlayerSlot
            player={players[1]}
            onClick={() => setPlayerInTeam('A')}
            sport={sport}
            isMatchPaid={paid}
            playerAlreadyInSomeTeam={playerAlreadyInSomeTeam}
            matchStatus={matchStatus}
          />
        </Box>
        <Divider orientation="vertical" flexItem variant="middle" />
        <Box display="flex" justifyContent="space-between" gap={2} width="100%">
          <PlayerSlot
            player={players[2]}
            onClick={() => setPlayerInTeam('B')}
            sport={sport}
            isMatchPaid={paid}
            playerAlreadyInSomeTeam={playerAlreadyInSomeTeam}
            matchStatus={matchStatus}
          />
          <PlayerSlot
            player={players[3]}
            onClick={() => setPlayerInTeam('B')}
            sport={sport}
            isMatchPaid={paid}
            playerAlreadyInSomeTeam={playerAlreadyInSomeTeam}
            matchStatus={matchStatus}
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

import { isPlatform } from '@ionic/react';
import { MatchPlayer } from '../../../services/user/interface';
import { Box, Button, Divider, Typography } from '@mui/material';
import { PlayerSlot } from '../player-slot/PlayerSlot';
import { Status } from '../../../services/matches/interface';
import { getMatchStatus } from '../../../helpers/getMatchStatus';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getOneAvailableMatch } from '../../../services/matches/service';

interface IPlayersMatchCardProps {
  players: MatchPlayer[];
  playerAlreadyInSomeTeam: boolean;
  setPlayerInTeam: (team: string) => void;
  handleEditModal: (val?: boolean) => void;
}
const isMobile = isPlatform('mobile');

export const PlayersMatchCard: React.FC<IPlayersMatchCardProps> = ({
  players,
  playerAlreadyInSomeTeam,
  setPlayerInTeam,
  handleEditModal,
}) => {
  const { matchId } = useParams<{ matchId: string }>();

  const { data } = useQuery({
    queryKey: [`match`, +matchId],
    queryFn: () => getOneAvailableMatch(+matchId),
  });

  const matchData = data?.data;
  if (!matchData) return;

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

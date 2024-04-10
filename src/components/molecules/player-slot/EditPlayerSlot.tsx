import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import { usePlayerProfile } from '../../../services/api/hooks';
import { MatchPlayer } from '../../../services/user/interface';
import { getSportRating } from '../../../helpers/getSportRating';
import { withHostname } from '../../../services/api/service';
import { useQuery } from '@tanstack/react-query';
import { getOneAvailableMatch } from '../../../services/matches/service';
import { useParams } from 'react-router';
import { LoadingCircle } from '../../atoms/LoadingCircle';

interface IEditPlayerSlotProps {
  player?: MatchPlayer;
  onCancel: () => void;
  setPlayerIdToRemove: (playerId?: number) => void;
  onAdd: () => void;
}

export const EditPlayerSlot: React.FC<IEditPlayerSlotProps> = ({
  player,
  onCancel,
  setPlayerIdToRemove,
  onAdd,
}) => {
  const { matchId } = useParams<{ matchId: string }>();

  const { data, isLoading } = useQuery({
    queryKey: [`match`, +matchId],
    queryFn: () => getOneAvailableMatch(+matchId),
  });
  const matchData = data?.data;

  const [currentPlayer] = usePlayerProfile();

  const isUser = currentPlayer?.id === player?.id;
  const isOwner = matchData?.owner?.id === currentPlayer?.id;

  if (isLoading) return <LoadingCircle />;

  const sport = matchData?.sport || '';
  const playerRating = player ? getSportRating(player, sport) : 0;

  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {player ? (
        <>
          {(player?.isOwner || isUser) && (
            <CloseIcon
              fontSize="small"
              onClick={() => {
                if (player?.isOwner && !isUser) {
                  setPlayerIdToRemove(player?.id);
                  return onCancel();
                }

                setPlayerIdToRemove();
                onCancel();
              }}
              sx={{
                cursor: 'pointer',
                color: '#fff',
                backgroundColor: '#ff484e',
                position: 'absolute',
                zIndex: 1,
                right: -10,
                top: -10,
              }}
            />
          )}

          <Avatar
            src={withHostname(player?.user?.avatar?.formats?.small || '')}
            sx={{ width: 45, height: 45 }}
          />

          <Typography mt={1} fontSize={12}>
            {player.user?.firstname}
          </Typography>
          <Typography fontSize={12} color="gray">
            {playerRating}
          </Typography>
        </>
      ) : (
        <Button
          disabled={!isOwner}
          onClick={onAdd}
          sx={{ display: 'flex', flexDirection: 'column', p: 0 }}
        >
          <Box
            width={45}
            height={45}
            border="1px dashed #c6dcf2"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Add fontSize="small" color="primary" />
          </Box>
          {isOwner && (
            <Typography mt={1} fontSize={12} fontWeight={600} color="gray">
              Пригласить
            </Typography>
          )}
        </Button>
      )}
    </Box>
  );
};

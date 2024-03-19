import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, Box, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import { usePlayerProfile } from '../../../services/api/hooks';
import { MatchPlayer } from '../../../services/user/interface';
import { getSportRating } from '../../../helpers/getSportRating';

interface IEditPlayerSlotProps {
  player?: MatchPlayer;
  sport: string;
  onCancel: () => void;
  setPlayerToRemoveId: (playerId?: number) => void;
}

export const EditPlayerSlot: React.FC<IEditPlayerSlotProps> = ({
  player,
  sport,
  onCancel,
  setPlayerToRemoveId,
}) => {
  const [currentPlayer] = usePlayerProfile();
  const isUser = currentPlayer?.id === player?.id;

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
                  setPlayerToRemoveId(player?.id);
                  return onCancel();
                }

                setPlayerToRemoveId();
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
            src={player?.user?.avatar?.formats?.small || ''}
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
        <>
          <Box
            width={45}
            height={45}
            borderRadius={45}
            border="1px dashed #c6dcf2"
            display="flex"
            justifyContent="center"
            alignItems="center"
            m="5px"
          >
            <Add fontSize="small" color="primary" />
          </Box>
          <Typography mt={1} fontSize={12} fontWeight={600} color="gray">
            Пригласить
          </Typography>
        </>
      )}
    </Box>
  );
};

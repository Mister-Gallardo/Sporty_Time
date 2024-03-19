import React from 'react';
import { Box, Divider } from '@mui/material';
import { ModalContainer } from './ModalContainer';
import { MatchPlayer } from '../../services/user/interface';
import { EditPlayerSlot } from '../molecules/player-slot/EditPlayerSlot';

interface IEditMatchPlayersModal {
  openState: boolean;
  handleModal: (val?: boolean) => void;
  players: MatchPlayer[];
  onCancel: () => void;
  sport: string;
  setPlayerToRemoveId: (playerId?: number) => void;
}

export const EditMatchPlayersModal: React.FC<IEditMatchPlayersModal> = ({
  openState,
  handleModal,
  players,
  onCancel,
  sport,
  setPlayerToRemoveId,
}) => {
  return (
    <ModalContainer
      openState={openState}
      handleModal={handleModal}
      headerTitle="Изменить состав команд"
      initialBreakpoint={0.3}
    >
      <Box py={1} display="flex" justifyContent="space-betweenF" gap={2}>
        <Box display="flex" justifyContent="space-evenly" width="100%">
          <EditPlayerSlot
            player={players[0]}
            sport={sport}
            onCancel={onCancel}
            setPlayerToRemoveId={setPlayerToRemoveId}
          />
          <EditPlayerSlot
            player={players[1]}
            sport={sport}
            onCancel={onCancel}
            setPlayerToRemoveId={setPlayerToRemoveId}
          />
        </Box>
        <Divider orientation="vertical" flexItem variant="middle" />
        <Box display="flex" justifyContent="space-evenly" width="100%">
          <EditPlayerSlot
            player={players[2]}
            sport={sport}
            onCancel={onCancel}
            setPlayerToRemoveId={setPlayerToRemoveId}
          />
          <EditPlayerSlot
            player={players[3]}
            sport={sport}
            onCancel={onCancel}
            setPlayerToRemoveId={setPlayerToRemoveId}
          />
        </Box>
      </Box>
    </ModalContainer>
  );
};

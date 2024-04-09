import React, { useState } from 'react';
import { Box, Divider } from '@mui/material';
import { ModalContainer } from './ModalContainer';
import { MatchPlayer } from '../../services/user/interface';
import { EditPlayerSlot } from '../molecules/player-slot/EditPlayerSlot';
import { ConfirmationEditMatchDialog } from './ConfirmationEditMatchDialog';
import useToggle from '../../hooks/useToggle';
import { useFormContext } from 'react-hook-form';

interface IEditMatchPlayersModal {
  openState: boolean;
  handleModal: (val?: boolean) => void;
  handleAddPlayersModal: (val?: boolean) => void;
  players: MatchPlayer[];
}

export const EditMatchPlayersModal: React.FC<IEditMatchPlayersModal> = ({
  openState,
  handleModal,
  handleAddPlayersModal,
  players,
}) => {
  const [openEditMatchDialog, setOpenEditMatchDialog] = useToggle();
  const [playerIdToRemove, setPlayerIdToRemove] = useState<
    number | undefined
  >();

  const { setValue } = useFormContext();

  const onSlotClick = (team: string) => {
    setValue('team', team);
    handleModal();
    handleAddPlayersModal();
  };

  return (
    <>
      <ModalContainer
        openState={openState}
        handleModal={handleModal}
        headerTitle="Изменить состав команд"
        initialBreakpoint={0.3}
      >
        <Box py={1} display="flex" justifyContent="space-between" gap={2}>
          <Box display="flex" justifyContent="space-evenly" width="100%">
            <EditPlayerSlot
              player={players[0]}
              onCancel={setOpenEditMatchDialog}
              onAdd={() => onSlotClick('A')}
              setPlayerIdToRemove={setPlayerIdToRemove}
            />
            <EditPlayerSlot
              player={players[1]}
              onCancel={setOpenEditMatchDialog}
              onAdd={() => onSlotClick('A')}
              setPlayerIdToRemove={setPlayerIdToRemove}
            />
          </Box>
          <Divider orientation="vertical" flexItem variant="middle" />
          <Box display="flex" justifyContent="space-evenly" width="100%">
            <EditPlayerSlot
              player={players[2]}
              onCancel={setOpenEditMatchDialog}
              onAdd={() => onSlotClick('B')}
              setPlayerIdToRemove={setPlayerIdToRemove}
            />
            <EditPlayerSlot
              player={players[3]}
              onCancel={setOpenEditMatchDialog}
              onAdd={() => onSlotClick('B')}
              setPlayerIdToRemove={setPlayerIdToRemove}
            />
          </Box>
        </Box>
      </ModalContainer>
      <ConfirmationEditMatchDialog
        openState={openEditMatchDialog}
        handleDialog={setOpenEditMatchDialog}
        handleModal={handleModal}
        playerIdToRemove={playerIdToRemove}
      />
    </>
  );
};

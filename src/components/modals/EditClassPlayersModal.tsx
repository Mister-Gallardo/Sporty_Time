import React from 'react';
import { Box, Button, Dialog, DialogTitle, IconButton } from '@mui/material';
import { ModalContainer } from './ModalContainer';
import { ClassPlayerSlot } from '../../pages/classes/[id]/components/ClassPlayerSlot';
import CloseIcon from '@mui/icons-material/Close';
import useToggle from '../../hooks/useToggle';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { kickPlayerFromClass } from '../../services/classes';
import { useParams } from 'react-router';
import { useIonToast } from '@ionic/react';

interface IEditClassPlayersModal {
  openState: boolean;
  handleModal: (val?: boolean) => void;
  players: any[];
}

export const EditClassPlayersModal: React.FC<IEditClassPlayersModal> = ({
  openState,
  handleModal,
  players,
}) => {
  const { classId } = useParams<{ classId: string }>();

  const [openConfirmation, setOpenConfirmation] = useToggle();
  const isTrainer = true;

  const qc = useQueryClient();
  const [showToast] = useIonToast();

  const kickPlayerFromClassMutation = useMutation({
    mutationFn: kickPlayerFromClass,
    onSuccess() {
      qc.refetchQueries({ queryKey: ['/classes', classId] });
      qc.refetchQueries({ queryKey: ['/classes/my'] });
      showToast({
        color: 'success',
        message: 'Пользователен удалён из занятия!',
        mode: 'ios',
        position: 'top',
        duration: 2000,
      });
    },
    onError(e: any) {
      const message = e?.response?.data?.message;
      if (!message) return;

      showToast({
        color: 'danger',
        message,
        mode: 'ios',
        position: 'top',
        duration: 2000,
      });
    },
    onSettled() {
      handleModal(false);
    },
  });
  return (
    <>
      <ModalContainer
        openState={openState}
        handleModal={handleModal}
        headerTitle="Изменить"
      >
        <Box display="flex" justifyContent="space-evenly" gap={1}>
          {players.map((player) => {
            return (
              <Box key={player} position="relative">
                <IconButton
                  onClick={() => setOpenConfirmation(true)}
                  sx={{
                    position: 'absolute',
                    zIndex: 1,
                    top: -10,
                    right: 0,
                    backgroundColor: 'error.main',
                    p: 0,
                    '&:hover, &:active': { backgroundColor: '#e8403d' },
                  }}
                >
                  <CloseIcon fontSize="small" sx={{ color: '#fff' }} />
                </IconButton>
                <ClassPlayerSlot />
              </Box>
            );
          })}
        </Box>
      </ModalContainer>

      <Dialog
        onClose={() => setOpenConfirmation(false)}
        open={openConfirmation}
      >
        <Box px={2} py={3}>
          <DialogTitle
            fontSize={18}
            lineHeight={1.2}
            textAlign="center"
            mb={4}
            sx={{ padding: 0 }}
          >
            Вы уверены, что хотите
            {isTrainer ? ' удалить ученика' : ' отменить бронирование'}?
          </DialogTitle>
          <Box display="flex" gap={2}>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                // kickPlayerFromClassMutation.mutate({
                //   classId,
                //   playerId: 0,
                // })
              }}
              sx={{ color: '#fff' }}
              fullWidth
            >
              Да
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => setOpenConfirmation()}
              fullWidth
            >
              Нет
            </Button>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

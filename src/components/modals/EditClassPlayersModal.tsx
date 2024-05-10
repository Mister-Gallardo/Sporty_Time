import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ModalContainer } from './ModalContainer';
import { ClassPlayerSlot } from '../../pages/classes/[id]/components/ClassPlayerSlot';
import CloseIcon from '@mui/icons-material/Close';
import useToggle from '../../hooks/useToggle';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  cancelClass,
  getClass,
  kickPlayerFromClass,
} from '../../services/classes';
import { useParams } from 'react-router';
import { useIonToast } from '@ionic/react';
import { usePlayerProfile } from '../../services/api/hooks';
import { ConfirmationDialog } from './ConfirmationDialog';

interface IEditClassPlayersModal {
  openState: boolean;
  handleModal: (val?: boolean) => void;
}

export const EditClassPlayersModal: React.FC<IEditClassPlayersModal> = ({
  openState,
  handleModal,
}) => {
  const { classId } = useParams<{ classId: string }>();
  const [player] = usePlayerProfile();

  const { data } = useQuery({
    queryKey: ['classes', classId],
    queryFn: () => getClass(classId),
  });

  const classData = data?.data;

  const ownerId = classData?.owner?.id;
  const currentPlayerId = player?.id;
  const isOwner = currentPlayerId === ownerId;

  const [openConfirmation, setOpenConfirmation] = useToggle();
  const [playerToKick, setPlayerToKick] = useState<number>();

  const qc = useQueryClient();
  const [showToast] = useIonToast();

  const kickPlayerFromClassMutation = useMutation({
    mutationFn: kickPlayerFromClass,
    onSuccess() {
      qc.refetchQueries({ queryKey: ['classes', classId] });
      qc.refetchQueries({ queryKey: ['classes/my'] });
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
      setOpenConfirmation(false);
    },
  });

  const cancelMyClassBookingMutation = useMutation({
    mutationFn: cancelClass,
    onSuccess() {
      qc.refetchQueries({ queryKey: ['classes', classId] });
      qc.refetchQueries({ queryKey: ['classes/my'] });
      showToast({
        color: 'success',
        message: 'Ваше бронирование отменено!',
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
      setOpenConfirmation(false);
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
          {classData?.classBookings?.map((booking) => {
            return (
              <Box key={booking.id} position="relative">
                {(currentPlayerId === booking?.player?.id || isOwner) && (
                  <IconButton
                    onClick={() => {
                      setPlayerToKick(booking?.player?.id);
                      setOpenConfirmation(true);
                    }}
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
                )}
                <ClassPlayerSlot
                  {...booking?.player}
                  sport={classData?.sport}
                />
              </Box>
            );
          })}
        </Box>
      </ModalContainer>

      <ConfirmationDialog
        handleDialog={setOpenConfirmation}
        open={openConfirmation}
        title={`Вы уверены, что хотите ${
          isOwner ? ' удалить ученика' : ' отменить бронирование'
        }?`}
        onConfirm={() => {
          if (isOwner && playerToKick) {
            kickPlayerFromClassMutation.mutate({
              classId,
              playerId: playerToKick,
            });
          } else {
            cancelMyClassBookingMutation.mutate(classId);
          }
        }}
        isPending={
          isOwner
            ? kickPlayerFromClassMutation.isPending
            : cancelMyClassBookingMutation.isPending
        }
      />
    </>
  );
};

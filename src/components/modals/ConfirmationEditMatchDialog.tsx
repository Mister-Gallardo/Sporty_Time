import {
  Box,
  Button,
  Dialog,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import {
  cancelMatch,
  deletePlayerFromMatch,
  getOneAvailableMatch,
} from '../../services/matches/service';
import { usePlayerProfile } from '../../services/api/hooks';
import { useIonToast } from '@ionic/react';

interface IEditMatchDialog {
  openState: boolean;
  handleDialog: (val?: boolean) => void;
  playerToRemoveId?: number;
}

// edit match => leave match | remove player(s) or cancel the match
export const ConfirmationEditMatchDialog: React.FC<IEditMatchDialog> = ({
  handleDialog,
  openState,
  playerToRemoveId,
}) => {
  const { matchId } = useParams<{ matchId: string }>();

  const { data, refetch } = useQuery({
    queryKey: [`match`, Number(matchId)],
    queryFn: () => getOneAvailableMatch(Number(matchId)),
  });

  const singleMatchData = data?.data;

  const [myPlayer] = usePlayerProfile();
  const isUserOwner = singleMatchData?.owner?.id === myPlayer?.id;

  const [showToast] = useIonToast();
  const qc = useQueryClient();

  // Cancel / Leave match
  const cancelMatchMutation = useMutation({
    mutationFn: cancelMatch,
    onSuccess() {
      handleDialog();
      showToast({
        color: 'success',
        message: `Ваше бронирование отменено`,
        mode: 'ios',
        position: 'bottom',
        duration: 2000,
      });
      refetch();
      qc.resetQueries({ queryKey: ['my-matches', false] });
    },
    onError() {
      handleDialog();
      showToast({
        color: 'danger',
        message: `Ошибка, попробуйте ещё раз`,
        mode: 'ios',
        position: 'bottom',
        duration: 2000,
      });
    },
  });

  // Remove Player from match
  const deletePlayerFromMatchMutation = useMutation({
    mutationFn: deletePlayerFromMatch,
    onSuccess() {
      handleDialog();
      showToast({
        color: 'success',
        message: `Игрок был удалён из матча`,
        mode: 'ios',
        position: 'bottom',
        duration: 2000,
      });
      refetch();
      qc.resetQueries({ queryKey: ['my-matches', false] });
    },
    onError() {
      handleDialog();
      showToast({
        color: 'danger',
        message: `Ошибка, попробуйте ещё раз`,
        mode: 'ios',
        position: 'bottom',
        duration: 2000,
      });
    },
  });

  return (
    <Dialog onClose={() => handleDialog(false)} open={!!openState}>
      <Box px={2} py={3}>
        <DialogTitle
          fontSize={20}
          lineHeight={1.2}
          textAlign="center"
          sx={{ padding: 0 }}
        >
          {isUserOwner && playerToRemoveId
            ? 'Вы уверены, что хотите удалить участника из матча?'
            : isUserOwner && !playerToRemoveId
            ? 'Вы уверены, что хотите отменить матч?'
            : 'Вы уверены, что хотите покинуть матч?'}
        </DialogTitle>
        <DialogContentText textAlign="center" mt={1} mb={5}>
          {isUserOwner && playerToRemoveId
            ? 'Если вы удалите участника, его бронь будет отменена.'
            : isUserOwner && !playerToRemoveId
            ? 'Если Вы покинете матч, то он будет отменён для всех участников.'
            : 'Оплата за бронирование места в матче будет возвращена.'}
        </DialogContentText>
        <Box display="flex" gap={2}>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              if (playerToRemoveId) {
                deletePlayerFromMatchMutation.mutate({
                  matchId: +matchId,
                  deletePlayerId: playerToRemoveId,
                });
              } else {
                cancelMatchMutation.mutate(+matchId);
              }
            }}
            sx={{ color: '#fff' }}
            fullWidth
          >
            Да
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDialog()}
            fullWidth
          >
            Нет
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

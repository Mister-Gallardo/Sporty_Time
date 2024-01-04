import {
  Box,
  Button,
  Dialog,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import React from 'react';

interface ICancelDialogModal {
  openState: boolean;
  handleDialog: (val?: boolean) => void;
  isUserOwner: boolean;
  handleCancel: () => void;
  playerToRemoveId?: number;
}
export const CancelDialogModal: React.FC<ICancelDialogModal> = ({
  handleDialog,
  openState,
  isUserOwner,
  handleCancel,
  playerToRemoveId,
}) => {
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
            onClick={handleCancel}
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

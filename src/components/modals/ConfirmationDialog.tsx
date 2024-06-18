import React from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  IconButton,
  Typography,
} from '@mui/material';
import { Close } from '@mui/icons-material';

interface IConfirmationDialogProps {
  handleDialog: (val?: boolean) => void;
  open: boolean;
  title: string;
  onConfirm: () => void;
  isPending: boolean;
}

export const ConfirmationDialog: React.FC<IConfirmationDialogProps> = ({
  handleDialog,
  open,
  title,
  onConfirm,
  isPending,
}) => {
  return (
    <Dialog onClose={() => handleDialog(false)} open={open}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <span style={{ width: 25 }} />
        <Typography fontSize={16} fontWeight={600}>
          Подтвердите действие
        </Typography>
        <IconButton onClick={() => handleDialog()}>
          <Close />
        </IconButton>
      </Box>

      <Box p={2} maxWidth={450}>
        <Typography textAlign="center">{title}</Typography>
        <Box mt={5} display="flex" gap={1}>
          <Button
            disabled={isPending}
            endIcon={
              isPending && <CircularProgress size={18} sx={{ color: '#fff' }} />
            }
            onClick={onConfirm}
            color="success"
            variant="contained"
            sx={{ color: '#fff' }}
            fullWidth
          >
            Да
          </Button>
          <Button
            onClick={() => handleDialog(false)}
            color="error"
            variant="contained"
            fullWidth
          >
            Нет
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

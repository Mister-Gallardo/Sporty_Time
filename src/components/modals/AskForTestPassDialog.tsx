import React from 'react';
import { Link as ReactRouterLink, useParams } from 'react-router-dom';
import { Close } from '@mui/icons-material';
import {
  Box,
  Dialog,
  DialogContentText,
  IconButton,
  Link,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getOneAvailableMatch } from '../../services/matches/service';

interface IAskForTestPassDialogProps {
  open: boolean;
  handleOpen: (val?: boolean) => void;
}

export const AskForTestPassDialog: React.FC<IAskForTestPassDialogProps> = ({
  open,
  handleOpen,
}) => {
  const { matchId } = useParams<{ matchId: string }>();

  const { data } = useQuery({
    queryKey: [`match`, Number(matchId)],
    queryFn: () => getOneAvailableMatch(Number(matchId)),
  });

  const singleMatchData = data?.data;

  if (!singleMatchData) return null;

  return (
    <Dialog open={open} onClose={() => handleOpen(false)}>
      <Box
        p={2}
        maxWidth={400}
        display="flex"
        flexDirection="column"
        alignItems="center"
        position="relative"
      >
        <IconButton
          onClick={() => handleOpen(false)}
          sx={{ position: 'absolute', top: 0, right: 0 }}
        >
          <Close sx={{ color: '#333' }} />
        </IconButton>
        <DialogContentText mt={2} textAlign="center">
          Что бы присоединиться к матчу необходимо пройти тест, что бы
          определить ваш уровень SportyTime
        </DialogContentText>

        <Link
          component={ReactRouterLink}
          to={`/question-form?sport=${singleMatchData.sport}&step=2`}
          mt={3}
          onClick={() => handleOpen(false)}
        >
          Пройти тест
        </Link>
      </Box>
    </Dialog>
  );
};

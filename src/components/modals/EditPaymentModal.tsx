import React, { useEffect } from 'react';
import { ModalContainer } from './ModalContainer';
import { Box, Button, Typography } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createExtraPaymentYookassaToken } from '../../services/matches/service';
import { renderCheckoutWidget } from '../../helpers/renderCheckoutWidget';
import { socket } from '../../utils/socket';
import { useParams } from 'react-router';
import { useIonToast } from '@ionic/react';
import useToggle from '../../hooks/useToggle';

interface IEditPaymentModalProps {
  openState: boolean;
  handleModal: (val?: boolean) => void;
  money: number;
}

export const EditPaymentModal: React.FC<IEditPaymentModalProps> = ({
  openState,
  handleModal,
  money,
}) => {
  const { matchId } = useParams<{ matchId: string }>();

  const [showToast] = useIonToast();
  const qc = useQueryClient();

  const extraPaymentMutation = useMutation({
    mutationFn: createExtraPaymentYookassaToken,
    onSuccess(token: string) {
      renderCheckoutWidget(token);
    },
    onError() {
      showToast({
        color: 'danger',
        message: 'Ошибка! Попробуйте ещё раз!',
        mode: 'ios',
        position: 'bottom',
        duration: 2000,
      });
    },
  });

  useEffect(() => {
    const updateMatchData = (e: { action: string }) => {
      if (e.action === 'update') {
        showToast({
          color: 'success',
          message: 'Оплата проведена успешно',
          mode: 'ios',
          position: 'top',
          duration: 2000,
        });
        qc.refetchQueries({ queryKey: ['my-matches', 'match'] });
      }
    };

    socket.on(`matchId - ${matchId}`, updateMatchData);

    return () => {
      socket.off(`matchId - ${matchId}`, updateMatchData);
    };
  }, []);

  const [isDisabled, setIsDisabled] = useToggle();

  return (
    <ModalContainer
      headerTitle="Оплата"
      openState={openState}
      handleModal={(val) => {
        setIsDisabled(false);
        handleModal(val);
      }}
    >
      <Typography textAlign="center" fontSize={18}>
        Доплать {money}p для подтверждения брони?
      </Typography>
      <Box display="flex" gap={2} mt={3}>
        <Button
          disabled={isDisabled}
          onClick={() => {
            setIsDisabled();
            extraPaymentMutation.mutate({
              matchId: +matchId,
              money,
            });
          }}
          fullWidth
          sx={{
            backgroundColor: 'success.main',
            color: '#fff',
            '&:hover': { backgroundColor: 'primary.main' },
          }}
        >
          Оплатить
        </Button>
        <Button
          onClick={() => {
            handleModal(false);
            setIsDisabled(false);
          }}
          fullWidth
          sx={{
            backgroundColor: 'error.main',
            color: '#fff',
            '&:hover': { backgroundColor: 'primary.main' },
          }}
        >
          Отмена
        </Button>
      </Box>
      <Box mt={2} id="payment-form" />
    </ModalContainer>
  );
};

import React from 'react';
import { ModalContainer } from './ModalContainer';
import { Box, Button, Typography } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createExtraPaymentYookassaToken } from '../../services/matches/service';
import { renderCheckoutWidget } from '../../helpers/renderCheckoutWidget';
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

  const onSuccess = () => {
    handleModal(false);
    showToast({
      color: 'success',
      message: 'Оплата проведена успешно',
      mode: 'ios',
      position: 'top',
      duration: 2000,
    });
    qc.refetchQueries({ queryKey: ['my-matches', false] });
    qc.refetchQueries({ queryKey: [`match`, +matchId] });
  };

  const extraPaymentMutation = useMutation({
    mutationFn: createExtraPaymentYookassaToken,
    onSuccess(token: string) {
      renderCheckoutWidget(token, onSuccess);
    },
    onError(e: any) {
      handleModal(false);

      const message = e?.response?.data?.message;
      if (!message) return;

      showToast({
        color: 'danger',
        message,
        mode: 'ios',
        position: 'bottom',
        duration: 2000,
      });
    },
  });

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
        Доплатить {money}p для подтверждения брони?
      </Typography>
      <Box display="flex" gap={2} mt={3}>
        <Button
          disabled={isDisabled}
          onClick={() => {
            setIsDisabled();
            extraPaymentMutation.mutate(+matchId);
          }}
          fullWidth
          sx={{
            backgroundColor: 'success.main',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#262d58f2',
            },
            '&:active': {
              backgroundColor: '#262d58',
            },
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
            '&:hover': {
              backgroundColor: '#262d58f2',
            },
            '&:active': {
              backgroundColor: '#262d58',
            },
          }}
        >
          Отмена
        </Button>
      </Box>
      <Box
        mt={2}
        id="payment-form"
        minHeight={isDisabled ? 550 : 'unset'}
        position="relative"
        zIndex={2}
      />
    </ModalContainer>
  );
};

import React from 'react';
import { ModalContainer } from './ModalContainer';
import useToggle from '../../hooks/useToggle';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { joinClass } from '../../services/classes';
import { useIonToast } from '@ionic/react';
import { useParams } from 'react-router';
import { renderCheckoutWidget } from '../../helpers/renderCheckoutWidget';
import { Box, Button } from '@mui/material';

interface IClassJoinCheckoutModalProps {
  openState: boolean;
  handleModal: (val?: boolean) => void;
}

export const ClassJoinCheckoutModal: React.FC<IClassJoinCheckoutModalProps> = ({
  openState,
  handleModal,
}) => {
  const { classId } = useParams<{ classId: string }>();

  const [isDisabled, setIsDisabled] = useToggle();

  const qc = useQueryClient();
  const [showToast] = useIonToast();

  const onSuccess = () => {
    handleModal(false);
    showToast({
      color: 'success',
      message: 'Вы присоединились к занятию!',
      mode: 'ios',
      position: 'top',
      duration: 2000,
    });
    qc.refetchQueries({ queryKey: [`classes`, +classId] });
    qc.refetchQueries({ queryKey: ['classes/my'] });
  };

  const joinClassMutation = useMutation({
    mutationFn: joinClass,
    onSuccess(token: string) {
      renderCheckoutWidget(token, onSuccess);
    },
    onError(e: any) {
      handleModal(false);
      setIsDisabled(false);

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

  return (
    <ModalContainer
      openState={openState}
      handleModal={(val) => {
        setIsDisabled(false);
        handleModal(val);
      }}
      headerTitle="Оплата"
    >
      <Button
        onClick={() => joinClassMutation.mutate(classId)}
        sx={{
          bgcolor: 'primary.main',
          color: '#fff',
          px: 2,
          '&:hover': {
            background: '#0D2432',
          },
          '&:disabled': {
            background: '#777',
            color: '#eee',
          },
        }}
      >
        Pay
      </Button>

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

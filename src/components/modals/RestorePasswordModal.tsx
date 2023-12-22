import { useState } from 'react';
import { isPlatform, useIonToast } from '@ionic/react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { changePasswordRequest } from '../../services/auth/service';
import { useMutation } from '@tanstack/react-query';
import { ModalContainer } from './ModalContainer';

interface IRestorePasswordModal {
  openState: boolean;
  handleModal: (val?: boolean) => void;
}
export const RestorePasswordModal: React.FC<IRestorePasswordModal> = ({
  openState,
  handleModal,
}) => {
  const isMobile = isPlatform('mobile');

  const [showToast] = useIonToast();

  const [email, setEmail] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const changePswrdMutation = useMutation({
    mutationFn: changePasswordRequest,
    onSuccess() {
      showToast({
        color: 'success',
        message: `Ссылка отправлена на почту ${email}`,
        mode: 'ios',
        position: 'top',
        duration: 2000,
      });
    },
    onError(e: any) {
      const message = e.response.data.message;
      if (message[0] === 'email must be an email')
        setErrorMsg('Некорректный Email');
      if (message === 'Email does not exist')
        setErrorMsg('Такой Email не существует');
    },
  });

  return (
    <ModalContainer
      openState={openState}
      handleModal={handleModal}
      headerTitle="Восстановление пароля"
    >
      <Box
        px={isMobile ? 0 : 2}
        py={isMobile ? 2 : 4}
        display="flex"
        flexDirection="column"
        gap={5}
        bgcolor="#fff"
        maxWidth={isMobile ? 'unset' : '40vw'}
      >
        <Typography color="gray" textAlign="center">
          Введите адрес электронной почты, привязанный к вашей учетной записи, и
          мы отправим вам ссылку для сброса пароля.
        </Typography>

        <TextField
          error={!!errorMsg}
          value={email}
          onChange={(e) => {
            if (errorMsg) setErrorMsg('');
            setEmail(e.target.value);
          }}
          label="Email"
          type="email"
          required
          sx={{ width: '100%' }}
          variant="outlined"
          helperText={errorMsg}
        />

        <Button
          variant="contained"
          onClick={() => changePswrdMutation.mutate(email)}
          sx={{ borderRadius: 20 }}
          disabled={!email}
        >
          Отправить ссылку
        </Button>
      </Box>
    </ModalContainer>
  );
};

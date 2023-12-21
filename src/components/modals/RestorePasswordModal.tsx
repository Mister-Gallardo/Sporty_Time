import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
  isPlatform,
} from '@ionic/react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { changePasswordRequest } from '../../services/auth/service';

interface IRestorePasswordModal {
  openState: boolean;
  handleModal: (val?: boolean) => void;
}
export const RestorePasswordModal: React.FC<IRestorePasswordModal> = ({
  openState,
  handleModal,
}) => {
  const isMobile = isPlatform('mobile');

  const [email, setEmail] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const changePswrdMutation = useMutation({
    mutationFn: changePasswordRequest,
    onSuccess() {},
    onError(e: any) {
      const message = e.response.data.message;
      if (message[0] === 'email must be an email')
        setErrorMsg('Некорректный Email');
      if (message === 'Email does not exist')
        setErrorMsg('Такой Email не существует');
    },
  });

  const header = (
    <IonHeader style={{ boxShadow: '0 1px 4px #0000012' }}>
      <IonToolbar>
        <IonTitle>Восстановление пароля</IonTitle>
        <IonButtons slot="end">
          <IonButton onClick={() => handleModal()}>
            <CloseRoundedIcon sx={{ color: 'black' }} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );

  const content = (
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
  );

  return (
    <>
      {isMobile ? (
        <IonModal
          onDidDismiss={() => handleModal(false)}
          isOpen={openState}
          initialBreakpoint={0.95}
          breakpoints={[0, 0.25, 0.5, 0.75, 0.95]}
          handleBehavior="cycle"
        >
          {header}
          <IonContent className="ion-padding">{content}</IonContent>
        </IonModal>
      ) : (
        <Modal open={openState} onClose={() => handleModal(false)}>
          <Box>
            {header}
            {content}
          </Box>
        </Modal>
      )}
    </>
  );
};

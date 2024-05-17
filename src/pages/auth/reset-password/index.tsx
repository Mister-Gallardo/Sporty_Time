import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useSearchParam } from '../../../hooks/useSearchParams';
import { changePassword } from '../../../services/auth/service';
import { useMutation } from '@tanstack/react-query';
import { useHistory } from 'react-router';
import { isPlatform, useIonToast } from '@ionic/react';

export function ResetPassword() {
  const isMobile = isPlatform('mobile');

  const history = useHistory();
  const [email] = useSearchParam('email');
  const [otp] = useSearchParam('otp');

  const [showToast] = useIonToast();

  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [errorMsg, setErrorMsg] = useState<string>('');

  const changePswrdMutation = useMutation({
    mutationFn: changePassword,
    onSuccess() {
      showToast({
        color: 'success',
        message: `Пароль был успешно изменён`,
        mode: 'ios',
        position: 'bottom',
        duration: 2000,
      });
      history.push('/auth');
    },
    onError(e: any) {
      const message = e.response.data.message;

      if (Array.isArray(message)) {
        setErrorMsg(message[0]);
      } else {
        setErrorMsg(message);
      }
    },
  });

  const onChangePassord = () => {
    if (password !== confirmPassword)
      return setErrorMsg('Пароли должны совпадать');
    changePswrdMutation.mutate({ email, otp, password });
  };

  return (
    <Box
      margin={isMobile ? 'unset' : '10vh auto'}
      maxWidth={isMobile ? 'unset' : '600px'}
      display="flex"
      flexDirection="column"
      gap={3}
      px={2}
      pt={2}
    >
      <Typography textAlign="center" fontSize={16} color="gray">
        Введите новый пароль
      </Typography>
      <TextField
        error={!!errorMsg}
        value={password}
        onChange={(e) => {
          if (errorMsg) setErrorMsg('');
          setPassword(e.target.value);
        }}
        label="Новый пароль"
        type="password"
        required
        variant="outlined"
      />
      <TextField
        error={!!errorMsg}
        value={confirmPassword}
        onChange={(e) => {
          if (errorMsg) setErrorMsg('');
          setConfirmPassword(e.target.value);
        }}
        label="Подтвердите пароль"
        type="password"
        required
        variant="outlined"
      />

      <Typography
        textAlign="center"
        color="#ff4c4c"
        visibility={errorMsg ? 'visible' : 'hidden'}
        minHeight={10}
        lineHeight={1.2}
      >
        {errorMsg}
      </Typography>

      <Button
        variant="contained"
        onClick={onChangePassord}
        sx={{ borderRadius: 20, marginTop: 3 }}
        disabled={!password || !confirmPassword || !!errorMsg}
      >
        Изменить пароль
      </Button>
    </Box>
  );
}

export default ResetPassword;

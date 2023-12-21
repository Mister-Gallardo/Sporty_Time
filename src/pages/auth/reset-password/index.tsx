import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import useSearchParams from '../../../hooks/useSearchParams';
import { changePassword } from '../../../services/auth/service';
import { useMutation } from '@tanstack/react-query';
import { useHistory } from 'react-router';
import { isPlatform } from '@ionic/react';

export function ResetPassword() {
  const isMobile = isPlatform('mobile');
  const history = useHistory();
  const [getParams] = useSearchParams();

  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [errorMsg, setErrorMsg] = useState<string>('');

  const changePswrdMutation = useMutation({
    mutationFn: changePassword,
    onSuccess() {
      history.push('/');
    },
    onError(e: any) {
      const message = e.response.data.message;
      if (typeof message === 'string' && message === 'OTP is incorrect')
        setErrorMsg('Неверный код подтверждения');

      if (message[0] === 'password too weak')
        setErrorMsg(
          'Пароль слишком слабый. При создании дололнительно используйте цифры/символы/заглавные буквы.',
        );

      if (
        message[0] === 'password must be longer than or equal to 8 characters'
      )
        setErrorMsg(
          'Ненадёжный пароль. Пароль должен состоять минимум из 8 символов',
        );
    },
  });

  const onChangePassord = () => {
    if (password !== confirmPassword)
      return setErrorMsg('Пароли должны совпадать');

    changePswrdMutation.mutate({
      email: getParams('email') + '@gmail.com',
      otp: getParams('otp'),
      password,
    });
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

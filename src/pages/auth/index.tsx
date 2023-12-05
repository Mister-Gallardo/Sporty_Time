import {
  Box,
  CircularProgress,
  Fade,
  Grow,
  TextField,
  Typography,
} from '@mui/material';
import { Button } from '../../components/atoms/Button';
import { useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { IAuthForm } from '../../services/api/interface';
import { useMutation } from '@tanstack/react-query';
import {
  loginUser,
  registerRequest,
  registerUser,
} from '../../services/auth/service';
import { useHistory } from 'react-router';
import { IonToast, isPlatform } from '@ionic/react';

interface IAuthPageProps {}

enum LoginStates {
  UNDEFINED,
  LOGIN,
  REGISTER,
}

export function AuthPage(props: IAuthPageProps) {
  const [authState, setAuthState] = useState(LoginStates.UNDEFINED);
  const [error, setError] = useState<string | undefined>('');

  const [isOpenToast, setIsOpenToast] = useState<boolean>(false);

  const { register, handleSubmit, reset } = useForm<IAuthForm>();

  const history = useHistory();

  const registerRequestMutation = useMutation({
    mutationFn: registerRequest,
    onSuccess() {
      setAuthState(LoginStates.REGISTER);
      setError(undefined);
    },
    onError(e: any) {
      if (!e.response?.data?.message) return;
      if (e.response?.data?.message === 'Email already taken') {
        setAuthState(LoginStates.LOGIN);
      } else if (e.response?.data?.message.startsWith('Wait for')) {
        setAuthState(LoginStates.REGISTER);
        setError(undefined);
      } else {
        setError(e.response?.data?.message);
      }
    },
  });

  const registerUserMutation = useMutation({
    mutationFn: registerUser,
    onSuccess(response) {
      const token = response.data.jwt;

      if (!token) setError('Trouble with finding token or user info');
      localStorage.setItem('jwtToken', JSON.stringify(token));
      const authEvent = new Event('auth-changed');
      document.dispatchEvent(authEvent);
      setError(undefined);
      reset({ password: '' });
      setIsOpenToast(true);
      history.push('/');
    },
    onError(e: any) {
      if (!e.response?.data?.error?.message) return;
      if (e.response?.data?.error?.message === 'Email already taken') {
        setAuthState(LoginStates.LOGIN);
      } else {
        setError(e.response?.data?.error?.message);
      }
    },
  });

  const loginUserMutation = useMutation({
    mutationFn: loginUser,
    onSuccess(response) {
      const token = response.data.jwt;

      if (!token) setError('Trouble with finding token or user info');
      localStorage.setItem('jwtToken', JSON.stringify(token));
      const authEvent = new Event('auth-changed');
      document.dispatchEvent(authEvent);
      setError(undefined);
      history.push('/');
      history.go(0);
    },
    onError(e: any) {
      setError(e.response?.data?.message);
    },
  });

  const submitOnInvalid: SubmitErrorHandler<IAuthForm> = () => {
    console.log('error G.');
  };

  const submitOnValid: SubmitHandler<IAuthForm> = async (data) => {
    const { email, firstName, lastName, password } = data;

    if (authState === LoginStates.UNDEFINED) {
      if (!email) return;
      registerRequestMutation.mutate(data);
    }

    if (authState === LoginStates.REGISTER) {
      if (!email || !firstName || !lastName || !password) return;
      registerUserMutation.mutate(data);
    }

    if (authState === LoginStates.LOGIN) {
      if (!email || !password) return;
      loginUserMutation.mutate(data);
    }
  };

  const buttonText =
    authState === LoginStates.UNDEFINED
      ? 'Далее'
      : authState === LoginStates.REGISTER
      ? 'Зарегестрироваться'
      : 'Войти';

  return (
    <Box
      sx={{
        paddingTop: isPlatform('mobile') ? '0' : '10%',
        width: '100%',
        display: 'flex',
        height: '99%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '600px',
          margin: '0 auto',
          paddingInline: '20px',
        }}
      >
        <Box
          sx={{
            margin: '0 auto',
            width: '90%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: '1.25rem',
              fontWeight: '600',
              paddingBottom: '.25rem',
            }}
          >
            Вход в приложение
          </Typography>
          {authState !== LoginStates.REGISTER && (
            <Fade in timeout={100}>
              <Typography
                sx={{ fontSize: '.9rem', fontWeight: '600', opacity: '.5' }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                convallis pellentesque metus id lacinia.
              </Typography>
            </Fade>
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
            paddingTop: '4rem',
            flexDirection: 'column',
            gap: '.5rem',
          }}
        >
          <TextField
            {...register('email')}
            label="Email"
            type="email"
            required
            sx={{ width: '100%' }}
            variant="outlined"
          />

          {authState === LoginStates.REGISTER && (
            <Grow in timeout={400}>
              <TextField
                variant="outlined"
                sx={{ width: '100%' }}
                {...register('firstName', { required: true })}
                label={'Имя'}
              />
            </Grow>
          )}

          {authState === LoginStates.REGISTER && (
            <Grow in timeout={600}>
              <TextField
                variant="outlined"
                sx={{ width: '100%' }}
                {...register('lastName', { required: true })}
                label={'Фамилия'}
              />
            </Grow>
          )}

          {authState === LoginStates.REGISTER && (
            <Grow in timeout={800}>
              <TextField
                variant="outlined"
                sx={{ width: '100%' }}
                {...register('otp', { required: true })}
                label={'Код подтверждения'}
              />
            </Grow>
          )}

          {authState !== LoginStates.UNDEFINED && (
            <Grow in timeout={800}>
              <TextField
                error={error ? true : false}
                helperText={
                  error === 'Invalid credentials' && 'Неверный логин или пароль'
                }
                {...register('password', { required: true })}
                label="Пароль"
                type="password"
                sx={{ width: '100%' }}
                variant="outlined"
              />
            </Grow>
          )}
        </Box>
        <Box
          sx={{
            paddingTop: '4rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Button
            onClick={handleSubmit(submitOnValid, submitOnInvalid)}
            sx={{
              fontSize: '1rem',
              fontWeight: '700',
              paddingBlock: '1.4rem',
              borderRadius: '35px',
            }}
          >
            {registerRequestMutation.isPending ||
            registerUserMutation.isPending ||
            loginUserMutation.isPending ? (
              <CircularProgress size={25} />
            ) : (
              buttonText
            )}
          </Button>
          {authState !== LoginStates.REGISTER && (
            <>
              <Typography
                sx={{
                  paddingBlock: '.9rem',
                  textTransform: 'uppercase',
                  fontWeight: '600',
                  fontSize: '.75rem',
                  opacity: '.4',
                }}
              >
                или
              </Typography>
              <Button
                sx={{
                  fontSize: '1rem',
                  fontWeight: '700',
                  paddingBlock: '1.4rem',
                  borderRadius: '35px',
                }}
              >
                Войти через VKонтакте
              </Button>
              <Typography
                sx={{
                  fontSize: '.75rem',
                  fontWeight: '500',
                  opacity: '.5',
                  textAlign: 'center',
                  paddingTop: '.75rem',
                }}
              >
                By proceeding you also agree to the Terms of Service and Privacy
                Policy
              </Typography>
            </>
          )}
        </Box>
      </Box>
      <IonToast
        isOpen={isOpenToast}
        message="Вы успешно зарегестрировались на нашей платформе!"
        onDidDismiss={() => setIsOpenToast(false)}
        duration={2000}
      ></IonToast>
    </Box>
  );
}

import {
  Box,
  Button,
  CircularProgress,
  Fade,
  Grow,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { IAuthForm } from '../../services/api/interface';
import { useMutation } from '@tanstack/react-query';
import {
  loginUser,
  loginWithOtp,
  registerRequest,
} from '../../services/auth/service';
import { useHistory } from 'react-router';
import { IonToast } from '@ionic/react';
import useToggle from '../../hooks/useToggle';
import { RestorePasswordModal } from '../../components/modals/RestorePasswordModal';
import { AuthErrors } from '../../services/auth/interface';

import { RegistrationFields } from './components/RegistrationFields';
import { PasswordField } from './components/PasswordField';

export enum LoginStates {
  UNDEFINED,
  LOGIN,
  REGISTER,
}

export function AuthPage() {
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('jwtToken')) return history.push('/');
  }, []);

  const [authState, setAuthState] = useState(LoginStates.UNDEFINED);

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isOpenErrorToast, setIsOpenErrorToast] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | undefined>();
  const [isOpenSuccessToast, setIsOpenSuccessToast] = useState<boolean>(false);

  const authForm = useForm<IAuthForm>();
  const { register, handleSubmit, reset, watch } = authForm;

  const [openRestorePswrdModal, setOpenRestorePswrdModal] = useToggle();

  const registerRequestMutation = useMutation({
    mutationFn: registerRequest,
    onSuccess() {
      setAuthState(LoginStates.REGISTER);
    },
    onError(e: any) {
      const message = e.response.data.message;

      if (message === 'Email already taken') {
        return setAuthState(LoginStates.LOGIN);
      }

      if (message === 'Используйте последний полученный код подтверждения') {
        setErrorMessage(message);
        setAuthState(LoginStates.REGISTER);
      }

      if (Array.isArray(message)) {
        setErrorMessage(message[0]);
      } else {
        setErrorMessage(message);
      }
      setIsOpenErrorToast(true);
    },
  });

  const loginUserMutation = useMutation({
    mutationFn: loginUser,
    onSuccess(response) {
      const token = response.data.jwt;

      localStorage.setItem('jwtToken', JSON.stringify(token));
      const authEvent = new Event('auth-changed');
      document.dispatchEvent(authEvent);

      reset({ password: '', email: '' });
      setAuthState(LoginStates.UNDEFINED);

      history.push('/question-form');
    },
    onError(e: any) {
      const message = e.response?.data.message;

      setErrorMessage(message);
      return setIsOpenErrorToast(true);
    },
  });

  const loginWithOtpMutation = useMutation({
    mutationFn: loginWithOtp,
    onSuccess() {
      setAuthState(LoginStates.LOGIN);
      setSuccessMessage(
        `Однаразовый пароль отправлен на почту: ${watch('email')}`,
      );
      setIsOpenSuccessToast(true);
    },
    onError(e: any) {
      const message = e.response?.data?.message;
      setErrorMessage(message);
      setIsOpenErrorToast(true);
      if (message === 'Используйте последний полученный код подтверждения') {
        setAuthState(LoginStates.LOGIN);
      }
    },
  });

  const submitOnInvalid: SubmitErrorHandler<IAuthForm> = (data) => {
    const { email, password } = data;
    setIsOpenErrorToast(true);
    if (typeof email?.message === 'string')
      return setErrorMessage(AuthErrors.EMAIL);
    if (typeof password?.message === 'string')
      return setErrorMessage(AuthErrors.PASSWORD);

    setErrorMessage('Произошла ошибка при отправке данных формы!');
  };

  const submitOnValid: SubmitHandler<IAuthForm> = async (data) => {
    const { email, password } = data;

    if (authState === LoginStates.UNDEFINED) {
      if (!email.trim()) {
        setIsOpenErrorToast(true);
        return setErrorMessage(AuthErrors.EMAIL);
      }
      registerRequestMutation.mutate(data);
    }

    if (authState === LoginStates.LOGIN) {
      if (!email.trim()) {
        setIsOpenErrorToast(true);
        return setErrorMessage(AuthErrors.EMAIL);
      }
      if (!password.trim()) {
        setIsOpenErrorToast(true);
        return setErrorMessage(AuthErrors.PASSWORD);
      }
      loginUserMutation.mutate(data);
    }
  };

  const buttonText = authState === LoginStates.UNDEFINED ? 'Далее' : 'Войти';

  return (
    <Box
      sx={{
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
                Присоединяйтесь к крупнейшему сообществу игроков в ракеточный
                спорт и найдите свою идеальную пару.
              </Typography>
            </Fade>
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
            paddingTop: '4rem',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {authState !== LoginStates.REGISTER && (
            <TextField
              {...register('email', {
                required: true,
                onChange: () => {
                  if (isOpenErrorToast) setIsOpenErrorToast(false);
                  if (errorMessage) setErrorMessage('');
                },
              })}
              error={
                errorMessage === AuthErrors.EMAIL ||
                errorMessage === AuthErrors.UNAUTHORIZED
              }
              placeholder="Email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
            />
          )}

          {authState === LoginStates.REGISTER && (
            <FormProvider {...authForm}>
              <RegistrationFields
                setAuthState={setAuthState}
                isOpenErrorToast={isOpenErrorToast}
                setIsOpenErrorToast={setIsOpenErrorToast}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
              />
            </FormProvider>
          )}

          {authState === LoginStates.LOGIN && (
            <Grow in timeout={800}>
              <Box>
                <FormProvider {...authForm}>
                  <PasswordField
                    errorMessage={errorMessage}
                    isOpenErrorToast={isOpenErrorToast}
                    setIsOpenErrorToast={setIsOpenErrorToast}
                    setErrorMessage={setErrorMessage}
                  />
                </FormProvider>
              </Box>
            </Grow>
          )}

          {authState !== LoginStates.REGISTER && (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="end"
              gap={1}
            >
              <Button
                disabled={!watch('email')}
                onClick={() => {
                  loginWithOtpMutation.mutate(watch('email'));
                }}
              >
                Вход по одноразовому парллю
              </Button>
            </Box>
          )}
        </Box>

        {authState === LoginStates.LOGIN && (
          <Box display="flex" justifyContent="flex-end" my={1}>
            <Button
              onClick={() => setOpenRestorePswrdModal()}
              sx={{ fontSize: 14, padding: 0 }}
            >
              Забыли пароль?
            </Button>
          </Box>
        )}

        <Box mt={7}>
          {authState !== LoginStates.REGISTER && (
            <>
              <Button
                disabled={
                  registerRequestMutation.isPending ||
                  loginUserMutation.isPending
                }
                endIcon={
                  (registerRequestMutation.isPending ||
                    loginUserMutation.isPending) && (
                    <CircularProgress size={20} color="inherit" />
                  )
                }
                variant="contained"
                onClick={handleSubmit(submitOnValid, submitOnInvalid)}
                sx={{ fontWeight: 600 }}
                fullWidth
              >
                {buttonText}
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
                Регистрируясь, вы принимаете наши условия использования и
                политику конфиденциальности.
              </Typography>
            </>
          )}
          {authState === LoginStates.LOGIN && (
            <Typography mt={4} textAlign="center">
              Нужен новый аккаунт?{' '}
              <Link onClick={() => setAuthState(LoginStates.UNDEFINED)}>
                Зарегистрировать
              </Link>
            </Typography>
          )}
          {[LoginStates.REGISTER, LoginStates.UNDEFINED].includes(
            authState,
          ) && (
            <Typography mt={4} textAlign="center">
              Уже есть аккаунт?{' '}
              <Link onClick={() => setAuthState(LoginStates.LOGIN)}>Войти</Link>
            </Typography>
          )}
        </Box>
      </Box>

      <IonToast
        color="danger"
        isOpen={isOpenErrorToast}
        message={errorMessage}
        onDidDismiss={() => setIsOpenErrorToast(false)}
        duration={6000}
      />
      <IonToast
        color="success"
        isOpen={isOpenSuccessToast}
        message={successMessage}
        onDidDismiss={() => setIsOpenSuccessToast(false)}
        duration={2000}
      />

      <RestorePasswordModal
        openState={openRestorePswrdModal}
        handleModal={setOpenRestorePswrdModal}
      />
    </Box>
  );
}

export default AuthPage;

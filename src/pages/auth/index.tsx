import {
  Box,
  Button,
  CircularProgress,
  Fade,
  Grow,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from '@mui/material';
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
import { IonToast } from '@ionic/react';
import useToggle from '../../hooks/useToggle';
import { RestorePasswordModal } from '../../components/modals/RestorePasswordModal';
import { AuthErrors } from '../../services/auth/interface';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MuiPhoneNumber from 'mui-phone-number';

enum LoginStates {
  UNDEFINED,
  LOGIN,
  REGISTER,
}

export function AuthPage() {
  const history = useHistory();

  const [authState, setAuthState] = useState(LoginStates.UNDEFINED);
  const [showPassword, setShowPassword] = useToggle();

  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [successMessage, setSuccessMessage] = useState<string | undefined>();
  const [isOpenSuccessToast, setIsOpenSuccessToast] = useState<boolean>(false);
  const [isOpenErrorToast, setIsOpenErrorToast] = useState<boolean>(false);

  const { register, handleSubmit, reset, getValues, setValue } =
    useForm<IAuthForm>();

  const [openRestorePswrdModal, setOpenRestorePswrdModal] = useToggle();

  const registerRequestMutation = useMutation({
    mutationFn: registerRequest,
    onSuccess() {
      setAuthState(LoginStates.REGISTER);
    },
    onError(e: any) {
      if (e.response.data.message[0] === 'email must be an email') {
        setErrorMessage(
          'Неверный email! Проверьте наличие "@" и правильность написания домена электронного адреса.',
        );
        setIsOpenErrorToast(true);
      }

      if (e.response.data.message === 'Internal server error') {
        setErrorMessage('Возникла ошибка входа в аккаунт!');
        setIsOpenErrorToast(true);
      }
      if (!e.response?.data?.message) return;
      if (e.response?.data?.message === 'Email already taken') {
        setAuthState(LoginStates.LOGIN);
      } else if (e.response?.data?.message.startsWith('Wait for')) {
        setAuthState(LoginStates.REGISTER);
      }
    },
  });

  const registerUserMutation = useMutation({
    mutationFn: registerUser,
    onSuccess(response) {
      const token = response.data.jwt;

      localStorage.setItem('jwtToken', JSON.stringify(token));
      const authEvent = new Event('auth-changed');
      document.dispatchEvent(authEvent);
      reset({ password: '' });
      setSuccessMessage('Регистрация прошла успешно!');
      setIsOpenSuccessToast(true);

      history.push('/question-form');
    },
    onError(e: any) {
      if (e.response?.data.message === 'OTP is incorrect') {
        setErrorMessage(AuthErrors.INVALID_OTP);
      } else if (e.response?.data?.error?.message === 'Email already taken') {
        setAuthState(LoginStates.LOGIN);
      } else {
        setSuccessMessage(undefined);
        setErrorMessage(e.response.data.message);
      }

      return setIsOpenErrorToast(true);
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

      history.push('/question-form');
    },
    onError(e: any) {
      setSuccessMessage('');
      if (e.response?.data?.message === 'Invalid credentials') {
        setIsOpenErrorToast(true);
        return setErrorMessage(AuthErrors.UNAUTHORIZED);
      }
      setErrorMessage('Возникла ошибка при входе в аккаунт!');
    },
  });

  const submitOnInvalid: SubmitErrorHandler<IAuthForm> = (data) => {
    const { email, firstname, lastname, otp, password } = data;
    setIsOpenErrorToast(true);
    if (typeof email?.message === 'string')
      return setErrorMessage(AuthErrors.EMAIL);
    if (typeof firstname?.message === 'string')
      return setErrorMessage(AuthErrors.NAME);
    if (typeof lastname?.message === 'string')
      return setErrorMessage(AuthErrors.LASTNAME);
    if (typeof otp?.message === 'string')
      return setErrorMessage(
        `Введите код подтверждения отправленный на почту ${getValues('email')}`,
      );
    if (typeof password?.message === 'string')
      return setErrorMessage(AuthErrors.PASSWORD);

    setErrorMessage('Произошла ошибка при отправке данных формы!');
  };

  const submitOnValid: SubmitHandler<IAuthForm> = async (data) => {
    const { email, otp, firstname, lastname, password } = data;

    if (authState === LoginStates.UNDEFINED) {
      if (!email.trim()) {
        setIsOpenErrorToast(true);
        return setErrorMessage(AuthErrors.EMAIL);
      }
      registerRequestMutation.mutate(data);
    }

    if (authState === LoginStates.REGISTER) {
      if (!email.trim()) {
        setIsOpenErrorToast(true);
        return setErrorMessage(AuthErrors.EMAIL);
      }
      if (otp && errorMessage === AuthErrors.INVALID_OTP) {
        setIsOpenErrorToast(true);
        return setErrorMessage(AuthErrors.INVALID_OTP);
      }
      if (!firstname.trim()) {
        setIsOpenErrorToast(true);
        return setErrorMessage(AuthErrors.NAME);
      }
      if (!lastname.trim()) {
        setIsOpenErrorToast(true);
        return setErrorMessage(AuthErrors.LASTNAME);
      }
      if (!password.trim()) {
        setIsOpenErrorToast(true);
        return setErrorMessage(AuthErrors.PASSWORD);
      }
      registerUserMutation.mutate(data);
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

  const buttonText =
    authState === LoginStates.UNDEFINED
      ? 'Далее'
      : authState === LoginStates.REGISTER
      ? 'Зарегестрироваться'
      : 'Войти';

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
          {authState === LoginStates.REGISTER && (
            <Box>
              <Button
                onClick={() => setAuthState(LoginStates.UNDEFINED)}
                startIcon={<ArrowBackRoundedIcon />}
              >
                Назад
              </Button>
            </Box>
          )}
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
            <Grow in timeout={400}>
              <TextField
                {...register('firstname', {
                  required: true,
                  onChange: () => {
                    if (isOpenErrorToast) setIsOpenErrorToast(false);
                    if (errorMessage) setErrorMessage('');
                  },
                })}
                error={errorMessage === AuthErrors.NAME}
                fullWidth
                placeholder="Имя"
                label="Имя"
                variant="outlined"
                required
              />
            </Grow>
          )}
          {authState === LoginStates.REGISTER && (
            <Grow in timeout={600}>
              <TextField
                {...register('lastname', {
                  required: true,
                  onChange: () => {
                    if (isOpenErrorToast) setIsOpenErrorToast(false);
                    if (errorMessage) setErrorMessage('');
                  },
                })}
                error={errorMessage === AuthErrors.LASTNAME}
                fullWidth
                placeholder="Фамилия"
                label="Фамилия"
                variant="outlined"
                required
              />
            </Grow>
          )}
          {authState === LoginStates.REGISTER && (
            <Grow in timeout={700}>
              <Box>
                <MuiPhoneNumber
                  onChange={(number) => {
                    setValue('phone', number as string);
                    if (isOpenErrorToast) setIsOpenErrorToast(false);
                    if (errorMessage) setErrorMessage('');
                  }}
                  defaultCountry="ru"
                  error={errorMessage === AuthErrors.PHONE_NUMBER}
                  variant="outlined"
                  label="Номер телефона"
                  fullWidth
                />
              </Box>
            </Grow>
          )}

          {authState === LoginStates.REGISTER && (
            <Grow in timeout={800}>
              <TextField
                {...register('otp', {
                  required: true,
                  onChange: () => {
                    if (isOpenErrorToast) setIsOpenErrorToast(false);
                    if (errorMessage) setErrorMessage('');
                  },
                })}
                error={
                  errorMessage ===
                    `Введите код подтверждения отправленный на почту ${getValues(
                      'email',
                    )}` || errorMessage === AuthErrors.INVALID_OTP
                }
                helperText={`Код был отправлен на почту ${getValues('email')}`}
                placeholder="Код подтверждения"
                label="Код подтверждения"
                variant="outlined"
                fullWidth
                required
              />
            </Grow>
          )}

          {authState !== LoginStates.UNDEFINED && (
            <Grow in timeout={800}>
              <TextField
                error={
                  errorMessage === AuthErrors.PASSWORD ||
                  errorMessage === AuthErrors.UNAUTHORIZED
                }
                {...register('password', {
                  required: true,
                  onChange: () => {
                    if (isOpenErrorToast) setIsOpenErrorToast(false);
                    if (errorMessage) setErrorMessage('');
                  },
                })}
                placeholder="Пароль"
                label="Пароль"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword()}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                fullWidth
                variant="outlined"
                required
              />
            </Grow>
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
          <Button
            variant="contained"
            onClick={handleSubmit(submitOnValid, submitOnInvalid)}
            sx={{
              borderRadius: 20,
              fontWeight: 600,
            }}
            fullWidth
          >
            {registerRequestMutation.isPending ||
            registerUserMutation.isPending ||
            loginUserMutation.isPending ? (
              <CircularProgress size={25} sx={{ color: '#fff' }} />
            ) : (
              buttonText
            )}
          </Button>
          {authState !== LoginStates.REGISTER && (
            <Typography
              sx={{
                fontSize: '.75rem',
                fontWeight: '500',
                opacity: '.5',
                textAlign: 'center',
                paddingTop: '.75rem',
              }}
            >
              Регистрируясь, вы принимаете наши условия использования и политику
              конфиденциальности.
            </Typography>
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
      ></IonToast>
      <IonToast
        color="success"
        isOpen={isOpenSuccessToast}
        message={successMessage}
        onDidDismiss={() => setIsOpenSuccessToast(false)}
        duration={2000}
      ></IonToast>

      <RestorePasswordModal
        openState={openRestorePswrdModal}
        handleModal={setOpenRestorePswrdModal}
      />
    </Box>
  );
}

export default AuthPage;

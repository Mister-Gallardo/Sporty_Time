import {
  Box,
  Button,
  CircularProgress,
  Grow,
  Stack,
  TextField,
} from '@mui/material';
import React from 'react';
import { FieldValues, SubmitHandler, useFormContext } from 'react-hook-form';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import MuiPhoneNumber from 'mui-phone-number';
import { AuthErrors } from '../../../services/auth/interface';
import { LoginStates } from '..';
import { PasswordField } from './PasswordField';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../../../services/auth/service';
import { useHistory } from 'react-router';
import { IAuthForm } from '../../../services/api/interface';

interface IRegistrationFieldsProps {
  setAuthState: (status: LoginStates) => void;
  isOpenErrorToast: boolean;
  setIsOpenErrorToast: (val: boolean) => void;
  errorMessage: string;
  setErrorMessage: (msg: string) => void;
}

export const RegistrationFields: React.FC<IRegistrationFieldsProps> = (
  props,
) => {
  const {
    setAuthState,
    isOpenErrorToast,
    setIsOpenErrorToast,
    errorMessage,
    setErrorMessage,
  } = props;

  const history = useHistory();
  const { register, setValue, getValues, handleSubmit, reset } =
    useFormContext();

  const registerUserMutation = useMutation({
    mutationFn: registerUser,
    onSuccess(response) {
      const token = response.data.jwt;

      localStorage.setItem('jwtToken', JSON.stringify(token));
      const authEvent = new Event('auth-changed');
      document.dispatchEvent(authEvent);
      reset({ password: '' });

      history.push('/question-form');
    },
    onError(e: any) {
      const message = e.response?.data.message;

      setErrorMessage(message);
      return setIsOpenErrorToast(true);
    },
  });

  const submitOnValid: SubmitHandler<FieldValues> = async (data) => {
    const { email, otp, firstname, lastname, password } = data;

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

    registerUserMutation.mutate(data as IAuthForm);
  };

  return (
    <>
      <Stack spacing={2}>
        <Box>
          <Button
            onClick={() => setAuthState(LoginStates.UNDEFINED)}
            startIcon={<ArrowBackRoundedIcon />}
          >
            Назад
          </Button>
        </Box>
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
              sx={{ '& svg': { height: '1em' } }}
            />
          </Box>
        </Grow>
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
            placeholder="Код подтверждения"
            label={`Код отправлен на почту ${getValues('email')}`}
            variant="outlined"
            fullWidth
            required
          />
        </Grow>
        <Grow in timeout={900}>
          <Box>
            <PasswordField {...props} />
          </Box>
        </Grow>
      </Stack>
      <Button
        disabled={false}
        endIcon={
          registerUserMutation.isPending && (
            <CircularProgress size={20} color="inherit" />
          )
        }
        variant="contained"
        onClick={handleSubmit(submitOnValid)}
        sx={{ mt: 4 }}
        fullWidth
      >
        Зарегистрироваться
      </Button>
    </>
  );
};

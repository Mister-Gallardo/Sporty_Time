import React from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { AuthErrors } from '../../../services/auth/interface';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useToggle } from 'usehooks-ts';
import { useFormContext } from 'react-hook-form';

interface IPasswordFieldProps {
  errorMessage: string;
  isOpenErrorToast: boolean;
  setIsOpenErrorToast: (val: boolean) => void;
  setErrorMessage: (msg: string) => void;
}

export const PasswordField: React.FC<IPasswordFieldProps> = ({
  errorMessage,
  isOpenErrorToast,
  setIsOpenErrorToast,
  setErrorMessage,
}) => {
  const { register } = useFormContext();

  const [showPassword, setShowPassword] = useToggle();
  return (
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
              onClick={setShowPassword}
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
  );
};

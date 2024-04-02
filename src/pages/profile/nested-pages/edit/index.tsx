import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Fade,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { useMutation } from '@tanstack/react-query';
import { editUserProfile } from '../../../../services/user/service';
import useToggle from '../../../../hooks/useToggle';
import { useForm } from 'react-hook-form';
import { useUserInfo } from '../../../../services/api/hooks';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { IonLoading, isPlatform, useIonToast } from '@ionic/react';
import { NotFoundPage } from '../../../../components/NotFoundPage';
import { useHistory } from 'react-router';
import { EGender } from '../../../../services/matches/interface';
import React, { useState } from 'react';
import { EEditProfileErrors } from '../../../../services/user/interface';
import { isEmpty } from 'lodash-es';
import MuiPhoneNumber from 'mui-phone-number';

const isMobile = isPlatform('mobile');
const genders = [
  { option: 'Женский', value: EGender.WOMEN },
  { option: 'Мужской', value: EGender.MEN },
];

interface FormData {
  avatar?: string | URL;
  firstname?: string;
  lastname?: string;
  email?: string;
  phoneNumber?: string;
  gender?: string;
  password?: string;
}

export const EditProfilePage = () => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useToggle();

  const [user, query] = useUserInfo();

  const [errorMsg, setErrorMsg] = useState<EEditProfileErrors | null>(null);

  const { watch, setValue, reset, handleSubmit } = useForm<FormData>();
  const { avatar, firstname, lastname, email, gender, password } = watch();

  const [showToast] = useIonToast();

  const editProfileMutation = useMutation({
    mutationFn: editUserProfile,
    onSuccess() {
      showToast({
        color: 'success',
        message: 'Изменения сохранены!',
        mode: 'ios',
        position: 'bottom',
        duration: 2000,
      });
      query.refetch();
      reset();
    },
    onError(e: any) {
      const errorData = e.response?.data?.message;
      let message;

      if (Array.isArray(errorData)) {
        message = errorData[0];
      } else {
        message = errorData;
      }
      showToast({
        message,
        mode: 'ios',
        position: 'top',
        duration: 6000,
        color: 'danger',
      });
    },
  });

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
      correctOrientation: false,
    });

    if (!photo.webPath) return;
    setValue('avatar', photo.webPath);
  };

  const onSubmit = async (data: FormData) => {
    if (isEmpty(data)) return;

    if (typeof data.firstname === 'string' && !data.firstname.trim()) {
      return setErrorMsg(EEditProfileErrors.FIRSTNAME);
    }
    if (typeof data.lastname === 'string' && !data.lastname.trim()) {
      return setErrorMsg(EEditProfileErrors.LASTNAME);
    }
    if (typeof data.email === 'string' && !data.email.trim()) {
      return setErrorMsg(EEditProfileErrors.EMAIL);
    }

    const formData = new FormData();

    for (const key in data) {
      if (key === 'avatar') {
        if (data[key] === undefined) return;

        const res = await fetch(data[key] as URL);
        const avaBlob = await res.blob();

        formData.append(key, avaBlob);
      } else {
        formData.append(key, (data as any)[key]);
      }
    }

    editProfileMutation.mutate(formData);
  };

  const isSmthChanged = Object.keys(watch()).length > 0;

  if (query.isLoading) return <IonLoading isOpen />;
  if (!user) return <NotFoundPage />;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        px={2}
        my={4}
        position="relative"
        width="100%"
        maxWidth={isMobile ? 'unset' : 500}
        mx={isMobile ? 'unset' : 'auto'}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {!isMobile ? (
            <Button onClick={() => history.goBack()}>Назад</Button>
          ) : (
            <span />
          )}
          {isSmthChanged && (
            <Fade in>
              <Button
                type="submit"
                disabled={editProfileMutation.isPending}
                endIcon={
                  editProfileMutation.isPending && (
                    <CircularProgress size={20} />
                  )
                }
              >
                Сохранить
              </Button>
            </Fade>
          )}
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar
            src={(avatar as string) || user?.avatar?.formats?.small}
            sx={{ width: 50, height: 50 }}
          />
          <Button onClick={() => takePhoto()} sx={{ fontSize: 13 }}>
            Изменить фото профиля
          </Button>
        </Box>
        <Box mt={3}>
          <Typography mb={1.5} fontWeight={600} fontSize={16}>
            Персональная информация
          </Typography>
          <Box display="flex" flexDirection="column" gap={1.5}>
            <TextField
              label="Имя"
              error={errorMsg === EEditProfileErrors.FIRSTNAME}
              helperText={errorMsg === EEditProfileErrors.FIRSTNAME && errorMsg}
              value={(firstname === '' ? ' ' : firstname) || user?.firstname}
              onChange={(e) => {
                if (errorMsg) setErrorMsg(null);
                setValue('firstname', e.target.value);
              }}
              variant="filled"
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
            />
            <TextField
              label="Фамилия"
              error={errorMsg === EEditProfileErrors.LASTNAME}
              helperText={errorMsg === EEditProfileErrors.LASTNAME && errorMsg}
              value={(lastname === '' ? ' ' : lastname) || user?.lastname}
              onChange={(e) => {
                if (errorMsg) setErrorMsg(null);
                setValue('lastname', e.target.value);
              }}
              variant="filled"
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
            />
            <TextField
              label="Email"
              error={errorMsg === EEditProfileErrors.EMAIL}
              helperText={errorMsg === EEditProfileErrors.EMAIL && errorMsg}
              value={(email === '' ? ' ' : email) || user?.email}
              onChange={(e) => {
                if (errorMsg) setErrorMsg(null);
                setValue('email', e.target.value);
              }}
              variant="filled"
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
            />

            <MuiPhoneNumber
              onChange={(number) => {
                if (errorMsg) setErrorMsg(null);
                setValue('phoneNumber', number as string);
              }}
              defaultCountry="ru"
              variant="outlined"
              label="Номер телефона"
              fullWidth
            />

            <TextField
              select
              label="Пол"
              variant="filled"
              fullWidth
              value={gender || user?.gender}
              onChange={(e) => setValue('gender', e.target.value)}
              InputProps={{
                disableUnderline: true,
              }}
            >
              {genders.map((gender) => (
                <MenuItem key={gender.value} value={gender.value}>
                  {gender.option}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Box>
        <Box mt={3}>
          <Typography mb={1.5} fontWeight={600} fontSize={16}>
            Пароль
          </Typography>
          <TextField
            label="Пароль"
            // value={watch('password') || ''}
            // onChange={(e) => setValue('password', e.target.value)}
            error={errorMsg === EEditProfileErrors.PASSWORD}
            helperText={errorMsg === EEditProfileErrors.PASSWORD && errorMsg}
            value={password}
            onChange={(e) => {
              if (errorMsg) setErrorMsg(null);
              setValue('password', e.target.value);
            }}
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
              disableUnderline: true,
            }}
            variant="filled"
            fullWidth
          />
        </Box>
      </Box>
    </form>
  );
};

export default EditProfilePage;

// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  Avatar,
  Box,
  Button,
  Fade,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
// import MuiPhoneNumber from 'mui-phone-number';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useMutation } from '@tanstack/react-query';
import { editUserProfile } from '../../../../services/user/service';
import useToggle from '../../../../hooks/useToggle';
import { useForm } from 'react-hook-form';
import { useUserInfo } from '../../../../services/api/hooks';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { isPlatform, useIonToast } from '@ionic/react';
import { NotFoundPage } from '../../../../components/NotFoundPage';

const isMobile = isPlatform('mobile');

export const EditProfilePage = () => {
  const [showPassword, setShowPassword] = useToggle();

  const [user, query] = useUserInfo();

  const { getValues, watch, setValue, reset } = useForm();
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
    onError() {
      showToast({
        color: 'danger',
        message: 'Произошла ошибка! Попробуйте ещё раз.',
        mode: 'ios',
       position: 'bottom',
        duration: 2000,
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
    setValue('image', photo.webPath);
  };

  const onSaveChanges = async () => {
    const formData = new FormData();

    if (watch('image')) {
      try {
        const res = await fetch(getValues('image'));
        const imageBlob = await res.blob();
        formData.append('image', imageBlob);
      } catch (error) {
        console.log(error);
      }
    }

    Object.entries(getValues()).map((item) => {
      if (item[0] === 'image') return;
      return formData.append(item[0], item[1]);
    });

    editProfileMutation.mutate(formData);
  };

  const isSmthChanged = Object.keys(watch()).length > 0;

  if (!user && !query.isLoading) return <NotFoundPage />;

  return (
    <Box
      px={2}
      my={4}
      position="relative"
      width="100%"
      maxWidth={isMobile ? 'unset' : 500}
      mx={isMobile ? 'unset' : 'auto'}
    >
      <Fade in={isSmthChanged}>
        <Button
          onClick={onSaveChanges}
          sx={{ position: 'absolute', right: 0, top: -25 }}
        >
          Сохранить
        </Button>
      </Fade>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar
          src={
            watch('image') ||
            `https://playpadel.lakileki.ru${user?.avatar}` ||
            ''
          }
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
            value={watch('firstname') || user?.firstname || ''}
            onChange={(e) => setValue('firstname', e.target.value)}
            variant="filled"
            fullWidth
            InputProps={{
              disableUnderline: true,
              sx: { borderRadius: 2 },
            }}
          />
          <TextField
            label="Фамилия"
            value={watch('lastname') || user?.lastname || ''}
            onChange={(e) => setValue('lastname', e.target.value)}
            variant="filled"
            fullWidth
            InputProps={{
              disableUnderline: true,
              sx: { borderRadius: 2 },
            }}
          />
          <TextField
            label="Email"
            value={watch('email') || user?.email || ''}
            onChange={(e) => setValue('email', e.target.value)}
            variant="filled"
            fullWidth
            InputProps={{
              disableUnderline: true,
              sx: { borderRadius: 2 },
            }}
          />
          {/* <MuiPhoneNumber
            onChange={(number) => {}}
            defaultCountry="ru"
            variant="filled"
            fullWidth
          /> */}

          <TextField
            select
            label="Пол"
            variant="filled"
            fullWidth
            value={watch('gender') || user?.gender || 'Не выбрано'}
            onChange={(e) => setValue('gender', e.target.value)}
            InputProps={{
              disableUnderline: true,
              sx: { borderRadius: 2 },
            }}
          >
            {['Не выбрано', 'Мужской', 'Женский'].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          {/* <DemoContainer components={['DatePicker']}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                format="DD.MM.YYYY" 
                onChange={(newDate) => {}}
                slotProps={{
                  textField: {
                    variant: 'filled',
                    label: 'Дата рождения',
                    inputProps: {
                      sx: { borderRadius: 2 },
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </DemoContainer> */}
          {/* <TextField
              multiline
              label="Описание"
              variant="filled"
              fullWidth
              maxRows={4}
              InputProps={{
                disableUnderline: true,
                sx: { borderRadius: 2 },
              }}
            /> */}
          {/* <TextField
            label="Где вы играете?"
            variant="filled"
            fullWidth
            InputProps={{
              disableUnderline: true,
              sx: { borderRadius: 2 },
            }}
          /> */}
        </Box>
      </Box>
      <Box mt={3}>
        <Typography mb={1.5} fontWeight={600} fontSize={16}>
          Пароль
        </Typography>
        <TextField
          label="Пароль"
          value={watch('password') || ''}
          onChange={(e) => setValue('password', e.target.value)}
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
            sx: { borderRadius: 2 },
          }}
          variant="filled"
          fullWidth
        />
      </Box>
    </Box>
  );
};

import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Delete from '@mui/icons-material/Delete';
import { NavButton } from '../../components/NavButton';
import { useHistory } from 'react-router';
import { useUserInfo } from '../../../../services/api/hooks';
import { isPlatform } from '@ionic/react';
import { NotFoundPage } from '../../../../components/NotFoundPage';
import { Dialog } from '@capacitor/dialog';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteMe } from '../../../../services/user/service';
import { withHostname } from '../../../../services/api/service';
import { useLocalStorage } from 'usehooks-ts';
import { removeDeviceToken } from '../../../../services/notifications/service';
import LogoutIcon from '@mui/icons-material/Logout';

const isMobile = isPlatform('mobile');

export const ProfileNavPage = () => {
  const history = useHistory();
  const qc = useQueryClient();
  const [user, query] = useUserInfo();

  const deleteAccountMutation = useMutation({
    mutationFn: deleteMe,
    onSuccess() {
      localStorage.clear();
      history.push('/');
      qc.clear();
    },
    onError(e: Error) {
      console.log(e);
    },
  });

  const [deviceToken] = useLocalStorage('deviceToken', '');

  const removeTokenMutation = useMutation({
    mutationFn: removeDeviceToken,
    onSuccess() {
      localStorage.removeItem('deviceToken');
      localStorage.removeItem('jwtToken');
      history.push('/auth');
    },
  });

  if (!user && !query.isLoading) return <NotFoundPage />;

  return (
    <Box
      px={2}
      my={isMobile ? 0 : 4}
      mb={5}
      width="100%"
      maxWidth={isMobile ? 'unset' : 500}
      mx={isMobile ? 'unset' : 'auto'}
    >
      <Box display="flex" justifyContent="space-between" gap={2}>
        <Typography fontSize={22} fontWeight={600}>
          {user?.firstname} {user?.lastname}
        </Typography>
        <Avatar
          src={withHostname(user?.avatar?.formats?.small || '')}
          sx={{ width: 50, height: 50 }}
        />
      </Box>

      <Stack mt={3} gap={1}>
        <Typography mb={1} fontWeight={600} fontSize={16}>
          Ваш аккаунт
        </Typography>
        <Box bgcolor="#f7f7f7" borderRadius={3} p={1}>
          <NavButton
            primaryText="Изменить профиль"
            secondaryText="Имя, Фамилия, номер телефона, почта, пол"
            startIcon={<PersonOutlinedIcon sx={{ color: '#000' }} />}
            onClick={() => history.push('/profile/edit')}
          />
        </Box>
        <Box bgcolor="#f7f7f7" borderRadius={3} p={1}>
          <NavButton
            primaryText="Удалить профиль"
            secondaryText="Восстановить данные после удаления невозможно!"
            primaryTextColor="#f04134"
            startIcon={<Delete sx={{ color: '#f04134' }} />}
            disabled={deleteAccountMutation.isPending}
            onClick={async () => {
              const { value } = await Dialog.confirm({
                title: 'Удаление аккаунта и всех пользовательских данных',
                message: `Вы уверены что хотите удалить аккаунт и все пользовательские данные? Вернуть аккаунт будет невозможно!`,
              });
              if (value) deleteAccountMutation.mutate();
            }}
          />
        </Box>
      </Stack>

      <Button
        disabled={removeTokenMutation?.isPending}
        onClick={() => {
          if (deviceToken) return removeTokenMutation.mutate(deviceToken);

          history.push('/auth');
          localStorage.removeItem('jwtToken');
        }}
        sx={{ mt: 5, fontWeight: 600 }}
        endIcon={
          removeTokenMutation?.isPending ? (
            <CircularProgress size={18} />
          ) : (
            <LogoutIcon />
          )
        }
      >
        Выход
      </Button>
    </Box>
  );
};

export default ProfileNavPage;

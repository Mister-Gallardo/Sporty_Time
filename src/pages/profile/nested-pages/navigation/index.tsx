import { Avatar, Box, Button, Typography } from '@mui/material';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { NavButton } from '../../components/NavButton';
import { useHistory } from 'react-router';
import { useUserInfo } from '../../../../services/api/hooks';
import { isPlatform } from '@ionic/react';
import { NotFoundPage } from '../../../../components/NotFoundPage';
import { BASE_URL } from '../../../../services/api/service';

const isMobile = isPlatform('mobile');

export const ProfileNavPage = () => {
  const history = useHistory();
  const [user, query] = useUserInfo();

  if (!user && !query.isLoading) return <NotFoundPage />;

  return (
    <Box
      px={2}
      mb={5}
      width="100%"
      maxWidth={isMobile ? 'unset' : 500}
      mx={isMobile ? 'unset' : 'auto'}
    >
      <Box display="flex" justifyContent="space-between" gap={2}>
        <Box>
          <Typography fontSize={22} fontWeight={600}>
            {user?.firstname} {user?.lastname}
          </Typography>
          <Typography my={1} fontWeight={500}>
            Стандартный аккаунт
          </Typography>
        </Box>
        <Avatar
          src={`${BASE_URL}${user?.avatar}`}
          sx={{ width: 50, height: 50 }}
        />
      </Box>

      <Box mt={3}>
        <Typography mb={1} fontWeight={600} fontSize={16}>
          Ваш аккаунт
        </Typography>
        <Box bgcolor="#f7f7f7" borderRadius={3} p={1}>
          <NavButton
            primaryText="Изменить профиль"
            secondaryText="Имя, почта, телефон, локация, пол"
            startIcon={<PersonOutlinedIcon sx={{ color: '#000' }} />}
            onClick={() => history.push('/profile/edit')}
          />
        </Box>
      </Box>

      <Button
        onClick={() => {
          history.push('/auth');
          localStorage.removeItem('jwtToken');
        }}
        sx={{ mt: 5, fontWeight: 600 }}
      >
        Выход
      </Button>
    </Box>
  );
};

export default ProfileNavPage;

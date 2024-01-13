import { Avatar, Box, Button, Typography } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { NavButton } from '../../components/NavButton';
import { useHistory } from 'react-router';
import { useUserInfo } from '../../../../services/api/hooks';
import { isPlatform } from '@ionic/react';
import { NotFoundPage } from '../../../../components/NotFoundPage';

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
          <Button
            disabled
            variant="outlined"
            startIcon={<FileUploadOutlinedIcon />}
            sx={{ fontSize: 12, borderRadius: 10, padding: '2px 10px' }}
          >
            Поделиться профилем
          </Button>
        </Box>
        <Avatar
          src={`https://playpadel.lakileki.ru${user?.avatar}`}
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
          <NavButton
            primaryText="Ваша деятельность"
            secondaryText="Матчи, классы, соревнования"
            startIcon={<SportsBaseballOutlinedIcon sx={{ color: '#ccc' }} />}
            onClick={() => {}}
            disabled
          />
          <NavButton
            primaryText="Ваши платежи"
            secondaryText="Способы оплаты, транзакции"
            startIcon={
              <AccountBalanceWalletOutlinedIcon sx={{ color: '#ccc' }} />
            }
            onClick={() => {}}
            disabled
          />
          <NavButton
            primaryText="Настройки"
            secondaryText="Настройка приватности, уведомления"
            startIcon={<SettingsOutlinedIcon sx={{ color: '#ccc' }} />}
            onClick={() => {}}
            disabled
          />
        </Box>
      </Box>
      <Box mt={3}>
        <Typography mb={1} fontWeight={600} fontSize={16}>
          Поддержка
        </Typography>
        <Box bgcolor="#f7f7f7" borderRadius={3} p={1}>
          <NavButton
            primaryText="Помощь"
            startIcon={<QuestionAnswerOutlinedIcon sx={{ color: '#ccc' }} />}
            onClick={() => {}}
            disabled
          />
        </Box>
      </Box>
      <Box mt={3}>
        <Typography mb={1} fontWeight={600} fontSize={16}>
          Правовая информация
        </Typography>
        <Box bgcolor="#f7f7f7" borderRadius={3} p={1}>
          <NavButton
            primaryText="Условия пользования"
            startIcon={<DescriptionOutlinedIcon sx={{ color: '#ccc' }} />}
            onClick={() => {}}
            disabled
          />
          <NavButton
            primaryText="Политика приватности"
            startIcon={<RemoveRedEyeOutlinedIcon sx={{ color: '#ccc' }} />}
            onClick={() => {}}
            disabled
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

import React from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
} from '@ionic/react';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import { useUserInfo } from '../../../services/api/hooks';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';
import { NavButton } from './NavButton';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { useHistory } from 'react-router';

interface IProfileDataModalProps {
  isOpen: boolean;
  handleModal: (val?: boolean) => void;
}

export const ProfileDataModal: React.FC<IProfileDataModalProps> = ({
  isOpen,
  handleModal,
}) => {
  const history = useHistory();
  const user = useUserInfo();

  return (
    <IonModal isOpen={isOpen} onWillDismiss={() => handleModal(false)}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => handleModal(false)}>
              <CloseOutlined />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <Box>
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
            <Avatar sx={{ width: 50, height: 50 }} />
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
                onClick={() => {
                  history.push('/profile/edit');
                  handleModal(false);
                }}
              />
              <NavButton
                primaryText="Ваша деятельность"
                secondaryText="Матчи, классы, соревнования"
                startIcon={
                  <SportsBaseballOutlinedIcon sx={{ color: '#ccc' }} />
                }
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
                startIcon={
                  <QuestionAnswerOutlinedIcon sx={{ color: '#ccc' }} />
                }
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
        </Box>
      </IonContent>
    </IonModal>
  );
};

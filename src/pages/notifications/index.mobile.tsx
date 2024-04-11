import React, { Suspense } from 'react';
import { NotificationsPage } from '.';
import { LoadingCircle } from '../../components/atoms/LoadingCircle';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  isPlatform,
} from '@ionic/react';
import { ArrowBackIosNewOutlined } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import { useHistory } from 'react-router';

export function MobileNotificationsPage() {
  const history = useHistory();

  return (
    <IonPage>
      {isPlatform('mobile') && (
        <IonHeader style={{ boxShadow: '0px 1px 4px #0000001a' }}>
          <IonToolbar>
            <IonButtons slot="start" style={{ width: 40 }}>
              <IonBackButton text="" color="dark">
                <ArrowBackIosNewOutlined />
              </IonBackButton>
            </IonButtons>
            <Typography textAlign="center" fontWeight={600} fontSize={16}>
              Уведомления
            </Typography>
            <IonButtons slot="end">
              <IconButton onClick={() => history.push('/chats')}>
                <ChatBubbleOutlineRoundedIcon
                  sx={{ color: '#000', fontSize: 22 }}
                />
              </IconButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
      )}
      <IonContent fullscreen>
        <Suspense fallback={<LoadingCircle />}>
          <NotificationsPage />
        </Suspense>
      </IonContent>
    </IonPage>
  );
}

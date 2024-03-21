import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  isPlatform,
} from '@ionic/react';
import { Suspense } from 'react';
import { Box } from '@mui/material';
import { ArrowBackIosNewOutlined } from '@mui/icons-material';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { MessageTextField } from '../components/MessageTextField';
import { MatchDataHeader } from '../components/MatchDataHeader';
import { MessagesList } from '../components/MessagesList';

export function MobileSingleChatPage() {
  return (
    <IonPage>
      {isPlatform('mobile') && (
        <IonHeader style={{ boxShadow: '0px 1px 4px #0000001a' }}>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton text="" color="dark">
                <ArrowBackIosNewOutlined />
              </IonBackButton>
            </IonButtons>
            <IonTitle>Чат матча</IonTitle>
          </IonToolbar>
        </IonHeader>
      )}
      <IonContent fullscreen>
        <Suspense fallback={<LoadingCircle />}>
          <Box>
            <Box position="fixed" zIndex={2} right={0} left={0} bgcolor="#fff">
              <MatchDataHeader />
            </Box>
            <Box pt={8}>
              <MessagesList />
            </Box>

            <Box
              position="fixed"
              zIndex={1}
              bottom={0}
              right={0}
              left={0}
              bgcolor="#fff"
            >
              <MessageTextField />
            </Box>
          </Box>
        </Suspense>
      </IonContent>
    </IonPage>
  );
}

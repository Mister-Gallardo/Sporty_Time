import { useHistory } from 'react-router';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import {
  Badge,
  Box,
  CircularProgress,
  IconButton,
  Typography,
} from '@mui/material';
import PerfectMatch from './sections/PerfectMatch';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from '@ionic/react';
import { useQuery } from '@tanstack/react-query';
import { getNotifications } from '../../../services/notifications/service';

export function MobilePlayPage() {
  const history = useHistory();

  const { data, isLoading } = useQuery({
    queryKey: ['notification'],
    queryFn: getNotifications,
  });

  const notifications = data?.data;
  const unreadNotifications = notifications?.filter(
    (notification) => !notification?.read,
  );

  return (
    <IonPage>
      <IonHeader style={{ boxShadow: '0px 1px 4px #0000001a' }}>
        <IonToolbar>
          <IonButtons slot="start">
            <SportsBaseballOutlinedIcon sx={{ margin: 1 }} />
            <Typography
              variant="h1"
              fontSize={17}
              textTransform="uppercase"
              letterSpacing={4}
              fontWeight={600}
            >
              sportytime
            </Typography>
          </IonButtons>
          <IonButtons slot="end">
            <IconButton onClick={() => history.push('/chats')}>
              <ChatBubbleOutlineRoundedIcon
                sx={{ color: '#000', fontSize: 22 }}
              />
            </IconButton>
            <IconButton onClick={() => history.push('/notifications')}>
              {isLoading ? (
                <CircularProgress size={20} />
              ) : (
                unreadNotifications && (
                  <Badge
                    badgeContent={unreadNotifications.length}
                    color="error"
                    max={99}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <NotificationsNoneOutlinedIcon sx={{ color: '#000' }} />
                  </Badge>
                )
              )}
            </IconButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <Box
          pb={10}
          sx={{
            width: '100%',
            maxWidth: '450px',
            margin: '0 auto',
            paddingInline: '15px',
          }}
        >
          <Box>
            {/* <RememberSection /> */}
            <PerfectMatch />
            {/* <YourClubs /> */}
            {/* <GetTheMost /> */}
          </Box>
        </Box>
      </IonContent>
    </IonPage>
  );
}

import { useHistory } from 'react-router';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import {
  Badge,
  Box,
  CircularProgress,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from '@ionic/react';
import { useQuery } from '@tanstack/react-query';
import { getNotifications } from '../../services/notifications/service';
import { NavBlock } from '../../components/molecules/NavBlock';
import booking from '../../images/home/booking-bg.png';
import matchbg from '../../images/home/match-bg.png';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { Link } from 'react-router-dom';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { getUnpaidMatchesList } from '../../services/payments';
import { isAuthorized } from '../../services/auth/service';

export function MobilePlayPage() {
  const history = useHistory();
  const isAuth = isAuthorized();

  const { data, isLoading } = useQuery({
    queryKey: ['notification'],
    queryFn: getNotifications,
    enabled: isAuth,
  });

  const notifications = data?.data;
  const unreadNotifications = notifications?.filter(
    (notification) => !notification?.read,
  );

  const { data: unpaidMatches } = useQuery({
    queryKey: ['unpaid'],
    queryFn: getUnpaidMatchesList,
    enabled: isAuth,
  });
  const debtsList = unpaidMatches?.data;

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
        <Box my={3} px={2}>
          <Box>
            {debtsList && debtsList?.length > 0 && (
              <Link to="/profile/payments">
                <Box
                  border="1px solid #eee"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  gap={1.5}
                  py={1}
                  px={1.5}
                >
                  <CreditCardOutlinedIcon
                    fontSize="large"
                    sx={{ backgroundColor: '#eee', p: 1 }}
                  />

                  <Stack>
                    <Typography lineHeight={1.2}>Неоплаченные матчи</Typography>
                    <Typography lineHeight={1.2} color="gray" fontSize={11}>
                      Посмотреть информацию о задолженностях
                    </Typography>
                  </Stack>

                  <EastOutlinedIcon />
                </Box>
              </Link>
            )}
            <Typography variant="h2" pt={2}>
              Находите открытые матчи по теннису, падел и пиклбол в вашем
              городе, подключайтесь к ним и играйте в дружеские и
              соревновательные матчи!
            </Typography>
            <Stack spacing={1.8}>
              <NavBlock
                href="/book-court"
                img={booking}
                title="Забронируйте корт"
                description="Если вы уже знаете, с кем играете"
                icon={
                  <SearchOutlinedIcon
                    sx={{ fontSize: '1.5rem', color: '#fff' }}
                  />
                }
              />

              <NavBlock
                href="/matches?tab=1"
                img={matchbg}
                title="Сыграйте матч"
                description="Если вы ищете игроков своего уровня"
                icon={
                  <SportsBaseballOutlinedIcon
                    sx={{ fontSize: '1.5rem', color: '#fff' }}
                  />
                }
              />
              <NavBlock
                href="/classes?tab=1"
                title="Занятия"
                description="Если хотите стать лучше"
                icon={
                  <SchoolOutlinedIcon
                    sx={{ fontSize: '1.5rem', color: '#fff' }}
                  />
                }
              />
            </Stack>
          </Box>
        </Box>
      </IonContent>
    </IonPage>
  );
}

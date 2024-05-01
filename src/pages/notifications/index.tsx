import { Box, Typography } from '@mui/material';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getNotifications,
  markNotificationAsRead,
} from '../../services/notifications/service';
import { LoadingCircle } from '../../components/atoms/LoadingCircle';
import { NotFoundPage } from '../../components/NotFoundPage';
import { Link } from 'react-router-dom';
import { isPlatform } from '@ionic/react';
import CircleIcon from '@mui/icons-material/Circle';

const isMobile = isPlatform('mobile');

export function NotificationsPage() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['notifications'],
    queryFn: getNotifications,
  });

  const notifications = data?.data;

  const markNotificationMutation = useMutation({
    mutationFn: markNotificationAsRead,
    onSuccess() {
      refetch();
    },
  });

  if (isError) return <NotFoundPage />;

  return (
    <Box
      width="100%"
      maxWidth={1240}
      m="0 auto"
      px={isMobile ? 'unset' : 2}
      my={5}
    >
      {isLoading ? (
        <LoadingCircle />
      ) : notifications && notifications.length > 0 ? (
        notifications
          ?.sort((a, b) => {
            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
          })
          ?.map((notification) => {
            const notificationDate = new Date(
              notification?.createdAt,
            ).toLocaleDateString('ru-RU', {
              month: 'long',
              day: 'numeric',
            });
            return (
              <Link key={notification.id} to={notification?.data?.url}>
                <Box
                  onClick={() => {
                    if (!notification?.read)
                      markNotificationMutation.mutate(notification.id);
                  }}
                  borderBottom="1px solid #eee"
                  px={isMobile ? 3 : 1}
                  py={1}
                  bgcolor={notification?.read ? 'unset' : '#fcfcfc'}
                  position="relative"
                >
                  {!notification?.read && (
                    <CircleIcon
                      color="error"
                      sx={{
                        position: 'absolute',
                        top: 5,
                        left: isMobile ? 15 : 0,
                        fontSize: 10,
                      }}
                    />
                  )}
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent={isMobile ? 'space-between' : 'unset'}
                    gap={1}
                  >
                    <Typography fontWeight={600}>
                      {notification?.title}
                    </Typography>
                    <Typography color="gray" fontSize={12} whiteSpace="nowrap">
                      {notificationDate}
                    </Typography>
                  </Box>
                  <Typography>{notification?.body}</Typography>
                </Box>
              </Link>
            );
          })
      ) : (
        <Typography textAlign="center" color="gray" mt={10}>
          Уведомлений нет
        </Typography>
      )}
    </Box>
  );
}

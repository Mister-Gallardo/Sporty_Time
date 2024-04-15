import { Box, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getNotifications } from '../../services/notifications/service';
import { LoadingCircle } from '../../components/atoms/LoadingCircle';
import { NotFoundPage } from '../../components/NotFoundPage';
import { Link } from 'react-router-dom';
import { isPlatform } from '@ionic/react';

const isMobile = isPlatform('mobile');

export function NotificationsPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['notifications'],
    queryFn: getNotifications,
  });

  const notifications = data?.data;

  if (isError) return <NotFoundPage />;

  return (
    <Box width="100%" maxWidth={1240} m="0 auto" px={2} mt={5}>
      {isLoading ? (
        <LoadingCircle />
      ) : notifications && notifications.length > 0 ? (
        notifications
          ?.map((notification) => {
            const notificationDate = new Date(
              notification?.createdAt,
            ).toLocaleDateString('ru-RU', {
              month: 'long',
              day: 'numeric',
            });
            return (
              <Link key={notification.id} to={notification?.data?.url}>
                <Box borderBottom="1px solid #eee" py={1}>
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
          .reverse()
      ) : (
        <Typography textAlign="center" color="gray" mt={10}>
          Уведомлений нет
        </Typography>
      )}
    </Box>
  );
}

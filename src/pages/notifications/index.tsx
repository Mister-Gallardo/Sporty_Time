import { Box, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getNotifications } from '../../services/notifications/service';
import { LoadingCircle } from '../../components/atoms/LoadingCircle';
import { NotFoundPage } from '../../components/NotFoundPage';
import { Link } from 'react-router-dom';

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
        notifications?.map((notification) => {
          const notificationDate = new Date(
            notification?.createdAt,
          ).toLocaleDateString('ru-RU', {
            month: 'long',
            day: 'numeric',
          });

          return (
            <Link to={notification?.data?.url}>
              <Box key={notification.id} borderBottom="1px solid #eee">
                <Box display="flex" alignItems="center" gap={1}>
                  <Typography fontWeight={600}>
                    {notification?.title}
                  </Typography>
                  <Typography color="gray" fontSize={12}>
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

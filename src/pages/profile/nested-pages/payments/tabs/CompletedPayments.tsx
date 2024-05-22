import { Box, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getMyPaymentsList } from '../../../../../services/payments';
import { Link } from 'react-router-dom';
import { LoadingCircle } from '../../../../../components/atoms/LoadingCircle';
import { isAuthorized } from '../../../../../services/auth/service';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { EType, getDayFormat } from '../../../../../helpers/getTimeDateString';

export const CompletedPayments = () => {
  const isAuth = isAuthorized();

  const { data, isLoading } = useQuery({
    queryKey: ['payments'],
    queryFn: getMyPaymentsList,
    enabled: isAuth,
  });
  const paymentsList = data?.data;

  return (
    <Box mt={4}>
      {isLoading && <LoadingCircle />}
      {paymentsList?.length === 0 && (
        <Typography textAlign="center" color="gray">
          История платежей пуста
        </Typography>
      )}
      <Stack spacing={1}>
        {paymentsList
          ?.sort((a, b) => {
            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
          })
          ?.map((paymnet) => {
            const isClass = !!paymnet.class;

            const eventDate = getDayFormat(
              paymnet?.createdAt,
              EType.WEEK_DAY_MONTH,
            );

            const path = isClass
              ? `/classes/${paymnet?.class?.id}`
              : `/matches/${paymnet?.matchBooking?.match?.id}`;

            const clubTitle = isClass
              ? paymnet?.class?.booking.court?.club?.title
              : paymnet?.matchBooking?.match?.booking?.court?.club?.title;

            const courtTitle = isClass
              ? paymnet?.class?.booking.court?.title
              : paymnet?.matchBooking?.match?.booking?.court?.title;

            return (
              <Link key={paymnet.id} to={path}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  gap={1.5}
                  py={1}
                  px={1.5}
                  border="1px solid #eee"
                >
                  {isClass ? <SchoolOutlinedIcon /> : <PaidOutlinedIcon />}
                  <Box flexGrow={1}>
                    <Typography lineHeight={1.2} fontWeight={600}>
                      {courtTitle
                        ? `${clubTitle}, ${courtTitle}`
                        : 'Информация отсутствует'}
                    </Typography>
                    <Typography
                      lineHeight={1.2}
                      textTransform="capitalize"
                      color="gray"
                    >
                      {eventDate}
                    </Typography>
                  </Box>

                  <Typography textAlign="center" fontWeight={600}>
                    -{paymnet?.money}руб.
                  </Typography>
                </Box>
              </Link>
            );
          })}
      </Stack>{' '}
    </Box>
  );
};

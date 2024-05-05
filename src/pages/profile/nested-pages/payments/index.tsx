import { Box, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getUnpaidMatchesList } from '../../../../services/payments';
import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';
import { EType, getDayFormat } from '../../../../helpers/getTimeDateString';
import { Link } from 'react-router-dom';
import { isPlatform } from '@ionic/react';
import { LoadingCircle } from '../../../../components/atoms/LoadingCircle';
import { isAuthorized } from '../../../../services/auth/service';

const isMobile = isPlatform('mobile');

export function PaymentsPage() {
  const isAuth = isAuthorized();

  const { data, isLoading } = useQuery({
    queryKey: ['unpaid'],
    queryFn: getUnpaidMatchesList,
    enabled: isAuth,
  });
  const debtsList = data?.data;

  return (
    <Box
      width="100%"
      maxWidth={1240}
      m="0 auto"
      mt={isMobile ? 2 : 4}
      mb={4}
      px={2}
    >
      {isLoading && <LoadingCircle />}

      {debtsList?.length === 0 && (
        <Typography textAlign="center" color="gray">
          У Вас нет неоплаченных матчей
        </Typography>
      )}

      <Stack spacing={1}>
        {debtsList?.map((match) => {
          const matchDate = getDayFormat(
            match?.booking?.startsAt,
            EType.WEEK_DAY_MONTH,
          );

          const debt = match?.price - match?.totalPaid;

          return (
            <Link key={match.id} to={`/matches/${match.id}`}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                gap={1.5}
                py={1}
                px={1.5}
                border="1px solid #eee"
              >
                <SportsBaseballOutlinedIcon />
                <Box flexGrow={1}>
                  <Typography lineHeight={1.2} fontWeight={600}>
                    {match?.booking?.court?.club?.title},{' '}
                    {match?.booking?.court?.title}
                  </Typography>
                  <Typography
                    lineHeight={1.2}
                    textTransform="capitalize"
                    color="gray"
                  >
                    {matchDate}
                  </Typography>
                </Box>

                <Box>
                  <Typography fontSize={13} fontWeight={600} color="error">
                    Оплатить
                  </Typography>
                  <Typography textAlign="center" fontWeight={600} color="error">
                    {debt}руб.
                  </Typography>
                </Box>
              </Box>
            </Link>
          );
        })}
      </Stack>
    </Box>
  );
}
export default PaymentsPage;

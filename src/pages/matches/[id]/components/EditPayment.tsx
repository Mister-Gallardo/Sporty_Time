import { Box, Button, Typography } from '@mui/material';
import { getMatchStatus } from '../../../../helpers/getMatchStatus';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  extraMatchPayment,
  getOneAvailableMatch,
} from '../../../../services/matches/service';
import { useParams } from 'react-router';
import { useIonToast } from '@ionic/react';
import { Status } from '../../../../types';
import { usePlayerProfile } from '../../../../services/api/hooks';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export const EditPayment = () => {
  const { matchId } = useParams<{ matchId: string }>();

  const [showToast] = useIonToast();
  const qc = useQueryClient();

  const [myPlayer] = usePlayerProfile();

  const { data, refetch } = useQuery({
    queryKey: [`match`, Number(matchId)],
    queryFn: () => getOneAvailableMatch(Number(matchId)),
  });

  const matchData = data?.data;
  const isUserOwner = matchData?.owner?.id === myPlayer?.id;

  const extraPaymentMutation = useMutation({
    mutationFn: extraMatchPayment,
    onSuccess() {
      refetch();
      qc.resetQueries({ queryKey: ['my-matches', false] });
      showToast({
        color: 'success',
        message: 'Матч подтверждён, благодарим за оплату!',
        mode: 'ios',
        position: 'bottom',
        duration: 2000,
      });
    },
    onError() {
      showToast({
        color: 'danger',
        message: 'Ошибка! Попробуйте ещё раз!',
        mode: 'ios',
        position: 'bottom',
        duration: 2000,
      });
    },
  });

  if (!matchData) return null;

  const matchStatus = getMatchStatus(matchData);
  const { paid, matchBookings, price, booking } = matchData;

  if (paid || !isUserOwner || matchStatus === Status.CANCELED) return null;

  const currentPaidAmount = matchBookings.reduce(
    (acc, member) => acc + member.paid,
    0,
  );

  const matchStartDate = new Date(booking.startsAt);
  const mustBePaidDate = new Date(matchStartDate.getTime() - 12 * 3600 * 1000);
  const [payDate, payTime] = mustBePaidDate.toISOString().split('T');

  const formatMustBePaidDate = `${payDate} | ${payTime.slice(0, 5)}`;

  return (
    <Box py={2} px={1} border="1px solid #ffdee4" borderRadius={2}>
      <Typography mb={1} fontSize={15} fontWeight={600}>
        Крайняя дата: {formatMustBePaidDate}
      </Typography>

      <Box display="flex" gap={1} bgcolor="#fff3f2" p={1}>
        <WarningAmberIcon fontSize="small" color="error" />
        <Typography fontSize={12} lineHeight={1.3} color="#d74342">
          Если корт не будет полностью оплачен до указанной даты, то матч будет
          автоматически отменён!
        </Typography>
      </Box>

      <Button
        onClick={() => extraPaymentMutation.mutate(+matchId)}
        variant="contained"
        sx={{ backgroundColor: 'success.main', mt: 2 }}
        fullWidth
      >
        Доплатить - {price - currentPaidAmount} ₽
      </Button>
    </Box>
  );
};

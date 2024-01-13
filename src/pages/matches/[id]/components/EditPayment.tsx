import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { MatchData } from '../../../../services/matches/interface';
import { getMatchStatus, parseDate } from '../../../../helpers/getMatchStatus';
import { EType, getDayFormat } from '../../../../helpers/getTimeDateString';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { extraMatchPayment } from '../../../../services/matches/service';
import { useParams } from 'react-router';
import { useIonToast } from '@ionic/react';
import { Status } from '../../../../types';

interface IEditPaymentProps {
  matchData: MatchData;
  isUserOwner: boolean;
  refetchMatch: () => void;
}

export const EditPayment: React.FC<IEditPaymentProps> = ({
  matchData,
  isUserOwner,
  refetchMatch,
}) => {
  const { paid, matchBookings, price, gameDate, slot } = matchData;
  const matchStatus = getMatchStatus(matchData);

  if (paid || !isUserOwner || matchStatus === Status.CANCELED) return;

  const { matchId } = useParams<{ matchId: string }>();

  const currentPaidAmount = matchBookings.reduce(
    (acc, member) => acc + member.paid,
    0,
  );

  const matchStartTime = parseDate(gameDate, slot.time.slice(0, 8), '');

  const mustBePaidDate = new Date(matchStartTime - 12 * 3600 * 1000);

  const formatMustBePaidDate = getDayFormat(
    mustBePaidDate,
    EType.WEEK_DAY_MONTH,
    mustBePaidDate.toLocaleTimeString('ru'),
  );

  const [showToast] = useIonToast();
  const qc = useQueryClient();

  const extraPaymentMutation = useMutation({
    mutationFn: extraMatchPayment,
    onSuccess() {
      refetchMatch();
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

  return (
    <Box
      py={2}
      px={1}
      border="1px solid #ffdee4"
      borderRadius={2}
      bgcolor="#fdeced"
    >
      <Box mb={0.5} display="flex" justifyContent="space-between" gap={1}>
        <Typography fontSize={15} fontWeight={700}>
          Крайняя дата:
        </Typography>
        <Typography fontSize={15} fontWeight={700} textTransform="capitalize">
          {formatMustBePaidDate}
        </Typography>
      </Box>
      <Typography color="#d74342">
        Если корт не будет полностью оплачен до указанной даты, то матч будет
        автоматически отменён!
      </Typography>

      <Box mt={2}>
        <Typography mb={1} fontSize={17} fontWeight={500} textAlign="center">
          Хотите внести оставшуюся сумму?
        </Typography>
        <Button
          onClick={() => extraPaymentMutation.mutate(+matchId)}
          variant="contained"
          sx={{ backgroundColor: '#428944' }}
          fullWidth
        >
          Доплатить - {price - currentPaidAmount} ₽
        </Button>
      </Box>
    </Box>
  );
};

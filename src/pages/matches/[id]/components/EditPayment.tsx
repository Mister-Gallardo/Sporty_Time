import { Box, Button, Typography } from '@mui/material';
import { getMatchStatus } from '../../../../helpers/getMatchStatus';
import { useQuery } from '@tanstack/react-query';
import { getOneAvailableMatch } from '../../../../services/matches/service';
import { useParams } from 'react-router';
import { usePlayerProfile } from '../../../../services/api/hooks';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Status } from '../../../../services/matches/interface';
import { EditPaymentModal } from '../../../../components/modals/EditPaymentModal';
import useToggle from '../../../../hooks/useToggle';

export const EditPayment = () => {
  const { matchId } = useParams<{ matchId: string }>();

  const [myPlayer] = usePlayerProfile();

  const { data } = useQuery({
    queryKey: [`match`, Number(matchId)],
    queryFn: () => getOneAvailableMatch(Number(matchId)),
  });

  const matchData = data?.data;
  const isUserOwner = matchData?.owner?.id === myPlayer?.id;

  const [openEditModael, setOpenEditModal] = useToggle();

  if (!matchData) return null;

  const matchStatus = getMatchStatus(matchData);
  const { isApproved, paid, matchBookings, price, booking } = matchData;

  if (isApproved || paid || !isUserOwner || matchStatus === Status.CANCELED)
    return null;

  const currentPaidAmount = matchBookings.reduce(
    (acc, member) => acc + member.paid,
    0,
  );

  const matchStartDate = new Date(booking.startsAt);
  const mustBePaidDate = new Date(matchStartDate.getTime() - 12 * 3600 * 1000);
  const [payDate, payTime] = mustBePaidDate.toISOString().split('T');

  const formatMustBePaidDate = `${payDate} | ${payTime.slice(0, 5)}`;

  const extraPayment = price - currentPaidAmount;

  return (
    <>
      <Box py={2} px={1} border="1px solid #ffdee4" borderRadius={2}>
        <Typography mb={1} fontSize={15} fontWeight={600}>
          Крайняя дата: {formatMustBePaidDate}
        </Typography>
        <Box display="flex" gap={1} bgcolor="#fff3f2" p={1}>
          <WarningAmberIcon fontSize="small" color="error" />
          <Typography fontSize={12} lineHeight={1.3} color="#d74342">
            Если корт не будет полностью оплачен до указанной даты, то матч
            будет автоматически отменён!
          </Typography>
        </Box>
        <Button
          onClick={() => setOpenEditModal()}
          variant="contained"
          sx={{ backgroundColor: 'success.main', mt: 2 }}
          fullWidth
        >
          Доплатить - {extraPayment} ₽
        </Button>
      </Box>
      <EditPaymentModal
        openState={openEditModael}
        handleModal={setOpenEditModal}
        money={extraPayment}
      />
    </>
  );
};

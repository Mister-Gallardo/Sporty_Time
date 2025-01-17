import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getOneAvailableMatch,
  uploadResults,
} from '../../../../services/matches/service';
import { useParams } from 'react-router';
import { useIonToast } from '@ionic/react';
import { usePlayerProfile } from '../../../../services/api/hooks';
import { UploadResultModal } from '../../../../components/modals/UploadResultModal';
import useToggle from '../../../../hooks/useToggle';
import { getMatchStatus } from '../../../../helpers/getMatchStatus';
import { Status } from '../../../../services/matches/interface';

export const UploadResultsBlock = () => {
  const { matchId } = useParams<{ matchId: string }>();

  const [openUploadModal, setOpenUploadModal] = useToggle();

  const [myPlayer] = usePlayerProfile();

  const { data, refetch } = useQuery({
    queryKey: [`match`, Number(matchId)],
    queryFn: () => getOneAvailableMatch(Number(matchId)),
  });

  const singleMatchData = data?.data;

  const myBooking = singleMatchData?.matchBookings.find(
    (booking) => booking.player?.id === myPlayer?.id,
  );
  const myTeam = myBooking?.team;
  const isConfirmedByTeam = singleMatchData?.matchBookings.find(
    (booking) => booking.team === myTeam && booking.confirmMatchResults,
  );

  const [showToast] = useIonToast();
  const qc = useQueryClient();

  // Upload Reslults Request
  const uploadMatchReslultsMutation = useMutation({
    mutationFn: uploadResults,
    onSuccess() {
      showToast({
        header: 'Вы подтвердили результаты матча!',
        duration: 2000,
        position: 'bottom',
        color: 'success',
      });
      refetch();
      qc.resetQueries({ queryKey: ['my-matches', false] });
    },
    onError(e: any) {
      showToast({
        header: 'Ошибка!',
        message: e.response.data.message,
        duration: 2000,
        position: 'bottom',
        color: 'danger',
      });
    },
  });

  if (!singleMatchData || singleMatchData.confirmMatchResults) return null;

  const status = getMatchStatus(singleMatchData);

  if (status !== Status.WAITING_FOR_RESULTS && status !== Status.VALIDATING)
    return;

  return (
    <>
      <Box
        sx={{
          maxWidth: '400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          mx: 'auto',
          marginBottom: '1rem',
          justifyContent: 'center',
        }}
      >
        {/* Confirm / Upload Result */}
        {singleMatchData.matchResults && (
          <Typography>Ожидание подтверждения...</Typography>
        )}
        {!isConfirmedByTeam && singleMatchData.matchResults && (
          <Button
            disabled={uploadMatchReslultsMutation.isPending}
            onClick={() =>
              uploadMatchReslultsMutation.mutate({
                matchId: +matchId,
                matchResults: singleMatchData?.matchResults || [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                ],
              })
            }
            endIcon={
              uploadMatchReslultsMutation.isPending && (
                <CircularProgress size={20} color="inherit" />
              )
            }
            variant="contained"
            color="success"
            sx={{
              color: '#fff',
              px: 2,
            }}
          >
            Подтвердить
          </Button>
        )}
        {!isConfirmedByTeam && (
          <Button
            onClick={() => setOpenUploadModal(true)}
            sx={{ fontSize: '.95rem', fontWeight: '600' }}
          >
            Загрузить результат
          </Button>
        )}
      </Box>

      <UploadResultModal
        openState={openUploadModal}
        handleModal={() => setOpenUploadModal(false)}
        matchId={Number(matchId)}
      />
    </>
  );
};

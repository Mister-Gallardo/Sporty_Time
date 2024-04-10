import { Box, Button, Typography } from '@mui/material';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import {
  getOneAvailableMatch,
  uploadResults,
} from '../../../../services/matches/service';
import { useParams } from 'react-router';
import { useIonToast } from '@ionic/react';
import { usePlayerProfile } from '../../../../services/api/hooks';
import { UploadResultModal } from '../../../../components/modals/UploadResultModal';
import useToggle from '../../../../hooks/useToggle';

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

  if (!singleMatchData) return null;

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
        {singleMatchData.matchResults &&
          !singleMatchData.confirmMatchResults && (
            <Typography>Ожидание подтверждения...</Typography>
          )}
        {singleMatchData?.matchResults && !myBooking?.confirmMatchResults && (
          <Button
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
            sx={{
              backgroundColor: '#28a11e',
              fontSize: '.95rem',
              fontWeight: '600',
            }}
          >
            Подтвердить
          </Button>
        )}
        {!(
          singleMatchData?.confirmMatchResults || myBooking?.confirmMatchResults
        ) && (
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

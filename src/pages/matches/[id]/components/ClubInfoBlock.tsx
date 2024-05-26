import { Box, Button, Typography } from '@mui/material';
import { Block } from '../../../../components/molecules/Block';
import { Link, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  clubReview,
  getOneAvailableMatch,
} from '../../../../services/matches/service';
import noImg from '../../../../images/no-image.jpg';
import { withHostname } from '../../../../services/api/service';
import {
  EFeedbackType,
  FeedbackFormModal,
} from '../../../../components/modals/FeedbackFormModal';
import useToggle from '../../../../hooks/useToggle';
import { useIonToast } from '@ionic/react';
import { usePlayerProfile } from '../../../../services/api/hooks';

export const ClubInfoBlock = () => {
  const { matchId } = useParams<{ matchId: string }>();

  const [openReviewModal, setOpenReviewModal] = useToggle();

  const { data, refetch } = useQuery({
    queryKey: ['match', Number(matchId)],
    queryFn: () => getOneAvailableMatch(Number(matchId)),
  });

  const singleMatchData = data?.data;

  const [player] = usePlayerProfile();
  const myBooking = singleMatchData?.matchBookings?.find(
    (booking) => booking?.player?.id === player?.id,
  );

  const qc = useQueryClient();
  const [showToast] = useIonToast();

  const reviewMutation = useMutation({
    mutationFn: clubReview,
    onSuccess() {
      showToast({
        color: 'success',
        message: 'Благодарим за обратную связь!',
        mode: 'ios',
        position: 'top',
        duration: 2000,
      });
      qc.refetchQueries({
        queryKey: ['feedbacks', singleMatchData?.booking?.court?.club?.id],
      });
      refetch();
    },
    onError(e: any) {
      const message = e?.response?.data?.message;
      if (!message) return;

      showToast({
        color: 'danger',
        message,
        mode: 'ios',
        position: 'top',
        duration: 2000,
      });
    },
    onSettled() {
      setOpenReviewModal(false);
    },
  });

  if (!singleMatchData) return null;

  const { booking } = singleMatchData;
  const images = booking?.court?.club?.images;
  const previewImg =
    images && images.length > 0 ? images[0]?.formats.small : noImg;

  if (!booking?.court?.club) return null;
  return (
    <>
      <Block
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link to={`/book-court/${booking?.court?.club?.id}`}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Box
              component="img"
              src={withHostname(previewImg || '')}
              width={64}
              height={64}
              sx={{
                objectFit: 'cover',
              }}
              alt="Фото клуба"
              onError={(e) => ((e.target as HTMLImageElement).src = noImg)}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <Typography sx={{ fontWeight: '700' }}>
                {booking.court.club.title}
              </Typography>
              <Box sx={{ opacity: '.6' }}>
                <Typography sx={{ fontSize: '12px' }}>
                  {booking.court.club.city}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: '.75rem' }}>
                  Больше информации
                </Typography>
              </Box>
            </Box>
          </Box>
        </Link>
        {myBooking && (
          <Button variant="outlined" onClick={() => setOpenReviewModal()}>
            Оставить отзыв
          </Button>
        )}
      </Block>
      {myBooking && (
        <FeedbackFormModal
          openState={openReviewModal}
          handleModal={setOpenReviewModal}
          type={EFeedbackType.CLUB}
          onSubmit={(comment, rating) => {
            if (!myBooking?.id) return;
            reviewMutation.mutate({
              id: myBooking?.id,
              comment,
              rating,
            });
          }}
        />
      )}
    </>
  );
};

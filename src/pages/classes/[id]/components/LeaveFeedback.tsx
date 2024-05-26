import { usePlayerProfile } from '../../../../services/api/hooks';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useIonToast } from '@ionic/react';
import { useParams } from 'react-router';
import { classReview, getClass } from '../../../../services/classes';
import useToggle from '../../../../hooks/useToggle';
import { Box, Button } from '@mui/material';
import {
  EFeedbackType,
  FeedbackFormModal,
} from '../../../../components/modals/FeedbackFormModal';
import { isBefore } from 'date-fns';

export const LeaveFeedback = () => {
  const { classId } = useParams<{ classId: string }>();
  const [player] = usePlayerProfile();

  const { data } = useQuery({
    queryKey: ['classes', classId],
    queryFn: () => getClass(classId),
  });
  const classData = data?.data;

  const isOwner = player?.id === classData?.owner?.id;
  const myBooking = classData?.classBookings?.find(
    (booking) => booking?.player?.id === player?.id,
  );

  const [openReviewModal, setOpenReviewModal] = useToggle();

  const qc = useQueryClient();
  const [showToast] = useIonToast();

  const reviewMutation = useMutation({
    mutationFn: classReview,
    onSuccess() {
      showToast({
        color: 'success',
        message: 'Благодарим за обратную связь!',
        mode: 'ios',
        position: 'top',
        duration: 2000,
      });
      qc.refetchQueries({
        queryKey: ['feedbacks'],
      });
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

  if (!classData) return;

  const isClassEnded = isBefore(
    new Date(classData?.booking?.startsAt),
    new Date(),
  );

  if (isOwner || !myBooking || !isClassEnded) return;

  return (
    <Box display="flex" justifyContent="center">
      <Button variant="outlined" onClick={() => setOpenReviewModal()}>
        Оставить отзыв тренеру
      </Button>
      <FeedbackFormModal
        openState={openReviewModal}
        handleModal={setOpenReviewModal}
        type={EFeedbackType.TRAINER}
        onSubmit={(comment, rating) => {
          if (!myBooking?.id) return;

          reviewMutation.mutate({
            id: myBooking?.id,
            comment,
            rating,
          });
        }}
      />
    </Box>
  );
};

import { isPlatform, useIonToast } from '@ionic/react';
import { Box, Button, Stack, Typography } from '@mui/material';
import classImage from '../../../../images/matches/bgpadel_matchdetail.png';
import { useParams } from 'react-router';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { cancelClass, getClass } from '../../../../services/classes';
import { LoadingCircle } from '../../../../components/atoms/LoadingCircle';
import { getSportName } from '../../../../helpers/getNameOf';
import { ConfirmationDialog } from '../../../../components/modals/ConfirmationDialog';
import useToggle from '../../../../hooks/useToggle';
import { usePlayerProfile } from '../../../../services/api/hooks';
const isDesktop = isPlatform('desktop');

export const ClassTitleBlock = () => {
  const { classId } = useParams<{ classId: string }>();

  const [player] = usePlayerProfile();

  const { data, isLoading } = useQuery({
    queryKey: ['classes', classId],
    queryFn: () => getClass(classId),
  });
  const classData = data?.data;

  const isOwner = player?.id === classData?.owner?.id;
  const [openCancelConfirm, setOpenCancelConfirm] = useToggle();

  const qc = useQueryClient();
  const [showToast] = useIonToast();

  const cancelClassMutation = useMutation({
    mutationFn: cancelClass,
    onSuccess() {
      showToast({
        color: 'success',
        message: 'Заняти отменено!',
        mode: 'ios',
        position: 'top',
        duration: 2000,
      });
      qc.refetchQueries({ queryKey: [`classes`, classId] });
      qc.refetchQueries({ queryKey: ['classes/my'] });
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
      setOpenCancelConfirm(false);
    },
  });

  if (isLoading) return <LoadingCircle />;
  if (!classData) return null;

  const availableSportAmount =
    (classData.playersCount || 0) - (classData.classBookings?.length || 0);

  const { title, description, sport, isPrivate, booking } = classData;
  return (
    <>
      <Box>
        <Stack
          direction={isDesktop ? 'column' : 'row'}
          alignItems={isDesktop ? 'center' : 'unset'}
          spacing={isDesktop ? 1 : 2}
        >
          <Box
            src={classImage}
            component="img"
            width={isDesktop ? 80 : 60}
            height={isDesktop ? 80 : 60}
            flexShrink={0}
          />
          <Box>
            {!booking.cancelled && availableSportAmount === 1 && (
              <Typography
                textAlign={isDesktop ? 'center' : 'unset'}
                color="error.main"
              >
                Поторопитесь! Осталось только 1 место!
              </Typography>
            )}
            <Typography
              textAlign={isDesktop ? 'center' : 'unset'}
              fontSize={19}
            >
              {title}
            </Typography>
          </Box>
        </Stack>
        {description && (
          <Typography
            mt={1}
            color="gray"
            textAlign={isDesktop ? 'center' : 'unset'}
          >
            {description}
          </Typography>
        )}
        <Box
          mt={2}
          display="flex"
          justifyContent={isDesktop ? 'center' : 'unset'}
          gap={1.5}
        >
          {sport && (
            <Typography
              textTransform="uppercase"
              color="#696969"
              px={2}
              border="1px solid #eee"
              py={0.5}
            >
              {getSportName(sport)}
            </Typography>
          )}
          <Typography
            textTransform="uppercase"
            color="#696969"
            px={2}
            border="1px solid #eee"
            py={0.5}
          >
            {isPrivate ? 'Приватное' : 'Открытое'} занятие
          </Typography>
        </Box>
        {booking.cancelled ? (
          <Typography
            mt={2}
            fontWeight={600}
            fontSize={16}
            textAlign="center"
            color="error"
          >
            Занятие отменено
          </Typography>
        ) : (
          isOwner && (
            <Box mt={2} display="flex" justifyContent="center">
              <Button
                onClick={() => setOpenCancelConfirm()}
                variant="contained"
                color="error"
                sx={{ px: 2 }}
              >
                Отменить занятие
              </Button>
            </Box>
          )
        )}
      </Box>

      <ConfirmationDialog
        handleDialog={setOpenCancelConfirm}
        open={openCancelConfirm}
        title="Вы уверены, что хотите отменить занятие?"
        onConfirm={() => cancelClassMutation.mutate(classId)}
        isPending={cancelClassMutation.isPending}
      />
    </>
  );
};

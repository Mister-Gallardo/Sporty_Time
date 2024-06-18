import { isPlatform, useIonToast } from '@ionic/react';
import { Box, Button, Link, Stack, Typography } from '@mui/material';
import classImage from '../../../../images/matches/bgpadel_matchdetail.png';
import { useParams } from 'react-router';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { cancelClass, getClass } from '../../../../services/classes';
import { LoadingCircle } from '../../../../components/atoms/LoadingCircle';
import { getSportName } from '../../../../helpers/getNameOf';
import { ConfirmationDialog } from '../../../../components/modals/ConfirmationDialog';
import useToggle from '../../../../hooks/useToggle';
import { usePlayerProfile } from '../../../../services/api/hooks';
import { differenceInHours } from 'date-fns';
import { Link as ReactRouterLink } from 'react-router-dom';

const isDesktop = isPlatform('desktop');
const maxDescriptionLength = isDesktop ? 200 : 100;

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

  const [isExpanded, setIsExpanded] = useToggle();

  if (isLoading) return <LoadingCircle />;
  if (!classData) return null;

  const availableSportAmount =
    (classData.playersCount || 0) - (classData.classBookings?.length || 0);

  const {
    title,
    description = '',
    sport,
    isPrivate,
    booking,
    owner,
  } = classData;

  const isLongDescription = description?.length > maxDescriptionLength;
  const reviewText = isLongDescription
    ? `${description.slice(0, maxDescriptionLength)}...`
    : description;

  const classStartsAt = new Date(booking?.startsAt);
  const timeDifference =
    classStartsAt && differenceInHours(classStartsAt, Date.now());

  const isRegistrationEnded = timeDifference <= 12;

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
            {!booking.cancelled && (
              <Typography
                textAlign={isDesktop ? 'center' : 'unset'}
                color="error.main"
              >
                {isRegistrationEnded
                  ? 'Регистрация на занятие завершена!'
                  : availableSportAmount === 1
                  ? 'Поторопитесь! Осталось только 1 место!'
                  : availableSportAmount === 0
                  ? 'Свободных мест больше нет'
                  : null}
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
        <Box mt={1}>
          <Typography color="gray" sx={{ textIndent: isDesktop ? 30 : 0 }}>
            {isExpanded ? description : reviewText}
          </Typography>
          {isExpanded && (
            <Box my={1} display="flex" gap={1}>
              <Typography fontWeight={600}>Тренер:</Typography>
              <Link
                component={ReactRouterLink}
                to={`/profile/${owner?.user?.id}`}
              >
                {owner?.user?.fullname}
              </Link>
            </Box>
          )}

          <Typography
            component="span"
            onClick={() => setIsExpanded()}
            fontSize={14}
            sx={{
              cursor: 'pointer',
              textDecoration: 'underline',
              '&:hover': { color: 'primary.main' },
              transition: 'color .2s ease',
            }}
          >
            {isExpanded ? 'Свернуть' : 'Ещё'}
          </Typography>
        </Box>
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

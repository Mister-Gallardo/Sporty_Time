import { ClassTitleBlock } from './components/ClassTitleBlock';
import { MainClassInfoBlock } from './components/MainClassInfoBlock';
import { AdditionalClassInfoBlock } from './components/AdditionalClassInfoBlock';
import { ClassPlayersBlock } from './components/ClassPlayersBlock';
import { ClubInfoBlock } from './components/ClubInfoBlock';
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material';
import { isPlatform } from '@ionic/react';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getClass } from '../../../services/classes';
import { usePlayerProfile } from '../../../services/api/hooks';
import { ClassJoinCheckoutModal } from '../../../components/modals/ClassJoinCheckoutModal';
import useToggle from '../../../hooks/useToggle';
import { NotFoundPage } from '../../../components/NotFoundPage';
import { differenceInHours } from 'date-fns';
import ChatBubbleSharpIcon from '@mui/icons-material/ChatBubbleSharp';
import { Link } from 'react-router-dom';
import { EGender } from '../../../services/matches/interface';
import { getSportRating } from '../../../helpers/getSportRating';
import { getGenderName, getSportName } from '../../../helpers/getNameOf';
import { LeaveFeedback } from './components/LeaveFeedback';

const isDesktop = isPlatform('desktop');

export function SingleClassesPage() {
  const { classId } = useParams<{ classId: string }>();

  const [player] = usePlayerProfile();

  const [openCheckoutModal, setOpenCheckoutModal] = useToggle();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['classes', classId],
    queryFn: () => getClass(classId),
  });

  const classData = data?.data;

  const isOwner = player?.id === classData?.owner?.id;
  const isStudentInClass = classData?.classBookings?.find(
    (booking) => booking?.player?.id === player?.id,
  );

  const isFillfilled =
    classData?.classBookings?.length === classData?.playersCount;

  const classStartsAt = classData && new Date(classData?.booking?.startsAt);
  const timeDifference =
    classStartsAt && differenceInHours(classStartsAt, Date.now());

  const isRegistrationEnded = timeDifference && timeDifference <= 12;

  const usersRating = getSportRating(player, classData?.sport);
  const isRatingSufficient =
    usersRating >= (classData?.ratingFrom || 0) &&
    usersRating <= (classData?.ratingTo || 7);

  const isGenderSufficient =
    classData?.gender === EGender.ALL ||
    classData?.gender === player?.user?.gender;

  if (isError) return <NotFoundPage />;

  return (
    <Box width="100%" maxWidth={1240} m="0 auto" px={2} mt={2} mb={4}>
      <Stack spacing={isDesktop ? 3 : 2.5}>
        <ClassTitleBlock />

        {classData && !isOwner && (
          <Box display="flex" justifyContent="center">
            {!isGenderSufficient && (
              <Typography
                textAlign="center"
                maxWidth={500}
                color="error"
                fontWeight={600}
              >
                У Вас отсутствует возможность забронировать место, в занятии
                могут принимать участие только{' '}
                {getGenderName(classData?.gender)}
              </Typography>
            )}
            {!isRatingSufficient && (
              <Typography
                textAlign="center"
                maxWidth={500}
                color="error"
                fontWeight={600}
              >
                Ваш рейтинг по {getSportName(classData.sport)}у составляет{' '}
                {usersRating}. Что бы забронировать место рейтинг должен
                находится в пределах {classData?.ratingFrom}-
                {classData?.ratingTo}.
              </Typography>
            )}
          </Box>
        )}

        <LeaveFeedback />

        <Stack spacing={2.5} direction={isDesktop ? 'row' : 'column'}>
          <MainClassInfoBlock />
          <AdditionalClassInfoBlock />
        </Stack>

        <ClassPlayersBlock />
        {(isStudentInClass || isOwner) && (
          <Box display="flex" justifyContent="center">
            <Link to={`/chats/C${classId}`}>
              <ChatBubbleSharpIcon fontSize="large" color="primary" />
              <Typography textAlign="center" fontWeight={600}>
                Чат
              </Typography>
            </Link>
          </Box>
        )}
        <ClubInfoBlock />
      </Stack>

      {!isOwner &&
        !isRegistrationEnded &&
        !classData?.booking.cancelled &&
        !isStudentInClass &&
        !isFillfilled && (
          <Box
            sx={{
              position: 'fixed',
              zIndex: 1,
              left: '0',
              right: '0',
              bottom: '1.5rem',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              onClick={() => setOpenCheckoutModal(true)}
              disabled={isLoading || !isGenderSufficient || !isRatingSufficient}
              endIcon={
                isLoading && <CircularProgress size={20} color="inherit" />
              }
              variant="contained"
              sx={{
                px: 2,
              }}
            >
              Забронировать место - {classData?.price} руб.
            </Button>
          </Box>
        )}

      <ClassJoinCheckoutModal
        openState={openCheckoutModal}
        handleModal={setOpenCheckoutModal}
      />
    </Box>
  );
}

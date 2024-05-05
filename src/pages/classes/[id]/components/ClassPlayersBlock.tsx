import { Box, Button, Typography } from '@mui/material';
import AccessibilityOutlinedIcon from '@mui/icons-material/AccessibilityOutlined';
import { Link, useParams } from 'react-router-dom';
import { isPlatform } from '@ionic/react';
import { EditClassPlayersModal } from '../../../../components/modals/EditClassPlayersModal';
import useToggle from '../../../../hooks/useToggle';
import { ClassPlayerSlot } from './ClassPlayerSlot';
import { LoadingCircle } from '../../../../components/atoms/LoadingCircle';
import { useQuery } from '@tanstack/react-query';
import { getClass } from '../../../../services/classes';
import { usePlayerProfile } from '../../../../services/api/hooks';

const isDesktop = isPlatform('desktop');

export const ClassPlayersBlock = () => {
  const { classId } = useParams<{ classId: string }>();

  const [player] = usePlayerProfile();

  const [openEdit, setOpenEdit] = useToggle();

  const { data, isLoading } = useQuery({
    queryKey: ['classes', classId],
    queryFn: () => getClass(classId),
  });

  const classData = data?.data;
  const ownerId = classData?.owner?.id;

  const isOwner = player?.id === ownerId;

  if (isLoading) return <LoadingCircle />;
  if (!classData) return null;

  const playersList = classData?.classBookings;

  const isStudentInClass = playersList?.find(
    (booking) => booking?.player?.id === player?.id,
  );

  return (
    <>
      <Box
        display={isDesktop ? 'flex' : 'unset'}
        justifyContent={isDesktop ? 'center' : 'unset'}
        pb={5}
      >
        <Box width="100%" maxWidth={isDesktop ? 400 : 'unset'}>
          <Box
            mb={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontSize={17} fontWeight={600}>
              Игроки ({classData?.classBookings?.length}/
              {classData?.playersCount})
            </Typography>
            {!classData?.booking?.cancelled &&
              playersList.length > 0 &&
              (isStudentInClass || isOwner) && (
                <Button onClick={() => setOpenEdit(true)} sx={{ fontSize: 14 }}>
                  Изменить
                </Button>
              )}
          </Box>
          {playersList && playersList.length > 0 ? (
            <Box display="flex" justifyContent="space-evenly">
              {playersList.map((booking) => {
                return (
                  <Link
                    to={`/profile/${booking?.player?.user?.id}`}
                    key={booking.id}
                  >
                    <ClassPlayerSlot
                      {...booking?.player}
                      sport={classData?.sport}
                    />
                  </Link>
                );
              })}
            </Box>
          ) : (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={1}
            >
              <AccessibilityOutlinedIcon fontSize="large" color="disabled" />
              <Typography fontSize={17} color="#696969">
                Пока нет игроков
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
      <EditClassPlayersModal openState={openEdit} handleModal={setOpenEdit} />
    </>
  );
};

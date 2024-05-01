import { Box, Button, Typography } from '@mui/material';
import AccessibilityOutlinedIcon from '@mui/icons-material/AccessibilityOutlined';
import { Link } from 'react-router-dom';
import { isPlatform } from '@ionic/react';
import { EditClassPlayersModal } from '../../../../components/modals/EditClassPlayersModal';
import useToggle from '../../../../hooks/useToggle';
import { ClassPlayerSlot } from './ClassPlayerSlot';

const isDesktop = isPlatform('desktop');

export const ClassPlayersBlock = () => {
  const playersList = true;
  const isEditVisible = true;

  const [openEdit, setOpenEdit] = useToggle();

  return (
    <>
      <Box
        display={isDesktop ? 'flex' : 'unset'}
        justifyContent={isDesktop ? 'center' : 'unset'}
      >
        <Box width="100%" maxWidth={isDesktop ? 400 : 'unset'}>
          <Box
            mb={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontSize={17} fontWeight={600}>
              Игроки (x/x)
            </Typography>
            {isEditVisible && (
              <Button onClick={() => setOpenEdit(true)} sx={{ fontSize: 14 }}>
                Изменить
              </Button>
            )}
          </Box>
          {playersList ? (
            <Box display="flex" justifyContent="space-evenly">
              {[1, 2, 3, 4].map((player) => {
                return (
                  <Link to={`/profile/58`} key={player}>
                    <ClassPlayerSlot />
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

import React from 'react';
import { Avatar, Box, Button, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useQuery } from '@tanstack/react-query';
import { getOneAvailableMatch } from '../../../../services/matches/service';
import { useParams } from 'react-router';
import { withHostname } from '../../../../services/api/service';
import { isPlatform } from '@ionic/react';
import { RequestsForPlacesModal } from '../../../../components/modals/RequestsForPlacesModal';
import useToggle from '../../../../hooks/useToggle';

const isDesktop = isPlatform('desktop');

export const RequestsForPlaces = () => {
  const { matchId } = useParams<{ matchId: string }>();
  const [openRequestsModal, setOpenRequestsModal] = useToggle();

  const { data, isError } = useQuery({
    queryKey: [`match`, +matchId],
    queryFn: () => getOneAvailableMatch(+matchId),
  });

  const joinrequests = data?.data?.joinrequests;

  if (!joinrequests || isError) return;

  return (
    <>
      <Button
        onClick={() => setOpenRequestsModal()}
        sx={{
          border: '1px solid #ddd',
          mb: 2,
          p: 1,
          justifyContent: isDesktop ? 'start' : 'center',
        }}
      >
        <Box display="flex" mr={2}>
          {joinrequests
            .slice(0, joinrequests.length >= 3 ? 2 : 3)
            .map((player, i) => {
              return (
                <Avatar
                  key={player.id}
                  src={withHostname(
                    player?.player?.user?.avatar?.formats?.small || '',
                  )}
                  sx={{ ml: i > 0 ? -2 : 0, border: '2px solid #ddd' }}
                />
              );
            })}
          {joinrequests.length > 3 && (
            <Box
              bgcolor="#fff"
              zIndex={1}
              ml={-2}
              width={40}
              height={40}
              border="2px solid #eee"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography color="primary.main">
                +{joinrequests.length - 2}
              </Typography>
            </Box>
          )}
        </Box>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          gap={2}
          justifyContent={isDesktop ? 'space-between' : 'unset'}
        >
          <Box>
            <Typography
              textAlign="start"
              fontWeight={600}
              lineHeight={1.2}
              mb={0.5}
            >
              Запросы на присоединение
            </Typography>
            <Typography
              textAlign="start"
              color="gray"
              fontSize={13}
              lineHeight={1.2}
            >
              Посмотреть статус запросов от игроков на присоединение
            </Typography>
          </Box>
          <ArrowForwardIosIcon fontSize="small" />
        </Box>
      </Button>
      <RequestsForPlacesModal
        openState={openRequestsModal}
        handleModal={setOpenRequestsModal}
      />
    </>
  );
};

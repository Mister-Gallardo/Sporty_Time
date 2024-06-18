import React from 'react';
import { ModalContainer } from './ModalContainer';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getOneAvailableMatch } from '../../services/matches/service';
import { Box, Stack, Typography } from '@mui/material';
import { RequestedPlayersList } from '../molecules/RequestedPlayersList';
import { IApproved } from '../../services/matches/interface';

interface IRequestsForPlacesModalProps {
  openState: boolean;
  handleModal: (val?: boolean) => void;
}

export const RequestsForPlacesModal: React.FC<IRequestsForPlacesModalProps> = ({
  openState,
  handleModal,
}) => {
  const { matchId } = useParams<{ matchId: string }>();

  const { data } = useQuery({
    queryKey: [`match`, +matchId],
    queryFn: () => getOneAvailableMatch(+matchId),
  });

  const matchData = data?.data;
  if (!matchData) return;

  const sortPlayers = (approved: IApproved) => {
    return matchData.joinrequests.filter((req) => req.approved === approved);
  };

  return (
    <ModalContainer
      openState={openState}
      handleModal={(val) => handleModal(val)}
      headerTitle="Запросы"
    >
      <Box>
        <Typography color="gray" mb={2}>
          Что бы присоединиться к матчу, все его участники должны принять запрос
          от нового игрока
        </Typography>

        <Stack spacing={1.5}>
          {sortPlayers(null).length > 0 && (
            <RequestedPlayersList
              approved={null}
              playersList={sortPlayers(null)}
              title="Ожидают решения"
              handleModal={handleModal}
            />
          )}
          {sortPlayers(true).length > 0 && (
            <RequestedPlayersList
              approved
              playersList={sortPlayers(true)}
              title="Принятые игроки"
              handleModal={handleModal}
            />
          )}
          {sortPlayers(false).length > 0 && (
            <RequestedPlayersList
              approved={false}
              playersList={sortPlayers(false)}
              title="Отклонённые игроки"
              handleModal={handleModal}
            />
          )}
        </Stack>
      </Box>
    </ModalContainer>
  );
};

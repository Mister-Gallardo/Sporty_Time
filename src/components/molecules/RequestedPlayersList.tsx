import {
  Avatar,
  Box,
  CircularProgress,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router';
import {
  approvePlayersPlace,
  getOneAvailableMatch,
  rejectPlayersPlace,
} from '../../services/matches/service';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import {
  IApproved,
  IJoinRequest,
  Status,
} from '../../services/matches/interface';
import { usePlayerProfile } from '../../services/api/hooks';
import { withHostname } from '../../services/api/service';
import { getSportRating } from '../../helpers/getSportRating';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { useIonToast } from '@ionic/react';
import { getMatchStatus } from '../../helpers/getMatchStatus';

interface IRequestedPlayersListProps {
  playersList: IJoinRequest[];
  approved: IApproved;
  title: string;
  handleModal: (val?: boolean) => void;
}

export const RequestedPlayersList: React.FC<IRequestedPlayersListProps> = ({
  playersList,
  approved,
  title,
  handleModal,
}) => {
  const { matchId } = useParams<{ matchId: string }>();

  const [myPlayer] = usePlayerProfile();
  const myPlayerId = myPlayer?.id;

  const { data, refetch } = useQuery({
    queryKey: [`match`, +matchId],
    queryFn: () => getOneAvailableMatch(+matchId),
  });

  const matchData = data?.data;

  const isPlayerInMatch = matchData?.matchBookings?.find(
    (booking) => booking?.player?.id === myPlayerId,
  );

  const [showToast] = useIonToast();
  const qc = useQueryClient();

  const approvePlayerMutation = useMutation({
    onMutate: approvePlayersPlace,
    onSuccess() {
      showToast({
        color: 'success',
        message: 'Вы подтвердили игрока',
        mode: 'ios',
        position: 'bottom',
        duration: 2000,
      });
    },
    onError(e: any) {
      const message = e?.response?.data?.message;
      if (!message) return;
      showToast({
        color: 'danger',
        message,
        mode: 'ios',
        position: 'bottom',
        duration: 2000,
      });
    },
    onSettled() {
      refetch();
      handleModal();
      qc.refetchQueries({ queryKey: ['my-matches'] });
    },
  });
  const rejectPlayerMutation = useMutation({
    onMutate: rejectPlayersPlace,
    onSuccess() {
      showToast({
        color: 'success',
        message: 'Вы отклонили игрока',
        mode: 'ios',
        position: 'bottom',
        duration: 2000,
      });
    },
    onError(e: any) {
      const message = e?.response?.data?.message;
      if (!message) return;
      showToast({
        color: 'danger',
        message,
        mode: 'ios',
        position: 'bottom',
        duration: 2000,
      });
    },
    onSettled() {
      refetch();
      handleModal();
      qc.refetchQueries({ queryKey: ['my-matches'] });
    },
  });

  if (!matchData) return;

  const matchSatus = getMatchStatus(matchData);
  const showButtons =
    matchSatus === Status.UPCOMING || matchSatus === Status.PENDING;

  return (
    <Box
      border={`1px solid ${
        approved ? '#65ad8b' : approved === null ? '#ddd' : '#bf5270'
      }`}
    >
      <Box
        p={1}
        display="flex"
        alignItems="center"
        gap={2}
        bgcolor={approved ? '#ebf9f3' : approved === null ? '#eee' : '#fff4f5'}
      >
        {approved ? (
          <PersonAddAltOutlinedIcon />
        ) : approved === null ? (
          <ManageAccountsOutlinedIcon />
        ) : (
          <PersonRemoveOutlinedIcon />
        )}
        <Typography>{title}</Typography>
      </Box>
      <Box>
        {playersList.map((user, i) => {
          const didCurrentUserVoted = user?.joinapprovals.find(
            (vote) => vote?.approver?.player?.id === myPlayerId,
          );

          const mutationData = {
            matchId: +matchId,
            playerId: user.id,
          };

          return (
            <Box
              key={user.id}
              display="flex"
              p={1}
              borderBottom={
                i !== playersList.length - 1 ? '1px solid #eee' : 'unset'
              }
            >
              <Box display="flex" gap={1} flex={1}>
                <Avatar
                  src={withHostname(
                    user?.player?.user?.avatar?.formats?.small || '',
                  )}
                />
                <Box>
                  <Typography fontWeight={600} fontSize={13}>
                    {user?.player?.user?.fullname}
                  </Typography>
                  <Typography fontSize={12} color="gray">
                    Уровень: {getSportRating(user?.player, matchData.sport)}
                  </Typography>
                </Box>
              </Box>

              {showButtons && isPlayerInMatch && !approved && (
                <Box display="flex" gap={1}>
                  {((didCurrentUserVoted &&
                    didCurrentUserVoted.approved === false) ||
                    !didCurrentUserVoted) && (
                    <IconButton
                      disabled={approvePlayerMutation.isPending}
                      onClick={() => approvePlayerMutation.mutate(mutationData)}
                      sx={{
                        backgroundColor: 'success.main',
                        '&:hover': {
                          backgroundColor: 'primary.main',
                        },
                      }}
                    >
                      {approvePlayerMutation.isPending ? (
                        <CircularProgress size={20} />
                      ) : (
                        <DoneIcon sx={{ color: '#fff' }} />
                      )}
                    </IconButton>
                  )}
                  {approved !== false && !didCurrentUserVoted && (
                    <IconButton
                      disabled={rejectPlayerMutation.isPending}
                      onClick={() => rejectPlayerMutation.mutate(mutationData)}
                      sx={{
                        backgroundColor: 'error.main',
                        '&:hover': {
                          backgroundColor: 'primary.main',
                        },
                      }}
                    >
                      {rejectPlayerMutation.isPending ? (
                        <CircularProgress size={20} />
                      ) : (
                        <CloseIcon sx={{ color: '#fff' }} />
                      )}
                    </IconButton>
                  )}
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

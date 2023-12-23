import React, { useEffect } from 'react';
import { PlayerSlot } from '../../../../components/molecules/PlayerSlot';
import useSortTeamMembers from '../../../../hooks/useSortTeamMembers';
import { MatchMember } from '../../../../services/matches/interface';
import { Box, Button, Divider, Typography } from '@mui/material';
import useSearchParams from '../../../../hooks/useSearchParams';
import { ITeamSlot, Status } from '../../../../types';
import useToggle from '../../../../hooks/useToggle';
import { EditMatchPlayersModal } from '../../../../components/modals/EditMatchPlayersModal';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  cancelMatch,
  getOneAvailableMatch,
} from '../../../../services/matches/service';
import { useParams } from 'react-router';
import { useIonToast } from '@ionic/react';
import { CancelDialogModal } from './CancelDialogModal';

interface IPlayers {
  matchStatus: Status;
  players: MatchMember[];
  isUserOwner: boolean;
  isUserAlredyInMatch: boolean;
}

export const Players: React.FC<IPlayers> = ({
  matchStatus,
  players,
  isUserOwner,
  isUserAlredyInMatch,
}) => {
  const { matchId } = useParams<{ matchId: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedTeam = searchParams('team');
  const selectedSlot = searchParams('slot');

  const passedTeamSlot =
    selectedTeam && selectedSlot
      ? { teamIndex: +selectedTeam, slotIndex: +selectedSlot }
      : null;

  useEffect(() => {
    if (passedTeamSlot) setNewPlayer(passedTeamSlot);
  }, []);

  const [playersArr, setNewPlayer] = useSortTeamMembers(players);

  const onSlotSelect = (teamSlotIndex: ITeamSlot) => {
    setSearchParams('team', '' + teamSlotIndex.teamIndex);
    setSearchParams('slot', '' + teamSlotIndex.slotIndex);
    setNewPlayer(teamSlotIndex);
  };

  const [openEditModal, setOpenEditModal] = useToggle();
  const [openCancelDialogModal, setOpenCancelDialogModal] = useToggle();

  const [showToast] = useIonToast();

  const { refetch: refetchMatch } = useQuery({
    queryKey: [`match`, +matchId],
    queryFn: () => getOneAvailableMatch(+matchId),
  });

  const cancelMatchMutation = useMutation({
    mutationFn: cancelMatch,
    onSuccess() {
      setOpenEditModal();
      setOpenCancelDialogModal();
      showToast({
        color: 'success',
        message: `Ваше бронирование отменено`,
        mode: 'ios',
        position: 'top',
        duration: 2000,
      });
      refetchMatch();
    },
    onError(e: any) {
      console.log('error!', e);
    },
  });

  const cancelOrLeaveMatch = () => {
    cancelMatchMutation.mutate(+matchId);
  };

  return (
    <Box border="1px solid #ddd" borderRadius={2} py={1} px={2} bgcolor="#fff">
      <Box display="flex" justifyContent="space-between">
        <Typography fontWeight={700}>Игроки</Typography>

        {(isUserOwner || isUserAlredyInMatch) && (
          <Button
            sx={{ p: 0, fontSize: 13 }}
            onClick={() => setOpenEditModal()}
          >
            Изменить
          </Button>
        )}
        {/* <Box>out of range</Box> */}
      </Box>
      <Box display="flex" justifyContent="space-evenly" my={1.5}>
        {playersArr.map((team, teamIndex) => {
          return (
            <React.Fragment key={teamIndex}>
              <Box display="flex" alignItems="flex-start" gap={2}>
                {team.map((member: any, slotIndex: number) => {
                  const teamSlotIndex = { teamIndex, slotIndex };
                  return (
                    <PlayerSlot
                      key={slotIndex}
                      member={member}
                      teamSlotIndex={teamSlotIndex}
                      onSlotSelect={onSlotSelect}
                      isUserOwner={isUserOwner}
                      isUserAlredyInMatch={isUserAlredyInMatch}
                      matchStatus={matchStatus}
                    />
                  );
                })}
              </Box>

              {teamIndex === 0 && (
                <Divider orientation="vertical" flexItem sx={{ marginX: 1 }} />
              )}
            </React.Fragment>
          );
        })}
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography fontSize={16} fontWeight={700} color="#616161">
          A
        </Typography>
        <Typography fontSize={16} fontWeight={700} color="#616161">
          B
        </Typography>
      </Box>

      <EditMatchPlayersModal
        openState={openEditModal}
        handleModal={setOpenEditModal}
        players={playersArr}
        isUserOwner={isUserOwner}
        onCancel={setOpenCancelDialogModal}
      />
      <CancelDialogModal
        openState={openCancelDialogModal}
        handleDialog={setOpenCancelDialogModal}
        isUserOwner={isUserOwner}
        handleCancel={cancelOrLeaveMatch}
      />
    </Box>
  );
};

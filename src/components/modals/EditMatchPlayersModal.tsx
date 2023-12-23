import { Box, Divider } from '@mui/material';
import { ModalContainer } from './ModalContainer';
import React from 'react';
import { Member } from '../../helpers/sortTeamMembers';
import { PlayerSlot } from '../molecules/PlayerSlot';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { usePlayerProfile } from '../../services/api/hooks';
import { Status } from '../../types';

interface IEditMatchPlayersModal {
  openState: boolean;
  handleModal: (val?: boolean) => void;
  players: Array<Member[]>;
  isUserOwner: boolean;
  onCancel: () => void;
}

export const EditMatchPlayersModal: React.FC<IEditMatchPlayersModal> = ({
  openState,
  handleModal,
  players,
  isUserOwner,
  onCancel,
}) => {
  const player = usePlayerProfile();

  return (
    <ModalContainer
      openState={openState}
      handleModal={handleModal}
      headerTitle="Изменить состав команд"
      initialBreakpoint={0.3}
    >
      <Box display="flex" justifyContent="center" gap={1.5}>
        {players.map((team, teamIndex) => {
          return (
            <React.Fragment key={teamIndex}>
              <Box display="flex" alignItems="flex-start" gap={2}>
                {team.map((member: any, slotIndex: number) => {
                  const teamSlotIndex = { teamIndex, slotIndex };
                  const isUser = player?.id === member?.player?.id;

                  return (
                    <Box key={slotIndex} position="relative">
                      {member && (isUserOwner || (!isUserOwner && isUser)) ? (
                        <CancelRoundedIcon
                          onClick={() => {
                            handleModal();
                            onCancel();
                          }}
                          sx={{
                            cursor: 'pointer',
                            color: '#ff484e',
                            position: 'absolute',
                            zIndex: 1,
                            right: -3,
                            top: -10,
                          }}
                        />
                      ) : null}
                      <PlayerSlot
                        matchStatus={Status.COMPLETE}
                        member={member}
                        teamSlotIndex={teamSlotIndex}
                        isUserOwner={isUserOwner}
                      />
                    </Box>
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
    </ModalContainer>
  );
};

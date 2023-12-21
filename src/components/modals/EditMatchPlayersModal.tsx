import { Box, Divider } from '@mui/material';
import { ModalContainer } from './ModalContainer';
import React from 'react';
import { Member } from '../../helpers/sortTeamMembers';
import { PlayerSlot } from '../molecules/PlayerSlot';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
interface IEditMatchPlayersModal {
  openState: boolean;
  handleModal: (val?: boolean) => void;
  players: Array<Member[]>;
  isUserCreator: boolean;
}
export const EditMatchPlayersModal: React.FC<IEditMatchPlayersModal> = ({
  openState,
  handleModal,
  players,
  isUserCreator,
}) => {
  const onCancelMatch = (memeber: Member) => {
    console.log(
      `${isUserCreator ? 'Match creator' : 'Player'} ${
        memeber.player.user.firstname
      } want's to cancel the match`,
    );
  };

  return (
    <ModalContainer
      openState={openState}
      handleModal={handleModal}
      headerTitle="Изменить состав команд"
      initialBreakpoint={0.25}
    >
      <Box display="flex" justifyContent="center" gap={1.5}>
        {players.map((team, teamIndex) => {
          return (
            <React.Fragment key={teamIndex}>
              <Box display="flex" alignItems="flex-start" gap={2}>
                {team.map((member: any, slotIndex: number) => {
                  const teamSlotIndex = { teamIndex, slotIndex };
                  return (
                    <Box key={slotIndex} position="relative">
                      {member && (
                        <CancelRoundedIcon
                          onClick={() => onCancelMatch(member)}
                          sx={{
                            cursor: 'pointer',
                            color: '#ff484e',
                            position: 'absolute',
                            zIndex: 1,
                            right: -3,
                            top: -10,
                          }}
                        />
                      )}
                      <PlayerSlot
                        member={member}
                        teamSlotIndex={teamSlotIndex}
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

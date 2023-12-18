import React, { useEffect } from 'react';
import { PlayerSlot } from '../../../../components/molecules/PlayerSlot';
import useSortTeamMembers from '../../../../hooks/useSortTeamMembers';
import { MatchMember } from '../../../../services/user/interface';
import { Box, Divider, Typography } from '@mui/material';
import useSearchParams from '../../../../hooks/useSearchParams';
import { ITeamSlot } from '../../../../types';

interface IPlayers {
  players: MatchMember[];
}

export const Players: React.FC<IPlayers> = ({ players }) => {
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

  return (
    <Box border="1px solid #ddd" borderRadius={2} py={1} px={2} bgcolor="#fff">
      <Box>
        <Typography fontWeight={700}>Игроки</Typography>
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
    </Box>
  );
};

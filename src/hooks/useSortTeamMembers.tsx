import { useState } from 'react';
import { sortTeamMembers } from '../helpers/sortTeamMembers';
import { MatchMember } from '../services/matches/interface';
import { usePlayerProfile } from '../services/api/hooks';
import { ITeamSlot } from '../types';

export default function useSortTeamMembers(players: MatchMember[]) {
  const sortedTeams = sortTeamMembers(players);

  const [selectedTeamSlot, setSelectedTeamSlot] = useState<ITeamSlot | null>(
    null,
  );

  const profile = usePlayerProfile();

  if (!selectedTeamSlot || !profile) {
    return [sortedTeams, setSelectedTeamSlot] as const;
  } else {
    const { teamIndex, slotIndex } = selectedTeamSlot;
    const newMember = {
      team: teamIndex === 0 ? 'A' : 'B',
      paid: 0,
      player: profile,
    };

    if (slotIndex === 1 && !sortedTeams[teamIndex][0]) {
      sortedTeams[teamIndex][0] = newMember;
    } else {
      sortedTeams[teamIndex][slotIndex] = newMember;
    }

    return [sortedTeams, setSelectedTeamSlot] as const;
  }
}

import { useState } from 'react';
import { sortTeamMembers } from '../helpers/sortTeamMembers';
import { useUserInfo } from '../services/api/hooks';
import { MatchMember } from '../services/user/interface';
import { ITeamSlot } from '../types';

export default function useSortTeamMembers(players: MatchMember[]) {
  const sortedTeams = sortTeamMembers(players);
  const [selectedTeamSlot, setSelectedTeamSlot] = useState<ITeamSlot | null>(
    null,
  );

  const user = useUserInfo();

  if (!selectedTeamSlot || !user) {
    return [sortedTeams, setSelectedTeamSlot] as const;
  } else {
    const newMemberId = user.id;

    const newMember = {
      id: newMemberId,
      team: selectedTeamSlot.teamIndex === 0 ? 'A' : 'B',
      player: {
        ratingTennis: user.player.ratingTennis,
        user: { avatarUrl: user.avatarUrl, firstname: user.firstname },
      },
    };

    sortedTeams[selectedTeamSlot.teamIndex][selectedTeamSlot.slotIndex] =
      newMember;

    return [sortedTeams, setSelectedTeamSlot] as const;
  }
}

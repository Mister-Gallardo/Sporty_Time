import { MatchMember, MatchMemberShort } from '../services/user/interface';

export type Member = MatchMember | MatchMemberShort;

export const sortTeamMembers = (members: MatchMember[]): Array<Member[]> => {
  const teamA: any = [];
  const teamB: any = [];

  members.forEach((member) => {
    if (member.team === 'A') teamA.push(member);
    if (member.team === 'B') teamB.push(member);
  });

  if (teamA.length === 1) teamA.push(null);
  if (teamB.length === 0) teamB.push(null);
  if (teamB.length === 1) teamB.push(null);

  return [teamA, teamB];
};

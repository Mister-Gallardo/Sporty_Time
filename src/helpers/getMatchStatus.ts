import { MatchData } from '../services/matches/interface';
import { Status } from '../types';

const currendDate = new Date();

export const getMatchStatus = (match: MatchData) => {
  const matchDate = new Date(match.gameDate);

  const currendDateISO = new Date(currendDate.toISOString());
  const matchDateISO = new Date(`${match.gameDate}T${match.slot.time}`);

  const currendTime = currendDate.getTime();
  const matchTime = matchDate.getTime();
  const matchEndTime = new Date(matchDateISO).getTime() + match.minutes * 60000;

  //isCancelled
  if (match.isCancelled) return Status.CANCELED;

  //isUpcomming
  const isUpcomming = currendDateISO.getTime() < matchDateISO.getTime();
  //isPending
  const isPaid = match.paid;

  if (isUpcomming && isPaid) return Status.UPCOMING;
  if (isUpcomming && !isPaid) return Status.PENDING;

  //inProgress
  if (
    currendTime >= matchTime &&
    currendTime <= matchEndTime &&
    !match.winningTeam &&
    !match.matchResults
  )
    return Status.IN_PROGRESS;

  //waitingForResults
  if (!match.confirmMatchResults && !match.matchResults)
    return Status.WAITING_FOR_RESULTS;

  //isValidating
  if (!match.confirmMatchResults && match.matchResults && !match.winningTeam)
    return Status.VALIDATING;

  //isCompleteWithoutResults
  if (match.confirmMatchResults && !match.matchResults)
    return Status.WITHOUT_RESULT;

  //invalid results
  if (match.winningTeam === 'I') return Status.INVALID_RESULT;

  //match wasn't finished
  if (match.winningTeam === 'T') return Status.INCOMPLETE;

  // there's winner - valid results
  return Status.COMPLETE;
};

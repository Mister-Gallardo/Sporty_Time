import { getTime } from 'date-fns';
import { MatchData, Status } from '../services/matches/interface';

export const parseDate = (
  date: string | undefined = '01-01-1970',
  time: string | undefined = '00:00',
  timezone: string | undefined = '',
) => {
  return Date.parse(`${date} ${time} ${timezone}`);
};

export const currentTimeInCLubTimezone = (timeZone: string) => {
  const date = new Date().toLocaleString('en-US', { timeZone });
  return new Date(date).getTime();
};

export const getMatchStatus = (match: MatchData) => {
  const currentTime = getTime(new Date());

  const expiresTime = getTime(new Date(match.timeExpires));
  const matchTime = getTime(new Date(match.booking.startsAt.slice(0, -5)));

  const matchEndTime = matchTime + match.booking.duration * 60000;

  // is Cancelled
  if (match.isCancelled) return Status.CANCELED;

  // isUpcomming
  const isUpcomming = currentTime < matchTime;

  // isPending
  const isPaid = match.paid;

  if (isUpcomming && isPaid) return Status.UPCOMING;
  if (isUpcomming && !isPaid) return Status.PENDING;

  // inProgress
  if (
    currentTime >= matchTime &&
    currentTime <= matchEndTime &&
    !match.winningTeam &&
    !match.matchResults
  )
    return Status.IN_PROGRESS;

  // waitingForResults
  if (
    !match.confirmMatchResults &&
    !match.matchResults &&
    currentTime < expiresTime
  )
    return Status.WAITING_FOR_RESULTS;

  // isValidating
  if (!match.confirmMatchResults && match.matchResults && !match.winningTeam)
    return Status.VALIDATING;

  // isCompleteWithoutResults
  if (match.confirmMatchResults && !match.matchResults)
    return Status.WITHOUT_RESULT;

  // invalid results
  if (match.winningTeam === 'I') return Status.INVALID_RESULT;

  // match wasn't finished
  if (match.winningTeam === 'T') return Status.INCOMPLETE;

  // there's winner - valid results
  return Status.COMPLETE;
};

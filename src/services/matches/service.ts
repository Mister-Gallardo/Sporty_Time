import {
  CreateMatchDTO,
  JoinMatchDTO,
  UploadResultsDTO,
  MatchData,
  RemovePlayerFromMatch,
  GetAvailableMatchesAndClubsDTO,
  IAddPlayerToMatchData,
  IMatchBookingData,
  ESport,
  CreateClassDTO,
} from './interface';
import { api } from '../api/service';
import { RequestQueryBuilder } from '@dataui/crud-request';

export function getMyMatches(cancelled?: boolean) {
  const res = api.get<MatchData[]>(`/matches/my`, {
    params: {
      cancelled: !!cancelled,
    },
  });
  return res;
}

export function getAvailableMatches(data: GetAvailableMatchesAndClubsDTO) {
  const { sport, gamedates, clubs, time } = data;
  const res = api.get<MatchData[]>(
    `/matches/available?sport=${sport}&gamedates=${gamedates}&clubs=${clubs}&time=${time}`,
  );
  return res;
}

export function getAvailableNoRatingMatches(
  data: GetAvailableMatchesAndClubsDTO,
) {
  const { sport, gamedates, clubs, time } = data;
  const res = api.get<MatchData[]>(
    `/matches/available-no-rating?sport=${sport}&gamedates=${gamedates}&clubs=${clubs}&time=${time}`,
  );
  return res;
}

export function getOneAvailableMatch(id: number | string) {
  const res = api.get<MatchData>(`/matches/${id}`);
  return res;
}

export function uploadResults(data: UploadResultsDTO) {
  const { matchId, matchResults } = data;
  const res = api.post(`/matches/${matchId}/results`, {
    matchResults,
  });
  return res;
}

export function cancelMatch(matchId: number) {
  const res = api.delete(`/matches/${matchId}/cancel`);
  return res;
}

export function deletePlayerFromMatch(data: RemovePlayerFromMatch) {
  const res = api.delete(
    `/matches/${data.matchId}/kick/${data.deletePlayerId}`,
  );
  return res;
}

// get Yookassa's token for new match court booking
export async function getMatchBookingYookassaToken(data: CreateMatchDTO) {
  const res = await api.post('/matches/new', data);
  return res.data;
}

// get Yookassa's token for class court booking
export async function getClassBookingYookassaToken(data: CreateClassDTO) {
  const res = await api.post('/classes/new', data);
  return res.data;
}

// get Yookassa's token for join match payment
export async function joinMatch(data: JoinMatchDTO) {
  const { matchId, team } = data;
  const res = await api.post(`/matches/${matchId}/join`, { team });
  return res.data;
}

// get Yookassa's token for the rest of the booking price payment
export async function createExtraPaymentYookassaToken(matchId: number) {
  const res = await api.post(`/matches/${matchId}/pay`);
  return res.data;
}

const bookingsQuery = (limit: number, sport?: ESport) => {
  const qb = RequestQueryBuilder.create();
  qb.setFilter([
    { field: 'match.isCancelled', operator: '$eq', value: false },
    { field: 'matchBooking.id', operator: '$notnull', value: true },
    { field: 'match.sport', operator: '$eq', value: sport },
    { field: 'match.winningTeam', operator: '$in', value: ['A', 'B'] },
    {
      field: 'match.confirmMatchResults',
      operator: '$eq',
      value: true,
    },
  ])
    .sortBy({ field: 'matchBooking.startsAt', order: 'DESC' })
    .setLimit(limit)
    .setJoin([
      { field: 'match' },
      { field: 'match.booking' },
      { field: 'match.matchBookings' },
      { field: 'match.matchBookings.player' },
      { field: 'match.matchBookings.player.user' },
      { field: 'match.matchBookings.player.user.avatar' },
    ])
    .query();

  return qb.queryString;
};

export function getMatchBookings(limit: number, sport: ESport) {
  const query = bookingsQuery(limit, sport);

  return api.get<IMatchBookingData[]>(`/match-bookings?${query}`);
}

export function getSpecificUserMatchBookings(
  id: number,
  limit: number,
  sport?: ESport,
) {
  const query = bookingsQuery(limit, sport);

  return api.get<IMatchBookingData[]>(`/users/${id}/match-bookings?${query}`);
}

export function approvePlayersPlace(data: {
  matchId: number;
  playerId: number;
}) {
  return api.post(
    `/matches/${data.matchId}/joinrequests/${data.playerId}/approve `,
  );
}

export function rejectPlayersPlace(data: {
  matchId: number;
  playerId: number;
}) {
  return api.post(
    `/matches/${data.matchId}/joinrequests/${data.playerId}/reject `,
  );
}

export async function addPlayerToMatch(data: IAddPlayerToMatchData) {
  const { matchId, playerId, team } = data;

  const res = await api.post(`matches/${matchId}/match-bookings`, {
    playerId,
    team,
  });
  return res.data;
}

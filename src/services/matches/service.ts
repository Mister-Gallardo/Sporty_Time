import {
  CreateMatchDTO,
  JoinMatchDTO,
  UploadResultsDTO,
  MatchData,
  RemovePlayerFromMatch,
  GetAvailableMatchesAndClubsDTO,
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

export function getOneAvailableMatch(id: number) {
  const res = api.get<MatchData>(`/matches/${id}`);
  return res;
}

export function uploadResults(data: UploadResultsDTO) {
  const res = api.post('/matches/upload-results', data);
  return res;
}

export function cancelMatch(matchId: number) {
  const res = api.delete('/matches/cancel', { data: { matchId } });
  return res;
}

export function deletePlayerFromMatch(data: RemovePlayerFromMatch) {
  const res = api.delete('/matches/delete-player', { data });
  return res;
}

// get Yookassa's token for creating new match payment
export async function createBookingYookassaToken(data: CreateMatchDTO) {
  const res = await api.post('/matches/new-match-payment', data);
  return res.data;
}

// get Yookassa's token for join match payment
export async function createJoinMatchYookassaToken(data: JoinMatchDTO) {
  const res = await api.post('/matches/join-payment', data);
  return res.data;
}

// get Yookassa's token for the rest of the booking price payment
export async function createExtraPaymentYookassaToken(data: {
  money: number;
  matchId: number;
}) {
  const res = await api.post('/matches/extra-payment', data);
  return res.data;
}

const bookingsQuery = (limit: number) => {
  const qb = RequestQueryBuilder.create();
  qb.setFilter({ field: 'match.isCancelled', operator: '$eq', value: false })
    .setFilter({ field: 'matchBooking.id', operator: '$notnull', value: true })
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

export function getMatchBookings(limit: number) {
  const query = bookingsQuery(limit);

  return api.get<any[]>(`/match-bookings?${query}`);
}

export function getSpecificUserMatchBookings(id: number, limit: number) {
  const query = bookingsQuery(limit);

  return api.get<any[]>(`/users/${id}/match-bookings?${query}`);
}

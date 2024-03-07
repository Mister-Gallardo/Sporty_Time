import {
  CreateMatchDTO,
  JoinMatchDTO,
  UploadResultsDTO,
  MatchData,
  RemovePlayerFromMatch,
  GetAvailableMatchesAndClubsDTO,
} from './interface';
import { api } from '../api/service';

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

// export async function createMatch(data: CreateMatchDTO) {
//   const { data: res } = await api.post('/matches', data);
//   return res;
// }
export function joinMatch(data: JoinMatchDTO) {
  const res = api.post('/matches/join', data);
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

// export function extraMatchPayment(matchId: number) {
//   const res = api.post(`/matches/extra-payment/${matchId}`);
//   return res;
// }

// export async function createYookassa(
//   data: CreateMatchDTO | JoinMatchDTO | number,
// ) {
//   const res = await api.post('/matches/create-yookassa', data);
//   return res.data;
// }

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

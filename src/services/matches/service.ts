import {
  CreateMatchDTO,
  JoinMatchDTO,
  UploadResultsDTO,
  MatchData,
} from './interface';
import { api } from '../api/service';

// static 'gameDates' array for daily requests with actual dates (just for now)
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
const dayAfterTomorrow = new Date(tomorrow);
dayAfterTomorrow.setDate(tomorrow.getDate() + 1);

const gameDates = [today, tomorrow, dayAfterTomorrow];
const queryString = gameDates
  .map((date: Date) => date.toLocaleDateString('en-ca'))
  .join(',');

export function getMyMatches() {
  const res = api.get<MatchData[]>('/matches/my');
  return res;
}

export function getAvailableMatches() {
  const res = api.get<MatchData[]>(
    `/matches/available?sport=TENNIS&gamedates=${queryString}`,
  );
  return res;
}

export function getAvailableNoRatingMatches() {
  const res = api.get<MatchData[]>(
    `/matches/available-no-rating?sport=TENNIS&gamedates=${queryString}`,
  );
  return res;
}

export function getOneAvailableMatch(id: number) {
  const res = api.get<MatchData>(`/matches/${id}`);
  return res;
}

export function createMatch(data: CreateMatchDTO) {
  const res = api.post('/matches', data);
  return res;
}
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

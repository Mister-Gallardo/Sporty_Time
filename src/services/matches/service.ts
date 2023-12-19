import {
  CreateMatchDTO,
  JoinMatchDTO,
  UploadResultsDTO,
  AvailableMatch,
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
  const res = api.get<AvailableMatch[]>('/matches/my');
  return res;
}

export function getAvailableMatches() {
  const res = api.get<AvailableMatch[]>(
    `/matches/available?sport=TENNIS&gamedates=${queryString}`,
  );
  return res;
}

export function getOneAvailableMatch(id: number) {
  const res = api.get<AvailableMatch>(`/matches/${id}`);
  return res;
}

export function createMatch(data: CreateMatchDTO) {
  const res = api.post('/matches', data);
  return res;
}
export function joinMatch(data: JoinMatchDTO) {
  const { matchId, team } = data;
  const res = api.post('/matches/join', {
    matchId: matchId,
    team: team,
  });

  return res;
}

export function uploadResults(data: UploadResultsDTO) {
  const { matchId, matchResults } = data;
  const res = api.post('/matches/upload-results', {
    matchId: matchId,
    matchResults: matchResults,
  });

  return res;
}

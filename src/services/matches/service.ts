import {
  CreateMatchDTO,
  JoinMatchDTO,
  UploadResultsDTO,
  MatchData,
} from './interface';
import { api } from '../api/service';

export function getMyMatches() {
  const res = api.get<MatchData[]>('/matches/my');
  return res;
}

export function getAvailableMatches({ sport, gamedates }: any) {
  const res = api.get<MatchData[]>(
    `/matches/available?sport=${sport}&gamedates=${gamedates}`,
  );
  return res;
}

export function getAvailableNoRatingMatches({ sport, gamedates }: any) {
  const res = api.get<MatchData[]>(
    `/matches/available-no-rating?sport=${sport}&gamedates=${gamedates}`,
  );
  return res;
}

export function getOneAvailableMatch(id: number) {
  const res = api.get<MatchData>(`/matches/${id}`);
  return res;
}

export async function createMatch(data: CreateMatchDTO) {
  const { data: res } = await api.post('/matches', data);
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

import {
  CreateMatchDTO,
  JoinMatchDTO,
  UploadResultsDTO,
  MatchData,
  RemovePlayerFromMatch,
  GetAvailableMatchesAndClubsDTO,
} from './interface';
import { api } from '../api/service';

export function getMyMatches(cancel: boolean) {
  const res = api.get<MatchData[]>(`/matches/my?cancel=${cancel}`);
  return res;
}

export function getAvailableMatches(data: GetAvailableMatchesAndClubsDTO) {
  const { sport, gamedates, lat, long, range } = data;
  const res = api.get<MatchData[]>(
    `/matches/available?sport=${sport}&lat=${lat}&long=${long}&range=${range}&gamedates=${gamedates}`,
  );
  return res;
}

export function getAvailableNoRatingMatches(
  data: GetAvailableMatchesAndClubsDTO,
) {
  const { sport, gamedates, lat, long, range } = data;
  const res = api.get<MatchData[]>(
    `/matches/available-no-rating?sport=${sport}&lat=${lat}&long=${long}&range=${range}&gamedates=${gamedates}`,
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

export function deletePlayerFromMatch(data: RemovePlayerFromMatch) {
  const res = api.delete('/matches/delete-player', { data });
  return res;
}

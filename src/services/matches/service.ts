import {
  Match,
  CreateMatchDTO,
  JoinMatchDTO,
  UploadResultsDTO,
  AvailableMatch,
} from './interface';
import { api } from '../api/service';

export function getMyMatches() {
  const res = api.get<Match[]>('/matches/my');
  return res;
}

export function getAvailableMatches() {
  const res = api.get<Match[]>('/matches/available');
  return res;
}

export function getOneAvailableMatch(id: number) {
  const res = api.get<AvailableMatch>(`/matches/${id}`);
  return res;
}

export function createMatch(data: CreateMatchDTO) {
  const res = api.post('/matches', {
    slotId: data.slotId,
    gameDate: data.selectedDate,
    ratingFrom: data.ratingFrom,
    ratingTo: data.reatingTo,
    playTime: data.playTime,
    type: 'COMPETITIVE',
    sport: data.sport,
  });
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

import {
  AvailableMatch,
  CreateMatchDTO,
  JoinMatchDTO,
  Match,
} from './interface';
import { api } from '../api/service';

export function getMyMatches() {
  const res = api.get<Match>('/matches/my');
  return res;
}

export function getAvailableMatches() {
  const res = api.get<AvailableMatch[]>('/matches/available');
  return res;
}

export function getOneAvailableMatche(id: number) {
  const res = api.get<AvailableMatch>(`/matches/available/${id}`);
  return res;
}

export function createMatch(data: CreateMatchDTO) {
  const res = api.post('/matches', {
    slotId: data.slotId,
    gameDate: data.selectedDate,
  });
  return res;
}

export function joinMatch(data: JoinMatchDTO) {
  const { matchId, sport, team } = data;
  const res = api.post('/matches/join-match', {
    matchId: matchId,
    sport: sport,
    team: team,
  });

  return res;
}

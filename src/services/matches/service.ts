import { AvailableMatch, CreateMatchDTO, JoinMatchDTO } from './interface';
import { api } from '../api/service';

export function getMyMatches() {
  const res = api.get<AvailableMatch[]>('/matches/my');
  return res;
}

export function getAvailableMatches() {
  const res = api.get<AvailableMatch[]>('/matches');
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

import { Match } from './interface';
import { api } from '../api/service';

export function getMyMatches() {
  return api.get<Match>('/matches/my');
}

export function createMatche(data: any) {
  return api.post('/matches', data);
}

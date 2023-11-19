import { CreateMatchDTO, Match } from './interface';
import { api } from '../api/service';

export function getMyMatches() {
  return api.get<Match>('/matches/my');
}

export function createMatch(data: CreateMatchDTO) {
  return api.post('/matches', {
    slotId: data.slotId,
    gameDate: data.selectedDate,
  });
}

import axios from 'axios';
import { Match } from './interface';

export function getMyMatches() {
  return axios.get<Match>('/matches/my');
}

export function createMatche(data: any) {
  return axios.post('/matches', data);
}

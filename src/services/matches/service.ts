import axios from 'axios';

export function getMyMatches() {
  return axios.get('/matches/my');
}

export function createMatche(data: any) {
  return axios.post('/matches', data);
}

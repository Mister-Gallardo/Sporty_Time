import axios from 'axios';

export function getClubs() {
  return axios.get('/clubs');
}

export function getClub(id: number) {
  return axios.get('/clubs/' + id);
}

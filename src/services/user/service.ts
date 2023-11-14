import axios from 'axios';

export function getMe() {
  return axios.get('/users/me');
}

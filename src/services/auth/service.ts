import axios from 'axios';

export function login() {
  return axios.post('/auth/login');
}

export function registration() {
  return axios.post('/register');
}

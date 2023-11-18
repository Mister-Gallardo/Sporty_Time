import axios from 'axios';
import { User } from './interface';

export function getMe() {
  return axios.get<User>('/users/me');
}

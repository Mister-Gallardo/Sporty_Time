import axios from 'axios';
import { isAuthorized } from '../auth/service';
import { history } from '../history/service';
// import { isPlatform } from '@ionic/react';

export const api = axios.create({
  // baseURL: isPlatform('mobile')
  //   ? 'https://sportytime.ru/api'
  //   : 'https://dev.sportytime.ru/api',
  baseURL: 'https://dev.sportytime.ru/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwtToken')?.slice(1, -1);
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorData =
      error?.response?.data?.message ||
      error?.response?.message ||
      error?.message;
    const errorMessage = Array.isArray(errorData)
      ? errorData.join('\n')
      : errorData;

    if ([401, 403, 405].includes(error?.response?.status)) {
      if (error?.response?.status === 401) {
        localStorage.removeItem('jwtToken');
      }
      if (!isAuthorized() && !window.location.href.includes('/auth')) {
        history.replace('/auth');
      }
    } else if (errorMessage) {
      console.log(errorMessage, {
        autoHideDuration: 3000,
      });
    }
    throw error;
  },
);

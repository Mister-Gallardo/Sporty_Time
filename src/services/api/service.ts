import axios from 'axios';
import { isAuthorized } from '../auth/service';
import { history } from '../history/service';
import { isMobile } from '../helper';

export const BASE_URL = isMobile() ? 'https://app.sportytime.ru/api' : '/api';

export const withHostname = (url: string) => {
  try {
    const urlObj = new URL(url, window.location as unknown as URL);
    if (urlObj.host === 'localhost') {
      urlObj.hostname = 'app.sportytime.ru';
      urlObj.protocol = 'https';
      urlObj.port = '';
    }
    return urlObj.toString();
  } catch (e) {
    return url;
  }
};

export const api = axios.create({
  baseURL: BASE_URL,
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

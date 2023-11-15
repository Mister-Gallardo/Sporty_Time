import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://playpadel.lakileki.com/api',

  // baseURL: '/api',
});

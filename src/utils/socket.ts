import io from 'socket.io-client';

const URL = 'https://dev.sportytime.ru';
export const socket = io(URL);

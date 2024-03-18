import io from 'socket.io-client';
import { withHostname } from '../services/api/service';

const URL = withHostname('/');
export const socket = io(URL);

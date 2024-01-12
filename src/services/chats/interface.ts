import { User } from '../user/interface';

export interface ChatSingleMessage {
  id: number;
  message: string;
  createdAt: string;
  updatedAt: string;
  userFrom: User;
}

export interface Chat {
  id: number;
  message: string;
  messagecreatedat: string;
  firstname: string;
  lastname: string;
  avatar: string;
  gamedate: string;
  title: string;
}

export interface SendingMsdData {
  id: number;
  message: string;
}

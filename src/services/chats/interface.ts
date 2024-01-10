import { MatchData } from '../matches/interface';
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
  lastMessage?: ChatSingleMessage;
}

export interface SingleChatData extends MatchData {
  messages: ChatSingleMessage[];
}

export interface SendingMsdData {
  id: number;
  message: string;
}

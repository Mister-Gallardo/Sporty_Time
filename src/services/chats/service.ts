import { api } from '../api/service';
import { Chat, ChatSingleMessage, SendingMsdData } from './interface';

export async function getChats() {
  const { data } = await api.get<Chat[]>(`/chats`);
  return data;
}

export async function getSingleChat(id: string) {
  const { data } = await api.get<ChatSingleMessage[]>(`/chats/${id}?offset=0`);
  return data;
}

export async function sendMessage({ id, message }: SendingMsdData) {
  const { data } = await api.post(`chats/${id}/send`, {
    message,
  });
  return data;
}

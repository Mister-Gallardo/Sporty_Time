import { Box, Container } from '@mui/material';
import React from 'react';
import { ChatItem } from './components/ChatItem';

const fake = [
  {
    id: 1,
    title: 'Padel + Klick 09:00',
    someDate: 'Thursday 21 December',
    lastMessage: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    lastEventDate: '20/12/23',
  },
  {
    id: 2,
    title: 'Jose Melo',
    someDate: '',
    lastMessage:
      'Libero quaerat obcaecati perferendis dolor ea repellat eius quos quas non harum corporis animi cumque enim in optio, facilis reiciendis totam mollitia.',
    lastEventDate: '18/12/23',
  },
  {
    id: 3,
    title: 'VI',
    someDate: '',
    lastMessage: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    lastEventDate: '20/12/23',
  },
  {
    id: 4,
    title: 'iPadel 19:00',
    someDate: '',
    lastMessage:
      'Libero quaerat obcaecati perferendis dolor ea repellat eius quos quas non harum corporis animi cumque enim in optio, facilis reiciendis totam mollitia.',
    lastEventDate: '18/12/23',
  },
  {
    id: 5,
    title: 'Padel + Klick 09:00',
    someDate: 'Thursday 7 December',
    lastMessage: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    lastEventDate: '17/12/23',
  },
  {
    id: 6,
    title: 'Jose Melo',
    someDate: '',
    lastMessage:
      'Libero quaerat obcaecati perferendis dolor ea repellat eius quos quas non harum corporis animi cumque enim in optio, facilis reiciendis totam mollitia.',
    lastEventDate: '18/12/23',
  },
];

export function ChatsPage() {
  return (
    <Container maxWidth="md">
      <Box my={2} display="flex" flexDirection="column" gap={2.5}>
        {fake.map((chat) => (
          <ChatItem key={chat.id} {...chat} />
        ))}
      </Box>
    </Container>
  );
}

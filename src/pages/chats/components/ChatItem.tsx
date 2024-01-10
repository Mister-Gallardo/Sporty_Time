import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { useHistory } from 'react-router';
import { Chat } from '../../../services/chats/interface';
import { isToday } from 'date-fns';

interface IChatItemProps extends Chat {
  chatId: number;
}

export const ChatItem: React.FC<IChatItemProps> = ({ lastMessage, chatId }) => {
  const history = useHistory();

  const lastMsg = lastMessage?.createdAt;

  const lastMsgDate =
    lastMsg &&
    (isToday(new Date(lastMsg))
      ? 'Сегодня'
      : new Date(lastMsg).toLocaleDateString());

  return (
    <Box
      onClick={() => history.push(`/chats/${chatId}`)}
      display="flex"
      alignItems="center"
      gap={1.5}
      sx={{ cursor: 'pointer' }}
    >
      <Avatar sx={{ width: 40, height: 40 }} />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-end"
        flexGrow={1}
        borderBottom="1px solid #eee"
      >
        <Box height={50}>
          <Typography lineHeight={1.2} fontSize={13} fontWeight={700}>
            Chat Title
          </Typography>
          <Typography lineHeight={1.2} fontSize={12} color="gray">
            match date
          </Typography>
          <Typography fontSize={12} color="gray" maxWidth={220} noWrap>
            {lastMessage?.message}
          </Typography>
        </Box>
        <Typography fontSize={13}>{lastMsgDate}</Typography>
      </Box>
    </Box>
  );
};

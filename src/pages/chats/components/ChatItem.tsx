import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';

interface IChatItemProps {
  id: number;
  title: string;
  someDate: string;
  lastMessage: string;
  lastEventDate: string;
}

export const ChatItem: React.FC<IChatItemProps> = ({
  title,
  someDate,
  lastMessage,
  lastEventDate,
}) => {
  const history = useHistory();

  return (
    <Box
      onClick={() => history.push(`/chats/${1}`)}
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
            {title}
          </Typography>
          <Typography lineHeight={1.2} fontSize={12} color="gray">
            {someDate}
          </Typography>
          <Typography fontSize={12} color="gray" maxWidth={220} noWrap>
            {lastMessage}
          </Typography>
        </Box>
        <Typography fontSize={13}>{lastEventDate}</Typography>
      </Box>
    </Box>
  );
};

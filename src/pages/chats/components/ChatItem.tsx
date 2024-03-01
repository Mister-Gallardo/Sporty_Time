import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { Chat } from '../../../services/chats/interface';
import { isToday } from 'date-fns';
import { useSearchParam } from '../../../hooks/useSearchParams';

interface IChatItemProps extends Chat {}

export const ChatItem: React.FC<IChatItemProps> = ({
  id,
  message,
  messagecreatedat,
  gamedate,
  title,
}) => {
  const [chatIdDesktop] = useSearchParam('chat', '');
  const isActive = id === +chatIdDesktop;

  const lastMsgDate = !messagecreatedat
    ? ''
    : isToday(new Date(messagecreatedat))
    ? 'Сегодня'
    : new Date(messagecreatedat).toLocaleDateString();

  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1.5}
      sx={{ cursor: 'pointer' }}
    >
      <Avatar
        sx={{
          width: 40,
          height: 40,
          backgroundColor: isActive ? 'primary.main' : 'none',
        }}
      />
      <Box borderBottom="1px solid #eee" height={50} flexGrow={1}>
        <Typography
          lineHeight={1.2}
          fontSize={13}
          fontWeight={700}
          maxWidth={200}
          noWrap
          color={isActive ? 'primary.main' : 'none'}
        >
          {title}
        </Typography>

        <Box
          display="flex"
          alignItems="flex-end"
          justifyContent="space-between"
        >
          <Box>
            <Typography lineHeight={1.2} fontSize={12} color="gray">
              {new Date(gamedate).toLocaleDateString('ru')}
            </Typography>
            <Typography fontSize={12} color="gray" maxWidth={160} noWrap>
              {message}
            </Typography>
          </Box>
          <Typography fontSize={11}>{lastMsgDate}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { Chat } from '../../../services/chats/interface';
import { isToday } from 'date-fns';
import { useParams } from 'react-router';

interface IChatItemProps extends Chat {}

export const ChatItem: React.FC<IChatItemProps> = ({
  id,
  message,
  messagecreatedat,
  gamedate,
  title,
}) => {
  const { chatId } = useParams<{ chatId: string }>();
  const isActive = id === +chatId;

  const lastMsgDate = !messagecreatedat
    ? ''
    : isToday(new Date(messagecreatedat))
    ? 'Сегодня'
    : new Date(messagecreatedat).toLocaleDateString();

  return (
    <Box
      display="flex"
      gap={1.5}
      bgcolor={isActive ? '#eee' : ''}
      py={0.5}
      px={2}
      sx={{ cursor: 'pointer' }}
    >
      <Avatar
        sx={{
          width: 40,
          height: 40,
          backgroundColor: isActive ? 'primary.main' : 'none',
        }}
      />
      <Box
        borderBottom="1px solid #eee"
        height={60}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        flexGrow={1}
      >
        <Box>
          <Typography
            lineHeight={1.1}
            fontSize={13}
            fontWeight={600}
            color={isActive ? 'primary.main' : 'none'}
          >
            {title}
          </Typography>
          <Typography lineHeight={1.2} fontSize={12} color="gray">
            {new Date(gamedate).toLocaleDateString('ru')}
          </Typography>
        </Box>

        <Box
          display="flex"
          alignItems="flex-end"
          justifyContent="space-between"
        >
          <Typography fontSize={12} color="gray" maxWidth={160} noWrap>
            {message}
          </Typography>
          <Typography fontSize={11}>{lastMsgDate}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

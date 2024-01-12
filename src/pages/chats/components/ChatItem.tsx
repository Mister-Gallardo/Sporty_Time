import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { useHistory } from 'react-router';
import { Chat } from '../../../services/chats/interface';
import { isToday } from 'date-fns';
import { isPlatform } from '@ionic/react';

interface IChatItemProps extends Chat {}

export const ChatItem: React.FC<IChatItemProps> = ({
  id,
  message,
  messagecreatedat,
  gamedate,
  title,
}) => {
  const isMobile = isPlatform('mobile');
  const history = useHistory();

  const lastMsgDate = isToday(new Date(messagecreatedat))
    ? 'Сегодня'
    : new Date(messagecreatedat).toLocaleDateString();

  return (
    <Box
      onClick={() => history.push(`/chats/${id}`)}
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
          <Typography
            lineHeight={1.2}
            fontSize={13}
            fontWeight={700}
            maxWidth={isMobile ? 220 : 500}
            noWrap
          >
            {title}
          </Typography>
          <Typography lineHeight={1.2} fontSize={12} color="gray">
            {new Date(gamedate).toLocaleDateString()}
          </Typography>
          <Typography
            fontSize={12}
            color="gray"
            maxWidth={isMobile ? 220 : 500}
            noWrap
          >
            {message}
          </Typography>
        </Box>
        <Typography fontSize={11}>{lastMsgDate}</Typography>
      </Box>
    </Box>
  );
};

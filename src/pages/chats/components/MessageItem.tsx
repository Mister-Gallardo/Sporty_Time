import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { useUserInfo } from '../../../services/api/hooks';
import { ChatSingleMessage } from '../../../services/chats/interface';
import { withHostname } from '../../../services/api/service';

const intToRGB = (uid: number) => {
  const valueAsPercentageOfMax = uid / 10;

  // to avoid white color
  const maxRGBint = 16600000;
  const valueFromMaxRgbInt = Math.floor(maxRGBint * valueAsPercentageOfMax);

  const blue = Math.floor(valueFromMaxRgbInt % 256);
  const green = Math.floor((valueFromMaxRgbInt / 256) % 256);
  const red = Math.floor((valueFromMaxRgbInt / 256 / 256) % 256);

  return 'rgba(' + red + ',' + green + ',' + blue + ',' + 0.8 + ')';
};

interface IMessageItemProps extends ChatSingleMessage {
  nextMsgFromSameUser: boolean | null;
}

export const MessageItem: React.FC<IMessageItemProps> = ({
  userFrom,
  createdAt,
  message,
  nextMsgFromSameUser,
}) => {
  const [user] = useUserInfo();
  const isMyUser = userFrom?.id === user?.id;
  const avatar = userFrom?.avatar
    ? withHostname(userFrom?.avatar?.formats?.small || '')
    : '';

  const msgSentTime = new Date(createdAt).toLocaleTimeString('ru').slice(0, 5);

  return (
    <Box
      display="flex"
      alignItems="end"
      gap={1.5}
      maxWidth="85%"
      alignSelf={isMyUser ? 'flex-end' : 'flex-start'}
    >
      {!isMyUser && (
        <Box minWidth={40} minHeight={40}>
          {!nextMsgFromSameUser && (
            <Avatar src={avatar} sx={{ width: 40, height: 40, zIndex: 1 }} />
          )}
        </Box>
      )}

      <Box
        position="relative"
        maxWidth="100%"
        bgcolor={isMyUser ? '#d6dfff' : '#f9f9f9'}
        px={1}
        className={
          nextMsgFromSameUser
            ? ''
            : `tail ${isMyUser ? 'tail__right' : 'tail__left'}`
        }
      >
        {!isMyUser && (
          <Typography color={intToRGB(userFrom?.id)}>
            {userFrom?.firstname} {userFrom?.lastname}
          </Typography>
        )}
        <Typography fontSize={14} maxWidth="100%">
          {message}
        </Typography>
        <Typography textAlign="end" fontSize={10} color="gray">
          {msgSentTime}
        </Typography>
      </Box>
    </Box>
  );
};

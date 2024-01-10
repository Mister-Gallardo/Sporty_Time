import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import { useUserInfo } from '../../../services/api/hooks';
import { ChatSingleMessage } from '../../../services/chats/interface';

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
  prevMsgFromSameUser: boolean | null;
  nextMsgFromSameUser: boolean | null;
}

export const MessageItem: React.FC<IMessageItemProps> = ({
  userFrom,
  createdAt,
  message,
  prevMsgFromSameUser,
  nextMsgFromSameUser,
}) => {
  const [user] = useUserInfo();
  const currentUserId = user?.id;

  const msgSentTime = new Date(createdAt).toLocaleTimeString().slice(0, 5);

  return (
    <>
      {userFrom.id === currentUserId ? (
        <Box
          m={
            nextMsgFromSameUser
              ? '4px 0 0'
              : prevMsgFromSameUser
              ? '4px 0 4px'
              : '10px 0'
          }
          alignSelf="flex-end"
          width="auto"
          maxWidth="95%"
          sx={{
            float: 'left',
            background: '#d6dfff',
            padding: '6px 10px',
            borderRadius: 2,
            position: 'relative',
            lineHeight: '24px',

            '&::after, &::before': nextMsgFromSameUser
              ? {}
              : {
                  content: '""',
                  position: 'absolute',
                  left: ' 100%',
                  bottom: 1,
                  width: '28.8px',
                  height: '28.8px',
                  border: '8px solid #fff',
                  borderRadius: ' 50%',
                  background: '#fff',
                },
            '&::before': nextMsgFromSameUser
              ? {}
              : {
                  borderTop: 'none',
                  height: '14.4px',
                  borderRadius: '0 0 50% 50% / 0 0 100% 100%',
                  background: '#d6dfff',
                  borderColor: '#d6dfff',
                  marginLeft: '-9px',
                },
          }}
        >
          <Typography fontSize={13}>{message}</Typography>
          <Typography textAlign="end" fontSize={11} color="#575757">
            {msgSentTime}
          </Typography>
        </Box>
      ) : (
        <Box
          m={
            nextMsgFromSameUser
              ? '4px 0 0'
              : prevMsgFromSameUser
              ? '4px 0 4px'
              : '10px 0'
          }
          width="auto"
          maxWidth="95%"
          display="flex"
          alignItems="flex-end"
          gap={1}
        >
          <Box minWidth={40} minHeight={40}>
            <>
              {nextMsgFromSameUser || (
                <Avatar src="" sx={{ width: 40, height: 40, zIndex: 1 }} />
              )}
            </>
          </Box>
          <Box
            sx={{
              float: 'left',
              background: '#f2f2f2',
              padding: '6px 10px',
              borderRadius: 2,
              position: 'relative',
              lineHeight: '24px',

              '&::after, &::before': nextMsgFromSameUser
                ? {}
                : {
                    content: '""',
                    position: 'absolute',
                    left: '-29px',
                    bottom: 1,
                    width: '28.8px',
                    height: '28.8px',
                    border: '8px solid #fff',
                    borderRadius: ' 50%',
                    background: '#fff',
                  },

              '&::before': nextMsgFromSameUser
                ? {}
                : {
                    borderTop: 'none',
                    height: '14.4px',
                    borderRadius: '0 0 50% 50% / 0 0 100% 100%',
                    background: '#f2f2f2',
                    borderColor: '#f2f2f2',
                    marginLeft: '9px',
                  },
            }}
          >
            <>
              {prevMsgFromSameUser || (
                <Typography
                  mb={1}
                  fontWeight={600}
                  color={intToRGB(userFrom.id)}
                >
                  {userFrom.firstname}
                </Typography>
              )}
            </>
            <Typography fontSize={13}>{message}</Typography>
            <Typography textAlign="end" fontSize={11} color="#ddd">
              {msgSentTime}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

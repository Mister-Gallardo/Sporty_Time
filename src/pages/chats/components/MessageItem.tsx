import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';

const senderId = 1;

interface IMessageItemProps {
  id: number;
  sentTime: string;
  userName: string;
  msgText: string;
  userId: number;
  avatar: string;
  prevMsgFromSameUser: boolean | null;
  nextMsgFromSameUser: boolean | null;
}

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

export const MessageItem: React.FC<IMessageItemProps> = ({
  sentTime,
  userName,
  msgText,
  userId,
  avatar,
  prevMsgFromSameUser,
  nextMsgFromSameUser,
}) => {
  return (
    <>
      {userId === senderId ? (
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
          <Typography fontSize={13}>{msgText}</Typography>
          <Typography textAlign="end" fontSize={11}>
            {sentTime}
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
                <Avatar
                  src={avatar}
                  sx={{ width: 40, height: 40, zIndex: 1 }}
                />
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

              '&::after, &::before':
                prevMsgFromSameUser ||
                (!prevMsgFromSameUser && !nextMsgFromSameUser)
                  ? {
                      content: '""',
                      position: 'absolute',
                      left: '-29px',
                      bottom: 1,
                      width: '28.8px',
                      height: '28.8px',
                      border: '8px solid #fff',
                      borderRadius: ' 50%',
                      background: '#fff',
                    }
                  : {},
              '&::before':
                prevMsgFromSameUser ||
                (!prevMsgFromSameUser && !nextMsgFromSameUser)
                  ? {
                      borderTop: 'none',
                      height: '14.4px',
                      borderRadius: '0 0 50% 50% / 0 0 100% 100%',
                      background: '#f2f2f2',
                      borderColor: '#f2f2f2',
                      marginLeft: '9px',
                    }
                  : {},
            }}
          >
            <>
              {prevMsgFromSameUser || (
                <Typography mb={1} fontWeight={600} color={intToRGB(userId)}>
                  {userName}
                </Typography>
              )}
            </>
            <Typography fontSize={13}>{msgText}</Typography>
            <Typography textAlign="end" fontSize={11}>
              {sentTime}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

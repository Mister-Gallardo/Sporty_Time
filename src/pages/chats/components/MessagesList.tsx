import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { MessageItem } from './MessageItem';
import { useQuery } from '@tanstack/react-query';
import { getSingleChat } from '../../../services/chats/service';
import { isPlatform } from '@ionic/react';
import { useParams } from 'react-router';
import { socket } from '../../../utils/socket';

const isDesktop = isPlatform('desktop');
const isIphone = isPlatform('iphone');

export const MessagesList = () => {
  const { chatId } = useParams<{ chatId: string }>();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['chat', +chatId],
    queryFn: () => getSingleChat(+chatId),
    enabled: !!chatId,
  });

  const ref = useRef<HTMLDivElement>(null);

  // scroll bottom on new message
  useEffect(() => {
    if (data?.length) {
      ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }

    const updateChatData = (e: { action: string }) => {
      if (e.action === 'new-message') refetch();
    };

    const key = `matchId - ${chatId}`;
    socket.on(key, updateChatData);

    return () => {
      socket.off(key, updateChatData);
    };
  }, [data?.length]);

  return (
    <Stack
      p={2}
      height="100%"
      spacing={1}
      bgcolor="#fff"
      overflow={isDesktop ? 'hidden' : 'unset'}
      sx={{
        overflowY: isDesktop ? 'scroll' : 'unset',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        msOverflowStyle: 'none',
      }}
    >
      <Box flexGrow={1} />
      {isLoading ? (
        <LoadingCircle />
      ) : data && data.length > 0 ? (
        data.map((message, i) => {
          const nextUserId =
            i === data.length - 1 ? null : data[i + 1].userFrom.id;
          return (
            <MessageItem
              key={message.id}
              {...message}
              nextMsgFromSameUser={nextUserId === message.userFrom.id}
            />
          );
        })
      ) : (
        <Typography textAlign="center" color="gray">
          Нет сообщений...
        </Typography>
      )}
      <Box ref={ref} height={isDesktop ? 'unset' : isIphone ? 85 : 50} />
    </Stack>
  );
};

import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { MessageItem } from './MessageItem';
import { useQuery } from '@tanstack/react-query';
import { getSingleChat } from '../../../services/chats/service';
import { useSearchParam } from '../../../hooks/useSearchParams';
import { isPlatform } from '@ionic/react';
import { useParams } from 'react-router';

const isDesktop = isPlatform('desktop');

export const MessagesList = () => {
  const [chatIdDesktop] = useSearchParam('chat', '');
  const { chatId } = useParams<{ chatId: string }>();

  const currentChatId = isDesktop ? chatIdDesktop : chatId;

  const { data, isLoading } = useQuery({
    queryKey: ['chat', +currentChatId],
    queryFn: () => getSingleChat(+currentChatId),
    refetchInterval: 5000,
    enabled: !!currentChatId,
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
      <div ref={ref} />
    </Stack>
  );
};

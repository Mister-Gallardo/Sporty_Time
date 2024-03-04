import { isPlatform } from '@ionic/react';
import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { SearchChatField } from './SearchChatField';
import { ChatItem } from './ChatItem';
import { useSearchParam } from '../../../hooks/useSearchParams';
import { useQuery } from '@tanstack/react-query';
import { getChats } from '../../../services/chats/service';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { Link } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { Chat } from '../../../services/chats/interface';

const isMobile = isPlatform('mobile');

export const ChatsList = () => {
  const [, setChat] = useSearchParam('chat', '');

  const { data, isLoading } = useQuery({
    queryKey: ['chat'],
    queryFn: getChats,
  });

  const [chatsList, setChatsList] = useState<Chat[]>([]);
  useEffect(() => {
    if (data) setChatsList(data);
  }, [data]);

  const searchForm = useForm({ defaultValues: { searchTerm: '' } });
  const { watch } = searchForm;
  const { searchTerm } = watch();

  useEffect(() => {
    if (!chatsList || !data) return;
    if (!searchTerm.trim() || !searchTerm) return setChatsList(data);

    const filteredChats = data.filter((chat) =>
      chat.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setChatsList(filteredChats);
  }, [searchTerm]);

  return (
    <Box
      width={isMobile ? 'unset' : '30%'}
      borderRight={isMobile ? 'none' : '1px solid #eee'}
    >
      <FormProvider {...searchForm}>
        <SearchChatField />
      </FormProvider>
      {isLoading ? (
        <LoadingCircle />
      ) : (
        <Stack
          spacing={2.5}
          height="100%"
          maxHeight={isMobile ? 'unset' : '70vh'}
          overflow={isMobile ? 'unset' : 'auto'}
          px={2}
          py={1}
        >
          {chatsList && chatsList.length > 0 ? (
            chatsList.map((chat) => {
              return (
                <React.Fragment key={chat.id}>
                  {isMobile ? (
                    <Link to={`/chats/${chat.id}`}>
                      <ChatItem {...chat} />
                    </Link>
                  ) : (
                    <Box onClick={() => setChat(`${chat.id}`)}>
                      <ChatItem {...chat} />
                    </Box>
                  )}
                </React.Fragment>
              );
            })
          ) : (
            <Typography textAlign="center" color="gray">
              Нет чатов...
            </Typography>
          )}
        </Stack>
      )}
    </Box>
  );
};

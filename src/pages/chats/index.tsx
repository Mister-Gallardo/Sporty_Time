import { Box, Container } from '@mui/material';
import { ChatItem } from './components/ChatItem';
import { useQuery } from '@tanstack/react-query';
import { getChats } from '../../services/chats/service';
import { IonLoading } from '@ionic/react';
import { NotFoundPage } from '../../components/NotFoundPage';

export function ChatsPage() {
  const { data, isLoading } = useQuery({
    queryKey: ['chat'],
    queryFn: getChats,
  });

  if (isLoading) return <IonLoading isOpen />;
  if (!data) return <NotFoundPage />;

  return (
    <Container maxWidth="md">
      <Box my={2} display="flex" flexDirection="column" gap={2.5}>
        {data.length > 0 &&
          data.map((chat) => <ChatItem key={chat.id} {...chat} />)}
      </Box>
    </Container>
  );
}

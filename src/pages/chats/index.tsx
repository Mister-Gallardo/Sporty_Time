import { Box, Stack, Typography } from '@mui/material';
import { MessageTextField } from './components/MessageTextField';
import { ChatsList } from './components/ChatsList';
import { MessagesList } from './components/MessagesList';
import { ChatHeader } from './components/ChatHeader';
import emptyImg from '../../images/no-results.svg';
import { useParams } from 'react-router';

export function ChatsPage() {
  const { chatId } = useParams<{ chatId: string }>();

  return (
    <Box width="100%" maxWidth={1240} m="0 auto" px={2}>
      <Box
        mt={4}
        display="flex"
        height="78vh"
        boxShadow="1px 1px 8px #00000017"
      >
        <ChatsList />
        <Stack width="70%">
          {chatId ? (
            <>
              <ChatHeader />
              <MessagesList />
              <MessageTextField />
            </>
          ) : (
            <Stack alignItems="center" height="100%" justifyContent="center">
              <Box component="img" src={emptyImg} width="40%" />
              <Typography textAlign="center" color="gray" fontSize={16}>
                Выберите чат...
              </Typography>
            </Stack>
          )}
        </Stack>
      </Box>
    </Box>
  );
}

export default ChatsPage;

import { Box, Stack, Typography } from '@mui/material';
import { MessageTextField } from './components/MessageTextField';
import { ChatsList } from './components/ChatsList';
import { MessagesList } from './components/MessagesList';
import { MatchDataHeader } from './components/MatchDataHeader';
import emptyImg from '../../images/no-results.svg';
import { useParams } from 'react-router';

export function ChatsPage() {
  const { chatId } = useParams<{ chatId: string }>();

  return (
    <Box
      display="flex"
      maxWidth={1240}
      height="78vh"
      m="auto"
      mt={4}
      boxShadow="1px 1px 14px #00000017"
    >
      <ChatsList />
      <Stack width="70%">
        {chatId ? (
          <>
            <MatchDataHeader />
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
  );
}

export default ChatsPage;

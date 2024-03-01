import { Box, Stack } from '@mui/material';
import { useSearchParam } from '../../hooks/useSearchParams';
import { MessageTextField } from './components/MessageTextField';
import { ChatsList } from './components/ChatsList';
import { MessagesList } from './components/MessagesList';
import { MatchDataHeader } from './components/MatchDataHeader';

export function ChatsPage() {
  const [chatId] = useSearchParam('chat', '');

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
        <MatchDataHeader />
        <MessagesList />
        <MessageTextField chatId={chatId} />
      </Stack>
    </Box>
  );
}

export default ChatsPage;

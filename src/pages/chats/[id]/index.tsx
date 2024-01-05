import { Box, Container, IconButton, TextField } from '@mui/material';
import { MessageItem } from '../components/MessageItem';
import { isPlatform } from '@ionic/react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import SendSharpIcon from '@mui/icons-material/SendSharp';
const recId = 1;
const senderId = 2;

const fakeMsg = [
  {
    id: 1,
    sentTime: '09:54',
    userName: 'Some Name',
    msgText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    userId: recId,
    avatar: '',
  },
  {
    id: 2,
    sentTime: '09:55',
    userName: 'Some Name 2',
    msgText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    userId: senderId,
    avatar: '',
  },
  {
    id: 3,
    sentTime: '09:57',
    userName: 'Some Name',
    msgText:
      'Culpa perferendis sapiente, itaque ab veritatis doloribus voluptatibus aperiam!',
    userId: recId,
    avatar: '',
  },
  {
    id: 4,
    sentTime: '09:58',
    userName: 'Some Name 2',
    msgText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    userId: senderId,
    avatar: '',
  },
  {
    id: 5,
    sentTime: '09:58',
    userName: 'Some Name',
    msgText:
      'Placeat vero iure quidem ratione repellat veritatis qui, cum magnam.',
    userId: recId,
    avatar: '',
  },
  {
    id: 6,
    sentTime: '09:59',
    userName: 'Some Name 3',
    msgText:
      'Ullam esse ut porro itaque eius eum! Rem quas sunt iste. Obcaecati rem eos itaque quas corrupti aperiam adipisci dolorem praesentium.',
    userId: 98,
    avatar: '',
  },
  {
    id: 7,
    sentTime: '10:02',
    userName: 'Some Name 2',
    msgText:
      'Iste quaerat nobis, eligendi earum fuga similique illo possimus corporis repudiandae quos ad enim quae id harum!',
    userId: senderId,
    avatar: '',
  },
  {
    id: 71,
    sentTime: '10:02',
    userName: 'Some Name 2',
    msgText:
      'Illo possimus corporis repudiandae porro aperiam sit explicabo laudantium quos ad enim quae id harum!',
    userId: senderId,
    avatar: '',
  },
  {
    id: 8,
    sentTime: '10:12',
    userName: 'Some Name 4',
    msgText: 'Sit explicabo laudantium quos ad enim quae id harum!',
    userId: 88,
    avatar: '',
  },
  {
    id: 9,
    sentTime: '10:14',
    userName: 'Some Name',
    msgText: 'Sit ',
    userId: recId,
    avatar: '',
  },
  {
    id: 10,
    sentTime: '10:22',
    userName: 'Some Name',
    msgText: 'Sit explicabo!',
    userId: recId,
    avatar: '',
  },
  {
    id: 11,
    sentTime: '10:23',
    userName: 'Some Name',
    msgText: 'Sit explicabo harum!',
    userId: recId,
    avatar: '',
  },
];

const isMobile = isPlatform('mobile');
export function SingleChatPage() {
  const desktopMsgInput = () => (
    <Box
      borderTop="1px solid #eee"
      display="flex"
      alignItems="flex-end"
      py={2}
      px={3}
      bgcolor="#fdfdfd"
    >
      <IconButton>
        <AddRoundedIcon sx={{ color: '#000' }} />
      </IconButton>
      <TextField
        id="message-input"
        placeholder="Напишите сообщение..."
        multiline
        maxRows={4}
        InputProps={{ disableUnderline: true }}
        fullWidth
        sx={{ paddingX: 1, paddingY: 0.5 }}
      />
      <IconButton sx={{ borderRadius: '50%', backgroundColor: '#345fff' }}>
        <SendSharpIcon fontSize="small" sx={{ color: '#fff' }} />
      </IconButton>
    </Box>
  );
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        px={isMobile ? 'unset' : 3}
        pr={isMobile ? 1 : 5}
        pb={1}
        height="100%"
        maxHeight={isMobile ? 'unset' : 600}
        overflow={isMobile ? 'unset' : 'auto'}
      >
        {fakeMsg.map((message, i) => {
          const prevUserId = i === 0 ? null : fakeMsg[i - 1].userId;
          const nextUserId =
            i === fakeMsg.length - 1 ? null : fakeMsg[i + 1].userId;
          return (
            <MessageItem
              key={message.id}
              {...message}
              prevMsgFromSameUser={prevUserId === message.userId}
              nextMsgFromSameUser={nextUserId === message.userId}
            />
          );
        })}
      </Box>
      <Box>{isMobile ? null : desktopMsgInput()}</Box>
    </Container>
  );
}

import {
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { MessageItem } from '../components/MessageItem';
import { IonLoading, isPlatform, useIonToast } from '@ionic/react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useHistory, useParams } from 'react-router';
import { getSingleChat, sendMessage } from '../../../services/chats/service';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { EType, getDayFormat } from '../../../helpers/getTimeDateString';
import { NotFoundPage } from '../../../components/NotFoundPage';

const isMobile = isPlatform('mobile');
export function SingleChatPage() {
  const history = useHistory();

  const { chatId } = useParams<{ chatId: string }>();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      message: '',
    },
  });

  const { data, isLoading } = useQuery({
    queryKey: ['chat', +chatId],
    queryFn: () => getSingleChat(+chatId),
    refetchInterval: 5000,
  });
  const messages = data?.messages;

  const [showToast] = useIonToast();

  const sendMsgMutation = useMutation({
    mutationFn: sendMessage,
    onError() {
      showToast({
        color: 'danger',
        message: 'Ошибка! Сообщение не отправлено, попробуйте ещё раз',
        mode: 'ios',
        position: 'top',
        duration: 2000,
      });
    },
  });

  const onSendMessage: SubmitHandler<any> = ({ message }) => {
    sendMsgMutation.mutate({ id: +chatId, message });
    reset();
  };

  if (isLoading) return <IonLoading isOpen />;
  if (!data) return <NotFoundPage />;

  return (
    <Container maxWidth="md">
      <Box
        position="fixed"
        zIndex={2}
        top={isMobile ? 'unset' : 90}
        right={0}
        left={0}
        maxWidth="md"
        m="auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        borderBottom="1px solid #eee"
        bgcolor="#fff"
        px={2}
        py={1}
      >
        <Box>
          <Typography>Title</Typography>
          <Typography color="gray">
            {getDayFormat(data.gameDate, EType.MONTH_AND_DAY)}
          </Typography>
        </Box>
        <Button
          onClick={() => history.push(`/matches/${chatId}`)}
          sx={{ fontWeight: 600, fontSize: 14 }}
        >
          Детали
        </Button>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        px={isMobile ? 'unset' : 3}
        pr={isMobile ? 1 : 5}
        py={isMobile ? 8 : 5}
        height="100%"
        maxHeight={isMobile ? 'unset' : 600}
        overflow={isMobile ? 'unset' : 'auto'}
      >
        {isLoading ? (
          <LoadingCircle />
        ) : (
          messages &&
          messages.length > 0 &&
          messages.map((message, i) => {
            const prevUserId = i === 0 ? null : messages[i - 1].userFrom.id;
            const nextUserId =
              i === messages.length - 1 ? null : messages[i + 1].userFrom.id;
            return (
              <MessageItem
                key={message.id}
                {...message}
                prevMsgFromSameUser={prevUserId === message.userFrom.id}
                nextMsgFromSameUser={nextUserId === message.userFrom.id}
              />
            );
          })
        )}
      </Box>

      <Box
        position="fixed"
        zIndex={1}
        bottom={0}
        right={0}
        left={0}
        maxWidth="md"
        m="auto"
        borderTop="1px solid #eee"
        display="flex"
        alignItems="center"
        bgcolor="#fff"
      >
        <form
          onSubmit={handleSubmit(onSendMessage)}
          style={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
            paddingInline: 10,
            paddingBlock: isMobile ? 6 : 20,
          }}
        >
          <IconButton disabled>
            <AddRoundedIcon />
          </IconButton>
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Напишите сообщение..."
                autoComplete="off"
                // multiline
                // maxRows={4}
                InputProps={{ disableUnderline: true }}
                fullWidth
                sx={{ paddingX: 1 }}
              />
            )}
          />
          <IconButton
            type="submit"
            sx={{
              borderRadius: '50%',
              backgroundColor: '#345fff',
              '&:hover': {
                backgroundColor: '#345fffdb',
              },
            }}
          >
            <SendSharpIcon fontSize="small" sx={{ color: '#fff' }} />
          </IconButton>
        </form>
      </Box>
    </Container>
  );
}

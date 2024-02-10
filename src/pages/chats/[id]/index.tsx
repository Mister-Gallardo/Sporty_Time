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
import SendSharpIcon from '@mui/icons-material/SendSharp';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useHistory, useParams } from 'react-router';
import { getSingleChat, sendMessage } from '../../../services/chats/service';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { NotFoundPage } from '../../../components/NotFoundPage';
import { getOneAvailableMatch } from '../../../services/matches/service';
import { EType, getDayFormat } from '../../../helpers/getTimeDateString';
import { v4 as uuid } from 'uuid';
import { useUserInfo } from '../../../services/api/hooks';

const isMobile = isPlatform('mobile');

export function SingleChatPage() {
  const history = useHistory();

  const { chatId } = useParams<{ chatId: string }>();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      message: '',
    },
  });

  const { data: matchData, isLoading: isMatchLoading } = useQuery({
    queryKey: [`match`, +chatId],
    queryFn: () => getOneAvailableMatch(+chatId),
  });
  const match = matchData?.data;

  const { data, isLoading } = useQuery({
    queryKey: ['chat', +chatId],
    queryFn: () => getSingleChat(+chatId),
    refetchInterval: 5000,
  });

  const [showToast] = useIonToast();

  const [user] = useUserInfo();

  const qc = useQueryClient();

  const sendMsgMutation = useMutation({
    mutationFn: sendMessage,
    onError() {
      showToast({
        color: 'danger',
        message: 'Ошибка! Сообщение не отправлено, попробуйте ещё раз',
        mode: 'ios',
        position: 'bottom',
        duration: 2000,
      });
    },
    onMutate(data) {
      const message = {
        id: uuid(),
        message: data.message,
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
        userFrom: {
          firstname: user?.firstname,
          lastname: user?.lastname,
          id: user?.id,
        },
      };
      qc.setQueryData(['chat', +chatId], (prev: any = {}) => [
        ...prev,
        message,
      ]);
    },
  });

  const onSendMessage: SubmitHandler<any> = ({ message }) => {
    if (!message.trim()) return;
    sendMsgMutation.mutate({ id: +chatId, message });
    reset();
  };

  if (isLoading) return <IonLoading isOpen />;
  if (!data) return <NotFoundPage />;
  if (!match) return <NotFoundPage />;

  const matchStartsAt = new Date(match.booking.startsAt);

  return (
    <Container maxWidth="md">
      <Box
        position="fixed"
        zIndex={2}
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
          {isMatchLoading ? (
            <LoadingCircle />
          ) : (
            <Typography>{`${match?.booking?.court?.club?.title} ${matchStartsAt
              .toLocaleTimeString('ru')
              .slice(0, 5)}, ${match?.booking?.court?.title}`}</Typography>
          )}
          <Typography color="gray">
            {match && getDayFormat(matchStartsAt, EType.MONTH_AND_DAY)}
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
        alignSelf="end"
        display="flex"
        flexDirection="column"
        p={isMobile ? '4rem 0.5rem 4rem 0' : '4rem 0.5rem 0'}
        height="100%"
        maxHeight={isMobile ? 'unset' : '80vh'}
        overflow={isMobile ? 'unset' : 'hidden'}
        sx={{ overflowY: isMobile ? 'unset' : 'scroll' }}
        // ref={chatRef}
      >
        {isLoading ? (
          <LoadingCircle />
        ) : (
          data &&
          data.length > 0 &&
          data.map((message, i) => {
            const prevUserId = i === 0 ? null : data[i - 1].userFrom.id;
            const nextUserId =
              i === data.length - 1 ? null : data[i + 1].userFrom.id;
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
          {/* <IconButton disabled>
            <AddRoundedIcon />
          </IconButton> */}
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

export default SingleChatPage;

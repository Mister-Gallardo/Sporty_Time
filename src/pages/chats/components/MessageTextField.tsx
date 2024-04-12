import { Box, IconButton, TextField } from '@mui/material';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import { isPlatform, useIonToast } from '@ionic/react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { sendMessage } from '../../../services/chats/service';
import { v4 as uuid } from 'uuid';
import { useUserInfo } from '../../../services/api/hooks';
import { useParams } from 'react-router';

const isDesktop = isPlatform('desktop');

export const MessageTextField = () => {
  const { chatId } = useParams<{ chatId: string }>();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      message: '',
    },
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
        createdAt: new Date(),
        updatedAt: new Date(),
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

  return (
    <Box
      display="flex"
      alignItems="center"
      flexGrow={1}
      position="relative"
      px={1}
      borderTop="1px solid #eee"
      pb={isDesktop ? 'unset' : 'env(safe-area-inset-bottom)'}
    >
      <form
        onSubmit={handleSubmit(onSendMessage)}
        style={{
          display: 'flex',
          alignItems: 'center',
          flexGrow: 1,
          paddingBlock: 6,
        }}
      >
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder="Напишите сообщение..."
              autoComplete="off"
              InputProps={{
                disableUnderline: true,
                sx: { '& > .MuiInputBase-input': { color: '#000 !important' } },
              }}
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
  );
};

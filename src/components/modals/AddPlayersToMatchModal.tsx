import React, { useCallback, useState } from 'react';
import { ModalContainer } from './ModalContainer';
import {
  Avatar,
  Box,
  CircularProgress,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { isPlatform, useIonToast } from '@ionic/react';
import { debounce } from 'lodash-es';
import { getUsersList } from '../../services/user/service';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { withHostname } from '../../services/api/service';
import { addPlayerToMatch } from '../../services/matches/service';
import { useParams } from 'react-router';
import { useFormContext } from 'react-hook-form';

interface IAddPlayersToMatchModalProps {
  openState: boolean;
  handleModal: (val?: boolean) => void;
  handleEditPlayersModal: (val?: boolean) => void;
}

const isMobile = isPlatform('mobile');

export const AddPlayersToMatchModal: React.FC<IAddPlayersToMatchModalProps> = ({
  openState,
  handleModal,
  handleEditPlayersModal,
}) => {
  const { matchId } = useParams<{ matchId: string }>();
  const { watch } = useFormContext();

  const [currentSearchTerm, setCurrentSearchTerm] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const delayedQuery = useCallback(
    debounce((query) => setSearchTerm(query), 300),
    [],
  );

  const { data, isLoading } = useQuery({
    queryKey: [searchTerm],
    queryFn: () => getUsersList(searchTerm),
    enabled: searchTerm !== '',
  });
  const usersList = data?.data;

  const [showToast] = useIonToast();
  const qc = useQueryClient();

  const addPlayerToMatchMutation = useMutation({
    mutationFn: addPlayerToMatch,
    onSuccess() {
      showToast({
        color: 'success',
        message: 'Игрок успешно добавлен в матч',
        mode: 'ios',
        position: 'bottom',
        duration: 2000,
      });

      qc.refetchQueries({ queryKey: ['my-matches', false] });
      qc.refetchQueries({ queryKey: [`match`, +matchId] });
    },
    onError(e: any) {
      showToast({
        color: 'danger',
        message: e?.response?.data?.message,
        mode: 'ios',
        position: 'bottom',
        duration: 2000,
      });
    },
    onSettled() {
      handleEditPlayersModal(false);
      handleModal(false);
    },
  });

  return (
    <ModalContainer
      openState={openState}
      handleModal={() => {
        handleEditPlayersModal();
        handleModal();
      }}
      headerTitle="Добавить игроков"
    >
      <Typography mt={2} mb={0.5} fontSize={isMobile ? 12 : 15}></Typography>
      <TextField
        value={currentSearchTerm}
        onChange={(e) => {
          const value = e.target.value;

          // to escape delay on typing
          setCurrentSearchTerm(value);

          delayedQuery(value);
        }}
        placeholder="Имя пользователя, его email или номер телефона"
        variant="outlined"
        autoComplete="off"
        fullWidth
        InputProps={{
          startAdornment: (
            <>
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            </>
          ),
          endAdornment: isLoading ? (
            <CircularProgress color="inherit" size={20} />
          ) : (
            <Box width={20} />
          ),
          sx: {
            mb: 2,
            '& > .MuiInputBase-input': {
              py: 1.3,
            },
          },
        }}
      />
      <Typography fontWeight={600} my={1}>
        Результаты поиска
      </Typography>
      <Stack spacing={1} height={350} overflow="auto" mb={2}>
        {usersList && usersList.length > 0 ? (
          usersList?.map((user) => {
            return (
              <Box
                key={user.id}
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <Avatar
                    src={withHostname(user?.avatar?.formats?.small || '')}
                  />
                  <Typography maxWidth={isMobile ? '60vw' : 400} noWrap>
                    {user.fullname}
                  </Typography>
                </Box>
                <IconButton
                  onClick={() =>
                    addPlayerToMatchMutation.mutate({
                      matchId: +matchId,
                      playerId: user?.player?.id,
                      team: watch('team'),
                    })
                  }
                >
                  {addPlayerToMatchMutation.isPending ? (
                    <CircularProgress size={20} sx={{ color: 'blue' }} />
                  ) : (
                    <AddIcon sx={{ color: 'blue' }} />
                  )}
                </IconButton>
              </Box>
            );
          })
        ) : (
          <Typography pt={3} textAlign="center" color="gray">
            Пусто...
          </Typography>
        )}
      </Stack>
    </ModalContainer>
  );
};

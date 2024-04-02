import React, { useCallback, useState } from 'react';
import { ModalContainer } from './ModalContainer';
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { isPlatform } from '@ionic/react';
import { Close } from '@mui/icons-material';
import { debounce } from 'lodash-es';
import { getUsersList } from '../../services/user/service';
import { useQuery } from '@tanstack/react-query';

const fakeUsers = [
  {
    id: 1,
    name: 'pipka',
    avatar: '',
  },
  {
    id: 2,
    name: 'pipka 2',
    avatar: '',
  },
  {
    id: 3,
    name: 'Name',
    avatar: '',
  },
  {
    id: 4,
    name: 'Test',
    avatar: '',
  },
  {
    id: 5,
    name: 'Some user name',
    avatar: '',
  },
  {
    id: 6,
    name: 'pipka',
    avatar: '',
  },
  {
    id: 7,
    name: 'pipka',
    avatar: '',
  },
  {
    id: 18,
    name: 'pipka',
    avatar: '',
  },
  {
    id: 19,
    name: 'pipka',
    avatar: '',
  },
  {
    id: 10,
    name: 'pipka',
    avatar: '',
  },
];

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
  const [newUser, setNewUser] = useState(null);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const delayedQuery = useCallback(
    debounce((query) => setSearchTerm(query), 300),
    [],
  );

  // get locations by search term
  const { data, isLoading } = useQuery({
    queryKey: [searchTerm],
    queryFn: () => getUsersList(searchTerm),
    enabled: searchTerm !== '',
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
      <Box display="flex" justifyContent="space-evenly" alignItems="flex-start">
        {/* <Stack alignItems="center">
          <Avatar
            src={user?.avatar?.formats?.small}
            sx={{ width: 50, height: 50 }}
          />
          <Typography>{user?.firstname}</Typography>
        </Stack> */}
        <Stack alignItems="center" position="relative">
          <IconButton
            onClick={() => {
              // setAddedUsers((prev) =>
              //   prev.filter((prevUser) => prevUser.id !== user.id),
              // );
            }}
            sx={{
              position: 'absolute',
              zIndex: 1,
              right: -5,
              top: -5,
              p: 0,
              bgcolor: 'blue',
              '&:hover': { bgcolor: 'primary.main' },
            }}
          >
            <Close fontSize="small" sx={{ color: '#fff' }} />
          </IconButton>
          {/* <Avatar
            src={withHostname(user.player?.user?.avatar?.formats?.small || '')}
            sx={{ width: 50, height: 50 }}
          />
          <Typography maxWidth={60} noWrap>
            {user.player?.user?.firstname}
          </Typography> */}
        </Stack>
        {/* {addedUsers?.map((user, i) => {
          return (
            <React.Fragment key={i}>
              {user?.id ? (
              ) : (
                <Button onClick={() => console.log(user)} sx={{ p: 0 }}>
                  <Box
                    width={50}
                    height={50}
                    border="1px dashed #c6dcf2"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Add fontSize="small" color="primary" />
                  </Box>
                </Button>
              )}
            </React.Fragment>
          );
        })} */}
      </Box>
      <Typography mt={2} mb={0.5} fontSize={isMobile ? 12 : 15}></Typography>
      <TextField
        placeholder="Имя пользователя, его email или номер телефона"
        variant="outlined"
        autoComplete="off"
        fullWidth
        InputProps={{
          startAdornment: (
            <>
              <InputAdornment position="start">
                {isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : (
                  <SearchIcon />
                )}
              </InputAdornment>
            </>
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
      <Stack spacing={1} maxHeight={350} overflow="auto" mb={2}>
        {fakeUsers.map((user) => {
          // const userExist = newUser?.id === user.id;
          const userExist = 1 === user.id;
          return (
            <Box
              key={user.id}
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center" gap={1}>
                <Avatar />
                <Typography maxWidth={isMobile ? '60vw' : 400} noWrap>
                  User {user.name}
                </Typography>
              </Box>
              <IconButton
                onClick={() => {
                  // if (userExist) {
                  //   setAddedUsers((prev) =>
                  //     prev.filter((prevUser) => prevUser.id !== user.id),
                  //   );
                  // } else {
                  //   if (addedUsers.length === 3) return;
                  //   setAddedUsers((prev) => [...prev, user]);
                  // }
                }}
                sx={{
                  border: '1px dashed blue',
                  backgroundColor: userExist ? 'blue' : '',
                }}
              >
                {userExist ? (
                  <RemoveIcon sx={{ color: '#fff' }} />
                ) : (
                  <AddIcon sx={{ color: 'blue' }} />
                )}
              </IconButton>
            </Box>
          );
        })}
      </Stack>

      <Button variant="contained" fullWidth>
        Продолжить
      </Button>
    </ModalContainer>
  );
};

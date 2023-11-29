import {
  ArrowBackIosNewOutlined,
  ChatBubbleOutlineRounded,
  ErrorOutlined,
  LockOpenOutlined,
  NavigateNext,
  SportsBaseball,
  SportsTennis,
} from '@mui/icons-material';
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import { SwipeablePage } from '../../../components/SwipeablePage';
import matches_bg from '../../../images/matches/bgpadel_matchdetail.png';
import { Button } from '../../../components/atoms/Button';
import { IonBackButton, isPlatform } from '@ionic/react';
import { useState } from 'react';
import { useUserInfo } from '../../../services/api/hooks';
import { useParams } from 'react-router';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getOneAvailableMatche,
  joinMatch,
} from '../../../services/matches/service';

interface TeamPlayer {
  name: string;
  level: string;
  avatar?: string;
}

export function SingleMatchPage() {
  const isMobile = isPlatform('mobile');
  const { matchId }: { matchId: string | undefined } = useParams();

  const {
    data,
    isLoading,
    refetch: refetchClubs,
  } = useQuery({
    queryKey: ['available-club'],
    queryFn: () => getOneAvailableMatche(Number(matchId)),
  });

  const joinMatchMutation = useMutation({
    mutationFn: joinMatch,
    onSuccess(data) {},
    onError() {},
  });

  const renderImageSlot = () => (
    <Box sx={{ height: '100%', '*': { height: '100%' } }}>
      <Box
        sx={{ objectFit: 'cover', maxHeight: '225px' }}
        width="100%"
        component="img"
        src={matches_bg}
      />
    </Box>
  );

  const renderTopSlot = () => (
    <Box px={1} display="flex" alignItems="center">
      <IonBackButton
        text={''}
        style={{
          display: 'flex',
          width: '40px',
          color: 'black',
        }}
      >
        <ArrowBackIosNewOutlined sx={{ color: '#fff' }} />
      </IonBackButton>
      <Typography
        sx={{
          fontSize: '1.15rem',
          fontWeight: '700',
        }}
      >
        JA Ocean View Hotel Padel Tenn...
      </Typography>
    </Box>
  );

  const [team1, setTeam1] = useState<TeamPlayer[] | []>([
    {
      name: 'Ramazan',
      level: '1.4',
      avatar: 'https://mui.com/static/images/avatar/1.jpg',
    },
    {
      name: '',
      level: '',
      avatar: '',
    },
  ]);

  const [team2, setTeam2] = useState<TeamPlayer[]>([
    {
      name: 'Amir',
      level: '1.75',
      avatar: 'https://mui.com/static/images/avatar/2.jpg',
    },
    { name: '', level: '' },
  ]);

  const user = useUserInfo();

  const playerData: TeamPlayer = {
    // name: user.firstName || '',
    name: user?.firstname || '',
    level: '2.25',
    avatar:
      'https://upload.wikimedia.org/wikipedia/ru/9/94/%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg',
  };

  return (
    <SwipeablePage imageSlot={renderImageSlot()} topSlot={renderTopSlot()}>
      <Box
        sx={{
          paddingTop: isMobile ? 'unset' : '1.5rem',
          minHeight: isMobile ? 'unset' : '100%',
          background: isMobile ? 'unset' : '#fff',
          width: '100%',
          paddingInline: '15px',
          margin: '-5rem auto 5.75rem auto',
        }}
      >
        <Box
          sx={{
            maxWidth: isMobile ? 'unset' : '1000px',
            width: '100%',
            margin: '0 auto',
          }}
        >
          <Box
            sx={{
              width: '100%',
              background: '#fff',
              border: '2px solid #EED790',
              borderRadius: '10px',
              padding: '10px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '.75rem',
                  paddingInline: '10px',
                }}
              >
                <SportsTennis sx={{ color: '#000', opacity: '.7' }} />
                <Box>
                  <Typography
                    sx={{
                      paddingBottom: '.2rem',
                      fontWeight: '600',
                      fontSize: '.9rem',
                    }}
                  >
                    PADEL
                  </Typography>
                  <Typography>Среда 22 ноября 20:00 - 21:30</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

                  width: '30px',
                  height: '30px',
                  background: '#0E2233',
                  borderRadius: '50%',
                }}
              >
                <SportsBaseball
                  sx={{ color: '#EFDB87', fontSize: '1.1rem', opacity: '.8' }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                margin: '.75rem 0 1rem 0',
                width: '100%',
                height: '1px',
                background: '#e5e5e5',
                borderRadius: '3px',
              }}
            />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                paddingInline: '10px',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}
              >
                <Typography
                  sx={{ fontWeight: '600', opacity: '.6', fontSize: '.85rem' }}
                >
                  Гендер
                </Typography>
                <Typography sx={{ fontWeight: '700', fontSize: '1rem' }}>
                  Смешанный
                </Typography>
              </Box>
              <Box
                sx={{
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}
              >
                <Typography
                  sx={{ fontWeight: '600', opacity: '.6', fontSize: '.85rem' }}
                >
                  Уровень
                </Typography>
                <Typography sx={{ fontWeight: '700', fontSize: '1rem' }}>
                  3.8 - 4.8
                </Typography>
              </Box>
              <Box
                sx={{
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}
              >
                <Typography
                  sx={{ fontWeight: '600', opacity: '.6', fontSize: '.85rem' }}
                >
                  Цена
                </Typography>
                <Typography sx={{ fontWeight: '700', fontSize: '1rem' }}>
                  ₽ 3000
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem .75rem',
              marginTop: '2.5rem',
              width: '100%',
              background: '#fff',
              border: '1px #e5e5e5 solid',
              borderRadius: '10px',
            }}
          >
            <Box sx={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
              <LockOpenOutlined sx={{ color: '#000', fontSize: '1.25rem' }} />
              <Typography>Open Match</Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: '.5rem' }}>
              <Typography>✅</Typography>
              <Typography>Корт забронирован</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              padding: '1rem .75rem',

              marginBlock: '1.25rem',
              width: '100%',
              background: '#fff',
              border: '1px #e5e5e5 solid',
              borderRadius: '10px',
            }}
          >
            <Typography sx={{ fontWeight: '600', fontSize: '1rem' }}>
              Competetive
            </Typography>
            <Typography
              sx={{ fontSize: '.85rem', fontWeight: '600', opacity: '.5' }}
            >
              Результат этого матча повлияет на ваш уровень
            </Typography>
          </Box>

          <Box
            sx={{
              padding: '1rem .75rem',
              marginBlock: '1.25rem',
              width: '100%',
              background: '#fff',
              border: '1px #e5e5e5 solid',
              borderRadius: '10px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box>
                <Typography sx={{ fontWeight: '600', fontSize: '1rem' }}>
                  Попросите место в матче
                </Typography>
                <Typography
                  sx={{ fontSize: '.85rem', fontWeight: '600', opacity: '.5' }}
                >
                  Посмотрите статус игроков чтобы присоединиться к матчу
                </Typography>
              </Box>
              <IconButton
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <NavigateNext />
              </IconButton>
            </Box>
          </Box>

          <Box
            sx={{
              padding: '1rem .75rem',
              marginBlock: '1.25rem',
              width: '100%',
              background: '#fff',
              border: '1px #e5e5e5 solid',
              borderRadius: '10px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: '.5rem',
              }}
            >
              <Typography sx={{ fontSize: '1.1rem', fontWeight: '600' }}>
                Игроки
              </Typography>
              <Box
                sx={{ display: 'inherit', alignItems: 'inherit', gap: '.5rem' }}
              >
                <ErrorOutlined sx={{ opacity: '.6', color: '#000' }} />
                <Typography>Out of range</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{ display: 'flex', gap: '14px', justifyContent: 'center' }}
              >
                {team1.map((player: TeamPlayer) => {
                  return (
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',

                          width: '63px',
                          height: '63px',
                          borderRadius: '50%',
                          border: '2px solid #EED790',
                        }}
                      >
                        <Avatar
                          src={player?.avatar}
                          onClick={() => {
                            const playerAlreadyInTeam = team1.find(
                              (player) =>
                                player.name === playerData.name &&
                                player.level === playerData.level,
                            );

                            if (
                              (!player.name || !player.level) &&
                              !playerAlreadyInTeam
                            ) {
                              const index = team2.findIndex(
                                (player) =>
                                  player.name === playerData.name &&
                                  player.level === playerData.level,
                              );

                              const newTeam2 = team2.map(
                                (player: TeamPlayer) => {
                                  if (player === team2[index]) {
                                    return [
                                      ...team2,
                                      (player.name = ''),
                                      (player.level = ''),
                                    ];
                                  } else return { ...player };
                                },
                              );

                              setTeam2(newTeam2 as TeamPlayer[]);

                              const newTeam1 = team1.map(
                                (player: TeamPlayer) => {
                                  if (!player.name && !player.level) {
                                    return {
                                      ...player,
                                      name: playerData.name,
                                      level: playerData.level,
                                      avatar: playerData.avatar,
                                    };
                                  } else {
                                    const newTeam1 = { ...player };
                                    return newTeam1;
                                  }
                                },
                              );
                              setTeam1(newTeam1 as TeamPlayer[]);
                            } else return;
                          }}
                          sx={{
                            width: '60px',
                            height: '60px',
                            opacity:
                              player.name === playerData.name &&
                              player.level === playerData.level
                                ? '.7'
                                : 'unset',
                          }}
                        />
                      </Box>
                      <Typography>{player?.name || 'Доступно'}</Typography>
                      <Typography>{player?.level || ''}</Typography>
                    </Box>
                  );
                })}
              </Box>
              <Box
                sx={{ width: '2px', height: '100px', background: '#e5e5e5' }}
              />
              <Box sx={{ display: 'flex', gap: '14px' }}>
                {team2.map((player: TeamPlayer) => {
                  return (
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',

                          width: '63px',
                          height: '63px',
                          borderRadius: '50%',
                          border: '2px solid #EED790',
                        }}
                      >
                        <Avatar
                          src={player.avatar}
                          onClick={() => {
                            const playerAlreadyInTeam = team2.find(
                              (player) =>
                                player.name === playerData.name &&
                                player.level === playerData.level,
                            );

                            if (
                              (!player.name || !player.level) &&
                              !playerAlreadyInTeam
                            ) {
                              const index = team1.findIndex(
                                (player) =>
                                  player.name === playerData.name &&
                                  player.level === playerData.level,
                              );

                              const newTeam1 = team1.map(
                                (player: TeamPlayer) => {
                                  if (player === team1[index]) {
                                    return [
                                      ...team1,
                                      (player.name = ''),
                                      (player.level = ''),
                                    ];
                                  } else return { ...player };
                                },
                              );

                              setTeam1(newTeam1 as TeamPlayer[]);

                              const newTeam2 = team2.map(
                                (player: TeamPlayer) => {
                                  if (!player.name && !player.level) {
                                    return {
                                      ...player,
                                      name: playerData.name,
                                      level: playerData.level,
                                      avatar: playerData.avatar,
                                    };
                                  } else {
                                    const newTeam2 = { ...player };
                                    return newTeam2;
                                  }
                                },
                              );
                              setTeam2(newTeam2 as TeamPlayer[]);
                            } else return;
                          }}
                          sx={{
                            width: '60px',
                            height: '60px',
                            opacity:
                              player.name === playerData.name &&
                              player.level === playerData.level
                                ? '.7'
                                : 'unset',
                          }}
                        />
                      </Box>
                      <Typography>{player?.name || 'Доступно'}</Typography>
                      <Typography>{player?.level || ''}</Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>

          <Box sx={{ maxWidth: '125px', margin: '0 auto' }}>
            <Button sx={{ height: '40px' }}>
              <ChatBubbleOutlineRounded sx={{ marginRight: '.75rem' }} />
              <Typography sx={{ fontSize: '1.1rem', fontWeight: '600' }}>
                Чат
              </Typography>
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            position: 'fixed',
            left: '0',
            right: '0',
            bottom: '1.5rem',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            sx={{
              height: '45px',
              background: '#0D2432',
              borderRadius: '25px',
              color: '#fff',
              fontSize: '1.1rem',
              fontWeight: '500',
              maxWidth: '350px',
              boxShadow:
                'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;',
            }}
          >
            Забронировать место - ₽ 3000
          </Button>
        </Box>
      </Box>
    </SwipeablePage>
  );
}

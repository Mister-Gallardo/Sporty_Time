import {
  ArrowBackIosNewOutlined,
  ChatBubbleOutlineRounded,
  LockOpenOutlined,
  SportsBaseball,
  SportsTennis,
} from '@mui/icons-material';
import { Box, CircularProgress, Typography } from '@mui/material';
import { SwipeablePage } from '../../../components/SwipeablePage';
import { Button } from '../../../components/atoms/Button';
import {
  IonBackButton,
  IonLoading,
  isPlatform,
  useIonToast,
} from '@ionic/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useMutation, useQuery } from '@tanstack/react-query';
import match_bg from '../../../images/matches/bgpadel_matchdetail.png';
import {
  getOneAvailableMatch,
  joinMatch,
} from '../../../services/matches/service';
import { Player } from '../../../services/user/interface';
import { useUserProfile } from '../../../services/api/hooks';
import { PlayerSlot } from '../../../components/molecules/PlayerSlot';

export function SingleMatchPage() {
  const isMobile = isPlatform('mobile');
  const [showToast] = useIonToast();
  const { matchId } = useParams<{ matchId: string }>();
  const myPlayer = useUserProfile();

  const {
    data,
    isLoading,
    refetch: refetchClubs,
  } = useQuery({
    queryKey: [`available-club`, matchId],
    queryFn: () => getOneAvailableMatch(Number(matchId)),
  });

  const singleMatchData = data?.data;

  const joinMatchMutation = useMutation({
    mutationFn: joinMatch,
    onSuccess() {
      showToast({
        header: 'Поздравляем!',
        message: 'Вы присоединились к матчу',
        duration: 2000,
        position: 'bottom',
        color: 'success',
      });
      refetchClubs();
    },
    onError(e: any) {
      showToast({
        header: 'Ошибка',
        message: e.response.data.message,
        duration: 20000,
        position: 'bottom',
        color: 'danger',
      });
    },
  });

  const [players, setPlayers] = useState<Player[]>([]);

  const playerAlreadyInSomeTeam = !!singleMatchData?.matchBookings.find(
    (booking) => booking.player?.id === myPlayer?.id,
  );

  console.log(playerAlreadyInSomeTeam);

  const [playerInTeam, setPlayerInTeam] = useState<string>('');

  useEffect(() => {
    setPlayerInTeam(playerAlreadyInSomeTeam ? '' : 'B');
  }, [playerAlreadyInSomeTeam]);

  useEffect(() => {
    const teamAPlayers =
      singleMatchData?.matchBookings
        ?.filter((booking) => booking.team === 'A')
        ?.map((booking) => booking.player) || [];

    const teamBPlayers =
      singleMatchData?.matchBookings
        ?.filter((booking) => booking.team === 'B')
        ?.map((booking) => booking.player) || [];

    if (playerInTeam === 'A' && myPlayer)
      teamAPlayers.push({ ...myPlayer, mark: !playerAlreadyInSomeTeam });
    if (playerInTeam === 'B' && myPlayer)
      teamBPlayers.push({ ...myPlayer, mark: !playerAlreadyInSomeTeam });
    teamAPlayers.length = 2;
    teamBPlayers.length = 2;

    setPlayers([...Array.from(teamAPlayers), ...Array.from(teamBPlayers)]);
  }, [singleMatchData, playerInTeam, myPlayer]);

  if (isLoading) {
    return <IonLoading isOpen />;
  }

  const renderImageSlot = () => (
    <Box sx={{ height: '100%', '*': { height: '100%' } }}>
      <Box
        sx={{ objectFit: 'cover' }}
        width="100%"
        component="img"
        src={match_bg}
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
        Матч {matchId}
      </Typography>
    </Box>
  );

  return (
    <SwipeablePage imageSlot={renderImageSlot()} topSlot={renderTopSlot()}>
      <Box
        sx={{
          paddingTop: '1rem',
          paddingBottom: '4rem',
          background: '#fff',
          position: 'relative',
          zIndex: '99',
        }}
      >
        <Box
          sx={{
            paddingTop: isMobile ? 'unset' : '1.5rem',
            minHeight: isMobile ? 'unset' : '100%',
            background: isMobile ? 'unset' : '#fff',
            width: '100%',
            paddingInline: '15px',
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
                      {singleMatchData?.sport}
                    </Typography>
                    <Typography>
                      {singleMatchData?.gameDate}
                      {', '}
                      {singleMatchData?.slot?.time.slice(0, -3)}
                    </Typography>
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
                    sx={{
                      fontWeight: '600',
                      opacity: '.6',
                      fontSize: '.85rem',
                    }}
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
                    sx={{
                      fontWeight: '600',
                      opacity: '.6',
                      fontSize: '.85rem',
                    }}
                  >
                    Уровень
                  </Typography>
                  <Typography sx={{ fontWeight: '700', fontSize: '1rem' }}>
                    {singleMatchData?.ratingFrom} - {singleMatchData?.ratingTo}
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
                    sx={{
                      fontWeight: '600',
                      opacity: '.6',
                      fontSize: '.85rem',
                    }}
                  >
                    Цена
                  </Typography>
                  <Typography sx={{ fontWeight: '700', fontSize: '1rem' }}>
                    ₽ {singleMatchData?.price}
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
                <Typography>{singleMatchData?.slot ? '✅' : '🔴'}</Typography>
                <Typography>
                  {singleMatchData?.slot
                    ? 'Корт забронирован'
                    : 'Корт не забронирован'}
                </Typography>
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
                {singleMatchData?.type}
              </Typography>
              <Typography
                sx={{ fontSize: '.85rem', fontWeight: '600', opacity: '.5' }}
              >
                Результат этого матча повлияет на ваш уровень
              </Typography>
            </Box>

            {/* <Box
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
                    sx={{
                      fontSize: '.85rem',
                      fontWeight: '600',
                      opacity: '.5',
                    }}
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
            </Box> */}

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
                {/* <Box
                  sx={{
                    display: 'inherit',
                    alignItems: 'inherit',
                    gap: '.5rem',
                  }}
                >
                  <ErrorOutlined sx={{ opacity: '.6', color: '#000' }} />
                  <Typography>Out of range</Typography>
                </Box> */}
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  gap: isPlatform('mobile') ? '1rem' : '48px',
                  justifyContent: 'center',
                }}
              >
                <PlayerSlot
                  player={players[0]}
                  onClick={() => {
                    if (playerAlreadyInSomeTeam) return;
                    setPlayerInTeam('A');
                  }}
                />
                <PlayerSlot
                  player={players[1]}
                  onClick={() => {
                    if (playerAlreadyInSomeTeam) return;
                    setPlayerInTeam('A');
                  }}
                />
                <Box
                  sx={{
                    width: '2px',
                    height: '100px',
                    background: '#e5e5e5',
                  }}
                />
                <PlayerSlot
                  player={players[2]}
                  onClick={() => {
                    if (playerAlreadyInSomeTeam) return;
                    setPlayerInTeam('B');
                  }}
                />
                <PlayerSlot
                  player={players[3]}
                  onClick={() => {
                    if (playerAlreadyInSomeTeam) return;
                    setPlayerInTeam('B');
                  }}
                />
              </Box>
            </Box>

            {singleMatchData?.matchResults && (
              <Box
                sx={{
                  border: '1px solid #e5e5e5',

                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '.75rem',
                  marginBottom: '1.5rem',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: '1.75rem',
                    opacity: '.5',
                  }}
                >
                  <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
                    {singleMatchData?.matchResults[0][0]}
                  </Typography>
                  <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
                    {singleMatchData?.matchResults[1][0]}
                  </Typography>
                  <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
                    {singleMatchData?.matchResults[2][0]}
                  </Typography>
                </Box>

                <Box
                  sx={{ width: '100%', height: '1px', background: '#e5e5e5' }}
                />

                <Box sx={{ display: 'flex', gap: '1.75rem', opacity: '.5' }}>
                  <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
                    {singleMatchData?.matchResults[0][1]}
                  </Typography>
                  <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
                    {singleMatchData?.matchResults[1][1]}
                  </Typography>
                  <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
                    {singleMatchData?.matchResults[2][1]}
                  </Typography>
                </Box>
              </Box>
            )}

            <Box sx={{ maxWidth: '125px', margin: '0 auto' }}>
              <Button sx={{ height: '40px' }}>
                <ChatBubbleOutlineRounded sx={{ marginRight: '.75rem' }} />
                <Typography sx={{ fontSize: '1.1rem', fontWeight: '600' }}>
                  Чат
                </Typography>
              </Button>
            </Box>
          </Box>

          {!playerAlreadyInSomeTeam && (
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
                onClick={() => {
                  if (matchId && playerInTeam) {
                    joinMatchMutation.mutate({
                      matchId: Number(matchId),
                      team: playerInTeam,
                    });
                  } else {
                    showToast({
                      message: 'Выберите команду!',
                      duration: 1000,
                      color: 'danger',
                    });
                  }
                }}
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
                {joinMatchMutation.isPending ? (
                  <CircularProgress />
                ) : (
                  `Забронировать место - ₽ ${singleMatchData?.price}`
                )}
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </SwipeablePage>
  );
}

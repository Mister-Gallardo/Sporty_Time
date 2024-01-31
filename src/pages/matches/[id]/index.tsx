import {
  ArrowBackIosNewOutlined,
  ChatBubbleOutlineRounded,
} from '@mui/icons-material';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { SwipeablePage } from '../../../components/SwipeablePage';
import {
  IonBackButton,
  IonLoading,
  IonToast,
  isPlatform,
  useIonToast,
} from '@ionic/react';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import match_bg from '../../../images/matches/bgpadel_matchdetail.png';
import {
  cancelMatch,
  deletePlayerFromMatch,
  getOneAvailableMatch,
  joinMatch,
  uploadResults,
} from '../../../services/matches/service';
import { PlayersMatchCard } from '../../../components/molecules/match-cards/PlayersMatchCard';
import { UploadResultModal } from '../../../components/modals/UploadResultModal';
import { usePlayerProfile } from '../../../services/api/hooks';
import { MatchInfoBlock } from './components/MatchInfoBlock';
import { ClubInfoBlock } from './components/ClubInfoBlock';
import { MatchPlayer } from '../../../services/user/interface';
import { Prompt } from './components/Prompt';
import { PrivacyType } from './components/PrivacyType';
import { MatchType } from './components/MatchType';
import { MatchDataBlock } from './components/MatchDataBlock';
import { EditMatchPlayersModal } from '../../../components/modals/EditMatchPlayersModal';
import { CancelDialogModal } from './components/CancelDialogModal';
import useToggle from '../../../hooks/useToggle';
import { EditPayment } from './components/EditPayment';
import { CheckoutModal } from '../../../components/modals/CheckoutModal';
import { NotFoundPage } from '../../../components/NotFoundPage';
import { ResultsTable } from './components/ResultsTable';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';

export function SingleMatchPage() {
  const isMobile = isPlatform('mobile');
  const history = useHistory();

  const { matchId } = useParams<{ matchId: string }>();
  const [showToast] = useIonToast();
  const [myPlayer] = usePlayerProfile();
  const [error, setError] = useState<string | undefined>();
  const [openUploadModal, setOpenUploadModal] = useState<boolean>(false);
  const [openToast, setOpenToast] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useToggle();
  const [openCheckoutModal, setOpenCheckoutModal] = useToggle();
  const [openCancelDialogModal, setOpenCancelDialogModal] = useToggle();

  const [playerToRemoveId, setPlayerToRemoveId] = useState<
    number | undefined
  >();

  // Get Particular Match Request
  const {
    data,
    isLoading,
    refetch: refetchMatch,
  } = useQuery({
    queryKey: [`match`, Number(matchId)],
    queryFn: () => getOneAvailableMatch(Number(matchId)),
  });

  const singleMatchData = data?.data;

  const qc = useQueryClient();

  // Join Match / Book a Place Request
  const joinMatchMutation = useMutation({
    mutationFn: joinMatch,
    onSuccess() {
      setOpenCheckoutModal();
      showToast({
        header: 'Поздравляем!',
        message: 'Вы присоединились к матчу',
        duration: 2000,
        position: 'bottom',
        color: 'success',
      });
      refetchMatch();
      qc.resetQueries({ queryKey: ['my-matches', false] });
    },
    onError() {
      setOpenCheckoutModal();
      showToast({
        header: 'Ошибка!',
        message: 'Не удалось присоединиться к матчу',
        duration: 20000,
        position: 'bottom',
        color: 'danger',
      });
    },
  });

  // Upload Reslults Request
  const uploadMatchReslultsMutation = useMutation({
    mutationFn: uploadResults,
    onSuccess() {
      setOpenToast(true);
      refetchMatch();
      qc.resetQueries({ queryKey: ['my-matches', false] });
    },
    onError(e: any) {
      setError(e.response.data.message);
      setOpenToast(true);
    },
  });

  // Cancel / Leave match
  const cancelMatchMutation = useMutation({
    mutationFn: cancelMatch,
    onSuccess() {
      setOpenCancelDialogModal();
      showToast({
        color: 'success',
        message: `Ваше бронирование отменено`,
        mode: 'ios',
        position: 'bottom',
        duration: 2000,
      });
      refetchMatch();
      qc.resetQueries({ queryKey: ['my-matches', false] });
    },
    onError() {
      showToast({
        color: 'danger',
        message: `Ошибка, попробуйте ещё раз`,
        mode: 'ios',
        position: 'bottom',
        duration: 2000,
      });
    },
  });

  // Remove Player from match
  const deletePlayerFromMatchMutation = useMutation({
    mutationFn: deletePlayerFromMatch,
    onSuccess() {
      setOpenCancelDialogModal();
      showToast({
        color: 'success',
        message: `Игрок был удалён из матча`,
        mode: 'ios',
        position: 'bottom',
        duration: 2000,
      });
      refetchMatch();
      qc.resetQueries({ queryKey: ['my-matches', false] });
    },
    onError() {
      setOpenCancelDialogModal();
      showToast({
        color: 'danger',
        message: `Ошибка, попробуйте ещё раз`,
        mode: 'ios',
        position: 'bottom',
        duration: 2000,
      });
    },
  });

  const [players, setPlayers] = useState<MatchPlayer[]>([]);
  const playerAlreadyInSomeTeam = !!singleMatchData?.matchBookings.find(
    (booking) => booking.player?.id === myPlayer?.id,
  );
  const [playerInTeam, setPlayerInTeam] = useState<string>('');
  const myBooking = singleMatchData?.matchBookings.find(
    (booking) => booking.player?.id === myPlayer?.id,
  );

  useEffect(() => {
    setPlayerInTeam(playerAlreadyInSomeTeam ? '' : 'B');
  }, [playerAlreadyInSomeTeam]);

  const isUserOwner = singleMatchData?.owner?.id === myPlayer?.id;

  useEffect(() => {
    const teamAPlayers =
      singleMatchData?.matchBookings
        ?.filter((booking) => booking.team === 'A')
        ?.map((booking) => ({
          mark: false,
          paid: booking.paid,
          isOwner: isUserOwner,
          ...booking.player,
        })) || [];

    const teamBPlayers =
      singleMatchData?.matchBookings
        ?.filter((booking) => booking.team === 'B')
        ?.map((booking) => ({
          mark: false,
          paid: booking.paid,
          isOwner: isUserOwner,
          ...booking.player,
        })) || [];

    if (playerInTeam === 'A' && myPlayer)
      teamAPlayers.push({
        ...myPlayer,
        mark: !playerAlreadyInSomeTeam,
        paid: 0,
        isOwner: isUserOwner,
      });
    if (playerInTeam === 'B' && myPlayer)
      teamBPlayers.push({
        ...myPlayer,
        mark: !playerAlreadyInSomeTeam,
        paid: 0,
        isOwner: isUserOwner,
      });
    teamAPlayers.length = 2;
    teamBPlayers.length = 2;

    setPlayers([...Array.from(teamAPlayers), ...Array.from(teamBPlayers)]);
  }, [singleMatchData, playerInTeam, myPlayer]);

  if (isLoading) {
    return <IonLoading isOpen />;
  }
  if (!singleMatchData) {
    return <NotFoundPage />;
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

  const onBookSpot = () => {
    if (matchId && playerInTeam) {
      joinMatchMutation.mutate({
        matchId: Number(matchId),
        team: playerInTeam,
        money: singleMatchData.paid ? 0 : singleMatchData.price / 4,
      });
    } else {
      showToast({
        message: 'Выберите команду!',
        duration: 1000,
        color: 'danger',
      });
    }
  };

  const booking = singleMatchData.booking;
  if (!booking) return <LoadingCircle />;
  const startsAt = new Date(singleMatchData.booking.startsAt);

  return (
    <>
      <SwipeablePage imageSlot={renderImageSlot()} topSlot={renderTopSlot()}>
        <>
          <Box
            pt={isMobile ? 'unset' : '1.5rem'}
            minHeight={isMobile ? 'unset' : '100%'}
            bgcolor={isMobile ? 'unset' : '#fff'}
            mb={4}
            px={2}
          >
            <Box
              width="100%"
              maxWidth={isMobile ? 'unset' : '1000px'}
              margin="0 auto"
              display="flex"
              flexDirection="column"
              gap={2}
            >
              <Prompt
                matchData={singleMatchData}
                playerAlreadyInSomeTeam={playerAlreadyInSomeTeam}
              />

              <MatchDataBlock {...singleMatchData} />

              <EditPayment
                matchData={singleMatchData}
                isUserOwner={isUserOwner}
                refetchMatch={refetchMatch}
              />

              <Box my={2}>
                <MatchType type={singleMatchData.type} />
                <PrivacyType isPrivate={singleMatchData.isPrivate} />
              </Box>

              <PlayersMatchCard
                players={players}
                playerAlreadyInSomeTeam={playerAlreadyInSomeTeam}
                setPlayerInTeam={(team) => {
                  if (playerAlreadyInSomeTeam) return;
                  setPlayerInTeam(team);
                }}
                handleEditModal={setOpenEditModal}
                matchData={singleMatchData}
              />

              <ResultsTable matchResults={singleMatchData?.matchResults} />

              {Date.now() > startsAt.getTime() && (
                <Box
                  sx={{
                    maxWidth: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    mx: 'auto',
                    marginBottom: '1rem',
                    justifyContent: 'center',
                  }}
                >
                  {/* Confirm / Upload Result */}
                  {singleMatchData.matchResults &&
                    !singleMatchData.confirmMatchResults && (
                      <Typography>Ожидание подтверждения...</Typography>
                    )}

                  {singleMatchData?.matchResults &&
                    !myBooking?.confirmMatchResults && (
                      <Button
                        onClick={() =>
                          uploadMatchReslultsMutation.mutate({
                            matchId: +matchId,
                            matchResults: singleMatchData?.matchResults || [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                          })
                        }
                        sx={{
                          backgroundColor: '#28a11e',
                          fontSize: '.95rem',
                          fontWeight: '600',
                        }}
                      >
                        Подтвердить
                      </Button>
                    )}

                  {!myBooking?.confirmMatchResults && (
                    <Button
                      onClick={() => setOpenUploadModal(true)}
                      sx={{ fontSize: '.95rem', fontWeight: '600' }}
                    >
                      Загрузить результат
                    </Button>
                  )}
                </Box>
              )}

              <Box
                sx={{
                  maxWidth: '125px',
                  marginInline: 'auto',
                  marginBottom: '1rem',
                }}
              >
                <Button
                  sx={{ height: '40px' }}
                  onClick={() => history.push(`/chats/${matchId}`)}
                >
                  <ChatBubbleOutlineRounded sx={{ marginRight: '.75rem' }} />
                  <Typography sx={{ fontSize: '1.1rem', fontWeight: '600' }}>
                    Чат
                  </Typography>
                </Button>
              </Box>

              {!playerAlreadyInSomeTeam && (
                <Box
                  sx={{
                    position: 'fixed',
                    zIndex: 1,
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
                    onClick={() => setOpenCheckoutModal()}
                    sx={{
                      paddingX: 2,
                      background: '#0D2432',
                      borderRadius: '25px',
                      color: '#fff',
                      boxShadow:
                        'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;',
                    }}
                  >
                    {joinMatchMutation.isPending ? (
                      <CircularProgress />
                    ) : (
                      `Забронировать место ${
                        singleMatchData.paid
                          ? ''
                          : '- ₽' + singleMatchData.price / 4
                      }`
                    )}
                  </Button>
                </Box>
              )}
              <ClubInfoBlock data={singleMatchData} />
              <MatchInfoBlock data={singleMatchData} />
            </Box>
          </Box>
        </>
      </SwipeablePage>
      <CheckoutModal
        price={singleMatchData.price}
        isJoin
        isPaid={!!singleMatchData.paid}
        court={singleMatchData.booking.court}
        date={startsAt}
        playtime={singleMatchData.minutes}
        startTime={startsAt.toLocaleTimeString('ru')}
        timezone={singleMatchData.booking.court.club.timezone}
        openState={openCheckoutModal}
        handleModal={setOpenCheckoutModal}
        handleCheckout={onBookSpot}
      />

      <EditMatchPlayersModal
        openState={openEditModal}
        handleModal={setOpenEditModal}
        players={players}
        setPlayerToRemoveId={setPlayerToRemoveId}
        onCancel={() => {
          setOpenEditModal();
          setOpenCancelDialogModal();
        }}
        sport={singleMatchData.sport}
      />
      <CancelDialogModal
        openState={openCancelDialogModal}
        handleDialog={setOpenCancelDialogModal}
        isUserOwner={isUserOwner}
        playerToRemoveId={playerToRemoveId}
        handleCancel={() => {
          if (playerToRemoveId) {
            deletePlayerFromMatchMutation.mutate({
              matchId: +matchId,
              deletePlayerId: playerToRemoveId,
            });
          } else {
            cancelMatchMutation.mutate(+matchId);
          }
        }}
      />

      <UploadResultModal
        openState={openUploadModal}
        handleModal={() => setOpenUploadModal(false)}
        matchId={Number(matchId)}
      />

      <IonToast
        header="Возникла ошибка"
        position="top"
        isOpen={openToast}
        message={error || 'Вы подтвердили результаты матча'}
        onDidDismiss={() => setOpenToast(false)}
        duration={2000}
        color={error && 'danger'}
      />
    </>
  );
}

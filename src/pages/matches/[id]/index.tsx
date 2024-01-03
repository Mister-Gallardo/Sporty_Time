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
import { useParams } from 'react-router';
import { useMutation, useQuery } from '@tanstack/react-query';
import match_bg from '../../../images/matches/bgpadel_matchdetail.png';
import {
  cancelMatch,
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
import { gameDateToDate } from '../../../services/helper';
import { Prompt } from './components/Prompt';
import { PrivacyType } from './components/PrivacyType';
import { MatchType } from './components/MatchType';
import { getPromptParams } from '../../../helpers/getMatchPromptParams';
import { MatchDataBlock } from './components/MatchDataBlock';
import { EditMatchPlayersModal } from '../../../components/modals/EditMatchPlayersModal';
import { CancelDialogModal } from './components/CancelDialogModal';
import useToggle from '../../../hooks/useToggle';

export function SingleMatchPage() {
  const isMobile = isPlatform('mobile');
  const [showToast] = useIonToast();
  const { matchId } = useParams<{ matchId: string }>();
  const myPlayer = usePlayerProfile();

  const [error, setError] = useState<string | undefined>();

  const [openUploadModal, setOpenUploadModal] = useState<boolean>(false);
  const [openToast, setOpenToast] = useState<boolean>(false);

  const [openEditModal, setOpenEditModal] = useToggle();
  const [openCancelDialogModal, setOpenCancelDialogModal] = useToggle();

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

  // Join Match / Book a Place Request
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
      refetchMatch();
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

  // Upload Reslults Request
  const uploadMatchReslultsMutation = useMutation({
    mutationFn: uploadResults,
    onSuccess() {
      setOpenToast(true);
      refetchMatch();
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
        position: 'top',
        duration: 2000,
      });
      refetchMatch();
    },
    onError(e: any) {
      console.log('error!', e);
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
  if (!singleMatchData) return null;

  const gameDate = gameDateToDate(
    singleMatchData.gameDate,
    singleMatchData?.slot.time,
  );

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
              <Prompt params={getPromptParams(singleMatchData, isUserOwner)} />

              <MatchDataBlock {...singleMatchData} />

              <MatchType type={singleMatchData.type} />
              <PrivacyType isPrivate={singleMatchData.isPrivate} />

              <PlayersMatchCard
                players={players}
                playerAlreadyInSomeTeam={playerAlreadyInSomeTeam}
                setPlayerInTeam={(team) => {
                  if (playerAlreadyInSomeTeam) return;
                  setPlayerInTeam(team);
                }}
                sport={singleMatchData.sport}
                handleEditModal={setOpenEditModal}
                isMatchPaid={singleMatchData.paid}
              />

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

              {Date.now() > gameDate && (
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
                <Button sx={{ height: '40px' }}>
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
                    onClick={() => {
                      if (matchId && playerInTeam) {
                        joinMatchMutation.mutate({
                          matchId: Number(matchId),
                          team: playerInTeam,
                          money: singleMatchData.paid
                            ? 0
                            : singleMatchData.price / 4,
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

      <EditMatchPlayersModal
        openState={openEditModal}
        handleModal={setOpenEditModal}
        players={players}
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
        handleCancel={() => cancelMatchMutation.mutate(+matchId)}
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

import {
  ArrowBackIosNewOutlined,
  ChatBubbleOutlineRounded,
} from '@mui/icons-material';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { SwipeablePage } from '../../../components/SwipeablePage';
import {
  IonBackButton,
  IonLoading,
  isPlatform,
  useIonToast,
} from '@ionic/react';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import match_bg from '../../../images/matches/bgpadel_matchdetail.png';
import {
  getOneAvailableMatch,
  joinMatch,
} from '../../../services/matches/service';
import { PlayersMatchCard } from '../../../components/molecules/match-cards/PlayersMatchCard';
import { usePlayerProfile } from '../../../services/api/hooks';
import { MatchInfoBlock } from './components/MatchInfoBlock';
import { ClubInfoBlock } from './components/ClubInfoBlock';
import { MatchPlayer } from '../../../services/user/interface';
import { Prompt } from './components/Prompt';
import { PrivacyType } from './components/PrivacyType';
import { MatchType } from './components/MatchType';
import { MatchDataBlock } from './components/MatchDataBlock';
import { EditMatchPlayersModal } from '../../../components/modals/EditMatchPlayersModal';
import { ConfirmationEditMatchDialog } from '../../../components/modals/ConfirmationEditMatchDialog';
import useToggle from '../../../hooks/useToggle';
import { EditPayment } from './components/EditPayment';
import { CheckoutModal } from '../../../components/modals/CheckoutModal';
import { NotFoundPage } from '../../../components/NotFoundPage';
import { ResultsTable } from './components/ResultsTable';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { UploadResultsBlock } from './components/UploadResultsBlock';
import { AskForTestPassDialog } from '../../../components/modals/AskForTestPassDialog';

export function SingleMatchPage() {
  const isMobile = isPlatform('mobile');
  const history = useHistory();

  const { matchId } = useParams<{ matchId: string }>();

  const [showToast] = useIonToast();
  const [myPlayer] = usePlayerProfile();

  const [openEditModal, setOpenEditModal] = useToggle();
  const [openCheckoutModal, setOpenCheckoutModal] = useToggle();
  // remove player | cancel match
  const [openEditMatchDialog, setOpenEditMatchDialog] = useToggle();
  //if user has no rating
  const [openTestDialog, setOpenTestDialog] = useToggle();

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
        duration: 2000,
        position: 'bottom',
        color: 'danger',
      });
    },
  });

  const [players, setPlayers] = useState<MatchPlayer[]>([]);
  const playerAlreadyInSomeTeam = !!singleMatchData?.matchBookings.find(
    (booking) => booking.player?.id === myPlayer?.id,
  );
  const [playerInTeam, setPlayerInTeam] = useState<string>('');

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

  const onBookPlace = () => {
    const isRating =
      myPlayer?.ratingPadel ||
      myPlayer?.ratingTennis ||
      myPlayer?.ratingPickleball;

    if (isRating) {
      setOpenCheckoutModal();
    } else {
      setOpenTestDialog();
    }
  };

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
              <Prompt />
              <MatchDataBlock />
              <EditPayment />

              <Box my={2}>
                <MatchType />
                <PrivacyType />
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

              <ResultsTable />

              {Date.now() > startsAt.getTime() && <UploadResultsBlock />}

              <Box maxWidth={125} mx="auto" mb={2}>
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
                    disabled={joinMatchMutation.isPending}
                    endIcon={
                      joinMatchMutation.isPending && <CircularProgress />
                    }
                    onClick={onBookPlace}
                    sx={{
                      paddingX: 2,
                      background: '#0D2432',
                      color: '#fff',
                      boxShadow:
                        'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;',
                      '&:hover': {
                        background: '#0D2432',
                      },
                      '&:disabled': {
                        background: '#777',
                        color: '#eee',
                      },
                    }}
                  >
                    Забронировать место
                    {singleMatchData.paid
                      ? ''
                      : '- ₽' + singleMatchData.price / 4}
                  </Button>
                </Box>
              )}
              <ClubInfoBlock />
              <MatchInfoBlock />
            </Box>
          </Box>
        </>
      </SwipeablePage>

      <AskForTestPassDialog
        open={openTestDialog}
        handleOpen={setOpenTestDialog}
      />

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
          setOpenEditMatchDialog();
        }}
        sport={singleMatchData.sport}
      />
      <ConfirmationEditMatchDialog
        openState={openEditMatchDialog}
        handleDialog={setOpenEditMatchDialog}
        playerToRemoveId={playerToRemoveId}
      />
    </>
  );
}

export default SingleMatchPage;

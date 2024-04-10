import {
  ArrowBackIosNewOutlined,
  ChatBubbleOutlineRounded,
} from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { SwipeablePage } from '../../../components/SwipeablePage';
import { IonBackButton, IonLoading, isPlatform } from '@ionic/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import match_bg from '../../../images/matches/bgpadel_matchdetail.png';
import { getOneAvailableMatch } from '../../../services/matches/service';
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
import useToggle from '../../../hooks/useToggle';
import { EditPayment } from './components/EditPayment';
import { OnJoinCheckoutModal } from '../../../components/modals/OnJoinCheckoutModal';
import { NotFoundPage } from '../../../components/NotFoundPage';
import { ResultsTable } from './components/ResultsTable';
import { RequestsForPlaces } from './components/RequestsForPlaces';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { UploadResultsBlock } from './components/UploadResultsBlock';
import { AskForTestPassDialog } from '../../../components/modals/AskForTestPassDialog';
import { isAfter } from 'date-fns';
import { AddPlayersToMatchModal } from '../../../components/modals/AddPlayersToMatchModal';
import { FormProvider, useForm } from 'react-hook-form';
import { getSportRating } from '../../../helpers/getSportRating';

const isMobile = isPlatform('mobile');
export function SingleMatchPage() {
  const { matchId } = useParams<{ matchId: string }>();

  const [myPlayer] = usePlayerProfile();

  // remove player | cancel match
  const [openEditModal, setOpenEditModal] = useToggle();

  // add new players to match
  const [openAddPlayersModal, setOpenAddPlayersModal] = useToggle();
  const addUserForm = useForm();

  const [openCheckoutModal, setOpenCheckoutModal] = useToggle();

  //if user has no rating
  const [openTestDialog, setOpenTestDialog] = useToggle();

  // Get Particular Match Request
  const { data, isLoading, isError } = useQuery({
    queryKey: [`match`, Number(matchId)],
    queryFn: () => getOneAvailableMatch(Number(matchId)),
  });

  const singleMatchData = data?.data;

  const currentSportRating = getSportRating(myPlayer, singleMatchData?.sport);

  // check if the player's current level is within the match range
  const isRatingSufficient =
    currentSportRating >= (singleMatchData?.ratingFrom || 0) &&
    currentSportRating <= (singleMatchData?.ratingTo || 0);

  // check if the player made request for place
  const isRequestedPlace = singleMatchData?.joinrequests.find(
    (request) => request?.player?.id === myPlayer?.id,
  );

  const [players, setPlayers] = useState<MatchPlayer[]>([]);
  const playerAlreadyInSomeTeam = singleMatchData?.matchBookings.find(
    (booking) => booking.player?.id === myPlayer?.id,
  );

  const isPlayerInMatchWithoutPayment =
    playerAlreadyInSomeTeam &&
    !playerAlreadyInSomeTeam?.paid &&
    !singleMatchData?.paid;

  const [playerInTeam, setPlayerInTeam] = useState<string>('');

  useEffect(() => {
    if (!singleMatchData) return;

    if (isAfter(new Date(), new Date(singleMatchData?.booking?.startsAt)))
      return;

    setPlayerInTeam(playerAlreadyInSomeTeam ? '' : 'B');
  }, [playerAlreadyInSomeTeam, singleMatchData]);

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

  if (isLoading) return <IonLoading isOpen />;
  if (!singleMatchData || isError) return <NotFoundPage />;

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

  const booking = singleMatchData.booking;
  if (!booking) return <LoadingCircle />;

  const startsAt = new Date(singleMatchData.booking.startsAt);

  const onBookPlace = () => {
    if (!myPlayer) return;

    if (currentSportRating) {
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

              <RequestsForPlaces />

              <PlayersMatchCard
                players={players}
                playerAlreadyInSomeTeam={!!playerAlreadyInSomeTeam}
                setPlayerInTeam={(team) => {
                  if (
                    playerAlreadyInSomeTeam ||
                    isAfter(
                      new Date(),
                      new Date(singleMatchData?.booking?.startsAt),
                    )
                  )
                    return;
                  setPlayerInTeam(team);
                }}
                handleEditModal={setOpenEditModal}
                matchData={singleMatchData}
              />

              <ResultsTable />

              {Date.now() > startsAt.getTime() && playerAlreadyInSomeTeam && (
                <UploadResultsBlock />
              )}

              {playerAlreadyInSomeTeam && (
                <Box maxWidth={125} mx="auto" mb={2}>
                  <Link to={`/chats/${matchId}`}>
                    <ChatBubbleOutlineRounded sx={{ marginRight: '.75rem' }} />
                    <Typography fontWeight={600}>Чат</Typography>
                  </Link>
                </Box>
              )}
              {/* if user isn't the match-owner, there is an empty slot, 
                  user isn't in match or the match wasn't started, 
                  user with insufficient rating requested for a place and must pay 
                  or didn't requested for a place yet - show the btn */}
              {!isUserOwner &&
                singleMatchData.matchBookings.length !== 4 &&
                (isPlayerInMatchWithoutPayment || !playerAlreadyInSomeTeam) &&
                isAfter(
                  new Date(singleMatchData?.booking?.startsAt),
                  new Date(),
                ) &&
                ((isPlayerInMatchWithoutPayment && isRequestedPlace) ||
                  !isRequestedPlace) && (
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
                      {isPlayerInMatchWithoutPayment
                        ? 'Оплатить'
                        : isRatingSufficient
                        ? 'Забронировать'
                        : 'Запросить'}{' '}
                      место
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

      <OnJoinCheckoutModal
        openState={openCheckoutModal}
        handleModal={setOpenCheckoutModal}
        playerInTeam={playerInTeam}
      />

      <FormProvider {...addUserForm}>
        <EditMatchPlayersModal
          openState={openEditModal}
          handleModal={setOpenEditModal}
          handleAddPlayersModal={setOpenAddPlayersModal}
          players={players}
        />
        <AddPlayersToMatchModal
          openState={openAddPlayersModal}
          handleModal={setOpenAddPlayersModal}
          handleEditPlayersModal={setOpenEditModal}
        />
      </FormProvider>
    </>
  );
}

export default SingleMatchPage;

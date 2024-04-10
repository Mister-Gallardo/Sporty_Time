import {
  ArrowBackIosNewOutlined,
  ChatBubbleOutlineRounded,
} from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
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
import { NotFoundPage } from '../../../components/NotFoundPage';
import { ResultsTable } from './components/ResultsTable';
import { RequestsForPlaces } from './components/RequestsForPlaces';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { UploadResultsBlock } from './components/UploadResultsBlock';
import { isAfter } from 'date-fns';
import { AddPlayersToMatchModal } from '../../../components/modals/AddPlayersToMatchModal';
import { FormProvider, useForm } from 'react-hook-form';
import { MatchBookingButton } from './components/MatchBookingButton';

const isMobile = isPlatform('mobile');
export function SingleMatchPage() {
  const { matchId } = useParams<{ matchId: string }>();

  const [myPlayer] = usePlayerProfile();

  // remove player | cancel match
  const [openEditModal, setOpenEditModal] = useToggle();

  // add new players to match
  const [openAddPlayersModal, setOpenAddPlayersModal] = useToggle();
  const addUserForm = useForm();
  const { watch, setValue } = addUserForm;

  // Get Particular Match Request
  const { data, isLoading, isError } = useQuery({
    queryKey: [`match`, Number(matchId)],
    queryFn: () => getOneAvailableMatch(Number(matchId)),
  });

  const singleMatchData = data?.data;

  const [players, setPlayers] = useState<MatchPlayer[]>([]);
  const playerAlreadyInSomeTeam = singleMatchData?.matchBookings.find(
    (booking) => booking.player?.id === myPlayer?.id,
  );

  // const [playerInTeam, setPlayerInTeam] = useState<string>('');

  useEffect(() => {
    if (!singleMatchData) return;

    if (isAfter(new Date(), new Date(singleMatchData?.booking?.startsAt)))
      return;

    setValue('team', playerAlreadyInSomeTeam ? '' : 'B');
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

    if (watch('team') === 'A' && myPlayer)
      teamAPlayers.push({
        ...myPlayer,
        mark: !playerAlreadyInSomeTeam,
        paid: 0,
        isOwner: isUserOwner,
      });
    if (watch('team') === 'B' && myPlayer)
      teamBPlayers.push({
        ...myPlayer,
        mark: !playerAlreadyInSomeTeam,
        paid: 0,
        isOwner: isUserOwner,
      });
    teamAPlayers.length = 2;
    teamBPlayers.length = 2;

    setPlayers([...Array.from(teamAPlayers), ...Array.from(teamBPlayers)]);
  }, [singleMatchData, watch('team'), myPlayer]);

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
                  setValue('team', team);
                }}
                handleEditModal={setOpenEditModal}
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

              <FormProvider {...addUserForm}>
                <MatchBookingButton />
              </FormProvider>

              <ClubInfoBlock />
              <MatchInfoBlock />
            </Box>
          </Box>
        </>
      </SwipeablePage>

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

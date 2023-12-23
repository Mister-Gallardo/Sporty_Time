import { useState } from 'react';
import { useParams } from 'react-router';
import {
  ArrowBackIosNewOutlined,
  ChatBubbleOutlineRounded,
} from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { SwipeablePage } from '../../../components/SwipeablePage';
import {
  IonBackButton,
  IonLoading,
  IonToast,
  isPlatform,
  useIonToast,
} from '@ionic/react';
import { useMutation, useQuery } from '@tanstack/react-query';
import match_bg from '../../../images/matches/bgpadel_matchdetail.png';
import {
  getOneAvailableMatch,
  joinMatch,
} from '../../../services/matches/service';
import { UploadResultModal } from '../../../components/modals/UploadResultModal';
import { CheckoutModal } from '../../../components/modals/CheckoutModal';
import { usePlayerProfile } from '../../../services/api/hooks';
import useSearchParams from '../../../hooks/useSearchParams';
import { MatchDataBlock } from './components/MatchDataBlock';
import { MatchInfoBlock } from './components/MatchInfoBlock';
import { ClubInfoBlock } from './components/ClubInfoBlock';
import { ResultsTable } from './components/ResultsTable';
import { PrivacyType } from './components/PrivacyType';
import { MatchType } from './components/MatchType';
import useToggle from '../../../hooks/useToggle';
import { Players } from './components/Players';
import { Prompt } from './components/Prompt';
import { getMatchStatus } from '../../../helpers/getMatchStatus';
import { Status } from '../../../types';

export const SingleMatchPage: React.FC = () => {
  const isMobile = isPlatform('mobile');

  const [showToast] = useIonToast();

  const { matchId } = useParams<{ matchId: string }>();
  const [error, setError] = useState<string | undefined>();

  const [openUploadModal, setOpenUploadModal] = useToggle();
  const [openCheckoutModal, setOpenCheckoutModal] = useToggle();
  const [openToast, setOpenToast] = useState<boolean>(false);

  const [getParams] = useSearchParams();
  const isSlotSelected = getParams('team');

  // Get Particular Club Request
  const {
    data,
    isLoading,
    refetch: refetchMatch,
  } = useQuery({
    queryKey: [`match`, +matchId],
    queryFn: () => getOneAvailableMatch(+matchId),
  });

  const player = usePlayerProfile();
  const currentPlayerId = player?.id;

  const matchData = data?.data;
  const isUserOwner = matchData?.owner?.id === currentPlayerId;

  const isUserAlredyInMatch = matchData?.matchBookings.find(
    (member) => member.player.id === currentPlayerId,
  );

  const onBookSpot = (total: number) => {
    setOpenCheckoutModal();
    const selectedTeam = isSlotSelected === '0' ? 'A' : 'B';
    joinMatchMutation.mutate({
      matchId: +matchId,
      team: selectedTeam,
      money: total,
    });
  };

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
      location.replace(`/matches/${matchId}`);
      // refetchMatch();
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

  if (isLoading) {
    return <IonLoading isOpen />;
  }

  const renderImageSlot = (
    <Box sx={{ height: '100%', '*': { height: '100%' } }}>
      <Box
        sx={{ objectFit: 'cover' }}
        width="100%"
        component="img"
        src={match_bg}
      />
    </Box>
  );

  const renderTopSlot = (
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

  // leave just for now
  if (!matchData) {
    console.log("Match with current id doesn't exist (cause it was hardcoded)");
    return null;
  }
  const matchStatus = getMatchStatus(matchData);

  const courtData = {
    price: matchData.price,
    tags: [],
    date: matchData.gameDate,
    startTime: matchData.slot.time,
    playtime: matchData.minutes,
    sport: matchData.sport,
    courtName: matchData.slot.court.title,
  };

  return (
    <>
      <SwipeablePage imageSlot={renderImageSlot} topSlot={renderTopSlot}>
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
              <Prompt matchData={matchData} isOwner={isUserOwner} />

              <Box
                display={isMobile ? 'block' : 'flex'}
                justifyContent={isMobile ? 'none' : 'center'}
              >
                <MatchDataBlock {...matchData} />
              </Box>

              <PrivacyType isPrivate={matchData.isPrivate} />

              <MatchType type={matchData.type} />

              <Box
                display={isMobile ? 'block' : 'flex'}
                justifyContent={isMobile ? 'none' : 'center'}
              >
                <Players
                  players={matchData.matchBookings}
                  isUserOwner={isUserOwner}
                  isUserAlredyInMatch={!!isUserAlredyInMatch}
                  matchStatus={matchStatus}
                />
              </Box>

              <Box display="flex" justifyContent="center" my={2}>
                <Button
                  sx={{
                    borderRadius: 20,
                    backgroundColor: '#2561F8',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: '#fff',
                    paddingX: 2,
                    paddingY: 1,
                  }}
                >
                  <ChatBubbleOutlineRounded fontSize="small" />
                  <Typography>Чат</Typography>
                </Button>
              </Box>

              <ClubInfoBlock data={matchData} />

              {matchData.matchResults && (
                <ResultsTable
                  winningTeam={matchData.winningTeam}
                  status={matchStatus}
                  matchResults={matchData.matchResults}
                />
              )}

              {matchStatus === Status.WAITING_FOR_RESULTS && (
                <Box
                  my={4}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  gap={3}
                  border="1px solid #ddd"
                  borderRadius={2}
                  bgcolor="#fff"
                  py={1.5}
                  px={1}
                >
                  <Typography fontSize={16} fontWeight={600} textAlign="center">
                    Матч завершён, загрузить хотите результаты?
                  </Typography>
                  <Button
                    onClick={() => setOpenUploadModal()}
                    variant="contained"
                    sx={{ borderRadius: 20, paddingX: 2 }}
                  >
                    Загрузить
                  </Button>
                </Box>
              )}

              <MatchInfoBlock data={matchData} />
            </Box>
          </Box>
          {isUserOwner || !!isUserAlredyInMatch || (
            <Box
              my={isMobile ? 'none' : 10}
              position={isMobile ? 'sticky' : 'static'}
              width="100%"
              bottom={0}
              py={2}
              display="flex"
              justifyContent="center"
              bgcolor="#fff"
            >
              <Button
                disabled={!isSlotSelected}
                onClick={() => setOpenCheckoutModal()}
                sx={{
                  backgroundColor: '#0d2432',
                  color: '#fff',
                  borderRadius: 20,
                  paddingX: 3,
                  '&:disabled': {
                    backgroundColor: '#eee',
                  },
                }}
              >
                Забронировать место - ₽
                {matchData.paid ? 0 : matchData.price / 4}
              </Button>
            </Box>
          )}
        </>
      </SwipeablePage>

      <CheckoutModal
        isJoin
        isPaid={!!matchData.paid}
        courtData={courtData}
        openState={openCheckoutModal}
        handleModal={setOpenCheckoutModal}
        handleCheckout={onBookSpot}
      />

      <UploadResultModal
        openState={openUploadModal}
        handleModal={() => setOpenUploadModal(false)}
        matchId={Number(matchId)}
      />

      <IonToast
        header={error ? 'Возникла ошибка' : ''}
        position="top"
        isOpen={openToast}
        message={error || 'Вы подтвердили результаты матча'}
        onDidDismiss={() => setOpenToast(false)}
        duration={2000}
        color={error ? 'danger' : 'success'}
      />
    </>
  );
};

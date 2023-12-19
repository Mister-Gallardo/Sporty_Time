import { useState } from 'react';
import { useParams } from 'react-router';
import { ArrowBackIosNewOutlined } from '@mui/icons-material';
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
import { MatchDataBlock } from './components/MatchDataBlock';
import { MatchInfoBlock } from './sections/MatchInfoBlock';
import { ClubInfoBlock } from './sections/ClubInfoBlock';
import { PrivacyType } from './components/PrivacyType';
import { MatchType } from './components/MatchType';
import { Players } from './components/Players';

enum PromptType {
  PRIMARY,
  WARNING,
  DANGER,
}

export const SingleMatchPage: React.FC = () => {
  const isMobile = isPlatform('mobile');
  const [showToast] = useIonToast();
  const { matchId } = useParams<{ matchId: string }>();
  const [error, setError] = useState<string | undefined>();
  const [openUploadModal, setOpenUploadModal] = useState<boolean>(false);
  const [openToast, setOpenToast] = useState<boolean>(false);

  // Get Particular Club Request
  const {
    data,
    isLoading,
    refetch: refetchMatch,
  } = useQuery({
    queryKey: [`match`, Number(matchId)],
    queryFn: () => getOneAvailableMatch(Number(matchId)),
  });

  const matchData = data?.data;

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

  // leave just for now
  if (!matchData) {
    console.log("Match with current id doesn't exist (cause it was hardcoded)");
    return null;
  }

  return (
    <>
      <SwipeablePage imageSlot={renderImageSlot()} topSlot={renderTopSlot()}>
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
            {/* <Prompt
              type={PromptType.PRIMARY}
              description="Some text"
              title="title"
            /> */}
            <Box
              display={isMobile ? 'block' : 'flex'}
              justifyContent={isMobile ? 'none' : 'center'}
            >
              <MatchDataBlock
                minutes={matchData.minutes}
                startTime={matchData.slot.time}
                sport={matchData.sport}
                ratingFrom={matchData.ratingFrom}
                ratingTo={matchData.ratingTo}
                date={matchData.gameDate}
                price={matchData.price}
                gender="All"
              />
            </Box>

            <PrivacyType isPrivate={matchData.isPrivate} />
            <MatchType type="COMPETITIVE" />

            <Box
              display={isMobile ? 'block' : 'flex'}
              justifyContent={isMobile ? 'none' : 'center'}
            >
              <Players players={matchData.matchBookings} />
            </Box>

            {/* <Box display="flex" justifyContent="center" my={2}>
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
            </Box> */}

            {/* {matchData.matchResults && (
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
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingBottom: '.5rem',
                  }}
                >
                  <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
                    {matchData.matchResults[0][0]}
                  </Typography>
                  <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
                    {matchData.matchResults[1][0]}
                  </Typography>
                  <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
                    {matchData.matchResults[2][0]}
                  </Typography>
                </Box>

                <Box
                  sx={{ width: '100%', height: '1px', background: '#e5e5e5' }}
                />

                <Box sx={{ display: 'flex', gap: '1.75rem', opacity: '.5' }}>
                  <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
                    {matchData.matchResults[0][1]}
                  </Typography>
                  <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
                    {matchData.matchResults[1][1]}
                  </Typography>
                  <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
                    {matchData.matchResults[2][1]}
                  </Typography>
                </Box>
              </Box>
            )}

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
                    background: '#0D2432',
                    borderRadius: '25px',
                    color: '#fff',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    boxShadow:
                      'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;',
                    paddingX: 2,
                  }}
                >
                  {joinMatchMutation.isPending ? (
                    <CircularProgress />
                  ) : (
                    `Забронировать место - ₽ ${matchData.price || ''}`
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
            )} */}
            <ClubInfoBlock data={matchData} />
            <MatchInfoBlock data={matchData} />
          </Box>
        </Box>
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
            disabled
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
            Забронировать место - ₽ {matchData.price || ''}
          </Button>
        </Box>
      </SwipeablePage>

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
};

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { UploadResultModal } from '../../../components/modals/UploadResultModal';
import { MyMatchCard } from '../../../components/molecules/match-cards/MyMatchCard';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { getMyMatches } from '../../../services/matches/service';
import { Box, Switch, Typography } from '@mui/material';
import useToggle from '../../../hooks/useToggle';
import { isPlatform } from '@ionic/react';
import { NotFoundPage } from '../../../components/NotFoundPage';

export function MyMatchesTab() {
  const isMobile = isPlatform('mobile');

  const [showCanceled, setShowCanceled] = useToggle();

  const { data, isLoading } = useQuery({
    queryKey: ['my-matches', showCanceled],
    queryFn: () => getMyMatches(showCanceled),
  });

  const myMatchesData = data?.data;

  const [openUploadResultModal, setOpenUploadResultModal] = useToggle();
  const [matchId, setMatchId] = useState<number>();

  const uploadResults = (id: number) => {
    setMatchId(id);
    setOpenUploadResultModal();
  };

  if (!myMatchesData && !isLoading) return <NotFoundPage />;

  return (
    <Box position="relative">
      <Box
        position={isMobile ? 'fixed' : 'unset'}
        zIndex={1}
        width="100%"
        bgcolor="#fff"
        borderBottom="1px solid #eaeaea"
        px={2}
        py={0.5}
        display="flex"
        alignItems="center"
        justifyContent={isMobile ? 'space-between' : 'center'}
      >
        <Typography fontWeight={600}>Показать отменённые матчи</Typography>
        <Switch value={showCanceled} onChange={() => setShowCanceled()} />
      </Box>

      <Box px={1} py={3} pt={8}>
        <Box
          display="flex"
          flexDirection={isMobile ? 'column' : 'unset'}
          justifyContent="center"
          flexWrap="wrap"
          width="100%"
          maxWidth={isMobile ? 'unset' : 1240}
          gap={1.5}
        >
          {isLoading ? (
            <LoadingCircle />
          ) : myMatchesData?.length === 0 ? (
            <Typography textAlign="center" width="100%" mt={3} color="gray">
              На данный момент история матчей пуста, но в любой момент вы можете
              забронировать корт и начать играть!
            </Typography>
          ) : (
            myMatchesData
              ?.map((card) => {
                return (
                  <MyMatchCard
                    key={card.id}
                    {...card}
                    uploadResults={uploadResults}
                  />
                );
              })
              ?.reverse()
          )}
        </Box>
        <UploadResultModal
          matchId={matchId}
          openState={openUploadResultModal}
          handleModal={setOpenUploadResultModal}
        />
      </Box>
    </Box>
  );
}

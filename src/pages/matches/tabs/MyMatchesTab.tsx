import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { UploadResultModal } from '../../../components/modals/UploadResultModal';
import { MyMatchCard } from '../../../components/molecules/MyMatchCard';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { getMyMatches } from '../../../services/matches/service';
import useToggle from '../../../hooks/useToggle';
import { Box, Typography } from '@mui/material';
import { isPlatform } from '@ionic/react';

export function MyMatchesTab() {
  const isMobile = isPlatform('mobile');

  const { data, isLoading } = useQuery({
    queryKey: ['my-matches'],
    queryFn: getMyMatches,
  });

  const myMatchesData = data?.data;

  const [openUploadResultModal, setOpenUploadResultModal] = useToggle();
  const [matchId, setMatchId] = useState<number>();

  const uploadResults = (id: number) => {
    setMatchId(id);
    setOpenUploadResultModal();
  };

  return (
    <Box px={1} py={3}>
      <Box
        display="flex"
        flexDirection={isMobile ? 'column' : 'unset'}
        justifyContent={isMobile ? 'unset' : 'center'}
        flexWrap="wrap"
        width="100%"
        maxWidth={isMobile ? 'unset' : 1000}
        gap={1.5}
      >
        {isLoading ? (
          <LoadingCircle />
        ) : (
          !myMatchesData ||
          (myMatchesData.length === 0 ? (
            <Typography textAlign="center" width="100%" mt={3} color="gray">
              На данный момент история матчей пуста, но в любой момент вы можете
              забронировать корт и начать играть!
            </Typography>
          ) : (
            myMatchesData.map((card) => {
              return (
                <MyMatchCard
                  key={card.id}
                  {...card}
                  uploadResults={uploadResults}
                />
              );
            })
          ))
        )}
      </Box>
      <UploadResultModal
        matchId={matchId}
        openState={openUploadResultModal}
        handleModal={setOpenUploadResultModal}
      />
    </Box>
  );
}

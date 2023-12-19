import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { IonLoading } from '@ionic/react';
import { UploadResultModal } from '../../../components/modals/UploadResultModal';
import { MyMatchCard } from '../../../components/molecules/MyMatchCard';
import { getMyMatches } from '../../../services/matches/service';
import useToggle from '../../../hooks/useToggle';
import { Box, Typography } from '@mui/material';

export function MyMatchesTab() {
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

  if (isLoading) {
    return <IonLoading isOpen />;
  }

  return (
    <Box px={1} py={3} display="flex" flexDirection="column" gap={1.5}>
      {(myMatchesData?.length === 0 || !data) && (
        <Typography textAlign="center" mt={3} color="gray">
          На данный момент история матчей пуста, но в любой момент вы можете
          забронировать корт и начать играть!
        </Typography>
      )}

      {myMatchesData?.map((card) => (
        <MyMatchCard
          key={card.id}
          confirmedByAllResult={!!card.matchResults}
          {...card}
          uploadResults={uploadResults}
        />
      ))}

      <UploadResultModal
        matchId={matchId}
        openState={openUploadResultModal}
        handleModal={setOpenUploadResultModal}
      />
    </Box>
  );
}

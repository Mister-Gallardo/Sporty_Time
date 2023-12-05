import { IonLoading } from '@ionic/react';
import { Box } from '@mui/material';
import { MyMatchCard } from '../../components/molecules/MyMatchCard';
import { getMyMatches } from '../../services/matches/service';
import { useQuery } from '@tanstack/react-query';

interface IMyMatchesTabProps {}

export function MyMatchesTab({}: IMyMatchesTabProps) {
  const { data, isLoading } = useQuery({
    queryKey: ['my-matches'],
    queryFn: getMyMatches,
  });

  const myMatchesData = data?.data;

  if (isLoading) {
    return <IonLoading trigger="open-loading" />;
  }

  return (
    <Box
      sx={{
        width: '100%',
        background: '#fff',
        paddingBlock: '1.25rem',
      }}
    >
      <Box
        sx={{
          width: '100%',
          placeItems: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        {myMatchesData?.map((card) => (
          <MyMatchCard
            noResult={!card.matchResults || card.confirmMatchResults}
            {...card}
          />
        ))}
      </Box>
    </Box>
  );
}

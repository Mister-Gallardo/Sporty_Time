import { IonLoading, isPlatform } from '@ionic/react';
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
        paddingInline: isPlatform('mobile') ? '10px' : '2rem',
        background: '#fff',
        paddingBlock: '1.25rem',
      }}
    >
      <Box
        sx={{
          maxWidth: '99%',
          margin: '0 auto',
          placeItems: 'center',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
          gap: '1rem',
        }}
      >
        {myMatchesData?.map((card) => (
          <MyMatchCard noResult={card.matchResults} {...card} />
        ))}
      </Box>
    </Box>
  );
}

import { IonLoading } from '@ionic/react';
import { Box, Typography } from '@mui/material';
import { MyMatchCard } from '../../../components/molecules/MyMatchCard';
import { getMyMatches } from '../../../services/matches/service';
import { useQuery } from '@tanstack/react-query';

interface IMyMatchesTabProps {}

export function MyMatchesTab({}: IMyMatchesTabProps) {
  const { data, isLoading } = useQuery({
    queryKey: ['my-matches'],
    queryFn: getMyMatches,
  });

  const myMatchesData = data?.data;

  if (isLoading) {
    return <IonLoading isOpen />;
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
        {(data?.data.length === 0 || !data) && (
          <Typography
            sx={{
              fontSize: '1.1rem',
              paddingTop: '1.5rem',
              margin: '0 auto',
              fontWeight: '600',
            }}
          >
            Начните или присоединитесь к матчу.
          </Typography>
        )}

        {myMatchesData?.map((card) => (
          <MyMatchCard confirmedByAllResult={!!card.matchResults} {...card} />
        ))}
      </Box>
    </Box>
  );
}

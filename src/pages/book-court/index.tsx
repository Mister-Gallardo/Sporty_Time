import { isPlatform } from '@ionic/react';
import { Box } from '@mui/material';
import { CourtCard } from '../../components/molecules/CourtCard';
import { getClubs } from '../../services/club/service';
import { useQuery } from '@tanstack/react-query';

export function BookCourt() {
  const isMobile = isPlatform('mobile');
  const { data } = useQuery({ queryKey: ['clubs'], queryFn: getClubs });

  return (
    <>
      <Box
        sx={{
          paddingTop: '1.25rem',
          paddingInline: isMobile ? '0' : '10px',
          display: 'grid',
          alignContent: 'center',
          gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
          marginTop: '.5rem',
          gap: '1rem',
        }}
      >
        {data?.map((club) => (
          <CourtCard club={club} />
        ))}
      </Box>
    </>
  );
}

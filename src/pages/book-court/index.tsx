import { IonSpinner, isPlatform } from '@ionic/react';
import { Box, Stack } from '@mui/material';
import { ClubCard } from '../../components/molecules/ClubCard';
import { getClubs } from '../../services/club/service';
import { useQuery } from '@tanstack/react-query';

export function BookCourt() {
  const isMobile = isPlatform('mobile');
  const { data, isLoading } = useQuery({
    queryKey: ['clubs'],
    queryFn: getClubs,
  });

  if (isLoading)
    return (
      <Stack alignItems="center" mt={5}>
        <IonSpinner />
      </Stack>
    );

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
          maxWidth: 1240,
          mx: 'auto',
        }}
      >
        {data?.map((club) => (
          <ClubCard club={club} />
        ))}
      </Box>
    </>
  );
}

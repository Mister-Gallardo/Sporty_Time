import { isPlatform } from '@ionic/react';
import { Box } from '@mui/material';
import { MyMatchCard } from '../../components/molecules/MyMatchCard';

interface IMyMatchesTabProps {}

export function MyMatchesTab(props: IMyMatchesTabProps) {
  return (
    <Box
      sx={{
        marginBottom: isPlatform('mobile') ? '4rem' : '0',
        paddingInline: isPlatform('mobile') ? '10px' : '2rem',
        background: '#fff',
        paddingBlock: '1.25rem',
        minHeight: '100vh',
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
        {Array.from('1234567890').map(() => (
          <MyMatchCard />
        ))}
      </Box>
    </Box>
  );
}

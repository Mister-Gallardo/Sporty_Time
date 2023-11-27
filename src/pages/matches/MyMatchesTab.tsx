import { isPlatform } from '@ionic/react';
import { Box } from '@mui/material';
import { MyMatchCard } from '../../components/molecules/MyMatchCard';

interface IMyMatchesTabProps {}

export function MyMatchesTab(props: IMyMatchesTabProps) {
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
        {Array.from('12').map(() => (
          <MyMatchCard noResult={false} />
        ))}
        <MyMatchCard noResult />
      </Box>
    </Box>
  );
}

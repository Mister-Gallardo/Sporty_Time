import { Box } from '@mui/material';
import DesktopHeader from '../../../components/DesktopHeader';
import { Hero } from './sections/Hero';

export function DesktopHomePage() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '95vh',
        background:
          'url("https://res.cloudinary.com/playtomic/image/upload/q_auto,f_auto/v1649677895/playtomic/web/banner.webp") center no-repeat;',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          paddingInline: '15px',
        }}
      >
        <DesktopHeader />
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1240px',
          height: '80vh',
          margin: '0 auto',
          paddingInline: '15px',
        }}
      >
        <Hero />
      </Box>
    </Box>
  );
}

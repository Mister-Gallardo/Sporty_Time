import { Box } from '@mui/material';

import RememberSection from './sections/RememberSection';
import PerfectMatch from './sections/PerfectMatch';
import YourClubs from './sections/YourClubs';
import GetTheMost from './sections/GetTheMost';
import MobileHeader from '../../../components/MobileHeader';

function MobilePlayPage() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '450px',
        margin: '0 auto',
        paddingInline: '15px',
      }}
    >
      <MobileHeader />
      <Box sx={{ paddingTop: '10%' }}>
        <RememberSection />
        <PerfectMatch />
        <YourClubs />
        <GetTheMost />
      </Box>
    </Box>
  );
}

export default MobilePlayPage;

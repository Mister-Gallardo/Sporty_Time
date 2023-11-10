import { Box } from '@mui/material';

import RememberSection from './sections/RememberSection';
import PerfectMatch from './sections/PerfectMatch';
import YourClubs from './sections/YourClubs';
import GetTheMost from './sections/GetTheMost';
import MobileHeader from '../../../components/MobileHeader';
import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';

function MobilePlayPage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <MobileHeader />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Box
          sx={{
            width: '100%',
            maxWidth: '450px',
            margin: '0 auto',
            paddingInline: '15px',
          }}
        >
          <Box>
            <RememberSection />
            <PerfectMatch />
            <YourClubs />
            <GetTheMost />
          </Box>
        </Box>
      </IonContent>
    </IonPage>
  );
}

export default MobilePlayPage;

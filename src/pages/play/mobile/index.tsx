import { Box } from '@mui/material';
import PerfectMatch from './sections/PerfectMatch';
import YourClubs from './sections/YourClubs';
import MobileHeader from './sections/MobileHeader';
import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';

function MobilePlayPage() {
  return (
    <IonPage>
      <IonHeader style={{ boxShadow: '0px 1px 4px #0000001a' }}>
        <IonToolbar>
          <MobileHeader />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Box
          pb={10}
          sx={{
            width: '100%',
            maxWidth: '450px',
            margin: '0 auto',
            paddingInline: '15px',
          }}
        >
          <Box>
            {/* <RememberSection /> */}
            <PerfectMatch />
            <YourClubs />
            {/* <GetTheMost /> */}
          </Box>
        </Box>
      </IonContent>
    </IonPage>
  );
}

export default MobilePlayPage;

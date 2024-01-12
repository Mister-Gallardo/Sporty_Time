import { useEffect, useState } from 'react';
import { isPlatform } from '@ionic/react';
import { AvailableMatchesTab } from './tabs/AvailableMatchesTab';
import { TabList } from '../../components/molecules/TabList';
import { MyMatchesTab } from './tabs/MyMatchesTab';
import { TabContext, TabPanel } from '@mui/lab';
import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useHistory } from 'react-router';
import { Geolocation } from '@capacitor/geolocation';

export function MatchesPage() {
  const isMobile = isPlatform('mobile');

  useEffect(() => {
    Geolocation.getCurrentPosition().then(console.log);
  }, []);

  const history = useHistory();
  const [tabIndex, setTabIndex] = useState<string>('1');

  // const printCurrentPosition = async () => {
  //   const coordinates = await Geolocation.getCurrentPosition();

  //   console.log('Current position:', coordinates);
  // };

  return (
    <>
      {/* <Button onClick={printCurrentPosition}>TEST</Button> */}
      <Box
        maxWidth={1240}
        mx="auto"
        mt={isMobile ? 0 : 5}
        pb={10}
        bgcolor="#fff"
      >
        <TabContext value={tabIndex}>
          <TabList
            tabs={['Доступные', 'Ваши матчи']}
            onChange={(_, tabIdx) => setTabIndex(tabIdx)}
          />
          <TabPanel value="1" sx={{ p: 0 }}>
            <AvailableMatchesTab />
          </TabPanel>
          <TabPanel value="2" sx={{ p: 0 }}>
            <MyMatchesTab />
          </TabPanel>

          <Box
            sx={{
              position: 'fixed',
              bottom: '1.5rem',
              left: '0',
              right: '0',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {tabIndex === '1' && (
              <Button
                variant="contained"
                onClick={() => history.push('/book-court')}
                sx={{ borderRadius: 20 }}
              >
                <Add />
                Начать матч
              </Button>
            )}
          </Box>
        </TabContext>
      </Box>
    </>
  );
}

import { isPlatform } from '@ionic/react';
import { Box, Tab } from '@mui/material';
import { useState } from 'react';
import { AvailableMatchesTab } from './AvailableMatchesTab';
import { Button } from '../../components/atoms/Button';
import { Add } from '@mui/icons-material';
import { MyMatchesTab } from './MyMatchesTab';
import { UploadResultModal } from '../../components/modals/UploadResultModal';
import { TabContext, TabList, TabPanel } from '@mui/lab';

interface IMatchesPageProps {}

export function MatchesPage({}: IMatchesPageProps) {
  const [tabIndex, setTabIndex] = useState<string>('1');
  const [openUploadModal, setOpenUploadModal] = useState<boolean>(false);
  const isMobile = isPlatform('mobile');

  function handLeOpenUploadModal() {
    setOpenUploadModal((prev) => !prev);
  }

  return (
    <Box maxWidth={1240} mx="auto">
      <TabContext value={tabIndex}>
        <Box sx={{ marginTop: isMobile ? '0' : '1rem' }}>
          <TabList
            sx={{
              margin: '0 auto',
              maxWidth: '96%',
              position: 'sticky',
              top: 'calc(var(--ion-safe-area-top) - 60px)',
              background: 'white',
              zIndex: 100,
            }}
            onChange={(e, value) => setTabIndex(value)}
          >
            <Tab
              value="1"
              disableRipple={!isMobile}
              label={'Доступные'}
              sx={{ flexGrow: 1 }}
            />
            <Tab
              value="2"
              disableRipple={!isMobile}
              label={'Ваши матчи'}
              sx={{ flexGrow: 1 }}
            />
          </TabList>
          <TabPanel value="1" sx={{ p: 0 }}>
            <AvailableMatchesTab />
          </TabPanel>
          <TabPanel value="2" sx={{ p: 0 }}>
            <MyMatchesTab />
          </TabPanel>
        </Box>
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
              sx={{
                fontSize: '1.1rem',
                fontWeight: '500',
                maxWidth: '225px',
                borderRadius: '28px',
                height: '45px',
                boxShadow:
                  'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;',
              }}
            >
              <Add />
              Начать матч
            </Button>
          )}
        </Box>
        <UploadResultModal
          openState={openUploadModal}
          handleModal={handLeOpenUploadModal}
        />
      </TabContext>
    </Box>
  );
}

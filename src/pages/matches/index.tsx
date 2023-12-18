import { useState } from 'react';
import { isPlatform } from '@ionic/react';
import { AvailableMatchesTab } from './tabs/AvailableMatchesTab';
import { TabList } from '../../components/molecules/TabList';
import { Button } from '../../components/atoms/Button';
import { MyMatchesTab } from './tabs/MyMatchesTab';
import { TabContext, TabPanel } from '@mui/lab';
import { Add } from '@mui/icons-material';
import { useHistory } from 'react-router';
import { Box } from '@mui/material';

interface IMatchesPageProps {}

export function MatchesPage({}: IMatchesPageProps) {
  const isMobile = isPlatform('mobile');

  const history = useHistory();
  const [tabIndex, setTabIndex] = useState<string>('1');

  return (
    <Box maxWidth={1240} mx="auto" mt={isMobile ? 0 : 5} mb={10}>
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
              onClick={() => history.push('/book-court')}
              sx={{
                backgroundColor: '#1976d2',
                maxWidth: '225px',
                boxShadow:
                  'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;',
              }}
            >
              <Add />
              Начать матч
            </Button>
          )}
        </Box>
      </TabContext>
    </Box>
  );
}

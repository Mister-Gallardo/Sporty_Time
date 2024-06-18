import { isPlatform } from '@ionic/react';
import { TabContext, TabPanel } from '@mui/lab';
import { Box } from '@mui/material';
import { useSearchParam } from '../../hooks/useSearchParams';
import { TabList } from '../../components/molecules/TabList';
import { AvailableClassesTab } from './tabs/AvailableClassesTab';
import { MyClassesTab } from './tabs/MyClassesTab';

const isMobile = isPlatform('mobile');

export function ClassesPage() {
  const [tabIndex, setTabIndex] = useSearchParam('tab', '1');

  return (
    <Box width="100%" maxWidth={1240} mx="auto" bgcolor="#fff">
      <TabContext value={tabIndex}>
        <Box
          width={isMobile ? 'unset' : '100%'}
          mt={isMobile ? 0 : 4}
          display={isMobile ? 'unset' : 'flex'}
          justifyContent={isMobile ? 'unset' : 'center'}
        >
          <TabList
            tabs={['Доступные', 'Ваши занятия']}
            onChange={(_, tabIdx) => setTabIndex(tabIdx)}
          />
        </Box>
        <TabPanel value="1" sx={{ py: 0, px: 2 }}>
          <AvailableClassesTab />
        </TabPanel>
        <TabPanel value="2" sx={{ py: 0, px: 2 }}>
          <MyClassesTab />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

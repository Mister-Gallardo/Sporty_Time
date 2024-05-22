import { Box } from '@mui/material';
import { isPlatform } from '@ionic/react';
import { TabContext, TabPanel } from '@mui/lab';
import { TabList } from '../../../../components/molecules/TabList';
import { useSearchParam } from '../../../../hooks/useSearchParams';
import { CompletedPayments } from './tabs/CompletedPayments';
import { Debts } from './tabs/Debts';

const isMobile = isPlatform('mobile');

export function PaymentsPage() {
  const [tabIndex, setTab] = useSearchParam('tab', '1');

  return (
    <Box
      width="100%"
      maxWidth={1240}
      m="0 auto"
      mt={isMobile ? 2 : 4}
      mb={4}
      px={2}
    >
      <TabContext value={tabIndex}>
        <Box
          width={isMobile ? 'unset' : '100%'}
          display={isMobile ? 'unset' : 'flex'}
          justifyContent={isMobile ? 'unset' : 'center'}
        >
          <TabList
            tabs={['Совершённые платежи', 'Задолженности']}
            onChange={(_, value) => setTab(value)}
          />
        </Box>

        <TabPanel value="1" sx={{ p: 0 }}>
          <CompletedPayments />
        </TabPanel>

        <TabPanel value="2" sx={{ p: 0 }}>
          <Debts />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
export default PaymentsPage;

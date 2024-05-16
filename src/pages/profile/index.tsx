import { TabContext, TabPanel } from '@mui/lab';
import { Box } from '@mui/material';
import { useUserInfo } from '../../services/api/hooks';
import ActivitiesTab from './tabs/ActivitiesTab';
import { IonLoading, isPlatform } from '@ionic/react';
import FeedbackTab from './tabs/FeedbackTab';
import { NotFoundPage } from '../../components/NotFoundPage';
import { UserData } from './components/UserData';
import { Role } from '../../services/user/interface';
import { useSearchParam } from '../../hooks/useSearchParams';
import { TabList } from '../../components/molecules/TabList';

const isMobile = isPlatform('mobile');

export function ProfilePage() {
  const [tabIndex, setTab] = useSearchParam('tab', '1');

  const [user, rest] = useUserInfo();

  const isTrainer = user?.roles?.find((role) => role === Role.TRAINER);

  if (rest.isLoading) return <IonLoading isOpen />;
  if (rest.isError) return <NotFoundPage />;

  return (
    <Box py={isMobile ? 3 : 5} maxWidth={1240} mx="auto" px={2}>
      <UserData
        name={user?.fullname}
        avatar={user?.avatar?.formats?.small}
        isMyUser
        isTrainer={!!isTrainer}
      />

      <TabContext value={tabIndex}>
        {isTrainer && (
          <Box
            width={isMobile ? 'unset' : '100%'}
            display={isMobile ? 'unset' : 'flex'}
            justifyContent={isMobile ? 'unset' : 'center'}
          >
            <TabList
              tabs={['Активность', 'Отзывы']}
              onChange={(_, value) => setTab(value)}
            />
          </Box>
        )}

        <TabPanel value="1" sx={{ p: 0 }}>
          <ActivitiesTab />
        </TabPanel>
        {isTrainer && (
          <TabPanel value="2" sx={{ p: 0 }}>
            <FeedbackTab />
          </TabPanel>
        )}
      </TabContext>
    </Box>
  );
}

export default ProfilePage;

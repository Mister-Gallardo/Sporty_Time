import { useState } from 'react';
import { TabContext, TabPanel } from '@mui/lab';
import { Box } from '@mui/material';
import { useUserInfo } from '../../services/api/hooks';
import ActivitiesTab from './tabs/ActivitiesTab';
import { IonLoading, isPlatform } from '@ionic/react';
import PostsTab from './tabs/PostsTab';
import { NotFoundPage } from '../../components/NotFoundPage';
import { UserData } from './components/UserData';
import { Role } from '../../services/user/interface';

const isMobile = isPlatform('mobile');

export function ProfilePage() {
  const [tabIndex] = useState<string>('1');

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
        <TabPanel value="1" sx={{ p: 0 }}>
          <ActivitiesTab />
        </TabPanel>
        <TabPanel value="2" sx={{ p: 0 }}>
          <PostsTab />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default ProfilePage;

import { useState } from 'react';
import { TabContext, TabPanel } from '@mui/lab';
import { Box } from '@mui/material';
import { useUserInfo } from '../../../services/api/hooks';
import ActivitiesTab from '../tabs/ActivitiesTab';
import { IonLoading, isPlatform } from '@ionic/react';
import PostsTab from '../tabs/PostsTab';
import { NotFoundPage } from '../../../components/NotFoundPage';
import { UserData } from '../components/UserData';
import { useParams } from 'react-router';

const isMobile = isPlatform('mobile');

export function SpecificProfilePage() {
  const { userId } = useParams<{ userId: string }>();
  const [tabIndex] = useState<string>('1');

  //get user by id
  const [user, rest] = useUserInfo();
  const fullname = user ? user.firstname + ' ' + user.lastname : '';

  if (rest.isLoading) return <IonLoading isOpen />;
  if (rest.isError) return <NotFoundPage />;

  return (
    <Box py={isMobile ? 2 : 5} maxWidth={1240} mx="auto" px={isMobile ? 2 : 10}>
      <UserData name="Pip" avatar="" />

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

export default SpecificProfilePage;

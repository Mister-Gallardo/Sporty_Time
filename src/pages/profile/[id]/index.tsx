// import { useState } from 'react';
// import { TabContext, TabPanel } from '@mui/lab';
import { Box } from '@mui/material';
// import ActivitiesTab from '../tabs/ActivitiesTab';
import { IonLoading, isPlatform } from '@ionic/react';
// import PostsTab from '../tabs/PostsTab';
import { NotFoundPage } from '../../../components/NotFoundPage';
import { UserData } from '../components/UserData';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getSpecificUser } from '../../../services/user/service';

const isMobile = isPlatform('mobile');

export function SpecificProfilePage() {
  const { userId } = useParams<{ userId: string }>();
  // const [tabIndex] = useState<string>('1');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['users', userId],
    queryFn: () => getSpecificUser(+userId),
  });

  const user = data?.data;

  if (isLoading) return <IonLoading isOpen />;
  if (isError) return <NotFoundPage />;

  return (
    <Box py={isMobile ? 2 : 5} maxWidth={1240} mx="auto" px={isMobile ? 2 : 10}>
      <UserData name={user?.fullname} avatar="" />

      {/* <TabContext value={tabIndex}>
        <TabPanel value="1" sx={{ p: 0 }}>
          <ActivitiesTab />
        </TabPanel>
        <TabPanel value="2" sx={{ p: 0 }}>
          <PostsTab />
        </TabPanel>
      </TabContext> */}
    </Box>
  );
}

export default SpecificProfilePage;

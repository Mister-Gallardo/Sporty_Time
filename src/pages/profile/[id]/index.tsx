import { TabContext, TabPanel } from '@mui/lab';
import { Box, Button, Typography } from '@mui/material';
import ActivitiesTab from '../tabs/ActivitiesTab';
import { IonLoading, isPlatform } from '@ionic/react';
import { NotFoundPage } from '../../../components/NotFoundPage';
import { UserData } from '../components/UserData';
import { useHistory, useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getSpecificUser } from '../../../services/user/service';
import { withHostname } from '../../../services/api/service';
import { useUserInfo } from '../../../services/api/hooks';
import { Role } from '../../../services/user/interface';
import { TabList } from '../../../components/molecules/TabList';
import FeedbackTab from '../tabs/FeedbackTab';
import { useSearchParam } from '../../../hooks/useSearchParams';

const isMobile = isPlatform('mobile');

export function SpecificProfilePage() {
  const [tabIndex, setTab] = useSearchParam('tab', '1');

  const [user] = useUserInfo();
  const history = useHistory();

  const { userId } = useParams<{ userId: string }>();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['users', userId],
    queryFn: () => getSpecificUser(+userId),
    retry: 1,
  });

  const userData = data?.data;
  const isTrainer = userData?.roles?.find((role) => role === Role.TRAINER);

  if (isLoading) return <IonLoading isOpen />;
  if (userId === 'undefined')
    return (
      <Box
        height="60vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h5" mb={3}>
          Профиль не найден
        </Typography>
        <Button onClick={() => history.push('/')} variant="contained">
          Вернуться на главную страницу
        </Button>
      </Box>
    );
  if (isError) return <NotFoundPage />;

  return (
    <Box py={isMobile ? 2 : 5} maxWidth={1240} mx="auto" px={isMobile ? 2 : 10}>
      <UserData
        name={userData?.fullname}
        avatar={withHostname(userData?.avatar?.formats?.small || '')}
        isMyUser={+userId === user?.id}
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

export default SpecificProfilePage;

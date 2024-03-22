import React, { useState } from 'react';
import { TabContext, TabPanel } from '@mui/lab';
import { Avatar, Box, Button, Divider, Typography } from '@mui/material';
import { useFullUserData } from '../../services/api/hooks';
import ActivitiesTab from './tabs/ActivitiesTab';
import { IonButton, IonButtons, IonLoading, isPlatform } from '@ionic/react';
import PostsTab from './tabs/PostsTab';
import { useHistory } from 'react-router';
import { NotFoundPage } from '../../components/NotFoundPage';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { AccountInfoCount } from './components/AccountInfoCount';
import { withHostname } from '../../services/api/service';

const isMobile = isPlatform('mobile');

export function ProfilePage() {
  const history = useHistory();

  const [tabIndex] = useState<string>('1');

  const [profile, rest] = useFullUserData();

  const fullname = profile
    ? profile.user.firstname + ' ' + profile.user.lastname
    : '';

  if (rest.isLoading) return <IonLoading isOpen />;
  if (rest.isError) return <NotFoundPage />;

  return (
    <>
      <Box padding={2} maxWidth={1240} mx="auto">
        <Box display="flex" alignItems="end">
          <Avatar
            alt={fullname}
            src={withHostname(profile?.user?.avatar?.formats?.small || '')}
            sx={{ width: 60, height: 60 }}
          />

          <Typography ml={2} fontSize="medium" fontWeight={700}>
            {fullname}
          </Typography>
          {isPlatform('desktop') && (
            <Box ml="auto">
              <IonButtons slot="end">
                <IonButton onClick={() => history.push('/chats')}>
                  <ChatBubbleOutlineRoundedIcon sx={{ color: '#000' }} />
                </IonButton>
                <IonButton onClick={() => history.push('/profile/navigation')}>
                  <MenuRoundedIcon sx={{ color: '#000' }} />
                </IonButton>
              </IonButtons>
            </Box>
          )}
        </Box>

        <Box
          mt={1}
          display="flex"
          justifyContent={isMobile ? 'unset' : 'center'}
          alignItems="center"
        >
          <AccountInfoCount
            title="Матчи"
            count={profile?.countMatches || 0}
            navPath="/matches?tab=2"
          />
          <Divider flexItem orientation="vertical" variant="middle" />
          <AccountInfoCount title="Подписчики" count={0} />
          <Divider flexItem orientation="vertical" variant="middle" />
          <AccountInfoCount title="Подписки" count={0} />
        </Box>

        <Box
          display="flex"
          marginTop={3}
          gap={1}
          maxWidth={isMobile ? '100%' : '50vw'}
          marginX="auto"
        >
          <Button
            onClick={() => history.push('/profile/edit')}
            variant="contained"
            sx={{
              minWidth: isMobile ? 'unset' : 170,
              border: '1px solid #333',
              backgroundColor: '#fff',
              color: '#333',
              fontSize: 15,
              paddingY: 0.25,
              borderRadius: 10,
              whiteSpace: 'nowrap',
              '&:hover': {
                backgroundColor: '#eee',
              },
            }}
            fullWidth
          >
            Изменить профиль
          </Button>
        </Box>
      </Box>

      <TabContext value={tabIndex}>
        <Box maxWidth={1240} mx="auto">
          <TabPanel value="1" sx={{ p: 0 }}>
            <ActivitiesTab />
          </TabPanel>
          <TabPanel value="2" sx={{ p: 0 }}>
            <PostsTab />
          </TabPanel>
        </Box>
      </TabContext>
    </>
  );
}

export default ProfilePage;

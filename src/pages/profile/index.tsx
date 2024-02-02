import React, { useState } from 'react';
import { TabContext, TabPanel } from '@mui/lab';
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Typography,
} from '@mui/material';
import { useFullUserData } from '../../services/api/hooks';
import ActivitiesTab from './tabs/ActivitiesTab';
import { IonLoading, isPlatform } from '@ionic/react';
import PostsTab from './tabs/PostsTab';
import { useHistory } from 'react-router';
import { NotFoundPage } from '../../components/NotFoundPage';
import { BASE_URL } from '../../services/api/service';

export function ProfilePage() {
  const isMobile = isPlatform('mobile');
  const history = useHistory();

  const [tabIndex, setTabIndex] = useState<string>('1');

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
            src={`${BASE_URL}${profile?.user?.avatar}`}
            sx={{ width: 60, height: 60 }}
          />

          <Typography ml={2} fontSize="medium" fontWeight={700}>
            {fullname}
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent={isMobile ? 'space-evenly' : 'center'}
          alignItems="center"
        >
          {['Matches', 'Followers', 'Following'].map((item) => {
            return (
              <React.Fragment key={item}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  width="100%"
                  maxWidth={isMobile ? '100%' : '150px'}
                  color="#333"
                >
                  {rest.isLoading ? (
                    <CircularProgress size={20} />
                  ) : (
                    <Typography fontSize={23}>
                      {item === 'Matches' ? profile?.countMatches : 0}
                    </Typography>
                  )}

                  <Typography>{item}</Typography>
                </Box>

                {item === 'Following' || (
                  <Box
                    sx={{
                      height: isMobile ? 20 : 35,
                      borderRight: '1px solid #ddd',
                    }}
                  ></Box>
                )}
              </React.Fragment>
            );
          })}
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
          {/* <Button
            // disabled
            variant="contained"
            color="inherit"
            sx={{
              // backgroundColor: '#0d2432',
              // color: 'gold',
              fontSize: 15,
              paddingY: 0.25,
              borderRadius: 10,
              whiteSpace: 'nowrap',
              '&:hover': {
                // backgroundColor: '#123347',
              },
            }}
            fullWidth
          >
            Go Premium
          </Button> */}
        </Box>
      </Box>

      <TabContext value={tabIndex}>
        <Box maxWidth={1240} mx="auto">
          {/* <TabList
            tabs={['Activities', 'Posts']}
            onChange={(_, value) => setTabIndex(value)}
          /> */}
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

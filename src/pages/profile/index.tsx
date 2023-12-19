import React, { useState } from 'react';
import { TabContext, TabPanel } from '@mui/lab';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { useUserInfo } from '../../services/api/hooks';
import ActivitiesTab from './tabs/ActivitiesTab';
import { isPlatform } from '@ionic/react';
import PostsTab from './tabs/PostsTab';

export function ProfilePage() {
  const isMobile = isPlatform('mobile');

  const [tabIndex, setTabIndex] = useState<string>('1');

  const user = useUserInfo();
  const fullname = user && user.firstname + ' ' + user.lastname;

  return (
    <>
      <Box padding={2}>
        <Box display="flex" alignItems="end">
          <Avatar
            alt={fullname}
            src="/static/images/avatar/1.jpg"
            sx={{ width: 60, height: 60 }}
          />
          <Box marginLeft={2}>
            <Typography fontSize="medium" fontWeight={700}>
              {fullname}
            </Typography>
            <Button
              disabled
              variant="text"
              sx={{
                fontSize: 14,
                fontWeight: 700,
                padding: 0,
                color: '#1976d2',
              }}
            >
              Add my location
            </Button>
          </Box>
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
                  <Typography fontSize={23}>0</Typography>
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
            disabled
            variant="contained"
            sx={{
              border: '1px solid #333',
              backgroundColor: '#fff',
              color: '#333',
              fontSize: 15,
              paddingY: 0.25,
              borderRadius: 10,
              '&:hover': {
                backgroundColor: '#eee',
              },
            }}
            fullWidth
          >
            Edit profile
          </Button>
          <Button
            disabled
            variant="contained"
            sx={{
              backgroundColor: '#0d2432',
              color: 'gold',
              fontSize: 15,
              paddingY: 0.25,
              borderRadius: 10,
              '&:hover': {
                backgroundColor: '#123347',
              },
            }}
            fullWidth
          >
            Go Premium
          </Button>
        </Box>
      </Box>

      <TabContext value={tabIndex}>
        <Box>
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
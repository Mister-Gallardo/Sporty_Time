import { IonBackButton, IonLoading, isPlatform } from '@ionic/react';
import SwipeableViews from 'react-swipeable-views';
import {
  ArrowBackIosNewOutlined,
  FavoriteBorderOutlined,
} from '@mui/icons-material';
import { Box, IconButton, Tab, Typography } from '@mui/material';
import { autoPlay } from 'react-swipeable-views-utils';
import { useState } from 'react';
import { BookTab } from './tabs/BookTab';
import { BookTabMain } from './tabs/BookTabMain';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { SwipeablePage } from '../../../components/SwipeablePage';
import { useLocation, useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getClubById } from '../../../services/club/service';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
export function SingleCourtPage() {
  const { clubId } = useParams<{ clubId: string }>();

  const { data, isLoading } = useQuery({
    queryKey: ['club', clubId],
    queryFn: () => getClubById(Number(clubId), {}),
  });

  const { state } = useLocation<{ tab: string | undefined }>();

  const [tabIndex, setTabIndex] = useState<string>(
    state?.tab ? state?.tab : '1',
  );
  const isMobile = isPlatform('mobile');
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  if (isLoading) return <IonLoading isOpen />;

  const renderImageSlot = () => (
    <Box sx={{ height: '100%', '*': { height: '100%' } }}>
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        axis="x"
        enableMouseEvents
      >
        <Box
          sx={{ objectFit: 'cover' }}
          width="100%"
          component="img"
          src={data?.img}
        />
        <Box
          sx={{ objectFit: 'cover' }}
          width="100%"
          component="img"
          src={data?.img}
        />
      </AutoPlaySwipeableViews>
    </Box>
  );

  const renderTopSlot = () => (
    <Box px={1} display="flex" alignItems="center">
      <IonBackButton
        text={''}
        style={{
          display: 'flex',
          width: '40px',
          color: 'black',
        }}
      >
        <ArrowBackIosNewOutlined sx={{ color: '#fff' }} />
      </IonBackButton>
      <Typography
        sx={{
          fontSize: '1.15rem',
          fontWeight: '700',
        }}
      >
        {data?.title}
      </Typography>
    </Box>
  );

  return (
    <SwipeablePage imageSlot={renderImageSlot()} topSlot={renderTopSlot()}>
      <TabContext value={tabIndex}>
        <Box
          sx={{
            position: 'sticky',
            top: 'calc(var(--ion-safe-area-top) - 30px)',
            zIndex: 100,
          }}
        >
          <Box sx={{ background: 'white', pt: 2 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box sx={{ paddingInline: '10px' }}>
                <Typography
                  sx={{
                    fontSize: '1.15rem',
                    fontWeight: '700',
                  }}
                >
                  {data?.title}
                </Typography>
                <Typography variant="body2">JBR, Dubai</Typography>
              </Box>
              <IconButton>
                <FavoriteBorderOutlined
                  sx={{ color: '#011627', fontSize: '1.75rem' }}
                />
              </IconButton>
            </Box>
            <TabList
              sx={{ margin: '0 auto', maxWidth: '1000px' }}
              onChange={(e, value) => setTabIndex(value)}
            >
              <Tab
                value="1"
                disableRipple={!isMobile}
                label={'Главная'}
                sx={{ flexGrow: 1 }}
              />
              <Tab
                value="2"
                disableRipple={!isMobile}
                label={'Бронь'}
                sx={{ flexGrow: 1 }}
              />
              <Tab
                value="3"
                disableRipple={!isMobile}
                label={'Действия'}
                sx={{ flexGrow: 1 }}
              />
            </TabList>
          </Box>
        </Box>

        <TabPanel value="1" sx={{ p: 0 }}>
          <BookTabMain />
        </TabPanel>
        <TabPanel value="2" sx={{ p: 0 }}>
          <BookTab />
        </TabPanel>
        <TabPanel value="3" sx={{ p: 0 }}>
          Something
        </TabPanel>
      </TabContext>
    </SwipeablePage>
  );
}

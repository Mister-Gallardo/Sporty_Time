import { useState } from 'react';
import { IonBackButton, IonLoading } from '@ionic/react';
import SwipeableViews from 'react-swipeable-views';
import { ArrowBackIosNewOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { autoPlay } from 'react-swipeable-views-utils';
import { BookTab } from './tabs/BookTab';
import { BookTabMain } from './tabs/BookTabMain';
import { TabContext, TabPanel } from '@mui/lab';
import { SwipeablePage } from '../../../components/SwipeablePage';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getClubById } from '../../../services/club/service';
import { useSearchParam } from '../../../hooks/useSearchParams';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export function SingleCourtPage() {
  const { clubId } = useParams<{ clubId: string }>();

  const [tab] = useSearchParam('tab');
  const tabIndex = tab || '2';

  const { data, isLoading } = useQuery({
    queryKey: ['club', clubId],
    queryFn: () => getClubById(Number(clubId), {}),
  });

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
      <TabContext value={tabIndex!}>
        <Box
          sx={{
            position: 'sticky',
            top: 'calc(var(--ion-safe-area-top) - 30px)',
            zIndex: 100,
          }}
        >
          <Box bgcolor="white" pt={2}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box px={2}>
                <Typography
                  sx={{
                    fontSize: '1.15rem',
                    fontWeight: '700',
                  }}
                >
                  {data?.title}
                </Typography>
                <Typography variant="body2">{data?.city}</Typography>
              </Box>
              {/* <IconButton>
                <FavoriteBorderOutlined
                  sx={{ color: '#011627', fontSize: '1.75rem' }}
                />
              </IconButton> */}
            </Box>

            {/* <TabList
              tabs={['Главная', 'Бронь', 'Действия']}
              onChange={(_, value) => setTabIndex('tab', value)}
            /> */}
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

export default SingleCourtPage;

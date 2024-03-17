import { useState } from 'react';
import { IonBackButton, IonLoading, isPlatform } from '@ionic/react';
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
import noImg from '../../../images/no-image.jpg';
import { NotFoundPage } from '../../../components/NotFoundPage';
import { TabList } from '../../../components/molecules/TabList';
import { withHostname } from '../../../services/api/service';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const isMobile = isPlatform('mobile');

export function SingleCourtPage() {
  const { clubId } = useParams<{ clubId: string }>();

  const [tab, setTab] = useSearchParam('tab', '2');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['club', clubId],
    queryFn: () => getClubById(Number(clubId), {}),
  });

  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  if (isLoading) return <IonLoading isOpen />;
  if (!data || isError) return <NotFoundPage />;

  const renderImageSlot = () => (
    <Box
      width="100%"
      maxWidth={1240}
      mx="auto"
      sx={{ height: '100%', '*': { height: '100%' } }}
    >
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        axis="x"
        enableMouseEvents
      >
        {data?.images?.length === 0 || !data?.images ? (
          <Box
            sx={{ objectFit: 'cover' }}
            width="100%"
            component="img"
            src={noImg}
          />
        ) : (
          data?.images.map((image, i) => {
            return (
              <Box
                key={i}
                sx={{ objectFit: 'cover' }}
                width="100%"
                component="img"
                src={withHostname(
                  image?.formats?.large || image?.formats?.medium,
                )}
              />
            );
          })
        )}
      </AutoPlaySwipeableViews>
    </Box>
  );

  const renderTopSlot = () => (
    <Box display="flex" alignItems="center">
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
      <TabContext value={tab}>
        <Box
          width="100%"
          maxWidth={1240}
          mx="auto"
          sx={{
            // position: 'sticky',
            // top: 'calc(var(--ion-safe-area-top) - 50px)',
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
            <Box
              width={isMobile ? 'unset' : '100%'}
              display={isMobile ? 'unset' : 'flex'}
              justifyContent={isMobile ? 'unset' : 'center'}
            >
              <TabList
                tabs={['Главная', 'Бронь']}
                onChange={(_, value) => setTab(value)}
              />
            </Box>
          </Box>
        </Box>

        <TabPanel value="1" sx={{ p: 0 }}>
          <BookTabMain />
        </TabPanel>
        <TabPanel value="2" sx={{ p: 0 }}>
          <BookTab />
        </TabPanel>
        {/* <TabPanel value="3" sx={{ p: 0 }}>
          Something
        </TabPanel> */}
      </TabContext>
    </SwipeablePage>
  );
}

export default SingleCourtPage;

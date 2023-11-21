import { IonBackButton, ScrollDetail, isPlatform } from '@ionic/react';
import SwipeableViews from 'react-swipeable-views';
import {
  ArrowBackIosNewOutlined,
  FavoriteBorderOutlined,
  ShareOutlined,
} from '@mui/icons-material';
import { Box, IconButton, Tab, Typography } from '@mui/material';
import { autoPlay } from 'react-swipeable-views-utils';
import { useEffect, useRef, useState } from 'react';
import { BookTab } from './BookTab';
import { BookTabMain } from './BookTabMain';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { SwipeablePage } from '../../../components/SwipeablePage';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
export function SingleCourtPage() {
  const [tabIndex, setTabIndex] = useState('1');
  const isMobile = isPlatform('mobile');
  const [activeStep, setActiveStep] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const fillHeader = (e: CustomEvent<ScrollDetail>) => {
    const FROM = 110;
    const TO = 160;
    if (!headerRef.current) return;
    if (e.detail.scrollTop > TO) {
      headerRef.current.style.opacity = String(1);
    } else if (e.detail.scrollTop > FROM && e.detail.scrollTop < TO) {
      const op = Number(1 - (TO - e.detail.scrollTop) / (TO - FROM)).toFixed(2);
      headerRef.current.style.opacity = op;
    } else if (e.detail.scrollTop < FROM) {
      headerRef.current.style.opacity = String(0);
    }
  };

  useEffect(() => {
    document.addEventListener('ionScroll', fillHeader as any);
    return () => {
      document.removeEventListener('ionScroll', fillHeader as any);
    };
  }, []);

  const renderImageSlot = () => (
    <AutoPlaySwipeableViews
      index={activeStep}
      onChangeIndex={handleStepChange}
      axis="x"
      enableMouseEvents
    >
      <Box
        sx={{ objectFit: 'cover' }}
        height={300}
        width="100%"
        component="img"
        src="https://i0.wp.com/thepadelpaper.com/wp-content/uploads/2022/12/38c266b9-58a4-4693-a990-c9cd4452dc23.jpeg?fit=2048%2C1366&ssl=1"
      />
      <Box
        sx={{ objectFit: 'cover' }}
        height={300}
        width="100%"
        component="img"
        src="https://i0.wp.com/thepadelpaper.com/wp-content/uploads/2022/12/38c266b9-58a4-4693-a990-c9cd4452dc23.jpeg?fit=2048%2C1366&ssl=1"
      />
    </AutoPlaySwipeableViews>
  );

  const renderContentSlot = () => (
    <TabContext value={tabIndex}>
      <Box
        sx={{
          position: 'sticky',
          top: 'var(--ion-safe-area-top)',
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
                JA Ocean View Hotel Padel Tenn...
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
  );

  const renderFixedSlot = () => (
    <>
      <Box
        display="flex"
        alignItems="center"
        padding={2}
        ref={headerRef}
        position="fixed"
        top={0}
        zIndex={999}
        height={110}
        width="100%"
        sx={{
          background: 'white',
          opacity: 0,
          transition: 'all .1s',
        }}
      >
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
          JA Ocean View Hotel Padel Tenn...
        </Typography>
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          position: 'fixed',
          zIndex: 99,
          top: '1.5rem',
          px: 2,
        }}
      >
        <IonBackButton
          text={''}
          style={{
            background: 'hsl(0deg 0% 89.8% / 34%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            color: '#fff',
          }}
        >
          <ArrowBackIosNewOutlined sx={{ color: '#fff' }} />
        </IonBackButton>

        <IconButton
          sx={{
            background: 'hsl(0deg 0% 89.8% / 34%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ShareOutlined sx={{ color: '#fff' }} />
        </IconButton>
      </Box>
    </>
  );

  if (isMobile) {
    return (
      <SwipeablePage
        imageSlot={renderImageSlot()}
        contentSlot={renderContentSlot()}
        fixedSlot={renderFixedSlot()}
      />
    );
  } else {
    return renderContentSlot();
  }
}

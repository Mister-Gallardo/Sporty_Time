import {
  IonBackButton,
  IonContent,
  IonPage,
  createGesture,
  isPlatform,
} from '@ionic/react';
import SwipeableViews from 'react-swipeable-views';
import {
  ArrowBackIosNewOutlined,
  FavoriteBorderOutlined,
  ShareOutlined,
} from '@mui/icons-material';
import {
  Box,
  IconButton,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from '@mui/material';
import { autoPlay } from 'react-swipeable-views-utils';
import { useEffect, useRef, useState } from 'react';
import { BookTab } from './BookTab';
import { BookTabMain } from './BookTabMain';

export function SingleCourtPage() {
  const [tabIndex, setTabIndex] = useState<number>(1);
  const isMobile = isPlatform('mobile');
  const ref = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLElement>(null);
  const canScale = useRef<boolean>(true);

  useEffect(() => {
    if (!ref.current || !isMobile) return;
    const gesture = createGesture({
      direction: 'y',
      el: ref.current,
      threshold: 5,
      gestureName: 'swipe',
      onStart: () => {
        if (!ref.current) return;
        if (!imgRef.current) return;
        ref.current.style.transition = 'none';
        imgRef.current.style.transition = 'none';
      },
      onMove: (ev) => {
        if (!ref.current) return;
        if (!imgRef.current) return;
        if (!canScale.current) return;

        const delta = Math.log(Math.max(ev.deltaY, 0)) * 50;
        ref.current.style.transform = `translateY(${delta * 0.5}px)`;
        imgRef.current.style.scale = String(1 + delta * 0.002);
      },
      onEnd: () => {
        if (!ref.current) return;
        if (!imgRef.current) return;
        ref.current.style.transition =
          'transform .2s cubic-bezier(0.2, 0.95, 0.96, 0.98)';
        imgRef.current.style.transition =
          'scale .2s cubic-bezier(0.2, 0.95, 0.96, 0.98)';
        ref.current.style.transform = 'translateY(0)';
        imgRef.current.style.scale = '1';
      },
    });
    gesture.enable();
    return () => gesture.destroy();
  }, []);

  const theme = useTheme();
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const renderPage = () => (
    <>
      <Box
        sx={{
          margin: '0 auto',
          width: '100%',
        }}
      >
        <Box
          ref={imgRef}
          sx={{
            position: 'fixed',
            width: '100%',
          }}
          component="img"
          src="https://i0.wp.com/thepadelpaper.com/wp-content/uploads/2022/12/38c266b9-58a4-4693-a990-c9cd4452dc23.jpeg?fit=2048%2C1366&ssl=1"
        />
        {/* <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          <Box
            ref={imgRef}
            sx={{
              position: 'fixed',
              width: '100%',
            }}
            component="img"
            src="https://i0.wp.com/thepadelpaper.com/wp-content/uploads/2022/12/38c266b9-58a4-4693-a990-c9cd4452dc23.jpeg?fit=2048%2C1366&ssl=1"
          />
          <Box
            ref={imgRef}
            sx={{
              position: 'fixed',
              width: '100%',
            }}
            component="img"
            src="https://i0.wp.com/thepadelpaper.com/wp-content/uploads/2022/12/38c266b9-58a4-4693-a990-c9cd4452dc23.jpeg?fit=2048%2C1366&ssl=1"
          />
        </AutoPlaySwipeableViews> */}
        <Box height={300} />
        {isMobile && (
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              position: 'absolute',
              zIndex: '999',
              top: '1.5rem',
              paddingInline: '20px',
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
        )}
        <Box
          ref={ref}
          sx={{
            position: 'relative',
            zIndex: '998',
            width: '100%',
            height: '100%',
            background: '#fff',
            marginTop: '-30px',
            borderRadius: '15px 15px 0 0',
            paddingTop: '10px',
          }}
        >
          <Box
            sx={{
              margin: '0 auto',
              marginLeft: isMobile ? '0' : '3.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
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
          <Tabs
            sx={{ margin: '0 auto', maxWidth: '1000px' }}
            value={tabIndex}
            onChange={(e, value) => setTabIndex(value)}
          >
            <Tab
              disableRipple={!isMobile}
              label={'Главная'}
              sx={{ flexGrow: 1 }}
            />
            <Tab
              disableRipple={!isMobile}
              label={'Бронь'}
              sx={{ flexGrow: 1 }}
            />
            <Tab
              disableRipple={!isMobile}
              label={'Действия'}
              sx={{ flexGrow: 1 }}
            />
          </Tabs>

          <SwipeableViews
            action={(actions) => {
              actions.updateHeight();
            }}
            index={tabIndex}
            onChangeIndex={setTabIndex}
            containerStyle={{
              transition: isMobile
                ? 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s'
                : 'none',
            }}
          >
            <BookTabMain />
            <BookTab />
          </SwipeableViews>
        </Box>
      </Box>
    </>
  );

  if (isMobile) {
    return (
      <IonPage>
        <IonContent
          forceOverscroll={true}
          scrollEvents={true}
          onIonScroll={(e) => {
            if (!imgRef.current) return;
            canScale.current = e.detail.scrollTop < 10;
            imgRef.current.style.transform = `translateY(${
              -e.detail.scrollTop * 0.5
            }px)`;
          }}
        >
          {renderPage()}
        </IonContent>
      </IonPage>
    );
  } else {
    return renderPage();
  }
}

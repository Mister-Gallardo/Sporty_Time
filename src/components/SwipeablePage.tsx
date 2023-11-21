import {
  IonContent,
  IonPage,
  ScrollDetail,
  createGesture,
  isPlatform,
} from '@ionic/react';

import { Box } from '@mui/material';
import React, { ReactNode, useEffect, useRef } from 'react';

export interface ISwipeablePageProps {
  imageSlot?: ReactNode;
  contentSlot?: ReactNode;
  fixedSlot?: ReactNode;
}

export const SwipeablePage: React.FC<ISwipeablePageProps> = (props) => {
  const { imageSlot, contentSlot, fixedSlot } = props;

  const isMobile = isPlatform('mobile');
  const ref = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLElement>(null);
  const canScale = useRef<boolean>(true);
  const translateDelta = useRef(0);
  const scaleDelta = useRef(0);

  const parallax = (e: CustomEvent<ScrollDetail>) => {
    if (!imgRef.current) return;
    canScale.current = e.detail.scrollTop < 10;
    imgRef.current.style.transform = `translateY(${
      -e.detail.scrollTop * 0.5
    }px)`;
  };

  useEffect(() => {
    if (!ref.current || !isMobile) return;
    const gesture = createGesture({
      direction: 'y',
      el: ref.current,
      threshold: 5,
      gestureName: 'swipe',
      onStart: () => {
        if (!contentRef.current) return;
        if (!imgRef.current) return;
        translateDelta.current = 0;
        scaleDelta.current = 0;
      },
      onMove: (ev) => {
        if (!contentRef.current) return;
        if (!imgRef.current) return;
        if (!canScale.current) {
          imgRef.current.style.scale = String(1);
          contentRef.current.style.transform = 'translateY(0)';
          return;
        }

        translateDelta.current = Math.max(
          Math.min(translateDelta.current + ev.velocityY * 10, 90),
          0,
        );
        scaleDelta.current = Math.max(
          scaleDelta.current + ev.velocityY * 0.01,
          1,
        );

        contentRef.current.style.transform = `translateY(${translateDelta.current}px)`;
        imgRef.current.style.scale = String(scaleDelta.current);
      },
      onEnd: () => {
        if (!contentRef.current) return;
        if (!imgRef.current) return;
        contentRef.current.style.transform = 'translateY(0)';
        imgRef.current.style.scale = '1';
      },
    });
    gesture.enable();
    document.addEventListener('ionScroll', parallax as any);
    return () => {
      gesture.destroy();
      document.removeEventListener('ionScroll', parallax as any);
    };
  }, []);

  const renderPage = () => (
    <>
      <Box ref={ref} sx={{}}>
        <Box
          height={250}
          ref={imgRef}
          maxWidth="100%"
          position="fixed"
          sx={{
            willChange: 'transform, scale',
            transition: 'all .1s cubic-bezier(0.3, 0.95, 0.96, 0.98)',
          }}
        >
          {imageSlot}
        </Box>
        <Box height={250}></Box>
        <Box
          ref={contentRef}
          sx={{
            position: 'relative',
            zIndex: '998',
            width: '100%',
            height: '100%',
            marginTop: '-30px',
            borderRadius: '15px 15px 0 0',
            transition: 'all .2s cubic-bezier(0.3, 0.95, 0.96, 0.98)',
          }}
        >
          {contentSlot}
        </Box>
      </Box>
      {fixedSlot}
    </>
  );

  if (isMobile) {
    return (
      <IonPage>
        <IonContent
          scrollEvents={true}
          onIonScroll={(e) => {
            const event = new CustomEvent(e.type, e);
            document.dispatchEvent(event);
          }}
        >
          {renderPage()}
        </IonContent>
      </IonPage>
    );
  } else {
    return renderPage();
  }
};

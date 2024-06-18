import { ScrollDetail, isPlatform } from '@ionic/react';

import { Box } from '@mui/material';
import React, { ReactNode, useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { clamp } from 'lodash-es';

export interface ISwipeablePageProps {
  imageSlot?: ReactNode;
  topSlot?: ReactNode;
  children?: ReactNode;
}

export const SwipeablePage: React.FC<ISwipeablePageProps> = (props) => {
  const { imageSlot, topSlot, children } = props;

  const isMobile = isPlatform('mobile');
  const imgRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const [springs, api] = useSpring(() => ({
    from: { height: 250 },
    config: {
      duration: 50,
    },
  }));

  useEffect(() => {
    if (!isMobile) return;
    const animateImg = (e: CustomEvent<ScrollDetail>) => {
      if (!imgRef.current) return;
      const newHeight = 250 - e.detail.scrollTop;
      api.start({
        from: {
          height: imgRef.current.clientHeight,
        },
        to: {
          height: newHeight,
        },
      });
    };

    const animateHeader = (e: CustomEvent<ScrollDetail>) => {
      if (!headerRef.current) return;
      const topPadding = Number(
        getComputedStyle(document.body)
          .getPropertyValue('--ion-safe-area-top')
          .slice(0, -2),
      );
      const FROM = 240 - topPadding;
      const TO = 260 - topPadding;

      const x = 1 - clamp(0, (TO - e.detail.scrollTop) / (TO - FROM), 1);
      const op = x.toFixed(2);
      headerRef.current.style.opacity = op;
    };

    const animate = (e: any) => {
      animateImg(e);
      animateHeader(e);
    };

    document.addEventListener('ionScroll', animate);
    return () => {
      document.removeEventListener('ionScroll', animate);
    };
  }, []);

  return (
    <>
      {topSlot && isMobile && (
        <Box
          ref={headerRef}
          position="fixed"
          top={0}
          zIndex={999}
          pt="var(--ion-safe-area-top)"
          height="calc(50px + var(--ion-safe-area-top))"
          width="100%"
          bgcolor="#fff"
          sx={{
            opacity: 0,
            transition: 'all .1s',
          }}
        >
          {topSlot}
        </Box>
      )}
      <Box
        component={animated.div}
        style={springs}
        ref={imgRef}
        position="fixed"
        height={250}
        width="100%"
        sx={{ willChange: 'height' }}
      >
        {imageSlot}
      </Box>
      <Box height={250} />
      <Box marginTop={-2} position="relative">
        <Box position="absolute" top={-62} width="100%">
          {children}
        </Box>
      </Box>
    </>
  );
};

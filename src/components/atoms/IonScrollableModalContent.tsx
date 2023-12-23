import { Box, BoxProps } from '@mui/material';
import { ReactNode, useRef } from 'react';

export interface IIonScrollableModalContentProps extends BoxProps {
  children: ReactNode;
}

export const IonScrollableModalContent: React.FC<
  IIonScrollableModalContentProps
> = (props) => {
  const { children, ...rest } = props;
  const ref = useRef<HTMLElement>();
  return (
    <Box
      {...rest}
      ref={ref}
      sx={{ overflowY: 'auto', overflowX: 'hidden' }}
      onTouchStartCapture={(e) => {
        if (!ref.current) return;
        const scrollTop = ref.current.scrollTop;
        if (scrollTop > 0) {
          e.stopPropagation();
          ref.current.style.overscrollBehaviorY = '';
        } else {
          ref.current.style.overscrollBehaviorY = 'none';
        }
      }}
    >
      {children}
    </Box>
  );
};

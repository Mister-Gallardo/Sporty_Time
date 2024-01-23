import { PropsWithChildren, ReactNode } from 'react';
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonModal,
  IonToolbar,
  isPlatform,
} from '@ionic/react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Box, IconButton, Modal, Typography } from '@mui/material';
import { IonScrollableModalContent } from '@musaev/ionic-ui';

interface IModalContainer extends PropsWithChildren<{}> {
  openState: boolean;
  handleModal: (val?: boolean) => void;
  headerTitle: string;
  initialBreakpoint?: number;
  headerButton?: ReactNode | null;
}

export const ModalContainer: React.FC<IModalContainer> = ({
  children,
  openState,
  handleModal,
  headerTitle,
  // initialBreakpoint = 1,
  headerButton,
}) => {
  const isMobile = isPlatform('mobile');

  return (
    <>
      {isMobile ? (
        <IonModal
          onDidDismiss={() => handleModal(false)}
          isOpen={openState}
          // initialBreakpoint={initialBreakpoint}
          // breakpoints={[0, 0.5, initialBreakpoint]}
          initialBreakpoint={0.9}
          breakpoints={[0, 0.9]}
        >
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start" style={{ width: 40 }}>
                {headerButton}
              </IonButtons>
              <Typography textAlign="center" fontWeight={600} fontSize={16}>
                {headerTitle}
              </Typography>
              <IonButtons slot="end">
                <IonButton onClick={() => handleModal()}>
                  <CloseRoundedIcon sx={{ color: '#000' }} />
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonScrollableModalContent className="ion-padding">
            {children}
          </IonScrollableModalContent>
        </IonModal>
      ) : (
        <Modal open={openState} onClose={() => handleModal()} disableAutoFocus>
          <Box
            position="relative"
            borderRadius={3}
            overflow="hidden"
            width="100%"
            minWidth={450}
            maxWidth="50vw"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              bgcolor="#fff"
            >
              {headerButton}
              <Typography
                fontSize={16}
                textAlign="center"
                flexGrow={1}
                variant="h2"
                pt={2}
              >
                {headerTitle}
              </Typography>
              <IconButton onClick={() => handleModal()}>
                <CloseRoundedIcon sx={{ color: '#000' }} />
              </IconButton>
            </Box>
            <Box p={3} bgcolor="#fff" maxHeight="70vh" overflow="auto">
              {children}
            </Box>
          </Box>
        </Modal>
      )}
    </>
  );
};

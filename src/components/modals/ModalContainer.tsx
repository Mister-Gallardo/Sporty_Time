import { PropsWithChildren } from 'react';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
  isPlatform,
} from '@ionic/react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Box, IconButton, Modal, Typography } from '@mui/material';

interface IModalContainer extends PropsWithChildren<{}> {
  openState: boolean;
  handleModal: (val?: boolean) => void;
  headerTitle: string;
  initialBreakpoint?: number;
}

export const ModalContainer: React.FC<IModalContainer> = ({
  children,
  openState,
  handleModal,
  headerTitle,
  initialBreakpoint = 0.95,
}) => {
  const isMobile = isPlatform('mobile');

  return (
    <>
      {isMobile ? (
        <IonModal
          onDidDismiss={() => handleModal(false)}
          isOpen={openState}
          initialBreakpoint={initialBreakpoint}
          breakpoints={[0, 0.25, 0.5, 0.75, 0.95]}
          handleBehavior="cycle"
        >
          <IonHeader>
            <IonToolbar>
              <IonTitle>{headerTitle}</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => handleModal()}>
                  <CloseRoundedIcon sx={{ color: '#000' }} />
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">{children}</IonContent>
        </IonModal>
      ) : (
        <Modal open={openState} onClose={() => handleModal()}>
          <Box
            borderRadius={3}
            overflow="hidden"
            width="100%"
            minWidth="30vw"
            maxWidth="50vw"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              bgcolor="#fff"
            >
              <Typography
                textAlign="center"
                flexGrow={1}
                variant="h2"
                fontSize={18}
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

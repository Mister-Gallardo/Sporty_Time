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
import { Box, Modal } from '@mui/material';

interface IModalContainer extends PropsWithChildren<{}> {
  openState: boolean;
  handleModal: (val?: boolean) => void;
}

export const ModalContainer: React.FC<IModalContainer> = ({
  children,
  openState,
  handleModal,
}) => {
  const isMobile = isPlatform('mobile');

  const header = (
    <IonHeader style={{ boxShadow: '0 1px 4px #0000012' }}>
      <IonToolbar>
        <IonTitle>Настройте свой матч</IonTitle>
        <IonButtons slot="end">
          <IonButton onClick={() => handleModal()}>
            <CloseRoundedIcon sx={{ color: 'black' }} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );

  return (
    <>
      {isMobile ? (
        <IonModal
          onDidDismiss={() => handleModal(false)}
          isOpen={openState}
          initialBreakpoint={0.95}
          breakpoints={[0, 0.25, 0.5, 0.75, 0.95]}
          handleBehavior="cycle"
        >
          {header}
          <IonContent className="ion-padding">{children}</IonContent>
        </IonModal>
      ) : (
        <Modal open={openState} onClose={() => handleModal()}>
          <Box>
            {header}
            <Box p={3} bgcolor="#fff" maxHeight="60vh" overflow="auto">
              {children}
            </Box>
          </Box>
        </Modal>
      )}
    </>
  );
};

import React from 'react';
import { ModalContainer } from './ModalContainer';
import { IonDatetime } from '@ionic/react';
import { Box, Button, Typography } from '@mui/material';
import { ModalContentContainer } from '../atoms/ModalContentContainer';

interface IFilterClubsModalProps {
  openState: boolean;
  handleModal: (val?: boolean) => void;
}

export const FilterClubsModal: React.FC<IFilterClubsModalProps> = ({
  openState,
  handleModal,
}) => {
  return (
    <ModalContainer
      openState={openState}
      handleModal={handleModal}
      headerTitle="Выбор даты и времени"
    >
      <Box height="100%" display="flex" flexDirection="column">
        <ModalContentContainer title="Выберете подходящие вам дату и время:">
          <IonDatetime
            presentation="date-time"
            preferWheel
            minuteValues="0,30"
            locale="ru-RU"
          ></IonDatetime>

          <Typography
            mt={4}
            textAlign="center"
            fontSize={20}
            fontWeight={600}
            borderTop="1px solid #7b96ff"
            borderBottom="1px solid #7b96ff"
            py={1}
          >
            Selected date | time - time + 5h
          </Typography>

          <Typography
            mt={2}
            color="gray"
            textAlign="center"
            fontSize={15}
            lineHeight={1.3}
          >
            *Доступные корты будут показаны взависимости от выбранного вами
            времени плюс 5 часов
          </Typography>
        </ModalContentContainer>

        <Button
          sx={{
            backgroundColor: '#0e2432',
            color: '#fff',
            borderRadius: 20,
            py: 1,
          }}
          fullWidth
        >
          Сохранить
        </Button>
      </Box>
    </ModalContainer>
  );
};

import React from 'react';
import { ModalContainer } from './ModalContainer';
import { IonDatetime } from '@ionic/react';
import { Box, Button, Divider, Typography } from '@mui/material';
import { ModalContentContainer } from '../atoms/ModalContentContainer';
import { EType, addTime, getDayFormat } from '../../helpers/getTimeDateString';
import { CalendarDay } from '../molecules/CalendarDay';
import { useFormContext } from 'react-hook-form';
import { getDatesList } from '../../helpers/getDatesList';

interface IFilterClubsModalProps {
  openState: boolean;
  handleModal: (val?: boolean) => void;
  onApply: () => void;
}

export const FilterClubsModal: React.FC<IFilterClubsModalProps> = ({
  openState,
  handleModal,
  onApply,
}) => {
  const dates = getDatesList(14);

  const { setValue, watch } = useFormContext();
  const { date, time } = watch();

  const handleDatetimeChange = (event: any) => {
    const time = event.detail.value.slice(-8, -3);
    const timePlus = addTime(time, 5 * 60);
    setValue('time', `${time}-${timePlus}`);
  };

  return (
    <ModalContainer
      openState={openState}
      handleModal={handleModal}
      headerTitle="Выбор даты и времени"
    >
      <Box height="100%" display="flex" flexDirection="column" gap={2.5}>
        <Box py={1} display="flex" gap={0.6} overflow="auto">
          {dates.map((dateItem, i) => {
            return (
              <CalendarDay
                key={i}
                date={dateItem}
                selected={date.toDateString() === dateItem.toDateString()}
                onSelect={() => setValue('date', dateItem)}
              />
            );
          })}
        </Box>

        <Divider />

        <ModalContentContainer title="Выберете время">
          <Box
            maxHeight={100}
            overflow="hidden"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <IonDatetime
              onIonChange={handleDatetimeChange}
              presentation="time"
              preferWheel
              minuteValues="0,30"
              locale="ru-RU"
              style={{ width: '100%' }}
            />
          </Box>
          <Typography
            mt={4}
            textAlign="center"
            fontSize={18}
            fontWeight={600}
            borderTop="1px solid #7b96ff"
            borderBottom="1px solid #7b96ff"
            py={1}
          >
            {getDayFormat(date, EType.MONTH_AND_DAY)} | {time}
          </Typography>

          <Typography
            mt={2}
            color="gray"
            textAlign="center"
            fontSize={13}
            lineHeight={1.3}
          >
            *Доступные корты будут показаны взависимости от выбранного вами
            времени плюс 5 часов
          </Typography>
        </ModalContentContainer>

        <Box
          position="absolute"
          bottom={0}
          right={0}
          left={0}
          bgcolor="#fff"
          p={2}
          borderTop="1px solid #eee"
        >
          <Button
            onClick={onApply}
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
      </Box>
    </ModalContainer>
  );
};
import { Box, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useMemo, useState } from 'react';
import { getClub } from '../../../../services/club/service';
import { useParams } from 'react-router';
import { format } from 'date-fns';
import { IonToggle, isPlatform } from '@ionic/react';
import { useSearchParam } from '../../../../hooks/useSearchParams';

interface ITimesListProps {
  date: Date;
}

const isMobile = isPlatform('mobile');

export const TimesList: React.FC<ITimesListProps> = ({ date }) => {
  const { clubId } = useParams<{ clubId: string }>();
  const [selectedTime = '', setSelectedTime] = useSearchParam('time');

  const { data } = useQuery({
    queryKey: ['club', date, clubId],
    queryFn: () =>
      getClub(Number(clubId), {
        gamedate: format(date, 'yyyy-MM-dd'),
      }),
  });

  const [onlyAvailableSlots, setOnlyAvailableSlots] = useState(true);

  const filteredTimes = useMemo(() => {
    if (!data) return;

    const times = data.availableSlots && Object.keys(data.availableSlots);

    return onlyAvailableSlots
      ? times?.filter(
          (time) => !!data?.availableSlots?.[time]?.available?.length,
        )
      : times;
  }, [data, onlyAvailableSlots]);

  useEffect(() => {
    if (!selectedTime) setSelectedTime(filteredTimes?.[0] || '');
  }, [filteredTimes]);

  return (
    <>
      <Box
        mt={1}
        width="100%"
        display="flex"
        justifyContent={isMobile ? 'space-between' : 'unset'}
        gap={2}
        alignItems="center"
        py={1}
      >
        <Typography fontWeight={500} fontSize={15}>
          Показать только свободные слоты
        </Typography>
        <IonToggle
          enableOnOffLabels
          checked={onlyAvailableSlots}
          onIonChange={(e) => setOnlyAvailableSlots(e.detail.checked)}
        />
      </Box>
      <Box display="flex" gap={1.5} flexWrap="wrap" mt={2}>
        {filteredTimes?.map((time, i) => {
          return (
            <Box
              key={i}
              onClick={() => setSelectedTime(time)}
              sx={{
                cursor: 'pointer',
                opacity: data?.availableSlots?.[time]?.available?.length
                  ? 1
                  : 0.5,
                background: selectedTime === time ? '#0D2433' : '',
                padding: '12px 7px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '55px',
                border: '1px solid #0D2433',
                color: time === selectedTime ? 'white' : 'black',
              }}
            >
              {time}
            </Box>
          );
        })}
      </Box>
    </>
  );
};

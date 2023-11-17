import { IonSpinner, IonToggle, isPlatform } from '@ionic/react';
import { KeyboardArrowUp, SportsTennis } from '@mui/icons-material';
import { Box, Typography, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { getClub } from '../../../services/club/service';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export function BookTab() {
  const now = new Date();
  const dates = Array.from(Array(100)).map(
    (n, i) =>
      new Date(
        Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + i),
      ),
  );
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const [selectedSlot, setSelectedSlot] = useState('');
  const selectedDateString = selectedDate.toLocaleDateString('en-ca');

  const { courtId } = useParams<{ courtId: string }>();
  const { data, isLoading } = useQuery({
    queryKey: ['club', selectedDate],
    queryFn: () => getClub(Number(courtId), { gamedate: selectedDateString }),
  });
  const selectedSlotCorts = data?.availableSlots?.[selectedSlot] || [];

  useEffect(() => {
    const [firstSlot] = Object.keys(data?.availableSlots || {});
    setSelectedSlot(firstSlot);
  }, [data]);

  return (
    <Box
      sx={{
        padding: '10px 17px',
        background: '#f4f4f4',
        paddingBlock: '1.25rem',
      }}
    >
      <Box sx={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Box sx={{ display: 'flex', gap: '1.5rem' }}>
          <Box
            sx={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',

              width: '60px',
              height: '90px',
              border: '1px solid #000',
              background: '#fff',
              borderRadius: '10px',
            }}
          >
            <SportsTennis sx={{ fontSize: '1.5rem' }} />
          </Box>
          <Box sx={{ display: 'flex', gap: '18px', overflowX: 'auto' }}>
            {dates.map((date) => (
              <Box onClick={() => setSelectedDate(date)}>
                <CalendarDay
                  date={date}
                  selected={selectedDate.toISOString() === date.toISOString()}
                />
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            width: !isPlatform('mobile') ? '85%' : '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBlock: '.5rem',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: '.9rem',
              color: '#4c4c4c',
              fontWeight: '500',
            }}
          >
            Показать только свободные слоты
          </Typography>
          <IonToggle checked enableOnOffLabels />
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '1.25rem',
            marginTop: '10px',
            flexWrap: 'wrap',
          }}
        >
          {isLoading ? (
            <Box sx={{ mx: 'auto' }}>
              <IonSpinner />
            </Box>
          ) : (
            Object.keys(data?.availableSlots).map((slot) => (
              <Box
                onClick={() => setSelectedSlot(slot)}
                sx={{
                  background: selectedSlot === slot ? '#0D2433' : '',
                  padding: '12px 7px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '55px',
                  border: '1px solid #0D2433',
                  borderRadius: '5px',
                  color: slot === selectedSlot ? 'white' : 'black',
                }}
              >
                {slot}
              </Box>
            ))
          )}
        </Box>
        <Box
          sx={{
            marginTop: '1rem',
            width: !isPlatform('mobile') ? '85%' : '100%',
          }}
        >
          <Typography
            sx={{
              fontSize: '1.15rem',
              fontWeight: '700',
            }}
          >
            Забронировать корт
          </Typography>
          <Typography variant="body2">
            Cоздайте приватный матч, куда вы сможете пригласить своих друзец
          </Typography>
        </Box>
        <Box
          sx={{
            width: !isPlatform('mobile') ? '85%' : '100%',

            marginTop: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="body1">
            Показывать только доступные корты
          </Typography>
          <IonToggle enableOnOffLabels />
        </Box>
        <Box
          sx={{
            width: !isPlatform('mobile') ? '85%' : '100%',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography
              variant="body1"
              sx={{ fontSize: '.95rem', fontWeight: '600' }}
            >
              Padel 1
            </Typography>
            <Typography variant="body2" sx={{ opacity: '.7' }}>
              Outdoor | Crystal | Double
            </Typography>
          </Box>
          <IconButton sx={{ marginTop: '.5rem' }}>
            <KeyboardArrowUp sx={{ fontSize: '2rem' }} />
          </IconButton>
        </Box>
        <Box display="flex" gap={2}>
          {selectedSlotCorts.map((cort: any) => (
            <Box sx={{ marginTop: '1rem', display: 'flex', gap: '1.25rem' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',

                  width: '100%',
                  maxWidth: '125px',
                  padding: '10px 7px',
                  background: '#6E8FFD',
                  borderRadius: '8px',
                  color: '#fff',
                }}
              >
                <Typography sx={{ fontSize: '1.5rem', fontWeight: '600' }}>
                  {cort.price} RUB
                </Typography>
                <Typography>90 мин</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export const WEEK_DAYS = ['ВС', 'ПОН', 'ВТ', 'СРД', 'ЧЕТ', 'ПТ', 'СУБ'];
export const MONTHS = [
  'Янв',
  'Фев',
  'Март',
  'Апр',
  'Май',
  'Июнь',
  'Июль',
  'Авг',
  'Сен',
  'Окт',
  'Ноябрь',
  'Дек',
];

export interface ICalendarDayProps {
  date: Date;
  selected?: boolean;
}
export const CalendarDay: React.FC<ICalendarDayProps> = (props) => {
  const { date, selected } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography>{WEEK_DAYS[date.getUTCDay()]}</Typography>
      <Box
        sx={{
          background: selected ? '#0D2433' : '',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
        }}
      >
        <Typography
          fontSize={18}
          sx={{ color: selected ? 'white' : 'black', padding: '7px 10px' }}
        >
          {date.getUTCDate()}
        </Typography>
      </Box>
      <Typography variant="body2">{MONTHS[date.getUTCMonth()]}</Typography>
    </Box>
  );
};

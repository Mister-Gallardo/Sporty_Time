import { IonSpinner, IonToggle, isPlatform } from '@ionic/react';
import { SportsTennis } from '@mui/icons-material';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Stack,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { getClub } from '../../../services/club/service';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CalendarDay } from '../../../components/molecules/CalendarDay';

export function BookTab() {
  const { courtId } = useParams<{ courtId: string }>();
  const now = new Date();
  const dates = Array.from(Array(100)).map(
    (n, i) =>
      new Date(
        Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + i),
      ),
  );
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [onlyAvailableSlots, setOnlyAvailableSlots] = useState(true);
  const [onlyAvailableCourts, setOnlyAvailableCourts] = useState(true);
  const selectedDateString = selectedDate.toLocaleDateString('en-ca');

  const { data, isLoading } = useQuery({
    queryKey: ['club', selectedDate],
    queryFn: () => getClub(Number(courtId), { gamedate: selectedDateString }),
  });
  console.log(onlyAvailableCourts);
  const selectedSlotAvailableCourts =
    data?.availableSlots?.[selectedSlot]?.available || [];
  const selectedSlotBookedCourts =
    data?.availableSlots?.[selectedSlot]?.booked || [];
  const selectedSlotCourts = onlyAvailableCourts
    ? selectedSlotAvailableCourts
    : [...selectedSlotAvailableCourts, ...selectedSlotBookedCourts];

  const times = data?.availableSlots && Object.keys(data.availableSlots);
  const filteredTimes = onlyAvailableSlots
    ? times?.filter((time) => !!data?.availableSlots?.[time]?.available?.length)
    : times;

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
          <IonToggle
            enableOnOffLabels
            checked={onlyAvailableSlots}
            onIonChange={(e) => setOnlyAvailableSlots(e.detail.checked)}
          />
        </Box>
        {isLoading ? (
          <Stack alignItems="center" mt={5}>
            <IonSpinner />
          </Stack>
        ) : (
          <>
            <Box
              sx={{
                display: 'flex',
                gap: '1.25rem',
                marginTop: '10px',
                flexWrap: 'wrap',
              }}
            >
              {filteredTimes?.map((slot) => (
                <Box
                  onClick={() => setSelectedSlot(slot)}
                  sx={{
                    opacity: data?.availableSlots?.[slot]?.available?.length
                      ? 1
                      : 0.5,
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
              ))}
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
              <IonToggle
                enableOnOffLabels
                checked={onlyAvailableCourts}
                onIonChange={(e) => setOnlyAvailableCourts(e.detail.checked)}
              />
            </Box>
            <Box mt={2}>
              {selectedSlotCourts?.map((cort, i) => (
                <>
                  <Accordion
                    elevation={0}
                    sx={{
                      background: 'none',
                      '&:before': {
                        display: 'none',
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
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
                          {cort.sport}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: '.7' }}>
                          {cort.tags.map((tag) => tag.title).join(' ')}
                        </Typography>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box
                        sx={{
                          display: 'flex',
                          marginTop: '1rem',
                          gap: '1.25rem',
                        }}
                      >
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
                          <Typography
                            sx={{ fontSize: '1.5rem', fontWeight: '600' }}
                          >
                            {cort.price} RUB
                          </Typography>
                          <Typography>90 мин</Typography>
                        </Box>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                  {selectedSlotCourts?.length !== i + 1 && <Divider />}
                </>
              ))}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

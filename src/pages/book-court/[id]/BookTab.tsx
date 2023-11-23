import { IonSpinner, IonToast, IonToggle, isPlatform } from '@ionic/react';
import { SportsTennis } from '@mui/icons-material';
import {
  Box,
  Typography,
  Divider,
  Stack,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  CircularProgress,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { getClub } from '../../../services/club/service';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { CalendarDay } from '../../../components/molecules/CalendarDay';
import { createMatch } from '../../../services/matches/service';
import { CourtAccordion } from '../../../components/molecules/CourtAccordion';

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
  const [slotId, setSlotId] = useState<number>(0);

  const [openSuccessBookToast, setOpenSuccessBookToast] =
    useState<boolean>(false);

  const selectedDateString = selectedDate.toLocaleDateString('en-ca');

  const {
    data,
    isLoading,
    refetch: refetchClubs,
  } = useQuery({
    queryKey: ['club', selectedDate],
    queryFn: () => getClub(Number(courtId), { gamedate: selectedDateString }),
  });

  const createMatchMutation = useMutation({
    mutationFn: createMatch,
    onSuccess() {
      refetchClubs();
      setOpenSuccessBookToast(true);
    },
    onError(e: any) {
      console.log(e, 'ERROR');
    },
  });

  const selectedSlotAvailableCourts =
    data?.availableSlots?.[selectedSlot]?.available || [];
  const selectedSlotBookedCourts =
    data?.availableSlots?.[selectedSlot]?.booked || [];

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
        background: '#f8f8f8',
        paddingBlock: '1.25rem',
        minHeight: '100vh',
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
          <Box sx={{ display: 'flex', gap: '18px', overflowX: 'scroll' }}>
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
            width: '100%',
            display: 'flex',
            justifyContent: isPlatform('mobile') ? 'space-between' : '',
            gap: 2,
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
                    cursor: 'pointer',
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
                width: '100%',
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
                width: '100%',
                marginTop: '1rem',
                display: 'flex',
                justifyContent: isPlatform('mobile') ? 'space-between' : '',
                gap: 2,
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
              {selectedSlotAvailableCourts?.map((court, i) => (
                <>
                  <CourtAccordion
                    court={court}
                    onClick={() => setSlotId(court.slotId)}
                  />
                  {selectedSlotAvailableCourts?.length !== i + 1 && <Divider />}
                </>
              ))}
              {!onlyAvailableCourts &&
                selectedSlotBookedCourts?.map((court, i) => (
                  <>
                    <CourtAccordion
                      court={court}
                      onClick={() => setSlotId(court.slotId)}
                      disabled
                    />
                    {selectedSlotBookedCourts?.length !== i + 1 && <Divider />}
                  </>
                ))}
            </Box>
          </>
        )}
      </Box>
      <Dialog open={!!slotId} onClose={() => setSlotId(0)}>
        {createMatchMutation.isPending ? (
          <CircularProgress size={60} sx={{ margin: '20px' }} />
        ) : (
          <>
            <DialogContent sx={{ padding: '40px 20px' }}>
              <Typography>
                Вы точно хотите забронировать корт на{' '}
                {selectedDate.toISOString()?.split('T')[0]} в {selectedSlot}?
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => setSlotId(0)}
                sx={{ height: '30px', fontWeight: '700', fontSize: '.75rem' }}
              >
                Нет
              </Button>
              <Button
                onClick={() => {
                  createMatchMutation.mutate({
                    slotId,
                    selectedDate,
                  });
                  setSlotId(0);
                }}
                sx={{ height: '30px', fontWeight: '700', fontSize: '.75rem' }}
              >
                ДА
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
      <IonToast
        isOpen={openSuccessBookToast}
        message="Корт был успешно забронирован!"
        onDidDismiss={() => setOpenSuccessBookToast(false)}
        duration={2000}
      ></IonToast>
    </Box>
  );
}

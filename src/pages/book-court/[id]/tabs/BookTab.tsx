import { useParams } from 'react-router-dom';
import { IonSpinner, IonToast, IonToggle, isPlatform } from '@ionic/react';
import { SportsTennis } from '@mui/icons-material';
import { Box, Typography, Divider, Stack } from '@mui/material';
import React, { useState } from 'react';
import { getClub } from '../../../../services/club/service';
import { useMutation, useQuery } from '@tanstack/react-query';
import { CalendarDay } from '../../../../components/molecules/CalendarDay';
import { CourtAccordion } from '../../../../components/molecules/CourtAccordion';
import { ConfigMatchModal } from '../../../../components/modals/ConfigMatchModal';
import { CheckoutModal } from '../../../../components/modals/CheckoutModal';
import { Accordion } from '../../../../components/molecules/Accordion';
import { createMatch } from '../../../../services/matches/service';
import useSearchParams from '../../../../hooks/useSearchParams';
import { BookFirstSpot } from '../../components/BookFirstSpot';
import { IConfigMatchModalData } from '../../../../types';
import useToggle from '../../../../hooks/useToggle';
import { useForm } from 'react-hook-form';

const now = new Date();
const dates = Array.from(Array(100)).map(
  (n, i) =>
    new Date(
      Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + i),
    ),
);

const isValidDate = (date: string) => !isNaN(Number(new Date(date)));

export function BookTab() {
  const { clubId } = useParams<{ clubId: string }>();

  const [searchParam, setSearchParam] = useSearchParams();

  const daySearchParam = searchParam('day');
  const selectedDay =
    daySearchParam && isValidDate(daySearchParam)
      ? new Date(daySearchParam)
      : dates[0];

  const timeSearchParam = searchParam('time');
  const selectedTime = timeSearchParam ? timeSearchParam : '';

  const [openConfigMatchModal, setOpenConfigMatchModal] = useToggle();
  const [openCheckoutModal, setOpenCheckoutModal] = useToggle();
  const [openSuccessBookToast, setOpenSuccessBookToast] = useToggle();

  const [gameDate, setGameDate] = useState<Date>(selectedDay);
  const [selectedSlot, setSelectedSlot] = useState<string>(selectedTime);
  const [selectedMinutes, setSelectedMinutes] = useState<number>(0);
  const [onlyAvailableSlots, setOnlyAvailableSlots] = useState(true);
  const [onlyAvailableCourts, setOnlyAvailableCourts] = useState(true);
  const [slotId, setSlotId] = useState<number>(0);

  const [selectedCourt, setSelectedCourt] = useState<any>(null);

  const { getValues, reset } = useForm({
    defaultValues: {
      isPrivate: false,
      matchType: 'competitive',
      ratingFrom: 0,
      ratingTo: 0,
      gender: 'all',
    },
  });

  const {
    data,
    isLoading,
    refetch: refetchClubs,
  } = useQuery({
    queryKey: ['club', gameDate, clubId],
    queryFn: () =>
      getClub(Number(clubId), {
        gamedate: gameDate.toLocaleDateString('en-ca'),
      }),
  });

  const selectedSlotAvailableCourts =
    data?.availableSlots?.[selectedSlot]?.available || [];

  const selectedSlotBookedCourts =
    data?.availableSlots?.[selectedSlot]?.booked || [];

  const times = data?.availableSlots && Object.keys(data.availableSlots);

  const filteredTimes = onlyAvailableSlots
    ? times?.filter((time) => !!data?.availableSlots?.[time]?.available?.length)
    : times;

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

  const onCheckout = () => {
    createMatchMutation.mutate({
      slotId,
      gameDate: gameDate,
      playTime: selectedMinutes,
      gender: getValues('gender').toUpperCase(),
      isPrivate: getValues('isPrivate'),
      type: getValues('matchType').toUpperCase(),
      ratingFrom: getValues('ratingFrom'),
      ratingTo: getValues('ratingTo'),
    });
    setOpenCheckoutModal();
  };

  return (
    <>
      <Box
        sx={{
          padding: '10px 17px',
          background: '#fbfbfb',
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
            <Box display="flex" gap={2} overflow="auto">
              {dates.map((date, i) => {
                return (
                  <Box
                    key={i}
                    onClick={() => {
                      setSearchParam('day', date.toLocaleDateString('en-ca'));
                      setGameDate(date);
                    }}
                  >
                    <CalendarDay
                      date={date}
                      selected={gameDate.toISOString() === date.toISOString()}
                    />
                  </Box>
                );
              })}
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
              <Box display="flex" gap={1.5} flexWrap="wrap" mt={2}>
                {filteredTimes?.map((slot, i) => {
                  return (
                    <Box
                      key={i}
                      onClick={() => {
                        setSearchParam('time', slot);
                        setSelectedSlot(slot);
                      }}
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
                  );
                })}
              </Box>

              {/* hidden before we get know when to show it */}
              {/* <Accordion
                title="Забронировать место в матче"
                description="Lorem ipsum dolor sit amet consectetur sali adipisicingelit."
              >
                <Box display="flex" justifyContent="center">
                  <BookFirstSpot
                    price={17}
                    playTime={90}
                    handleBook={() => setOpenConfigMatchModal()}
                  />
                </Box>
              </Accordion> */}

              <Box mt="1rem" width="100%">
                <Typography fontSize="1.15rem" fontWeight={700}>
                  Забронировать корт
                </Typography>
                <Typography variant="body2">
                  Cоздайте приватный матч, куда вы сможете пригласить своих
                  друзей
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
                {selectedSlotAvailableCourts?.map((court, i) => {
                  function getOptionTime(optionIndex: number) {
                    setSelectedMinutes(court.options[optionIndex].playtime);
                  }

                  return (
                    <React.Fragment key={i}>
                      <CourtAccordion
                        court={court}
                        getOptionTime={getOptionTime}
                        onClick={() => {
                          setOpenConfigMatchModal();
                          setSlotId(court.slotId);
                        }}
                        handleSelectCourt={setSelectedCourt}
                      />
                      {selectedSlotAvailableCourts?.length !== i + 1 && (
                        <Divider />
                      )}
                    </React.Fragment>
                  );
                })}

                {!onlyAvailableCourts &&
                  selectedSlotBookedCourts?.map((court, i) => (
                    <React.Fragment key={i}>
                      <CourtAccordion
                        court={court}
                        onClick={() => setSlotId(0)}
                        disabled
                      />
                      {selectedSlotBookedCourts?.length !== i + 1 && (
                        <Divider />
                      )}
                    </React.Fragment>
                  ))}
              </Box>
            </>
          )}
        </Box>
        <IonToast
          isOpen={openSuccessBookToast}
          message="Корт был успешно забронирован!"
          onDidDismiss={() => setOpenSuccessBookToast(false)}
          duration={2000}
        ></IonToast>
      </Box>

      <ConfigMatchModal
        openState={openConfigMatchModal}
        handleModal={setOpenConfigMatchModal}
        getData={(data: IConfigMatchModalData) => {
          reset(data);
          setOpenConfigMatchModal();
          setOpenCheckoutModal();
        }}
      />

      <CheckoutModal
        courtData={{
          ...selectedCourt,
          date: gameDate,
          startTime: selectedSlot,
        }}
        openState={openCheckoutModal}
        handleModal={setOpenCheckoutModal}
        handleCheckout={onCheckout}
      />
    </>
  );
}

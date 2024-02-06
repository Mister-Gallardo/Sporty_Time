import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { IonSpinner, IonToast, IonToggle, isPlatform } from '@ionic/react';
import { Box, Typography, Divider, Stack } from '@mui/material';
import { SportsTennis } from '@mui/icons-material';
import { getClub } from '../../../../services/club/service';
import { useMutation, useQuery } from '@tanstack/react-query';
import { CalendarDay } from '../../../../components/molecules/CalendarDay';
import { CourtAccordion } from '../../../../components/molecules/CourtAccordion';
import { ConfigMatchModal } from '../../../../components/modals/ConfigMatchModal';
import { CheckoutModal } from '../../../../components/modals/CheckoutModal';
import { createMatch } from '../../../../services/matches/service';
import { useSearchParam } from '../../../../hooks/useSearchParams';
import useToggle from '../../../../hooks/useToggle';
import { FormProvider, useForm } from 'react-hook-form';
import { getDatesList } from '../../../../helpers/getDatesList';
import { parseDate } from '../../../../helpers/getMatchStatus';
import { Court, IAvailableTime } from '../../../../services/club/interface';
import { EGender, EMatchType } from '../../../../services/matches/interface';

const compareTimes = (time1: string, time2: string) => {
  const [hours1, minutes1] = time1.split(':').map(Number);
  const [hours2, minutes2] = time2.split(':').map(Number);

  if (hours1 !== hours2) {
    return hours1 - hours2;
  } else {
    return minutes1 - minutes2;
  }
};

export function BookTab() {
  const dates = getDatesList(100);

  const { clubId } = useParams<{ clubId: string }>();
  const history = useHistory();

  const [openConfigMatchModal, setOpenConfigMatchModal] = useToggle();
  const [openCheckoutModal, setOpenCheckoutModal] = useToggle();
  const [openSuccessBookToast, setOpenSuccessBookToast] = useToggle();
  const [date, setSelectedDate] = useSearchParam(
    'day',
    new Date().toLocaleDateString('en-ca'),
  );
  const selectedDate = new Date(date);
  const [selectedTime = '', setSelectedTime] = useSearchParam('time');
  const [selectedOption, setSelectedOption] = useState<
    IAvailableTime & { court: Court }
  >();
  const [onlyAvailableSlots, setOnlyAvailableSlots] = useState(false);
  const [onlyAvailableCourts, setOnlyAvailableCourts] = useState(false);

  const matchConfigForm = useForm({
    defaultValues: {
      isPrivate: false,
      type: EMatchType.COMPETITIVE,
      ratingFrom: 0,
      ratingTo: 0,
      gender: EGender.ALL,
    },
  });

  const { getValues } = matchConfigForm;

  const {
    data,
    isLoading,
    isError,
    refetch: refetchClubs,
  } = useQuery({
    queryKey: ['club', selectedDate, clubId],
    queryFn: () =>
      getClub(Number(clubId), {
        gamedate: selectedDate.toLocaleDateString('en-ca'),
      }),
  });

  const selectedTimeAvailableCourts =
    data?.availableSlots?.[selectedTime]?.available || [];

  const selectedTimeBookedCourts =
    data?.availableSlots?.[selectedTime]?.booked || [];

  const filteredTimes = useMemo(() => {
    if (!data) return;

    const times = data.availableSlots && Object.keys(data.availableSlots);
    const sortedTimes = times?.sort(compareTimes);

    return onlyAvailableSlots
      ? sortedTimes?.filter(
          (time) => !!data?.availableSlots?.[time]?.available?.length,
        )
      : times;
  }, [data, onlyAvailableSlots]);

  const createMatchMutation = useMutation({
    mutationFn: createMatch,
    onSuccess(data) {
      data?.matchId && history.push(`/matches/${data.matchId}`);
      refetchClubs();
      setOpenSuccessBookToast(true);
    },
    onError(e: any) {
      console.log(e, 'ERROR');
    },
  });

  useEffect(() => {
    if (!selectedTime) setSelectedTime(filteredTimes?.[0] || '');
  }, [filteredTimes]);

  const onCheckout = (money: number) => {
    const gameDate = new Date(
      parseDate(selectedDate.toLocaleDateString('en-ca'), selectedTime, 'Z'),
    );
    if (!selectedOption) return;

    createMatchMutation.mutate({
      courtId: selectedOption.court.id,
      gameDate,
      playTime: selectedOption?.playTime,
      money,
      ...getValues(),
    });
    setOpenCheckoutModal();
  };

  if (isError) {
    history.push('/book-court');
    return null;
  }

  return (
    <>
      <Box
        sx={{
          padding: '10px 17px',
          background: '#fff',
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
                //find bug to solve this problem
                if (selectedDate.toString() === 'Invalid Date') return;

                return (
                  <CalendarDay
                    key={i}
                    onSelect={() => {
                      setSelectedDate(date.toLocaleDateString('en-ca'));
                    }}
                    date={date}
                    selected={selectedDate.toISOString() === date.toISOString()}
                  />
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
                {filteredTimes?.map((time, i) => {
                  return (
                    <Box
                      key={i}
                      onClick={() => {
                        setSelectedTime(time);
                      }}
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
                        borderRadius: '5px',
                        color: time === selectedTime ? 'white' : 'black',
                      }}
                    >
                      {time}
                    </Box>
                  );
                })}
              </Box>

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
                {selectedTimeAvailableCourts?.map((court, i) => (
                  <React.Fragment key={i}>
                    <CourtAccordion
                      court={court}
                      handleSelect={(option) => {
                        setOpenConfigMatchModal();
                        setSelectedOption({
                          court,
                          playTime: option.playTime,
                          price: option.price,
                        });
                      }}
                    />
                    {selectedTimeAvailableCourts?.length !== i + 1 && (
                      <Divider />
                    )}
                  </React.Fragment>
                ))}

                {!onlyAvailableCourts &&
                  selectedTimeBookedCourts?.map((court, i) => (
                    <React.Fragment key={i}>
                      <CourtAccordion court={court} disabled />
                      {selectedTimeBookedCourts?.length !== i + 1 && (
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
          color="success"
        ></IonToast>
      </Box>

      {selectedOption?.court && (
        <FormProvider {...matchConfigForm}>
          <ConfigMatchModal
            sport={selectedOption.court.sport}
            openState={openConfigMatchModal}
            handleModal={setOpenConfigMatchModal}
            handleNext={setOpenCheckoutModal}
          />
        </FormProvider>
      )}
      {selectedOption && data?.timezone && (
        <CheckoutModal
          {...selectedOption}
          date={selectedDate}
          startTime={selectedTime}
          timezone={data?.timezone}
          openState={openCheckoutModal}
          handleModal={setOpenCheckoutModal}
          handleCheckout={onCheckout}
        />
      )}
    </>
  );
}

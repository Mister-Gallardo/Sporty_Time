import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  IonSpinner,
  IonToast,
  IonToggle,
  isPlatform,
  useIonToast,
} from '@ionic/react';
import { Box, Typography, Divider, Stack } from '@mui/material';
import { SportsTennis } from '@mui/icons-material';
import { getClub } from '../../../../services/club/service';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { CalendarDay } from '../../../../components/molecules/CalendarDay';
import { CourtAccordion } from '../../../../components/molecules/CourtAccordion';
import { ConfigMatchModal } from '../../../../components/modals/ConfigMatchModal';
import { CheckoutModal } from '../../../../components/modals/CheckoutModal';
import { createBookingYookassaToken } from '../../../../services/matches/service';
import { useSearchParam } from '../../../../hooks/useSearchParams';
import useToggle from '../../../../hooks/useToggle';
import { FormProvider, useForm } from 'react-hook-form';
import { getDatesList } from '../../../../helpers/getDatesList';
import { Court, IAvailableTime } from '../../../../services/club/interface';
import { EGender, EMatchType } from '../../../../services/matches/interface';
import { format } from 'date-fns';
import { renderCheckoutWidget } from '../../../../helpers/renderCheckoutWidget';
import { useUserInfo } from '../../../../services/api/hooks';
import { socket } from '../../../../utils/socket';

export function BookTab() {
  const dates = getDatesList(100);

  const { clubId } = useParams<{ clubId: string }>();
  const history = useHistory();

  const [openConfigMatchModal, setOpenConfigMatchModal] = useToggle();
  const [openCheckoutModal, setOpenCheckoutModal] = useToggle();

  const [openSuccessBookToast, setOpenSuccessBookToast] = useToggle();
  const [date, setSelectedDate] = useSearchParam(
    'day',
    format(new Date(), 'yyyy-MM-dd'),
  );
  const selectedDate = new Date(date);
  const [selectedTime = '', setSelectedTime] = useSearchParam('time');
  const [selectedOption, setSelectedOption] = useState<
    IAvailableTime & { court: Court }
  >();
  const [onlyAvailableSlots, setOnlyAvailableSlots] = useState(true);
  const [onlyAvailableCourts, setOnlyAvailableCourts] = useState(true);

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

  const { data, isLoading, isError } = useQuery({
    queryKey: ['club', selectedDate, clubId],
    queryFn: () =>
      getClub(Number(clubId), {
        gamedate: format(selectedDate, 'yyyy-MM-dd'),
      }),
  });

  const selectedTimeAvailableCourts =
    data?.availableSlots?.[selectedTime]?.available || [];

  const selectedTimeBookedCourts =
    data?.availableSlots?.[selectedTime]?.booked || [];

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

  const [user] = useUserInfo();

  const createYookassaMutation = useMutation({
    mutationFn: createBookingYookassaToken,
    onSuccess(token: string) {
      renderCheckoutWidget(token);
    },
    onError(error: any) {
      console.log(error);
    },
  });

  const onCheckout = (money: number) => {
    if (!user || !selectedOption) return;

    const gameDate = `${format(
      selectedDate,
      'yyyy-MM-dd',
    )}T${selectedTime}:00.00Z`;

    createYookassaMutation.mutate({
      money,
      courtId: selectedOption.court.id,
      gameDate,
      playTime: selectedOption?.playTime,
      ...getValues(),
    });
    setOpenCheckoutModal();
  };

  const qc = useQueryClient();
  const [showToast] = useIonToast();

  useEffect(() => {
    const redirectOnSuccessPayment = (e: {
      action: string;
      matchId: number;
    }) => {
      if (!e.matchId) return;
      if (e.action === 'create') {
        showToast({
          color: 'success',
          message: 'Оплата проведена успешно',
          mode: 'ios',
          position: 'top',
          duration: 2000,
        });
        qc.refetchQueries({ queryKey: ['my-matches'] });
        history.push(`/matches/${e.matchId}`);
        return null;
      }
    };

    socket.on('newMatch', redirectOnSuccessPayment);

    return () => {
      socket.off('newMatch', redirectOnSuccessPayment);
    };
  }, []);

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
        <Box width="100%" maxWidth={1240} mx="auto">
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
                      setSelectedDate(format(new Date(date), 'yyyy-MM-dd'));
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

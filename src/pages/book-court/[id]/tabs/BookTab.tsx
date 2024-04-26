import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { IonSpinner, IonToggle, isPlatform, useIonToast } from '@ionic/react';
import { Box, Typography, Divider, Stack } from '@mui/material';
import { getClub } from '../../../../services/club/service';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { CourtAccordion } from '../../../../components/molecules/CourtAccordion';
import { ConfigMatchModal } from '../../../../components/modals/ConfigMatchModal';
import { CheckoutModal } from '../../../../components/modals/CheckoutModal';
import {
  getMatchBookingYookassaToken,
  getClassBookingYookassaToken,
} from '../../../../services/matches/service';
import { useSearchParam } from '../../../../hooks/useSearchParams';
import useToggle from '../../../../hooks/useToggle';
import { FormProvider, useForm } from 'react-hook-form';
import { Court, IAvailableTime } from '../../../../services/club/interface';
import { EGender, EMatchType } from '../../../../services/matches/interface';
import { format } from 'date-fns';
import { useUserInfo } from '../../../../services/api/hooks';
import { socket } from '../../../../utils/socket';
import { renderCheckoutWidget } from '../../../../helpers/renderCheckoutWidget';
import { TimesList } from '../components/TimesList';
import { DatesList } from '../components/DatesList';

export function BookTab() {
  const { clubId } = useParams<{ clubId: string }>();
  const history = useHistory();

  const [openConfigMatchModal, setOpenConfigMatchModal] = useToggle();
  const [openCheckoutModal, setOpenCheckoutModal] = useToggle();

  const [date] = useSearchParam('day', format(new Date(), 'yyyy-MM-dd'));
  const selectedDate = new Date(date);

  const [selectedTime = ''] = useSearchParam('time');
  const [selectedOption, setSelectedOption] = useState<
    IAvailableTime & { court: Court }
  >();

  const [onlyAvailableCourts, setOnlyAvailableCourts] = useState(true);

  const configBookingForm = useForm({
    defaultValues: {
      isClass: false,
      isPrivate: false,
      type: EMatchType.COMPETITIVE,
      ratingFrom: 0,
      ratingTo: 7,
      maxStudentsAmount: 4,
      gender: EGender.ALL,
      title: '',
      description: '',
      priceForSpot: '',
    },
  });

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

  const [user] = useUserInfo();

  const matchBookingMutation = useMutation({
    mutationFn: getMatchBookingYookassaToken,
    onSuccess(token: string) {
      renderCheckoutWidget(token);
    },
    onError(error: any) {
      console.log(error);
    },
  });

  const classBookingMutation = useMutation({
    mutationFn: getClassBookingYookassaToken,
    onSuccess(token: string) {
      renderCheckoutWidget(token);
    },
    onError(error: any) {
      console.log(error);
    },
  });

  const onCheckout = (onlyMyPart: boolean) => {
    if (!user || !selectedOption) return;

    const gameDate = `${format(
      selectedDate,
      'yyyy-MM-dd',
    )}T${selectedTime}:00.00Z`;
    const courtId = selectedOption.court.id;
    const playTime = selectedOption.playTime;

    const { getValues } = configBookingForm;

    const {
      isClass,
      type,
      isPrivate,
      ratingFrom,
      ratingTo,
      gender,
      maxStudentsAmount,
      title,
      description,
      priceForSpot,
    } = getValues();

    const bookingData = { courtId, gameDate, playTime };

    if (isClass) {
      classBookingMutation.mutate({
        ...bookingData,
        isPrivate,
        maxStudentsAmount,
        ratingFrom,
        ratingTo,
        title,
        description,
        priceForSpot: +priceForSpot,
        gender,
      });
    } else {
      matchBookingMutation.mutate({
        ...bookingData,
        type,
        isPrivate,
        ratingFrom,
        ratingTo,
        gender,
        onlyMyPart,
      });
    }
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
        setOpenCheckoutModal(false);
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
          <DatesList />

          {isLoading ? (
            <Stack alignItems="center" mt={5}>
              <IonSpinner />
            </Stack>
          ) : (
            <>
              <TimesList date={selectedDate} />

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
      </Box>

      {selectedOption?.court && (
        <FormProvider {...configBookingForm}>
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

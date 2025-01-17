import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { IonSpinner, IonToggle, isPlatform, useIonToast } from '@ionic/react';
import { Box, Button, Typography, Divider, Stack } from '@mui/material';
import { Share } from '@capacitor/share';
import { getClub } from '../../../../services/club/service';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { CourtAccordion } from '../../../../components/molecules/CourtAccordion';
import { CheckoutModal } from '../../../../components/modals/CheckoutModal';
import { getMatchBookingYookassaToken } from '../../../../services/matches/service';
import { useSearchParam } from '../../../../hooks/useSearchParams';
import useToggle from '../../../../hooks/useToggle';
import { FormProvider, useForm } from 'react-hook-form';
import { Court, IAvailableTime } from '../../../../services/club/interface';
import {
  EGender,
  EMatchType,
  ESport,
} from '../../../../services/matches/interface';
import { format } from 'date-fns';
import { useUserInfo } from '../../../../services/api/hooks';
import { renderCheckoutWidget } from '../../../../helpers/renderCheckoutWidget';
import { TimesList } from '../components/TimesList';
import { DatesList } from '../components/DatesList';
import { SuccessfulBookingModal } from '../../../../components/modals/SuccessfulBookingModal';
import { getClassBookingYookassaToken } from '../../../../services/classes';
import { ConfigBookingModal } from '../../../../components/modals/ConfigBookingModal';

export function BookTab() {
  const { clubId } = useParams<{ clubId: string }>();
  const history = useHistory();

  const [openConfigBookingModal, setOpenConfigBookingModal] = useToggle();
  const [openCheckoutModal, setOpenCheckoutModal] = useToggle();
  const [openSuccessfulModal, setOpenSuccessfulModal] = useToggle();

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
      playersCount: 4,
      gender: EGender.ALL,
      sport: ESport.PADEL,
      title: '',
      description: '',
      price: '',
      priceForSpot: '',
    },
  });
  const { getValues, reset } = configBookingForm;

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

  const [showToast] = useIonToast();
  const qc = useQueryClient();

  const [token, setToken] = useState<string>('');

  const onSuccess = () => {
    setOpenCheckoutModal(false);
    setOpenSuccessfulModal(true);
    qc.refetchQueries({ queryKey: ['my-matches', false] });
  };

  const matchBookingMutation = useMutation({
    mutationFn: getMatchBookingYookassaToken,
    onSuccess(token: string) {
      setToken(token);
      renderCheckoutWidget(token, onSuccess);
    },
    onError(e: any) {
      reset();
      const message = e?.response?.data?.message;
      showToast({
        color: 'danger',
        message,
        mode: 'ios',
        position: 'top',
        duration: 2000,
      });
      setOpenCheckoutModal(false);
    },
  });

  const classBookingMutation = useMutation({
    mutationFn: getClassBookingYookassaToken,
    onSuccess(token: string) {
      setToken(token);
      renderCheckoutWidget(token, onSuccess);
    },
    onError(e: any) {
      reset();
      const message = e?.response?.data?.message;
      showToast({
        color: 'danger',
        message,
        mode: 'ios',
        position: 'top',
        duration: 2000,
      });
      setOpenCheckoutModal(false);
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

    const {
      isClass,
      type,
      isPrivate,
      ratingFrom,
      ratingTo,
      gender,
      playersCount,
      title,
      description,
      priceForSpot,
      sport,
    } = getValues();

    const bookingData = { courtId, gameDate, playTime };

    if (isClass) {
      classBookingMutation.mutate({
        ...bookingData,
        isPrivate,
        playersCount,
        ratingFrom,
        ratingTo,
        title,
        description,
        price: +priceForSpot,
        gender,
        sport,
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

  if (isError) {
    history.push('/book-court');
    return null;
  }

  async function shareURL() {
    try {
      await Share.share({
        title: 'Поделиться кортом',
        url: history.location.pathname,
      })
    } catch(e) {
      alert(e)
    }
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
                        setOpenConfigBookingModal();
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
                  <Button variant='contained' onClick={shareURL}>Поделиться кортом</Button>
              </Box>
            </>
          )}
        </Box>
      </Box>

      {selectedOption?.court && (
        <FormProvider {...configBookingForm}>
          <ConfigBookingModal
            sport={selectedOption.court.sport}
            openState={openConfigBookingModal}
            handleModal={setOpenConfigBookingModal}
            handleNext={setOpenCheckoutModal}
          />
        </FormProvider>
      )}
      {selectedOption && data?.timezone && (
        <FormProvider {...configBookingForm}>
          <CheckoutModal
            {...selectedOption}
            date={selectedDate}
            startTime={selectedTime}
            timezone={data?.timezone}
            openState={openCheckoutModal}
            handleModal={setOpenCheckoutModal}
            handleCheckout={onCheckout}
          />
        </FormProvider>
      )}
      {token && (
        <SuccessfulBookingModal
          openState={openSuccessfulModal}
          handleModal={setOpenSuccessfulModal}
          token={token}
          isClass={getValues('isClass')}
        />
      )}
    </>
  );
}

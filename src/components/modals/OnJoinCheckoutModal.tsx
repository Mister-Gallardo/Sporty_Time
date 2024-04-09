import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Typography,
} from '@mui/material';
import {
  createJoinMatchYookassaToken,
  getOneAvailableMatch,
} from '../../services/matches/service';
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';
import { ModalContainer } from './ModalContainer';
import { getMatchTypeName, getSportName } from '../../helpers/getNameOf';
import useToggle from '../../hooks/useToggle';
import { renderCheckoutWidget } from '../../helpers/renderCheckoutWidget';
import { useIonToast } from '@ionic/react';
import { socket } from '../../utils/socket';
import { usePlayerProfile } from '../../services/api/hooks';
import { getSportRating } from '../../helpers/getSportRating';

interface IOnJoinCheckoutModalProps {
  openState: boolean;
  handleModal: (val?: boolean) => void;
  playerInTeam: string;
}

export const OnJoinCheckoutModal: React.FC<IOnJoinCheckoutModalProps> = ({
  openState,
  handleModal,
  playerInTeam,
}) => {
  const { matchId } = useParams<{ matchId: string }>();
  const [myPlayer] = usePlayerProfile();

  const { data, refetch } = useQuery({
    queryKey: [`match`, Number(matchId)],
    queryFn: () => getOneAvailableMatch(Number(matchId)),
  });

  const matchData = data?.data;
  const playerAlreadyInSomeTeam = matchData?.matchBookings.find(
    (booking) => booking.player?.id === myPlayer?.id,
  );

  const isPlayerInMatchWithoutPayment =
    playerAlreadyInSomeTeam &&
    !playerAlreadyInSomeTeam?.paid &&
    !matchData?.paid;

  const currentSportRating = getSportRating(myPlayer, matchData?.sport);

  // check if the player's current level is within the match range
  const isRatingSufficient =
    currentSportRating >= (matchData?.ratingFrom || 0) &&
    currentSportRating <= (matchData?.ratingTo || 0);

  const qc = useQueryClient();
  const [showToast] = useIonToast();

  // Join Match / Book a Place Request
  const createYookassaMutation = useMutation({
    mutationFn: createJoinMatchYookassaToken,
    onSuccess(token: string) {
      if (isRatingSufficient || isPlayerInMatchWithoutPayment) {
        renderCheckoutWidget(token);
      } else {
        refetch();
        handleModal(false);
        showToast({
          color: 'success',
          message:
            'Вы сделали запрос на присоединение к матчу, ожидайте решения игроков',
          mode: 'ios',
          position: 'bottom',
          duration: 2000,
        });
      }
    },
    onError(e: any) {
      handleModal(false);
      setIsDisabled(false);

      const message = e?.response?.data?.message;
      if (!message) return;

      showToast({
        color: 'danger',
        message,
        mode: 'ios',
        position: 'bottom',
        duration: 2000,
      });
    },
  });

  // when user joins the match
  const onMatchJoin = () => {
    if (!myPlayer?.user || !matchData) return;

    if (isPlayerInMatchWithoutPayment || (matchId && playerInTeam)) {
      const team = isPlayerInMatchWithoutPayment
        ? playerAlreadyInSomeTeam?.team
        : playerInTeam;

      createYookassaMutation.mutate({
        matchId: Number(matchId),
        team,
        money: matchData.paid ? 0 : matchData.price / 4,
      });
    } else {
      showToast({
        message: 'Выберите команду!',
        duration: 1000,
        color: 'danger',
      });
    }
  };

  useEffect(() => {
    const updateMatchData = (e: { action: string }) => {
      if (e.action === 'update') {
        handleModal(false);
        showToast({
          color: 'success',
          message: matchData?.paid
            ? 'Вы присоединились к матчу!'
            : 'Оплата проведена успешно',
          mode: 'ios',
          position: 'top',
          duration: 2000,
        });
        qc.refetchQueries({ queryKey: ['my-matches', 'match'] });
      }
    };
    const key = `matchId - ${matchId}`;
    socket.on(key, updateMatchData);

    return () => {
      socket.off(key, updateMatchData);
    };
  }, []);

  if (!matchData) return null;

  const { booking, type, sport, paid, price } = matchData;
  const interval = booking.interval;

  // match start date + start-end time
  const matchDate = `${interval.slice(2, 12)} | ${interval.slice(
    13,
    18,
  )}-${interval.slice(-10, -5)}`;

  const total = paid ? 0 : price / 4;
  const tags = booking?.court?.tags.map((tag) => tag.title).join(' | ');

  const [isDisabled, setIsDisabled] = useToggle();

  return (
    <ModalContainer
      openState={openState}
      handleModal={(val) => {
        setIsDisabled(false);
        handleModal(val);
      }}
      headerTitle="Оплата"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={1}
        border="1px solid #ddd"
      >
        <Box flexGrow={1} pr={1}>
          <Typography>{matchDate}</Typography>
          <Typography color="gray">{getMatchTypeName(type)}</Typography>
          <Typography>
            {getSportName(sport)}, {booking?.court?.title}
          </Typography>
          <Typography>{tags}</Typography>
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          pl={2}
          pr={1}
        >
          <HistoryToggleOffOutlinedIcon />
          <Typography noWrap>{booking.duration} мин</Typography>
        </Box>
      </Box>

      <Box my={4} display="flex" alignItems="center" gap={4}>
        <Box>
          <Typography fontWeight={600}>Итог</Typography>
          <Typography fontSize={12} color="gray">
            Плата за услуги Sportytime и налоги включительно
          </Typography>
        </Box>

        <Typography
          fontSize={20}
          sx={{ color: 'primary.main' }}
          whiteSpace="nowrap"
        >
          {total} RUB
        </Typography>
      </Box>

      <Box py={1.5} px={2} borderTop="1px solid #ddd">
        <Button
          disabled={isDisabled}
          endIcon={createYookassaMutation.isPending && <CircularProgress />}
          onClick={() => {
            if (!isRatingSufficient && isPlayerInMatchWithoutPayment) {
              setIsDisabled();
            }
            onMatchJoin();
          }}
          variant="contained"
          sx={{
            backgroundColor: '#0d2432',
            borderRadius: 10,
            '&:hover': {
              backgroundColor: '#123347',
            },
          }}
          fullWidth
        >
          {isPlayerInMatchWithoutPayment
            ? 'Оплатить'
            : isRatingSufficient
            ? 'Забронировать'
            : 'Запросить'}{' '}
          место
        </Button>
      </Box>
      {isRatingSufficient && (
        <Box
          mt={2}
          id="payment-form"
          minHeight={isDisabled ? 550 : 'unset'}
          position="relative"
          zIndex={2}
        />
      )}
    </ModalContainer>
  );
};

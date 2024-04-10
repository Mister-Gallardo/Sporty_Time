import { useParams } from 'react-router';
import { Box, Button } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { AskForTestPassDialog } from '../../../../components/modals/AskForTestPassDialog';
import { OnJoinCheckoutModal } from '../../../../components/modals/OnJoinCheckoutModal';
import { getOneAvailableMatch } from '../../../../services/matches/service';
import { usePlayerProfile } from '../../../../services/api/hooks';
import { getSportRating } from '../../../../helpers/getSportRating';
import useToggle from '../../../../hooks/useToggle';
import { isAfter } from 'date-fns';

export const MatchBookingButton = () => {
  const { matchId } = useParams<{ matchId: string }>();
  const [myPlayer] = usePlayerProfile();

  const { data } = useQuery({
    queryKey: [`match`, +matchId],
    queryFn: () => getOneAvailableMatch(+matchId),
  });

  const matchData = data?.data;
  const isUserOwner = matchData?.owner?.id === myPlayer?.id;

  const playerAlreadyInSomeTeam = matchData?.matchBookings.find(
    (booking) => booking.player?.id === myPlayer?.id,
  );

  const currentSportRating = getSportRating(myPlayer, matchData?.sport);

  // check if the player's current level is within the match range
  const isRatingSufficient =
    currentSportRating >= (matchData?.ratingFrom || 0) &&
    currentSportRating <= (matchData?.ratingTo || 0);

  // check if the player made request for place
  const isRequestedPlace = matchData?.joinrequests.find(
    (request) => request?.player?.id === myPlayer?.id,
  );

  const isPlayerInMatchWithoutPayment =
    playerAlreadyInSomeTeam &&
    !playerAlreadyInSomeTeam?.paid &&
    !matchData?.paid;

  const [openCheckoutModal, setOpenCheckoutModal] = useToggle();
  //if user has no rating
  const [openTestDialog, setOpenTestDialog] = useToggle();

  const onBookPlace = () => {
    if (!myPlayer) return;

    if (currentSportRating) {
      setOpenCheckoutModal();
    } else {
      setOpenTestDialog();
    }
  };

  if (!matchData) return;

  return (
    <>
      {/* if user isn't the match-owner, there is an empty slot, 
        user isn't in match or the match wasn't started, 
        user with insufficient rating requested for a place and must pay 
        or didn't requested for a place yet - show the btn */}
      {!isUserOwner &&
        matchData.matchBookings.length !== 4 &&
        (isPlayerInMatchWithoutPayment || !playerAlreadyInSomeTeam) &&
        isAfter(new Date(matchData?.booking?.startsAt), new Date()) &&
        (isPlayerInMatchWithoutPayment || !isRequestedPlace) && (
          <Box
            sx={{
              position: 'fixed',
              zIndex: 1,
              left: '0',
              right: '0',
              bottom: '1.5rem',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              onClick={onBookPlace}
              sx={{
                paddingX: 2,
                background: '#0D2432',
                color: '#fff',
                boxShadow:
                  'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;',
                '&:hover': {
                  background: '#0D2432',
                },
                '&:disabled': {
                  background: '#777',
                  color: '#eee',
                },
              }}
            >
              {isPlayerInMatchWithoutPayment
                ? 'Оплатить'
                : isRatingSufficient
                ? 'Забронировать'
                : 'Запросить'}{' '}
              место
              {matchData.paid ? '' : '- ₽' + matchData.price / 4}
            </Button>
          </Box>
        )}

      <AskForTestPassDialog
        open={openTestDialog}
        handleOpen={setOpenTestDialog}
      />

      <OnJoinCheckoutModal
        openState={openCheckoutModal}
        handleModal={setOpenCheckoutModal}
      />
    </>
  );
};

import { useParams } from 'react-router';
import { Box, Button } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { AskForTestPassDialog } from '../../../../components/modals/AskForTestPassDialog';
import { OnJoinCheckoutModal } from '../../../../components/modals/OnJoinCheckoutModal';
import { getOneAvailableMatch } from '../../../../services/matches/service';
import { usePlayerProfile } from '../../../../services/api/hooks';
import { getSportRating } from '../../../../helpers/getSportRating';
import useToggle from '../../../../hooks/useToggle';
import { getMatchStatus } from '../../../../helpers/getMatchStatus';
import { EGender, Status } from '../../../../services/matches/interface';

export const MatchBookingButton = () => {
  const { matchId } = useParams<{ matchId: string }>();
  const [myPlayer] = usePlayerProfile();

  const { data } = useQuery({
    queryKey: [`match`, +matchId],
    queryFn: () => getOneAvailableMatch(+matchId),
  });

  const matchData = data?.data;

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

  const matchStatus = getMatchStatus(matchData);
  const isUpcomming =
    matchStatus === Status.PENDING || matchStatus === Status.UPCOMING;

  const matchGender = matchData.gender;
  const isGenderAdmissible =
    matchGender === EGender.ALL || matchGender === myPlayer?.user?.gender;

  return (
    <>
      {isUpcomming &&
        (!playerAlreadyInSomeTeam || isPlayerInMatchWithoutPayment) && (
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
              disabled={
                (isRequestedPlace && !playerAlreadyInSomeTeam) ||
                !isGenderAdmissible
              }
              onClick={onBookPlace}
              variant="contained"
              sx={{
                paddingX: 2,
                boxShadow:
                  'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;',
                '&:disabled': {
                  backgroundColor: '#d6d6d6',
                },
              }}
            >
              {isPlayerInMatchWithoutPayment
                ? 'Оплатить'
                : isRatingSufficient
                ? 'Забронировать'
                : 'Запросить'}{' '}
              место
              {matchData.paid ? '' : ' - ₽' + matchData.price / 4}
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

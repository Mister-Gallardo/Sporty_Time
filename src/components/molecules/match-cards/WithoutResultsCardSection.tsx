import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import { MatchData, Status } from '../../../services/matches/interface';
import { Link } from 'react-router-dom';
import { usePlayerProfile } from '../../../services/api/hooks';
import { getMatchStatus } from '../../../helpers/getMatchStatus';

interface IWithoutResults extends MatchData {
  uploadResults?: ((matchId: number) => void) | null;
}

export const WithoutResultsCardSection: React.FC<IWithoutResults> = (props) => {
  const { id, booking, matchBookings, uploadResults } = props;

  const [player] = usePlayerProfile();

  const interval = booking?.interval;
  const matchDate =
    interval &&
    `${interval.slice(2, 12)} | ${interval.slice(13, 18)}-${interval.slice(
      -10,
      -5,
    )}`;

  const status = getMatchStatus(props);

  const myBooking = matchBookings?.find(
    (booking) => booking?.player?.id === player?.id,
  );
  const clubName = booking?.court?.club?.title;
  const courtName = booking?.court?.title;

  const withStatus =
    status === Status.CANCELED ||
    status === Status.WAITING_FOR_RESULTS ||
    status === Status.IN_PROGRESS ||
    status === Status.PENDING ||
    status === Status.VALIDATING;

  const statusText =
    status === Status.CANCELED
      ? 'Отменён'
      : status === Status.WAITING_FOR_RESULTS
      ? 'Ожидание результатов'
      : status === Status.IN_PROGRESS
      ? 'Матч в процессе'
      : status === Status.VALIDATING
      ? 'Подтверждение результатов'
      : status === Status.PENDING
      ? 'Ожидание оплаты'
      : '';

  const statusBgColor =
    status === Status.CANCELED || status === Status.PENDING
      ? '#fff6f5'
      : status === Status.WAITING_FOR_RESULTS
      ? '#ffe0ed'
      : status === Status.IN_PROGRESS
      ? '#e1fff1'
      : status === Status.VALIDATING
      ? 'green'
      : '';

  const statusTextColor =
    status === Status.CANCELED || status === Status.PENDING
      ? '#d05e73'
      : status === Status.WAITING_FOR_RESULTS
      ? '#ff4588'
      : status === Status.IN_PROGRESS
      ? '#008f4b'
      : status === Status.VALIDATING
      ? 'yellow'
      : '';

  const buttonBgColor =
    status === Status.WAITING_FOR_RESULTS
      ? '#333'
      : status === Status.CANCELED
      ? '#3d5ef5'
      : status === Status.UPCOMING
      ? '#3d5ef5'
      : '#3d5ef5';

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      flexGrow={1}
      height="100%"
    >
      <Typography fontSize={13} fontWeight={500}>
        {matchDate}
      </Typography>

      <Typography fontSize={12} color="gray">
        {clubName}
      </Typography>

      {withStatus ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={0.8}
          py={0.5}
          width="100%"
          bgcolor={statusBgColor}
          color={statusTextColor}
        >
          {status === Status.CANCELED && <CloseIcon fontSize="small" />}
          <Typography fontSize={12} fontWeight={700}>
            {statusText}
          </Typography>
        </Box>
      ) : (
        <Typography fontSize={19} fontWeight={600}>
          {courtName}
        </Typography>
      )}

      <Box
        onClick={(e) => {
          e.stopPropagation();
          if (uploadResults) uploadResults(id);
        }}
        mt={1}
        width={40}
        height={40}
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius={40}
        bgcolor={buttonBgColor}
        sx={{
          cursor: 'pointer',
        }}
      >
        {status === Status.WAITING_FOR_RESULTS &&
        !myBooking?.confirmMatchResults ? (
          <Add sx={{ color: '#fff' }} />
        ) : (
          <Link to={`/chats/${id}`}>
            <ChatBubbleOutlineOutlinedIcon
              fontSize="small"
              sx={{ color: '#fff' }}
            />
          </Link>
        )}
      </Box>
    </Box>
  );
};

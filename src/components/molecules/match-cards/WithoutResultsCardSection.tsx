import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import { Status } from '../../../types';

interface IWithoutResults {
  date: string;
  clubName?: string;
  courtName: string;
  status: Status;
  uploadResults: (() => void) | null;
}

export const WithoutResultsCardSection: React.FC<IWithoutResults> = ({
  date,
  clubName,
  courtName,
  status,
  uploadResults,
}) => {
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
      <Typography fontWeight={600}>{date}</Typography>

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
        <Typography fontSize={20} fontWeight={700}>
          {courtName}
        </Typography>
      )}

      <Box
        onClick={(e) => {
          e.stopPropagation();
          if (uploadResults) uploadResults();
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
        {status === Status.WAITING_FOR_RESULTS ? (
          <Add sx={{ color: '#fff' }} />
        ) : (
          <ChatBubbleOutlineOutlinedIcon
            fontSize="small"
            sx={{ color: '#fff' }}
          />
        )}
      </Box>
    </Box>
  );
};

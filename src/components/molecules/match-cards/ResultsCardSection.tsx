import React from 'react';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import { Status } from '../../../services/matches/interface';
import { Box, Divider, Typography } from '@mui/material';

interface IResults {
  date: string;
  status: Status;
  results: any;
  winningTeam: string | null;
}
export const ResultsCardSection: React.FC<IResults> = ({
  date,
  status,
  results,
  winningTeam,
}) => {
  const withStatus =
    status === Status.INCOMPLETE ||
    status === Status.VALIDATING ||
    status === Status.WITHOUT_RESULT ||
    status === Status.INVALID_RESULT ||
    status === Status.WAITING_FOR_RESULTS;

  const statusText =
    status === Status.INCOMPLETE
      ? 'Maтч не завершён'
      : status === Status.VALIDATING
      ? 'Запись результатов'
      : status === Status.INVALID_RESULT
      ? 'Невалидный результат'
      : status === Status.WITHOUT_RESULT
      ? 'Результат не загружен'
      : '';

  return (
    <Box position="relative" flexGrow={1}>
      <Typography
        position="absolute"
        right={10}
        top={5}
        fontSize={12}
        color="gray"
      >
        {date}
      </Typography>
      {results?.map((resultsRow: any, i: number) => {
        return (
          <React.Fragment key={i}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Box
                width={40}
                height={40}
                borderRadius={40}
                border="2px solid #36bfa5"
                display="flex"
                justifyContent="center"
                alignItems="center"
                visibility={
                  winningTeam === resultsRow.team ? 'visible' : 'hidden'
                }
              >
                <EmojiEventsOutlinedIcon />
              </Box>

              <Box height="100%" display="flex" justifyContent="center" gap={3}>
                {resultsRow?.results?.map((point: number, i: number) => (
                  <Typography
                    key={i}
                    color={point > 5 ? 'black' : 'gray'}
                    fontSize={35}
                    fontWeight={700}
                    fontFamily="monospace"
                    lineHeight="100px"
                  >
                    {status === Status.WITHOUT_RESULT ? 0 : point}
                  </Typography>
                ))}
              </Box>
            </Box>

            {i === 0 && <Divider variant="middle" />}
          </React.Fragment>
        );
      })}

      {withStatus && (
        <Box
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ backgroundColor: '#eeeeee29', backdropFilter: 'blur(0.5px)' }}
        >
          <Box
            py={0.5}
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={0.8}
            width="100%"
            sx={{
              backgroundColor:
                status === Status.VALIDATING
                  ? '#fdf8eb'
                  : status === Status.WITHOUT_RESULT
                  ? '#eeeeff'
                  : status === Status.INCOMPLETE
                  ? '#ffefe3'
                  : '#ffefe3',
            }}
          >
            <Typography
              fontSize={12}
              sx={{
                color:
                  status === Status.VALIDATING
                    ? '#f2bd50'
                    : status === Status.WITHOUT_RESULT
                    ? '#8a9dfa'
                    : status === Status.INCOMPLETE
                    ? '#ff9848'
                    : '#ff9848',
              }}
            >
              {statusText}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

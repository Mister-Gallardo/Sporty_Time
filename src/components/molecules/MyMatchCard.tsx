import React from 'react';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import { EType, getDayFormat } from '../../helpers/getTimeDateString';
import { Avatar, Box, Divider, Typography } from '@mui/material';
import { sortTeamMembers } from '../../helpers/sortTeamMembers';
import { getMatchStatus } from '../../helpers/getMatchStatus';
import { MatchData } from '../../services/matches/interface';
import CloseIcon from '@mui/icons-material/Close';
import { Add } from '@mui/icons-material';
import { useHistory } from 'react-router';
import { Status } from '../../types';
import { isPlatform } from '@ionic/react';

interface IMyMatchCardProps extends MatchData {
  uploadResults: (id: number) => void;
}

export const MyMatchCard: React.FC<IMyMatchCardProps> = (props) => {
  const {
    id,
    gameDate,
    matchBookings,
    matchResults,
    winningTeam,
    uploadResults,
    slot,
    minutes,
  } = props;

  const matchDate = getDayFormat(
    gameDate,
    EType.MONTH_AND_DAY,
    slot.time,
    minutes,
  );

  const isMobile = isPlatform('mobile');
  const history = useHistory();

  const members = sortTeamMembers(matchBookings);

  const status = getMatchStatus(props);

  const getSetResults = (team: string) => {
    if (!matchResults && status === Status.WITHOUT_RESULT) return [0, 0, 0];
    return matchResults?.map((item: any) => {
      return team === 'A' ? item[0] : item[1];
    });
  };

  const teamAResults = getSetResults('A');
  const teamBResults = getSetResults('B');

  const results = [
    { team: 'A', results: teamAResults },
    { team: 'B', results: teamBResults },
  ];

  const isWithoutResults =
    status === Status.CANCELED ||
    status === Status.UPCOMING ||
    status === Status.WAITING_FOR_RESULTS ||
    status === Status.PENDING ||
    status === Status.IN_PROGRESS;

  return (
    <Box
      width="100%"
      maxWidth={isMobile ? 'unset' : 325}
      border="1px solid #E5E5E5"
      borderRadius={2}
      onClick={() => history.push(`/matches/${id}`)}
    >
      <Typography
        lineHeight={1}
        textAlign="end"
        color="gray"
        textTransform="capitalize"
      >
        {}
      </Typography>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box py={1.5} px={1}>
          {members.map((team, i) => {
            return (
              <React.Fragment key={i}>
                <Box
                  height="100%"
                  width={125}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  {team.map((member: any, i: number) => {
                    return (
                      <Box
                        key={i}
                        height="100%"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        width="50%"
                      >
                        {member ? (
                          <Avatar sx={{ width: 40, height: 40 }} />
                        ) : (
                          <Box
                            width={40}
                            height={40}
                            borderRadius={40}
                            border="2px dashed #4162f5"
                            bgcolor="#f5f6f6"
                          ></Box>
                        )}
                        <Typography
                          fontSize={12}
                          fontWeight={600}
                          maxWidth={60}
                          overflow="hidden"
                          noWrap
                          textOverflow="ellipsis"
                        >
                          {member ? member.player.user.firstname : 'Свободно'}
                        </Typography>
                        <Typography
                          color="gray"
                          fontSize={12}
                          height={10}
                          lineHeight={1}
                        >
                          {member?.player.ratingTennis}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
                {i === 0 && <Divider variant="middle" sx={{ my: 1 }} />}
              </React.Fragment>
            );
          })}
        </Box>
        {isWithoutResults ? (
          <WithoutResults
            date={matchDate}
            clubName={slot.court.club.title}
            courtName={slot.court.title}
            status={status}
            uploadResults={
              status === Status.WAITING_FOR_RESULTS
                ? () => uploadResults(id)
                : null
            }
          />
        ) : (
          <Results
            date={matchDate}
            status={status}
            results={results}
            winningTeam={winningTeam}
          />
        )}
      </Box>
    </Box>
  );
};

interface IWithoutResults {
  date: string;
  clubName?: string;
  courtName: string;
  status: Status;
  uploadResults: (() => void) | null;
}
const WithoutResults: React.FC<IWithoutResults> = ({
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

interface IResults {
  date: string;
  status: Status;
  results: any;
  winningTeam: string | null;
}
const Results: React.FC<IResults> = ({
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

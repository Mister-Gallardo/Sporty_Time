import React from 'react';
import { Avatar, Box, Divider, Typography } from '@mui/material';
import { useHistory } from 'react-router';
import { isPlatform } from '@ionic/react';
import { MatchData } from '../../../services/matches/interface';
import { EType, getDayFormat } from '../../../helpers/getTimeDateString';
import { sortTeamMembers } from '../../../helpers/sortTeamMembers';
import { getMatchStatus } from '../../../helpers/getMatchStatus';
import { Status } from '../../../types';
import { WithoutResultsCardSection } from './WithoutResultsCardSection';
import { ResultsCardSection } from './ResultsCardSection';

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
      bgcolor="#fff"
      border="1px solid #E5E5E5"
      borderRadius={2}
      onClick={() => history.push(`/matches/${id}`)}
      sx={{ cursor: isMobile ? 'unset' : 'pointer' }}
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
          <WithoutResultsCardSection
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
          <ResultsCardSection
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

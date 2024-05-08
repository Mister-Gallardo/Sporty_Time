import React from 'react';
import { Avatar, Box, Divider, Link, Typography } from '@mui/material';
import { useHistory } from 'react-router';
import { isPlatform } from '@ionic/react';
import { MatchData, Status } from '../../../services/matches/interface';
import { sortTeamMembers } from '../../../helpers/sortTeamMembers';
import { getMatchStatus } from '../../../helpers/getMatchStatus';
import { WithoutResultsCardSection } from './WithoutResultsCardSection';
import { ResultsCardSection } from './ResultsCardSection';
import { withHostname } from '../../../services/api/service';
import { Link as ReactRouterLink } from 'react-router-dom';
import { getSportRating } from '../../../helpers/getSportRating';

interface IMyMatchCardProps extends MatchData {
  uploadResults?: (id: number) => void;
}

const isMobile = isPlatform('mobile');

export const MyMatchCard: React.FC<IMyMatchCardProps> = (props) => {
  const { id, sport, matchBookings } = props;

  const history = useHistory();

  const members = sortTeamMembers(matchBookings);
  const status = getMatchStatus(props);

  const isWithoutResults =
    status === Status.CANCELED ||
    status === Status.UPCOMING ||
    status === Status.WAITING_FOR_RESULTS ||
    status === Status.PENDING ||
    status === Status.IN_PROGRESS;

  return (
    <Box
      minWidth={325}
      bgcolor="#fff"
      border="1px solid #E5E5E5"
      borderRadius={2}
      onClick={() => history.push(`/matches/${id}`)}
      sx={{ cursor: isMobile ? 'unset' : 'pointer' }}
    >
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
                  {team.slice(0, 2).map((member: any, i: number) => {
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
                          <Link
                            component={ReactRouterLink}
                            to={`/profile/${member?.player?.user?.id}`}
                            underline="none"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Avatar
                              src={withHostname(
                                member?.player?.user?.avatar?.formats?.small,
                              )}
                              sx={{ width: 40, height: 40 }}
                            />
                          </Link>
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
                          {member
                            ? member?.player?.user?.firstname || 'Пусто'
                            : 'Свободно'}
                        </Typography>
                        <Typography
                          color="gray"
                          fontSize={12}
                          height={10}
                          lineHeight={1}
                        >
                          {member ? getSportRating(member.player, sport) : 0}
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
          <WithoutResultsCardSection {...props} />
        ) : (
          <ResultsCardSection {...props} />
        )}
      </Box>
    </Box>
  );
};

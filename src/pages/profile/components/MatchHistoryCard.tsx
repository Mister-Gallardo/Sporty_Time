import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Avatar, Box, Divider, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { isPlatform } from '@ionic/react';
import { getMatchTypeName } from '../../../helpers/getNameOf';
import { sortTeamMembers } from '../../../helpers/sortTeamMembers';
import { usePlayerProfile } from '../../../services/api/hooks';
import { useQuery } from '@tanstack/react-query';
import { getSpecificUser } from '../../../services/user/service';
import { withHostname } from '../../../services/api/service';
import { MatchData } from '../../../services/matches/interface';
import PersonOffOutlinedIcon from '@mui/icons-material/PersonOffOutlined';
const isMobile = isPlatform('mobile');

interface IMatchHistoryCardProps {
  match: MatchData;
  ratingProfit: number;
}

export const MatchHistoryCard: React.FC<IMatchHistoryCardProps> = ({
  match,
  ratingProfit,
}) => {
  const { userId } = useParams<{ userId: string }>();

  const [player] = usePlayerProfile();

  const myPlayerId = player?.id;

  const { data: specificUser } = useQuery({
    queryKey: ['users', userId],
    queryFn: () => getSpecificUser(+userId),
    enabled: !!userId,
  });
  const playerId = specificUser?.data?.player?.id;

  const currentPlayerId = userId ? playerId : myPlayerId || 0;

  // check if the player is on the winning team
  const myPlayer = match?.matchBookings?.find(
    (booking) => booking?.player?.id === currentPlayerId,
  );
  const isWin = myPlayer?.team === match?.winningTeam;

  const matchDate = match?.booking?.startsAt?.split('T');

  const [teamA, teamB] = sortTeamMembers(match?.matchBookings);

  return (
    <Link
      to={`/matches/${match?.id}`}
      style={{
        display: 'flex',
        justifyContent: isMobile ? 'unset' : 'center',
        marginBottom: 30,
      }}
    >
      <Box border="1px solid #eee" p={1.5} width={isMobile ? '100%' : 'unset'}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Typography fontSize={13}>
            {match && getMatchTypeName(match?.type)}
          </Typography>
          <Box display="flex" alignItems="center" gap={0.2}>
            <Typography
              border="1px solid #eee"
              px={0.7}
              color="gray"
              fontSize={11}
            >
              {matchDate && matchDate[0]}
            </Typography>
            <ChevronRightIcon fontSize="small" />
          </Box>
        </Box>
        <Box display="flex">
          <Box>
            <Box
              display="flex"
              gap={0.5}
              alignItems="center"
              px={1.5}
              borderBottom="1px solid #eee"
              height={25}
            >
              {teamA.map((member, i) => {
                return (
                  <React.Fragment key={i}>
                    {member ? (
                      <Avatar
                        src={withHostname(
                          member?.player?.user?.avatar?.formats?.small || '',
                        )}
                        sx={{ width: 20, height: 20 }}
                      />
                    ) : (
                      <Box
                        width={20}
                        height={20}
                        border="1px dashed blue"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <PersonOffOutlinedIcon
                          fontSize="small"
                          color="disabled"
                        />
                      </Box>
                    )}
                  </React.Fragment>
                );
              })}
            </Box>
            <Box
              display="flex"
              gap={0.5}
              alignItems="center"
              px={1.5}
              height={25}
            >
              {teamB.map((member, i) => {
                return (
                  <React.Fragment key={i}>
                    {member ? (
                      <Avatar
                        src={withHostname(
                          member?.player?.user?.avatar?.formats?.small || '',
                        )}
                        sx={{ width: 20, height: 20 }}
                      />
                    ) : (
                      <Box
                        width={20}
                        height={20}
                        border="1px dashed blue"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <PersonOffOutlinedIcon
                          fontSize="small"
                          color="disabled"
                        />
                      </Box>
                    )}
                  </React.Fragment>
                );
              })}
            </Box>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box flexGrow={1}>
            <Box
              display="flex"
              gap={4}
              px={2}
              justifyContent="space-between"
              borderBottom="1px solid #eee"
              height={25}
              alignItems="center"
            >
              {match?.matchResults ? (
                <>
                  <Typography width={15} textAlign="center">
                    {match.matchResults[0][0]}
                  </Typography>
                  <Typography width={15} textAlign="center">
                    {match.matchResults[1][0]}
                  </Typography>
                  <Typography width={15} textAlign="center">
                    {match.matchResults[2][0]}
                  </Typography>
                </>
              ) : (
                <>
                  <Typography>-</Typography>
                  <Typography>-</Typography>
                  <Typography>-</Typography>
                </>
              )}
            </Box>
            <Box
              display="flex"
              px={2}
              justifyContent="space-between"
              height={25}
              alignItems="center"
            >
              {match?.matchResults ? (
                <>
                  <Typography width={15} textAlign="center">
                    {match.matchResults[0][1]}
                  </Typography>
                  <Typography width={15} textAlign="center">
                    {match.matchResults[1][1]}
                  </Typography>
                  <Typography width={15} textAlign="center">
                    {match.matchResults[2][1]}
                  </Typography>
                </>
              ) : (
                <>
                  <Typography>-</Typography>
                  <Typography>-</Typography>
                  <Typography>-</Typography>
                </>
              )}
            </Box>
          </Box>
          <Divider orientation="vertical" flexItem />
          {match?.matchResults ? (
            <Box px={2}>
              <Typography
                textAlign="center"
                minWidth={87}
                color={isWin ? 'success.main' : 'error.main'}
                mb={0.5}
              >
                {isWin ? 'Победа' : 'Поражение'}
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                gap={1}
              >
                {isWin ? (
                  <TrendingUpIcon color="success" />
                ) : (
                  <TrendingDownIcon color="error" />
                )}

                <Divider orientation="vertical" flexItem />

                <Typography
                  textAlign="center"
                  color={isWin ? 'success.main' : 'error.main'}
                  minWidth={25}
                >
                  {ratingProfit}
                </Typography>
              </Box>
            </Box>
          ) : (
            <Box display="flex" alignItems="center" px={2}>
              <Typography
                fontSize={11}
                color="gray"
                maxWidth={70}
                textAlign="center"
              >
                Нет результатов
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Link>
  );
};

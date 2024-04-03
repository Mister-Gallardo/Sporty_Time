import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Box, Divider, Typography } from '@mui/material';
import { ToggleButton } from '../../../components/atoms/ToggleButton';
import { RatingChart } from '../../../components/molecules/RatingChart';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { SectionTitle } from './SectionTitle';
import { isPlatform } from '@ionic/react';
import { useQuery } from '@tanstack/react-query';
import { getMatchBookings } from '../../../services/matches/service';
import { getMatchTypeName } from '../../../helpers/getNameOf';
import { useUserInfo } from '../../../services/api/hooks';
import { MatchData } from '../../../services/matches/interface';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { sortTeamMembers } from '../../../helpers/sortTeamMembers';
import { withHostname } from '../../../services/api/service';

const results = [
  {
    id: '5',
    title: '5 результатов',
    limit: 5,
  },
  {
    id: '10',
    title: '10 результатов',
    limit: 10,
  },
  {
    id: 'ALL',
    title: 'Все результаты',
    limit: 0,
  },
];

interface ICurrentMatch extends MatchData {
  ratingAfterMatch: number;
  ratingProfit: number;
  match: MatchData;
}
interface ILevelProgressionProps {}

const isMobile = isPlatform('mobile');

export const LevelProgression: React.FC<ILevelProgressionProps> = () => {
  const [matchesLimit, setMatchesLimit] = useState(5);

  const [user] = useUserInfo();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['match-bookings', matchesLimit],
    queryFn: () => getMatchBookings(matchesLimit),
  });
  const bookingsList = data?.data;

  const [currentMatch, setCurrentMatch] = useState<ICurrentMatch | null>(null);

  useEffect(() => {
    if (!bookingsList || bookingsList.length < 1) return;
    setCurrentMatch(bookingsList[0]);
  }, [bookingsList]);

  if (!bookingsList || !currentMatch) return;

  const isWin = currentMatch?.ratingProfit > 0;
  const matchResults = currentMatch?.matchResults;

  const [teamA, teamB] = sortTeamMembers(currentMatch?.match?.matchBookings);

  return (
    <Box width="100%">
      <SectionTitle title="Прогресс уровня" />
      <Box>
        <Box
          mb={1}
          pb={1}
          display="flex"
          justifyContent={isMobile ? 'unset' : 'center'}
          width="100%"
          overflow="auto"
          gap={1}
        >
          {results.map((item) => (
            <ToggleButton
              key={item.id}
              value={item.id}
              aria-label={item.title}
              onClick={() => setMatchesLimit(item.limit)}
              selected={matchesLimit === item.limit}
            >
              {item.title}
            </ToggleButton>
          ))}
        </Box>
        <Link
          to={`matches/${currentMatch?.match?.id}`}
          style={{
            display: 'flex',
            justifyContent: isMobile ? 'unset' : 'center',
            marginBottom: 30,
          }}
        >
          <Box
            border="1px solid #eee"
            p={1.5}
            width={isMobile ? '100%' : 'unset'}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb={2}
            >
              <Typography>
                {getMatchTypeName(currentMatch?.match?.type)}
              </Typography>
              <Box display="flex" alignItems="center" gap={0.2}>
                <Typography
                  border="1px solid #eee"
                  px={0.7}
                  color="gray"
                  fontSize={11}
                >
                  match date
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
                  {teamA.map((member) => (
                    <Avatar
                      src={withHostname(
                        member?.player?.user?.avatar?.formats?.small || '',
                      )}
                      sx={{ width: 20, height: 20 }}
                    />
                  ))}
                </Box>
                <Box
                  display="flex"
                  gap={0.5}
                  alignItems="center"
                  px={1.5}
                  height={25}
                >
                  {teamB.map((member) => (
                    <Avatar
                      src={withHostname(
                        member?.player?.user?.avatar?.formats?.small || '',
                      )}
                      sx={{ width: 20, height: 20 }}
                    />
                  ))}
                </Box>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box flexGrow={1}>
                <Box
                  display="flex"
                  gap={5}
                  px={2}
                  justifyContent="space-between"
                  borderBottom="1px solid #eee"
                  height={25}
                  alignItems="center"
                >
                  {matchResults ? (
                    <>
                      <Typography>{matchResults[0][0] || '-'}</Typography>
                      <Typography>{matchResults[0][1] || '-'}</Typography>
                      <Typography>{matchResults[0][2] || '-'}</Typography>
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
                  gap={5}
                  px={2}
                  justifyContent="space-between"
                  height={25}
                  alignItems="center"
                >
                  {matchResults ? (
                    <>
                      <Typography>{matchResults[1][0] || '-'}</Typography>
                      <Typography>{matchResults[1][1] || '-'}</Typography>
                      <Typography>{matchResults[1][2] || '-'}</Typography>
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
              {currentMatch?.matchResults ? (
                <Box px={2}>
                  <Typography
                    color={isWin ? 'success.main' : 'error.main'}
                    mb={0.5}
                  >
                    {isWin ? 'Победа' : 'Поражение'}
                  </Typography>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    {isWin ? (
                      <TrendingUpIcon color="success" />
                    ) : (
                      <TrendingDownIcon color="error" />
                    )}

                    <Divider orientation="vertical" flexItem />

                    <Typography
                      color={isWin ? 'success.main' : 'error.main'}
                      minWidth={25}
                    >
                      {isWin || '-'}
                      {currentMatch?.ratingProfit}
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
      </Box>
      <RatingChart
        matchesLimit={matchesLimit}
        setCurrentMatch={setCurrentMatch}
      />
    </Box>
  );
};

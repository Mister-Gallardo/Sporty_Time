import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getOneAvailableMatch } from '../../../../services/matches/service';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export const ResultsTable = () => {
  const { matchId } = useParams<{ matchId: string }>();

  const { data } = useQuery({
    queryKey: [`match`, Number(matchId)],
    queryFn: () => getOneAvailableMatch(Number(matchId)),
  });

  const matchResults = data?.data.matchResults;
  const winner = data?.data?.winningTeam;

  if (!matchResults) return;
  return (
    <Box display="flex" justifyContent="center">
      <Box>
        <Box display="flex">
          <Box flexGrow={1} />
          <Typography width={72} textAlign="center" color="#777">
            Сет-1
          </Typography>
          <Typography width={72} textAlign="center" color="#777">
            Сет-2
          </Typography>
          <Typography width={72} textAlign="center" color="#777">
            Сет-3
          </Typography>
        </Box>
        <Box border="1px solid #eee">
          <Box display="flex" borderBottom="1px solid #eee">
            <Box
              px={1}
              display="flex"
              alignItems="center"
              gap={2}
              width={90}
              borderRight="1px solid #eee"
            >
              <Typography fontSize={35} fontWeight={500}>
                A
              </Typography>
              {winner === 'A' && <EmojiEventsIcon color="primary" />}
            </Box>
            <Typography fontSize={35} fontWeight={300} px={3} width={72}>
              {matchResults[0][0]}
            </Typography>
            <Typography
              fontSize={35}
              fontWeight={300}
              px={3}
              width={72}
              borderLeft="1px solid #eee"
              borderRight="1px solid #eee"
            >
              {matchResults[1][0]}
            </Typography>
            <Typography fontSize={35} fontWeight={300} px={3} width={72}>
              {matchResults[2][0]}
            </Typography>
          </Box>

          <Box display="flex">
            <Box
              px={1}
              display="flex"
              alignItems="center"
              gap={2}
              width={90}
              borderRight="1px solid #eee"
            >
              <Typography fontSize={35} fontWeight={500}>
                B
              </Typography>
              {winner === 'B' && <EmojiEventsIcon color="primary" />}
            </Box>
            <Typography fontSize={35} fontWeight={300} px={3} width={72}>
              {matchResults[0][1]}
            </Typography>
            <Typography
              fontSize={35}
              fontWeight={300}
              px={3}
              width={72}
              borderLeft="1px solid #eee"
              borderRight="1px solid #eee"
            >
              {matchResults[1][1]}
            </Typography>
            <Typography fontSize={35} fontWeight={300} px={3} width={72}>
              {matchResults[2][1]}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

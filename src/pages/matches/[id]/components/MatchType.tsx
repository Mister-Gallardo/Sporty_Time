import { Box, Typography } from '@mui/material';
import { EMatchType } from '../../../../services/matches/interface';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getOneAvailableMatch } from '../../../../services/matches/service';

export const MatchType = () => {
  const { matchId } = useParams<{ matchId: string }>();

  const { data } = useQuery({
    queryKey: [`match`, Number(matchId)],
    queryFn: () => getOneAvailableMatch(Number(matchId)),
  });

  const type = data?.data.type;

  const isFriendly =
    type === EMatchType.FRIENDLY ? 'Дружеский' : 'Соревновательный';

  return (
    <Box border="1px solid #ddd" borderRadius={2} p={1} bgcolor="#fff" mb={2}>
      <Typography textTransform="capitalize">{isFriendly}</Typography>
      <Typography color="gray">{`Результат этого матча ${
        isFriendly ? 'не' : ''
      } повлияет на уровень`}</Typography>
    </Box>
  );
};

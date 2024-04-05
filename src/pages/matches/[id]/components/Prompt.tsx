import InfoIcon from '@mui/icons-material/Info';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getOneAvailableMatch } from '../../../../services/matches/service';
import { usePlayerProfile } from '../../../../services/api/hooks';
import { getPromptParams } from '../../../../helpers/getMatchPromptParams';

export const Prompt = () => {
  const { matchId } = useParams<{ matchId: string }>();

  const { data } = useQuery({
    queryKey: [`match`, Number(matchId)],
    queryFn: () => getOneAvailableMatch(Number(matchId)),
  });

  const matchData = data?.data;
  if (matchData?.confirmMatchResults) return null;

  const [myPlayer] = usePlayerProfile();
  const playerAlreadyInSomeTeam = !!matchData?.matchBookings.find(
    (booking) => booking.player?.id === myPlayer?.id,
  );

  const params =
    matchData && getPromptParams(matchData, playerAlreadyInSomeTeam);

  if (!matchData) return null;
  if (!params) return null;

  return (
    <Box
      bgcolor={params?.bgColor}
      display="flex"
      gap={1}
      borderRadius={2}
      p={2}
      boxShadow="1px 1px 5px #989898"
    >
      <InfoIcon fontSize="small" sx={{ color: params?.color }} />
      <Box>
        <Typography fontWeight={600}>{params?.title}</Typography>
        <Typography>{params?.description}</Typography>
      </Box>
    </Box>
  );
};

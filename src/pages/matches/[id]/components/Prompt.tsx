import InfoIcon from '@mui/icons-material/Info';
import { Box, Typography } from '@mui/material';
import { MatchData } from '../../../../services/matches/interface';
import { getPromptParams } from '../../../../helpers/getMatchPromptParams';

interface IPromptProps {
  matchData: MatchData;
  playerAlreadyInSomeTeam: boolean;
}

export const Prompt: React.FC<IPromptProps> = ({
  matchData,
  playerAlreadyInSomeTeam,
}) => {
  const params = getPromptParams(matchData, playerAlreadyInSomeTeam);
  if (!params) return;

  return (
    <Box
      bgcolor={params.bgColor}
      display="flex"
      gap={1}
      borderRadius={2}
      p={2}
      boxShadow="1px 1px 5px #989898"
    >
      <InfoIcon fontSize="small" sx={{ color: params.color }} />
      <Box>
        <Typography fontWeight={600}>{params.title}</Typography>
        <Typography>{params.description}</Typography>
      </Box>
    </Box>
  );
};

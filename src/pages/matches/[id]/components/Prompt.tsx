import { getPromptParams } from '../../../../helpers/getMatchPromptParams';
import { MatchData } from '../../../../services/matches/interface';
import InfoIcon from '@mui/icons-material/Info';
import { Box, Typography } from '@mui/material';

interface IPrompt {
  isOwner: boolean;
  matchData: MatchData;
}

export const Prompt: React.FC<IPrompt> = ({ isOwner, matchData }) => {
  const params = getPromptParams(matchData, isOwner);

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

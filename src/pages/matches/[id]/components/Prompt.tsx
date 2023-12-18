import InfoIcon from '@mui/icons-material/Info';
import { Box, Typography } from '@mui/material';

enum PromptType {
  PRIMARY,
  WARNING,
  DANGER,
}

interface IPrompt {
  type: PromptType;
  title?: string;
  description: string;
}
export const Prompt: React.FC<IPrompt> = ({ type, title, description }) => {
  const color =
    type === PromptType.PRIMARY
      ? '#6d8ff9'
      : type === PromptType.WARNING
      ? '#fcbb2d'
      : type === PromptType.DANGER
      ? '#ff3a59'
      : '';
  const bgColor =
    type === PromptType.PRIMARY
      ? '#f6f6ff'
      : type === PromptType.WARNING
      ? '#fef9ec'
      : type === PromptType.DANGER
      ? '#fff3f5'
      : '';

  return (
    <Box
      bgcolor={bgColor}
      display="flex"
      gap={1}
      borderRadius={1}
      px={2}
      py={1}
      boxShadow="1px 1px 5px #989898"
    >
      <InfoIcon fontSize="small" sx={{ color }} />
      <Box>
        <Typography fontWeight={600}>{title}</Typography>
        <Typography>{description}</Typography>
      </Box>
    </Box>
  );
};

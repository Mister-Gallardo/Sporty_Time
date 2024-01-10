import {
  ArticleOutlined,
  DialpadOutlined,
  InfoOutlined,
} from '@mui/icons-material';
import { MatchData } from '../../../../services/matches/interface';
import { Box, Typography } from '@mui/material';

interface IMatchInfoBlock {
  data: MatchData;
}

export const MatchInfoBlock: React.FC<IMatchInfoBlock> = ({ data }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: '600',
          fontSize: '1.1rem',
          paddingBlock: '1.5rem',
        }}
      >
        Информация
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <InfoOutlined />
          <Box>
            <Typography>Название корта</Typography>
            <Typography>{data?.slot.court.club.title}</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <ArticleOutlined />
          <Box>
            <Typography>Тип корта</Typography>
            <Typography>Indoor, Crystal, Double</Typography>
          </Box>
        </Box>

        {data.paid && (
          <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <DialpadOutlined />
            <Box>
              <Typography>Код доступа</Typography>
              <Typography>9714#</Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

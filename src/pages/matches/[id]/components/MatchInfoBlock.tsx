import {
  ArticleOutlined,
  DialpadOutlined,
  InfoOutlined,
} from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { getOneAvailableMatch } from '../../../../services/matches/service';
import { getCourtTypeName } from '../../../../helpers/getNameOf';

export const MatchInfoBlock = () => {
  const { matchId } = useParams<{ matchId: string }>();

  const { data } = useQuery({
    queryKey: [`match`, Number(matchId)],
    queryFn: () => getOneAvailableMatch(Number(matchId)),
  });

  const singleMatchData = data?.data;

  if (!singleMatchData) return null;

  const { booking, paid } = singleMatchData;

  if (!booking?.court) return null;
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
            <Typography>{booking.court.title}</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <ArticleOutlined />
          <Box>
            <Typography>Тип корта</Typography>
            <Typography>{getCourtTypeName(booking.court.type)}</Typography>
          </Box>
        </Box>

        {paid && (
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

import { Box, IconButton, Typography } from '@mui/material';
import { Block } from '../../../../components/molecules/Block';
import { Directions } from '@mui/icons-material';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getOneAvailableMatch } from '../../../../services/matches/service';
import noImg from '../../../../images/no-image.jpg';
import { withHostname } from '../../../../services/api/service';

export const ClubInfoBlock = () => {
  const { matchId } = useParams<{ matchId: string }>();

  const { data } = useQuery({
    queryKey: [`match`, Number(matchId)],
    queryFn: () => getOneAvailableMatch(Number(matchId)),
  });

  const singleMatchData = data?.data;

  if (!singleMatchData) return null;

  const { booking } = singleMatchData;
  const images = booking?.court?.club?.images;
  const previewImg =
    images && images.length > 0 ? images[0]?.formats.small : noImg;

  if (!booking?.court?.club) return null;
  return (
    <Block
      component={RouterLink}
      to={`/book-court/${booking?.court?.club?.id}`}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Box
          component="img"
          src={withHostname(previewImg || '')}
          width={64}
          height={64}
          sx={{
            objectFit: 'cover',
          }}
          alt="Фото клуба"
          onError={(e) => ((e.target as HTMLImageElement).src = noImg)}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <Typography sx={{ fontWeight: '700' }}>
            {booking.court.club.title}
          </Typography>
          <Box sx={{ opacity: '.6' }}>
            <Typography sx={{ fontSize: '12px' }}>
              {booking.court.club.city}
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: '.75rem' }}>
              Больше информации
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <IconButton>
          <Directions sx={{ color: '#2561F8', fontSize: '2.25rem' }} />
        </IconButton>
      </Box>
    </Block>
  );
};

import { Box, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { getClass } from '../../../../services/classes';
import { LoadingCircle } from '../../../../components/atoms/LoadingCircle';
import { withHostname } from '../../../../services/api/service';
import noImg from '../../../../images/no-image.jpg';

export const ClubInfoBlock = () => {
  const { classId } = useParams<{ classId: string }>();
  const { data, isLoading } = useQuery({
    queryKey: ['classes', classId],
    queryFn: () => getClass(classId),
  });

  const clubData = data?.data?.booking?.court?.club;

  if (isLoading) return <LoadingCircle />;
  if (!clubData) return null;

  const { id, title, country, city, images } = clubData;

  return (
    <Link to={`/book-court/${id}?tab=1`}>
      <Box border="1px solid #eee" p={1.5} display="flex" gap={2}>
        <Box
          src={
            images.length > 0
              ? withHostname(images[0]?.formats?.medium || '')
              : noImg
          }
          component="img"
          width={90}
          height={90}
          flexShrink={0}
          sx={{ objectFit: 'cover' }}
        />
        <Box>
          <Typography fontWeight={600}>{title}</Typography>
          <Typography>
            {country}, {city}
          </Typography>
          <Typography
            mt={2}
            sx={{ '&:hover': { textDecoration: 'underline' } }}
          >
            Посмотреть
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

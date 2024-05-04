import { Box, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { getClass } from '../../../../services/classes';
import { LoadingCircle } from '../../../../components/atoms/LoadingCircle';

export const ClubInfoBlock = () => {
  const { classId } = useParams<{ classId: string }>();
  const { data, isLoading } = useQuery({
    queryKey: ['classes', classId],
    queryFn: () => getClass(classId),
  });

  const clubData = data?.data?.booking?.court?.club;

  if (isLoading) return <LoadingCircle />;
  if (!clubData) return null;

  const { id, title, country, city } = clubData;

  return (
    <Link to={`/book-court/${id}?tab=1`}>
      <Box border="1px solid #eee" p={1.5} display="flex" gap={2}>
        <Box component="img" width={90} height={90} flexShrink={0} />
        <Box>
          <Typography fontWeight={600}>{title}</Typography>
          <Typography>
            {country}, {city}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

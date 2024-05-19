import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { getOneAvailableMatch } from '../../../services/matches/service';
import { Box, Typography } from '@mui/material';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { isPlatform } from '@ionic/react';
import { getClass } from '../../../services/classes';

const isMobile = isPlatform('mobile');

export const ChatHeader = () => {
  const { chatId } = useParams<{ chatId: string }>();
  const isMatch = chatId?.startsWith('M');
  const rawId = chatId?.slice(1, chatId.length);

  const { data: matchData, isLoading: isMatchLoading } = useQuery({
    queryKey: ['match', +rawId],
    queryFn: () => getOneAvailableMatch(+rawId),
    enabled: !!isMatch,
  });
  const { data: classData, isLoading: isClassLoading } = useQuery({
    queryKey: ['classes', +rawId],
    queryFn: () => getClass(+rawId),
    enabled: !isMatch,
  });

  const data = isMatch ? matchData?.data : classData?.data;
  const startsAt = data?.booking?.startsAt;

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px={3}
      py={1}
      borderBottom="1px solid #eee"
      minHeight={isMobile ? 70 : 60}
      maxHeight={isMobile ? 70 : 60}
    >
      {(isMatchLoading || isClassLoading) && <LoadingCircle />}

      {startsAt && (
        <Box>
          <Typography>{`${
            data?.booking?.court?.club?.title || ''
          } ${startsAt.slice(11, 16)}, ${
            data?.booking?.court?.title
          }`}</Typography>

          <Typography color="gray">{startsAt.slice(0, 10)}</Typography>
        </Box>
      )}
      <Link
        to={`/${isMatch ? 'matches' : 'classes'}/${rawId}`}
        style={{ fontWeight: 600, fontSize: 14 }}
      >
        Детали
      </Link>
    </Box>
  );
};

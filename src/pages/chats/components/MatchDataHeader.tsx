import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { useSearchParam } from '../../../hooks/useSearchParams';
import { getOneAvailableMatch } from '../../../services/matches/service';
import { Box, Typography } from '@mui/material';
import { LoadingCircle } from '../../../components/atoms/LoadingCircle';
import { isPlatform } from '@ionic/react';

const isMobile = isPlatform('mobile');

export const MatchDataHeader = () => {
  const [chatIdDesktop] = useSearchParam('chat', '');
  const { chatId } = useParams<{ chatId: string }>();

  const currentChatId = isMobile ? chatId : chatIdDesktop;

  const { data: matchData, isLoading: isMatchLoading } = useQuery({
    queryKey: [`match`, +currentChatId],
    queryFn: () => getOneAvailableMatch(+currentChatId),
    enabled: !!currentChatId,
  });

  const match = matchData?.data;
  const matchStartsAt = match?.booking?.startsAt;

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
      {isMatchLoading && <LoadingCircle />}

      {matchStartsAt && (
        <Box>
          <Typography>{`${
            match?.booking?.court?.club?.title
          } ${matchStartsAt.slice(11, 16)}, ${
            match?.booking?.court?.title
          }`}</Typography>

          <Typography color="gray">{matchStartsAt.slice(0, 10)}</Typography>
        </Box>
      )}
      <Link
        to={`/matches/${currentChatId}`}
        style={{ fontWeight: 600, fontSize: 14 }}
      >
        Детали
      </Link>
    </Box>
  );
};

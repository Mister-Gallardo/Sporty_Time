import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { getOneAvailableMatch } from '../../../../services/matches/service';

export const PrivacyType = () => {
  const { matchId } = useParams<{ matchId: string }>();

  const { data } = useQuery({
    queryKey: [`match`, Number(matchId)],
    queryFn: () => getOneAvailableMatch(Number(matchId)),
  });

  const isPrivate = data?.data.isPrivate;

  return (
    <Box
      border="1px solid #ddd"
      borderRadius={2}
      py={1.5}
      px={1}
      display="flex"
      alignItems="center"
      gap={0.8}
      bgcolor="#fff"
    >
      {isPrivate ? (
        <LockOutlinedIcon fontSize="small" />
      ) : (
        <LockOpenOutlinedIcon fontSize="small" />
      )}
      <Typography>{isPrivate ? 'Приватный матч' : 'Открытый матч'}</Typography>
    </Box>
  );
};

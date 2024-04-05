import React from 'react';
import { Box, Divider } from '@mui/material';
import { UserSingleInfoCount } from './UserSingleInfoCount';
import { useFullUserData } from '../../../services/api/hooks';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getSpecificUserMatchBookings } from '../../../services/matches/service';

interface IUserInfoCountBlockProps {}

export const UserInfoCountBlock: React.FC<IUserInfoCountBlockProps> = () => {
  const { userId } = useParams<{ userId: string }>();
  const { data } = useQuery({
    queryKey: [`match-bookings`, userId],
    queryFn: () => getSpecificUserMatchBookings(+userId, 0),
    enabled: !!userId,
  });

  const [profile] = useFullUserData();

  const matchesAmount = userId ? data?.data?.length : profile?.countMatches;

  return (
    <Box width="100%" display="flex" alignItems="center">
      <UserSingleInfoCount
        title="Матчи"
        count={matchesAmount}
        navPath="/matches?tab=2"
      />
      <Divider flexItem orientation="vertical" variant="middle" />
      <UserSingleInfoCount title="Подписчики" count={0} />
      <Divider flexItem orientation="vertical" variant="middle" />
      <UserSingleInfoCount title="Подписки" count={0} />
    </Box>
  );
};

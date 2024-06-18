import React from 'react';
import { Box, Divider } from '@mui/material';
import { UserSingleInfoCount } from './UserSingleInfoCount';
import { useUserInfo } from '../../../services/api/hooks';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getSpecificUser } from '../../../services/user/service';

interface IUserInfoCountBlockProps {}

export const UserInfoCountBlock: React.FC<IUserInfoCountBlockProps> = () => {
  const { userId } = useParams<{ userId: string }>();
  const [userData] = useUserInfo();

  const currentUserId = userId ? userId : userData?.id || 0;

  const { data } = useQuery({
    queryKey: ['users', +currentUserId],
    queryFn: () => getSpecificUser(+currentUserId),
  });

  const matchesAmount = data?.data?.player?.matchBookings?.length;

  const isMyUser = userId ? +userId === userData?.id : true;

  return (
    <Box width="100%" display="flex" alignItems="center">
      <UserSingleInfoCount
        title="Матчи"
        count={matchesAmount}
        navPath={isMyUser ? '/matches?tab=2' : ''}
      />
      <Divider flexItem orientation="vertical" variant="middle" />
      <UserSingleInfoCount title="Подписчики" count={0} />
      <Divider flexItem orientation="vertical" variant="middle" />
      <UserSingleInfoCount title="Подписки" count={0} />
    </Box>
  );
};

import React from 'react';
import { isPlatform } from '@ionic/react';
import { Box, Divider } from '@mui/material';
import { UserSingleInfoCount } from './UserSingleInfoCount';
import { useFullUserData } from '../../../services/api/hooks';

interface IUserInfoCountBlockProps {}

const isDesktop = isPlatform('desktop');

export const UserInfoCountBlock: React.FC<IUserInfoCountBlockProps> = () => {
  const [profile] = useFullUserData();

  return (
    <Box width="100%" display="flex" alignItems="center">
      <UserSingleInfoCount
        title="Матчи"
        count={profile?.countMatches || 0}
        navPath="/matches?tab=2"
      />
      <Divider flexItem orientation="vertical" variant="middle" />
      <UserSingleInfoCount title="Подписчики" count={0} />
      <Divider flexItem orientation="vertical" variant="middle" />
      <UserSingleInfoCount title="Подписки" count={0} />
    </Box>
  );
};

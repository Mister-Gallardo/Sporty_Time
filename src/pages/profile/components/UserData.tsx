import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { isPlatform } from '@ionic/react';
import { withHostname } from '../../../services/api/service';
import { Link } from 'react-router-dom';
import { UserInfoCountBlock } from './UserInfoCountBlock';

interface IUserDataProps {
  name?: string;
  avatar?: string;
  isMyUser?: boolean;
}

const isDesktop = isPlatform('desktop');

export const UserData: React.FC<IUserDataProps> = ({
  name = '',
  avatar = '',
  isMyUser,
}) => {
  return (
    <Box>
      <Box display="flex" mb={3}>
        <Avatar
          alt={name}
          src={withHostname(avatar)}
          sx={{ width: isDesktop ? 90 : 60, height: isDesktop ? 90 : 60 }}
        />
        <Box width="100%">
          <Box width="100%" display="flex" justifyContent="space-between">
            <Typography ml={2} fontSize="medium" fontWeight={700}>
              {name}
            </Typography>
            {isDesktop && isMyUser && (
              <Link to="/profile/navigation">Изменить профиль</Link>
            )}
          </Box>
          {isDesktop && <UserInfoCountBlock />}
        </Box>
      </Box>

      {!isDesktop && <UserInfoCountBlock />}

      {isMyUser && !isDesktop && (
        <Link to="/profile/edit">
          <Typography
            my={3}
            textAlign="center"
            border="1px solid #333"
            bgcolor="#fff"
          >
            Изменить профиль
          </Typography>
        </Link>
      )}
    </Box>
  );
};

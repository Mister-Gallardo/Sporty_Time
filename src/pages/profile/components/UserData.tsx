import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { isPlatform } from '@ionic/react';
import { withHostname } from '../../../services/api/service';
import { Link } from 'react-router-dom';
import { UserInfoCountBlock } from './UserInfoCountBlock';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

interface IUserDataProps {
  name?: string;
  avatar?: string;
  isMyUser?: boolean;
  isTrainer?: boolean;
}

const isDesktop = isPlatform('desktop');

export const UserData: React.FC<IUserDataProps> = ({
  name = '',
  avatar = '',
  isMyUser,
  isTrainer,
}) => {
  return (
    <Box>
      <Box display="flex" mb={3}>
        <Box position="relative">
          <Avatar
            alt={name}
            src={withHostname(avatar)}
            sx={{ width: isDesktop ? 90 : 60, height: isDesktop ? 90 : 60 }}
          />
          {isTrainer && (
            <Box
              position="absolute"
              bottom={-10}
              right={-10}
              bgcolor="primary.main"
              border="2px solid #e2cc90"
              width={isDesktop ? 37 : 30}
              height={isDesktop ? 37 : 30}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <SchoolOutlinedIcon
                fontSize={isDesktop ? 'medium' : 'small'}
                sx={{ color: '#fff' }}
              />
            </Box>
          )}
        </Box>
        <Box width="100%">
          <Box width="100%" display="flex" justifyContent="space-between">
            <Typography ml={2} fontSize="medium" fontWeight={700}>
              {name}
            </Typography>
            {isDesktop && isMyUser && (
              <Link to="/profile/navigation">
                <Box display="flex" alignItems="center" gap={1}>
                  <Typography>Настройки</Typography>
                  <SettingsOutlinedIcon sx={{ color: '#777' }} />
                </Box>
              </Link>
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

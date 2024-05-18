import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SchoolIcon from '@mui/icons-material/School';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Badge, CircularProgress, Link } from '@mui/material';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { isAuthorized } from '../../services/auth/service';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SportsTennisRoundedIcon from '@mui/icons-material/SportsTennisRounded';
import { useLocalStorage } from 'usehooks-ts';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getNotifications,
  removeDeviceToken,
} from '../../services/notifications/service';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

interface IMediumScreenMenuProps {
  mdMoreAnchorEl: HTMLElement | null;
  handleMdMenuClose: () => void;
}

export const MediumScreenMenu: React.FC<IMediumScreenMenuProps> = ({
  mdMoreAnchorEl,
  handleMdMenuClose,
}) => {
  const isAuth = isAuthorized();

  const [deviceToken] = useLocalStorage('deviceToken', '');

  const removeTokenMutation = useMutation({
    mutationFn: removeDeviceToken,
    onSuccess() {
      localStorage.removeItem('deviceToken');
      localStorage.removeItem('jwtToken');
    },
  });

  const { data, isLoading } = useQuery({
    queryKey: ['notification'],
    queryFn: getNotifications,
    enabled: isAuth,
  });

  const notifications = data?.data;
  const unreadNotifications = notifications?.filter(
    (notification) => !notification?.read,
  );

  return (
    <Menu
      anchorEl={mdMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id="md-menu"
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={!!mdMoreAnchorEl}
      onClose={handleMdMenuClose}
    >
      <Link
        onClick={handleMdMenuClose}
        component={RouterNavLink}
        to="/book-court"
        underline="none"
        fontWeight={500}
      >
        <MenuItem sx={{ gap: 1.5 }}>
          <SearchOutlinedIcon sx={{ fontSize: 27, color: '#575757' }} />
          <Typography fontWeight={600} fontSize={15}>
            Клубы
          </Typography>
        </MenuItem>
      </Link>
      <Link
        onClick={handleMdMenuClose}
        component={RouterNavLink}
        to="/classes?tab=1"
        underline="none"
        fontWeight={500}
      >
        <MenuItem sx={{ gap: 1.5 }}>
          <SchoolIcon sx={{ fontSize: 27, color: '#575757' }} />
          <Typography fontWeight={600} fontSize={15}>
            Занятия
          </Typography>
        </MenuItem>
      </Link>

      <Link
        onClick={handleMdMenuClose}
        component={RouterNavLink}
        to="/matches?tab=1"
        underline="none"
        fontWeight={500}
      >
        <MenuItem sx={{ gap: 1.5 }}>
          <SportsTennisRoundedIcon sx={{ fontSize: 27, color: '#575757' }} />
          <Typography fontWeight={600} fontSize={15}>
            Матчи
          </Typography>
        </MenuItem>
      </Link>

      {isAuth && (
        <Link
          onClick={handleMdMenuClose}
          component={RouterNavLink}
          to="/chats"
          underline="none"
          fontWeight={500}
        >
          <MenuItem sx={{ gap: 1.5 }}>
            <ChatBubbleOutlineIcon sx={{ fontSize: 27, color: '#575757' }} />
            <Typography fontWeight={600} fontSize={15}>
              Чаты
            </Typography>
          </MenuItem>
        </Link>
      )}
      {isAuth && (
        <Link
          onClick={handleMdMenuClose}
          component={RouterNavLink}
          to="/notifications"
          underline="none"
          fontWeight={500}
        >
          <MenuItem sx={{ gap: 1.5 }}>
            {isLoading ? (
              <CircularProgress size={27} />
            ) : (
              unreadNotifications && (
                <Badge
                  badgeContent={unreadNotifications.length}
                  color="error"
                  max={99}
                >
                  <NotificationsNoneOutlinedIcon
                    sx={{ fontSize: 27, color: '#575757' }}
                  />
                </Badge>
              )
            )}

            <Typography fontWeight={600} fontSize={15}>
              Уведомления
            </Typography>
          </MenuItem>
        </Link>
      )}

      {isAuth && (
        <Link
          onClick={handleMdMenuClose}
          component={RouterNavLink}
          to="/profile"
          underline="none"
          fontWeight={500}
        >
          <MenuItem sx={{ gap: 1.5 }}>
            <AccountCircle sx={{ fontSize: 27, color: '#575757' }} />
            <Typography fontWeight={600} fontSize={15}>
              Профиль
            </Typography>
          </MenuItem>
        </Link>
      )}
      {isAuth ? (
        <Link
          component={RouterNavLink}
          to="/auth"
          fontWeight={500}
          display="inline-block"
          mt={3}
          pl={2.5}
          onClick={() => {
            handleMdMenuClose();
            if (deviceToken) return removeTokenMutation.mutate(deviceToken);
            localStorage.removeItem('jwtToken');
          }}
        >
          Выйти
        </Link>
      ) : (
        <Link
          component={RouterNavLink}
          to="/auth"
          fontWeight={500}
          display="inline-block"
          mt={3}
          pl={2.5}
          onClick={() => handleMdMenuClose()}
        >
          Войти
        </Link>
      )}
    </Menu>
  );
};

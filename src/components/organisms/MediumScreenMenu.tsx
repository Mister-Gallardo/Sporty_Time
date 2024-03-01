import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from '@mui/material';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { isAuthorized } from '../../services/auth/service';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import SportsTennisRoundedIcon from '@mui/icons-material/SportsTennisRounded';

interface IMediumScreenMenuProps {
  mdMoreAnchorEl: HTMLElement | null;
  handleMdMenuClose: () => void;
}

export const MediumScreenMenu: React.FC<IMediumScreenMenuProps> = ({
  mdMoreAnchorEl,
  handleMdMenuClose,
}) => {
  const isAuth = isAuthorized();

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

      <Link
        onClick={handleMdMenuClose}
        component={RouterNavLink}
        to="/matches"
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
      <Link
        onClick={handleMdMenuClose}
        component={RouterNavLink}
        to="/about"
        underline="none"
        fontWeight={500}
      >
        <MenuItem sx={{ gap: 1.5 }}>
          <InfoRoundedIcon sx={{ fontSize: 27, color: '#575757' }} />
          <Typography fontWeight={600} fontSize={15}>
            О компании
          </Typography>
        </MenuItem>
      </Link>

      <Link
        component={RouterNavLink}
        to="/auth"
        fontWeight={500}
        display="inline-block"
        mt={3}
        pl={2.5}
        onClick={() => {
          if (isAuth) localStorage.removeItem('jwtToken');
          handleMdMenuClose();
        }}
      >
        {isAuth ? 'Выйти' : 'Войти'}
      </Link>
    </Menu>
  );
};

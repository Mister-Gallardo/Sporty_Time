import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { SportsBaseballOutlined } from '@mui/icons-material';
import {
  AppBar,
  Badge,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';
import { useIsAuthorized, useUserInfo } from '../../services/api/hooks';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { isPlatform } from '@ionic/react';
import { MediumScreenMenu } from './MediumScreenMenu';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getNotifications,
  removeDeviceToken,
} from '../../services/notifications/service';
import { useLocalStorage } from 'usehooks-ts';
import LogoutIcon from '@mui/icons-material/Logout';

function DesktopHeader() {
  const [mdMoreAnchorEl, setMdMoreAnchorEl] = useState<null | HTMLElement>(
    null,
  );
  const history = useHistory();
  const { pathname } = useLocation();

  const isAuthorized = useIsAuthorized();
  const [user] = useUserInfo({ enabled: isAuthorized });

  const firstName = user?.firstname;
  const lastName = user?.lastname;

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
  });
  const notifications = data?.data;

  if (
    pathname.startsWith('/auth') ||
    pathname.startsWith('/question-form') ||
    isPlatform('mobile')
  )
    return null;

  return (
    <Box
      width="100%"
      maxWidth={1280}
      margin="0 auto"
      px={2}
      borderBottom="1px solid #ebebeb"
    >
      <AppBar
        position="static"
        sx={{ boxShadow: 'none', backgroundColor: '#fff' }}
      >
        <Toolbar sx={{ paddingInline: { xs: 0 } }}>
          <Link component={RouterNavLink} to="/" underline="none" mr={4}>
            <Box display="flex" alignItems="center" gap={1}>
              <SportsBaseballOutlined fontSize="large" sx={{ color: '#000' }} />
              <Typography
                fontWeight={600}
                fontSize={20}
                letterSpacing={1.2}
                color="primary.main"
              >
                SPORTYTIME
              </Typography>
            </Box>
          </Link>
          <Box
            sx={{ display: { xs: 'none', md: 'flex' } }}
            alignItems="center"
            gap={2}
          />
          <Box flexGrow={1} />

          <Box ml={3} display={{ xs: 'none', md: 'flex' }}>
            <Box display="flex" alignItems="center" gap={2}>
              {isAuthorized && (
                <>
                  <Link
                    component={RouterNavLink}
                    to="/about"
                    exact
                    underline="none"
                    color="#333"
                    fontWeight={500}
                  >
                    О компании
                  </Link>
                  <Link
                    component={RouterNavLink}
                    to="/book-court"
                    underline="none"
                    color="#333"
                    fontWeight={500}
                  >
                    Клубы
                  </Link>
                  <Link
                    component={RouterNavLink}
                    to="/chats"
                    underline="none"
                    color="#333"
                    fontWeight={500}
                  >
                    Чаты
                  </Link>
                  <Link
                    component={RouterNavLink}
                    to="/matches?tab=1"
                    underline="none"
                    color="#333"
                    fontWeight={500}
                  >
                    Матчи
                  </Link>
                  <Link
                    component={RouterNavLink}
                    to="/notifications"
                    underline="none"
                    color="#333"
                    fontWeight={500}
                  >
                    Уведомления
                    {isLoading ? (
                      <CircularProgress size={27} />
                    ) : (
                      notifications && (
                        <Badge
                          badgeContent={notifications.length}
                          color="error"
                          max={99}
                          sx={{ top: -13 }}
                        />
                      )
                    )}
                  </Link>
                </>
              )}
              {isAuthorized ? (
                <>
                  <Link
                    component={RouterNavLink}
                    to="/profile"
                    color="#333"
                    fontWeight={500}
                  >
                    {firstName} {lastName}
                  </Link>
                  <Button
                    disabled={removeTokenMutation?.isPending}
                    onClick={() => {
                      if (deviceToken)
                        return removeTokenMutation.mutate(deviceToken);
                      history.go(0);
                      localStorage.removeItem('jwtToken');
                    }}
                    sx={{ p: 0 }}
                    endIcon={
                      removeTokenMutation?.isPending ? (
                        <CircularProgress size={18} />
                      ) : (
                        <LogoutIcon />
                      )
                    }
                  >
                    Выход
                  </Button>
                </>
              ) : (
                <Link
                  component={RouterNavLink}
                  to="/auth"
                  color="#333"
                  fontWeight={500}
                >
                  Войти
                </Link>
              )}
            </Box>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls="md-menu"
              aria-haspopup="true"
              onClick={(e) => setMdMoreAnchorEl(e.currentTarget)}
              color="inherit"
            >
              <MenuRoundedIcon sx={{ fontSize: 34, color: '#333' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <MediumScreenMenu
        mdMoreAnchorEl={mdMoreAnchorEl}
        handleMdMenuClose={() => setMdMoreAnchorEl(null)}
      />
    </Box>
  );
}

export default DesktopHeader;

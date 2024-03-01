import { useHistory, useLocation } from 'react-router';
import { SportsBaseballOutlined } from '@mui/icons-material';
import { Box, Link, Typography } from '@mui/material';
import { useIsAuthorized, useUserInfo } from '../services/api/hooks';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { isPlatform } from '@ionic/react';

function DesktopHeader() {
  const history = useHistory();

  const isAuthorized = useIsAuthorized();

  const [user] = useUserInfo({ enabled: isAuthorized });

  const firstName = user?.firstname;
  const lastName = user?.lastname;

  const { pathname } = useLocation();
  if (pathname.startsWith('/auth') || pathname.startsWith('/question-form'))
    return null;

  return (
    <>
      {isPlatform('desktop') && (
        <Box
          sx={{
            width: '100%',
            maxWidth: '1280px',
            margin: '0 auto',
            paddingInline: '15px',
            height: '5rem',
          }}
        >
          <Box
            sx={{
              position: 'fixed',
              top: '0',
              right: '0',
              left: '0',
              zIndex: '99999',

              display: 'flex',
              background: '#fff',
              color: '#000',
              paddingBlock: '1rem',
              paddingInline: '2.5rem',
              alignItems: 'center',
              justifyContent: 'space-between',

              borderBottom: '1px #e5e5e5 solid',
              boxShadow: '0 0 6px 3px rgba(0, 0, 0, 0.1);',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onClick={() => history.push('/')}
            >
              <SportsBaseballOutlined fontSize="large" sx={{ color: '#000' }} />

              <Typography fontWeight={600} fontSize={20} letterSpacing={1.2}>
                SPORTYTIME
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                gap: '.5rem',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Box sx={{ display: 'flex', gap: '10px' }}>
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
                        exact
                        underline="none"
                        color="#333"
                        fontWeight={500}
                      >
                        Клубы
                      </Link>
                      <Link
                        component={RouterNavLink}
                        to="/chats"
                        exact
                        underline="none"
                        color="#333"
                        fontWeight={500}
                      >
                        Чаты
                      </Link>
                      <Link
                        component={RouterNavLink}
                        to="/matches"
                        exact
                        underline="none"
                        color="#333"
                        fontWeight={500}
                      >
                        Матчи
                      </Link>
                    </>
                  )}
                  {isAuthorized ? (
                    <>
                      <Link
                        component={RouterNavLink}
                        to="/profile"
                        exact
                        color="#333"
                        fontWeight={500}
                      >
                        {firstName} {lastName}
                      </Link>
                      <Typography
                        onClick={() => {
                          history.go(0);
                          localStorage.removeItem('jwtToken');
                        }}
                        sx={{
                          opacity: '0.6',
                          textDecoration: 'underline',
                          cursor: 'pointer',
                        }}
                      >
                        Выход
                      </Typography>
                    </>
                  ) : (
                    <Link
                      component={RouterNavLink}
                      to="/auth"
                      exact
                      color="#333"
                      fontWeight={500}
                    >
                      Войти
                    </Link>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default DesktopHeader;

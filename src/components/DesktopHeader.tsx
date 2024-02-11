import { useHistory, useLocation } from 'react-router';
import { SportsBaseballOutlined } from '@mui/icons-material';
import { Box, Link, Typography } from '@mui/material';
import { useIsAuthorized, useUserInfo } from '../services/api/hooks';
import { Link as RouterLink } from 'react-router-dom';

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
                  <Typography
                    onClick={() => history.push('/about')}
                    sx={{
                      opacity: '0.6',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    }}
                  >
                    О компании
                  </Typography>
                  <Typography
                    onClick={() => history.push('/book-court')}
                    sx={{
                      opacity: '0.6',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    }}
                  >
                    Клубы
                  </Typography>
                  <Typography
                    onClick={() => history.push('/matches')}
                    sx={{
                      opacity: '0.6',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    }}
                  >
                    Матчи
                  </Typography>
                </>
              )}
              {isAuthorized ? (
                <>
                  <Link
                    component={RouterLink}
                    to="/profile"
                    sx={{
                      opacity: '0.6',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    }}
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
                <Typography
                  onClick={() => history.push('/auth')}
                  sx={{
                    opacity: '0.6',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                >
                  Войти
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default DesktopHeader;

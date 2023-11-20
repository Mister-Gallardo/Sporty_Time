import { SportsBaseballOutlined } from '@mui/icons-material';
import { Box, MenuItem, TextField, Typography } from '@mui/material';
import { Button } from './atoms/Button';
import { useHistory } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '../services/user/service';
import { useIsAuthorized } from '../services/api/hooks';

interface IDesktopHeaderProps {}

function DesktopHeader(props: IDesktopHeaderProps) {
  const history = useHistory();

  const isAuthorized = useIsAuthorized();

  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: getUserInfo,
    retry: false,
    enabled: isAuthorized,
  });

  const firstName = data?.data.firstname;
  const lastName = data?.data.lastname;

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: '0',
          right: '0',
          left: '0',
          zIndex: '999',

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
            gap: '2rem',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            onClick={() => history.push('/')}
            sx={{
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
              justifyContent: 'center',

              cursor: 'pointer',
            }}
          >
            <SportsBaseballOutlined sx={{ color: '#000' }} />
          </Box>
          <TextField sx={{ width: '175px' }} label="Адрес, название клуба" />
          <TextField
            sx={{ width: '100px' }}
            select
            label="Игра"
            defaultValue={'padel'}
          >
            <MenuItem value="padel">Padel</MenuItem>
            <MenuItem value="tennis">Tennis</MenuItem>
          </TextField>
          <TextField sx={{ width: '80px' }} select label="Дата" />
          <TextField
            sx={{ width: '80px' }}
            select
            label="Время матча"
            defaultValue={'13'}
          >
            <MenuItem value={13}>13:00</MenuItem>
            <MenuItem value={14}>14:00</MenuItem>
            <MenuItem value={15}>15:00</MenuItem>
            <MenuItem value={16}>16:00</MenuItem>
            <MenuItem value={17}>17:00</MenuItem>
          </TextField>
          <Button
            onClick={() => history.push('/book-court')}
            sx={{
              maxWidth: '140px',
              paddingBlock: '20px',
              borderRadius: '30px',
            }}
          >
            Найти
          </Button>
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
              )}
              {isAuthorized ? (
                <Typography
                  sx={{
                    opacity: '0.6',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                >
                  {firstName} {lastName}
                </Typography>
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
            {/* <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '48px',
                height: '48px',
                background: 'rgba(51,95,255,0.1)',
                borderRadius: '50%',
              }}
            >
              <IconButton sx={{ width: '100%', height: '100%' }}>
                <PersonOutlineOutlined sx={{ color: '#000' }} />
              </IconButton>
            </Box> */}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default DesktopHeader;

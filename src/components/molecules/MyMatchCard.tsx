import { Avatar, Box, Typography } from '@mui/material';
import { useHistory } from 'react-router';

interface IMyMatchCardProps {}

export function MyMatchCard(props: IMyMatchCardProps) {
  const history = useHistory();
  return (
    <Box
      onClick={() => history.push('/matches/2')}
      sx={{
        position: 'relative',
        padding: '10px 15px',
        width: '100%',
        maxWidth: '370px',
        background: '#fff',
        border: '1px solid #E5E5E5',
        borderRadius: '10px',

        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
      }}
    >
      <Box
        sx={{ position: 'absolute', top: '10px', right: '15px', opacity: '.5' }}
      >
        <Typography sx={{ fontSize: '.75rem' }}>
          Nov 20 | 11:30 - 13:00
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 'fit-content',
          }}
        >
          <Box sx={{ display: 'flex', gap: '.75rem' }}>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar sx={{ width: '55px', height: '55px' }} />
              <Typography sx={{ opacity: '.5' }}>1.4</Typography>
            </Box>

            <Box sx={{ textAlign: 'center' }}>
              <Avatar sx={{ width: '55px', height: '55px' }} />
              <Typography sx={{ opacity: '.5' }}>1.4</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: '35px',
              height: '1px',
              background: '#e5e5e5',
              margin: '.75rem auto',
            }}
          />
          <Box sx={{ display: 'flex', gap: '.75rem' }}>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar sx={{ width: '55px', height: '55px' }} />
              <Typography sx={{ opacity: '.5' }}>1.4</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar sx={{ width: '55px', height: '55px' }} />
              <Typography sx={{ opacity: '.5' }}>1.4</Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '.75rem',
          }}
        >
          <Box sx={{ display: 'flex', gap: '1.75rem', opacity: '.5' }}>
            <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
              3
            </Typography>
            <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
              3
            </Typography>
            <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
              3
            </Typography>
          </Box>

          <Box sx={{ width: '150%', height: '1px', background: '#e5e5e5' }} />

          <Box sx={{ display: 'flex', gap: '1.75rem' }}>
            <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
              3
            </Typography>{' '}
            <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
              3
            </Typography>
            <Typography sx={{ fontSize: '2.5rem', fontWeight: '700' }}>
              3
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

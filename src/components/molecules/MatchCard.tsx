import { Avatar, Box, Typography } from '@mui/material';
import { useHistory } from 'react-router';
import { AvailableMatch } from '../../services/matches/interface';

export function MatchCard(props: AvailableMatch) {
  const matchData = props;
  const history = useHistory();

  return (
    <Box
      onClick={() => history.push(`/matches/${matchData.id}`)}
      sx={{
        marginInline: '.75rem',
        marginTop: '.75rem',
        width: '100%',
        maxWidth: '370px',
        background: '#fff',
        border: '2px solid #EED790',
        borderRadius: '10px',

        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
      }}
    >
      <Box
        sx={{
          paddingInline: '15px',
        }}
      >
        <Box
          sx={{
            paddingTop: '.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ fontSize: '.9rem', fontWeight: '700' }}>
            30 нояб | {matchData.time.slice(0, -3)}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Typography sx={{ fontSize: '.9rem', fontWeight: '500' }}>
              Корт забронирован
            </Typography>
            <Typography>✅</Typography>
          </Box>
        </Box>

        <Box>
          <Typography sx={{ paddingBlock: '.25rem' }}>
            11km · {matchData.courtaddress}
          </Typography>
        </Box>

        <Box
          sx={{
            paddingBlock: '.75rem',
            display: 'flex',
            maxWidth: '320px',
            margin: '0 auto',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box sx={{ display: 'flex', gap: '14px' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar
                sx={{
                  width: '60px',
                  height: '60px',
                  border: '2px solid #EED790',
                }}
              />
              <Typography>Амир</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar
                sx={{
                  width: '60px',
                  height: '60px',
                  border: '2px solid #EED790',
                }}
              />
              <Typography>Ramazan</Typography>
            </Box>
          </Box>
          <Box sx={{ width: '2px', height: '50px', background: '#e5e5e5' }} />
          <Box sx={{ display: 'flex', gap: '14px' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar
                sx={{
                  width: '60px',
                  height: '60px',
                  border: '2px solid #EED790',
                }}
              />
              <Typography>Доступно</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar
                sx={{
                  width: '60px',
                  height: '60px',
                  border: '2px solid #EED790',
                }}
              />
              <Typography>Доступно</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ borderTop: '1px grey solid' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              paddingLeft: '14px',
              paddingTop: '.5rem',
            }}
          >
            <Typography sx={{ fontWeight: '600', paddingBottom: '.25rem' }}>
              Competetive ·{' '}
              <span style={{ fontWeight: '400' }}>Level 3.8 - 4.8</span>
            </Typography>
            <Typography sx={{ fontWeight: '600' }}>Mixed</Typography>
          </Box>
          <Box
            sx={{
              width: '100%',
              maxWidth: '125px',
              height: '100%',
              background: '#6E8FFF',
              textAlign: 'center',
              paddingBlock: '.27rem',
              borderRadius: '0 0 5px 0',
              color: '#fff',
            }}
          >
            <Typography sx={{ fontSize: '1.25rem', fontWeight: '700' }}>
              ₽ {matchData.courtprice}
            </Typography>
            <Typography>90 мин</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

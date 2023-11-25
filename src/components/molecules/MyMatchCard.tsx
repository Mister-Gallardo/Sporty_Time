import { Add, Error } from '@mui/icons-material';
import { Avatar, Box, ButtonBase, Typography } from '@mui/material';
import { useHistory } from 'react-router';

interface IMyMatchCardProps {
  noResult: boolean;
}

export function MyMatchCard(props: IMyMatchCardProps) {
  const { noResult } = props;
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
      {noResult && (
        <Box
          sx={{
            position: 'absolute',
            top: '-4px',
            right: '-4px',
            width: '16px',
            height: '16px',
            background: '#FF4976',
            borderRadius: '50%',
          }}
        />
      )}

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: !noResult ? 'space-between' : 'unset',
        }}
      >
        <Box
          sx={{
            marginBlock: '.5rem',
            borderRight: noResult ? '1px solid grey' : 'unset',
            paddingRight: noResult ? '.75rem' : 'unset',
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

        {!noResult && (
          <Box
            sx={{
              position: 'absolute',
              top: '10px',
              right: '15px',
              opacity: '.5',
            }}
          >
            <Typography sx={{ fontSize: '.75rem' }}>
              Nov 20 | 11:30 - 13:00
            </Typography>
          </Box>
        )}

        {noResult && (
          <Box
            sx={{
              width: '100%',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              sx={{
                paddingLeft: '15px',

                fontSize: '.9rem',
                fontWeight: '700',
                flexGrow: '1',
                width: '100%',
              }}
            >
              Nov 29 | 12:00 - 13:00
            </Typography>
            <Box
              sx={{
                width: 'calc(100% + 15px)',
                marginLeft: '15px',
                marginTop: '.5rem',
                flexGrow: '1',
                paddingBlock: '7px',
                background: '#FEF4F5',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: '.5rem',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Error sx={{ color: '#FF3356' }} />
                <Typography
                  sx={{
                    fontWeight: '700',
                    fontSize: '.75rem',
                    color: '#FF3356',
                  }}
                >
                  Нет результата
                </Typography>
              </Box>
            </Box>
            <ButtonBase
              onClick={() => console.log('clicked')}
              sx={{
                position: 'relative',
                zIndex: '9999999',
                marginTop: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                background: '#000',
                borderRadius: '50%',
              }}
            >
              <Add sx={{ color: '#fff' }} />
            </ButtonBase>
          </Box>
        )}

        {!noResult && (
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
        )}
      </Box>
    </Box>
  );
}

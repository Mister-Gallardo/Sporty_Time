import { SportsBaseball, SportsTennis } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { IMatchBlockProps } from './interface';

export function MainInfoBlock({ data }: IMatchBlockProps) {
  return (
    <Box
      sx={{
        width: '100%',
        background: '#fff',
        border: '2px solid #EED790',
        borderRadius: '10px',
        padding: '10px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '.75rem',
            paddingInline: '10px',
          }}
        >
          <SportsTennis sx={{ color: '#000', opacity: '.7' }} />
          <Box>
            <Typography
              sx={{
                paddingBottom: '.2rem',
                fontWeight: '600',
                fontSize: '.9rem',
              }}
            >
              {data?.sport}
            </Typography>
            <Typography>
              {data?.gameDate}
              {', '}
              {data?.slot?.time.slice(0, -3)}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            width: '30px',
            height: '30px',
            background: '#0E2233',
            borderRadius: '50%',
          }}
        >
          <SportsBaseball
            sx={{ color: '#EFDB87', fontSize: '1.1rem', opacity: '.8' }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          margin: '.75rem 0 1rem 0',
          width: '100%',
          height: '1px',
          background: '#e5e5e5',
          borderRadius: '3px',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          paddingInline: '10px',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Typography
            sx={{
              fontWeight: '600',
              opacity: '.6',
              fontSize: '.85rem',
            }}
          >
            Гендер
          </Typography>
          <Typography sx={{ fontWeight: '700', fontSize: '1rem' }}>
            Смешанный
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Typography
            sx={{
              fontWeight: '600',
              opacity: '.6',
              fontSize: '.85rem',
            }}
          >
            Уровень
          </Typography>
          <Typography sx={{ fontWeight: '700', fontSize: '1rem' }}>
            {data?.ratingFrom} - {data?.ratingTo}
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Typography
            sx={{
              fontWeight: '600',
              opacity: '.6',
              fontSize: '.85rem',
            }}
          >
            Цена
          </Typography>
          <Typography sx={{ fontWeight: '700', fontSize: '1rem' }}>
            ₽ {data?.price}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

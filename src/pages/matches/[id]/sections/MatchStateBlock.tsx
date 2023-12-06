import { LockOpenOutlined } from '@mui/icons-material';
import { IMatchBlockProps } from './interface';
import { Box, Typography } from '@mui/material';
export function MatchStateBlock({ data }: IMatchBlockProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem .75rem',
        marginTop: '2.5rem',
        width: '100%',
        background: '#fff',
        border: '1px #e5e5e5 solid',
        borderRadius: '10px',
      }}
    >
      <Box sx={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
        <LockOpenOutlined sx={{ color: '#000', fontSize: '1.25rem' }} />
        <Typography>Open Match</Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: '.5rem' }}>
        <Typography>{data?.slot ? '✅' : '🔴'}</Typography>
        <Typography>
          {data?.slot ? 'Корт забронирован' : 'Корт не забронирован'}
        </Typography>
      </Box>
    </Box>
  );
}

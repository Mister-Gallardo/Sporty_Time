import { Box, TextField, Typography } from '@mui/material';
import { Button } from '../../../../components/atoms/Button';

export function Hero() {
  return (
    <Box
      sx={{
        maxWidth: '900px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: '3.5rem',
            color: '#fff',
            fontWeight: '700',
            lineHeight: '1',
          }}
        >
          Находи где и с кем ты можешь сыграть в тенис!
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: '1rem',
            color: '#fff',
            fontWeight: '500',
            padding: '0',
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          excepturi quod quae vitae facilis est, doloremque autem.
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: '2rem',
          padding: '1.25rem 1rem',

          width: '100%',
          background: '#fff',
          borderRadius: '5px',
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <TextField
          sx={{ width: '100%', maxWidth: '150px' }}
          label="Адрес, название клуба"
        />
        <TextField
          sx={{ width: '100%', maxWidth: '150px' }}
          select
          label="Игра"
        ></TextField>
        <TextField
          sx={{ width: '100%', maxWidth: '150px' }}
          label="Дата"
          select
        />
        <TextField
          sx={{ width: '100%', maxWidth: '150px' }}
          label="Время"
          select
        />
        <Button
          sx={{
            maxWidth: '320px',
            height: '48px',
            fontSize: '1rem',
            borderRadius: '30px',
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
}

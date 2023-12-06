import { NavigateNext } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';

export function AskForPLaceBlock() {
  return (
    <Box
      sx={{
        padding: '1rem .75rem',
        marginBlock: '1.25rem',
        width: '100%',
        background: '#fff',
        border: '1px #e5e5e5 solid',
        borderRadius: '10px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: '600', fontSize: '1rem' }}>
            Попросите место в матче
          </Typography>
          <Typography
            sx={{
              fontSize: '.85rem',
              fontWeight: '600',
              opacity: '.5',
            }}
          >
            Посмотрите статус игроков чтобы присоединиться к матчу
          </Typography>
        </Box>
        <IconButton
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <NavigateNext />
        </IconButton>
      </Box>
    </Box>
  );
}

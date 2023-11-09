import {
  ChatBubbleOutline,
  NotificationsOutlined,
  PersonOutlineOutlined,
  SportsBaseballOutlined,
} from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
function DesktopHeader() {
  return (
    <Box
      sx={{
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '1.25rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <SportsBaseballOutlined sx={{ color: '#fff' }} />
        <Typography
          variant="h1"
          sx={{
            fontSize: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '10px',
            fontWeight: '500',
          }}
        >
          playtomic
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
        <IconButton sx={{ color: 'hsl(0 0% 20% / 1)' }}>
          <ChatBubbleOutline sx={{ fontSize: '1.25rem', color: '#fff' }} />
        </IconButton>
        <IconButton sx={{ color: 'hsl(0 0% 20% / 1)' }}>
          <NotificationsOutlined sx={{ fontSize: '1.25rem', color: '#fff' }} />
        </IconButton>
        <Box
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
            <PersonOutlineOutlined sx={{ color: '#fff' }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default DesktopHeader;

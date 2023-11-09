import { Box, IconButton, Typography } from '@mui/material';
import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

function MobileHeader() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        background: '#fff',
        zIndex: '9999999',

        width: '100%',
        padding: '5px 15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #e5e5e5',
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
        <SportsBaseballOutlinedIcon />
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
          <ChatBubbleOutlineRoundedIcon sx={{ fontSize: '1.25rem' }} />
        </IconButton>
        <IconButton sx={{ color: 'hsl(0 0% 20% / 1)' }}>
          <NotificationsOutlinedIcon sx={{ fontSize: '1.25rem' }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default MobileHeader;

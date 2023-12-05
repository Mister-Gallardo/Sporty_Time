import { Avatar, Box, Typography } from '@mui/material';
import { Player } from '../../services/user/interface';

export const PlayerSlot = (props: { player: Player; onClick?: any }) => {
  const { player, onClick } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          width: '63px',
          height: '63px',
          borderRadius: '50%',
          border: '2px solid #EED790',
        }}
      >
        <Avatar
          src={
            player ? 'https://mui.com/static/images/avatar/2.jpg' : undefined
          }
          onClick={onClick}
          sx={{
            width: '60px',
            height: '60px',
            opacity: player?.mark ? '.7' : 'unset',
          }}
        />
      </Box>
      <Typography>{player?.user?.firstname || 'Доступно'}</Typography>
      <Typography>{'' || ''}</Typography>
    </Box>
  );
};

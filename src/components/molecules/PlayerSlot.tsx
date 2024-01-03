import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Avatar, Box, Typography } from '@mui/material';
import { Player } from '../../services/user/interface';
import { getSportRating } from '../../helpers/getSportRating';

interface IPlayerSlotProps {
  player: Player;
  sport: string;
  onClick?: any;
}

export const PlayerSlot: React.FC<IPlayerSlotProps> = ({
  player,
  onClick,
  sport,
}) => {
  const playerRating = player ? getSportRating(player, sport) : '';
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {player ? (
        <>
          <Avatar
            src={player ? player?.user?.avatarUrl : undefined}
            onClick={onClick}
            sx={{
              width: '50px',
              height: '50px',
              opacity: player?.mark ? '.7' : 'unset',
            }}
          />
          <Typography fontSize={12}>{player?.user?.firstname}</Typography>
          <Typography fontSize={12} lineHeight={1.1} color="gray">
            {playerRating}
          </Typography>
        </>
      ) : (
        <>
          <Box
            width={50}
            height={50}
            border="1.5px dashed #2d5df1"
            borderRadius={50}
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgcolor="#fafafa"
          >
            <AddRoundedIcon sx={{ color: '#2d5df1' }} />
          </Box>
          <Typography fontSize={12}>Свободно</Typography>
        </>
      )}
    </Box>
  );
};

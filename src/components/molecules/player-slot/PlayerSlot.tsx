import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Avatar, Box, Typography } from '@mui/material';
import { MatchPlayer } from '../../../services/user/interface';
import { getSportRating } from '../../../helpers/getSportRating';
import { Status } from '../../../types';

interface IPlayerSlotProps {
  player: MatchPlayer;
  sport: string;
  onClick?: any;
  isMatchPaid?: boolean;
  playerAlreadyInSomeTeam?: boolean;
  hideStatus?: boolean;
  matchStatus: Status;
}

export const PlayerSlot: React.FC<IPlayerSlotProps> = ({
  player,
  onClick,
  sport,
  isMatchPaid,
  playerAlreadyInSomeTeam,
  hideStatus,
  matchStatus,
}) => {
  const playerRating = player ? getSportRating(player, sport) : '';

  const isShown =
    !hideStatus && (player?.isOwner || playerAlreadyInSomeTeam || player?.mark);

  // if match is cancelled -> hide payment status and available slot text
  const isHidden = matchStatus === Status.CANCELED;

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {player ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ opacity: player?.mark ? 0.5 : 1 }}
        >
          <Avatar
            src={`https://playpadel.lakileki.ru${player.user?.avatar}`}
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
          {isShown && !isHidden && (
            <Box textAlign="center">
              <Typography
                textAlign="center"
                lineHeight={1.2}
                // maxWidth={isMobile ? 70 : 'auto'}
                fontSize={12}
              >
                {isMatchPaid
                  ? 'Оплачено'
                  : player.paid
                  ? 'Оплачено'
                  : 'Ожидается оплата'}
              </Typography>
              <MonetizationOnOutlinedIcon fontSize="small" />
            </Box>
          )}
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ opacity: isHidden ? 0.3 : 1 }}
        >
          <Box
            onClick={onClick}
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
          {!isHidden && <Typography fontSize={12}>Свободно</Typography>}
        </Box>
      )}
    </Box>
  );
};

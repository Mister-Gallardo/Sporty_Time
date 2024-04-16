import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Avatar, Box, Link, Typography } from '@mui/material';
import { MatchPlayer } from '../../../services/user/interface';
import { getSportRating } from '../../../helpers/getSportRating';
import { Status } from '../../../services/matches/interface';
import { isPlatform } from '@ionic/react';
import { withHostname } from '../../../services/api/service';
import { Link as ReactRouterLink } from 'react-router-dom';

interface IPlayerSlotProps {
  player: MatchPlayer;
  sport: string;
  onClick?: any;
  isMatchPaid?: boolean;
  playerAlreadyInSomeTeam?: boolean;
  matchStatus?: Status;
}

const isMobile = isPlatform('mobile');

export const PlayerSlot: React.FC<IPlayerSlotProps> = ({
  player,
  onClick,
  sport,
  isMatchPaid,
  playerAlreadyInSomeTeam,
  matchStatus,
}) => {
  const playerRating = player ? getSportRating(player, sport) : '';

  const isShown =
    matchStatus && (player?.isOwner || playerAlreadyInSomeTeam || player?.mark);

  // if match is cancelled -> hide payment status and available slot text
  const isHidden = matchStatus === Status.CANCELED;

  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%">
      {player ? (
        <Link
          component={ReactRouterLink}
          to={`/profile/${player?.user?.id}`}
          underline="none"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ opacity: player?.mark ? 0.5 : 1 }}
          >
            <Avatar
              src={withHostname(player?.user?.avatar?.formats?.small || '')}
              sx={{
                width: isMobile ? '40px' : '50px',
                height: isMobile ? '40px' : '50px',
                opacity: player?.mark ? '.7' : 'unset',
              }}
            />
            <Typography fontSize={12}>{player?.user?.firstname}</Typography>
            <Typography fontSize={12} lineHeight={1.1} color="gray">
              {playerRating}
            </Typography>
            {isShown && !isHidden ? (
              <Box textAlign="center">
                <Typography
                  textAlign="center"
                  lineHeight={1.2}
                  fontSize={isMobile ? 10 : 12}
                  maxWidth={116}
                >
                  {isMatchPaid
                    ? 'Оплачено'
                    : player.paid
                    ? 'Оплачено'
                    : 'Ожидается оплата'}
                </Typography>
                <MonetizationOnOutlinedIcon fontSize="small" />
              </Box>
            ) : null}
          </Box>
        </Link>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{
            opacity: isHidden ? 0.3 : 1,
          }}
        >
          <Box
            onClick={onClick}
            width={isMobile ? 40 : 50}
            height={isMobile ? 40 : 50}
            border="1.5px dashed #2d5df1"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgcolor="#fafafa"
          >
            <AddRoundedIcon sx={{ color: '#2d5df1' }} />
          </Box>
          {!isHidden && (
            <Typography fontSize={isMobile ? 10 : 12}>Свободно</Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

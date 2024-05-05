import { Avatar, Stack, Typography } from '@mui/material';
import { Player } from '../../../../services/user/interface';
import { withHostname } from '../../../../services/api/service';
import { getSportRating } from '../../../../helpers/getSportRating';
import { ESport } from '../../../../services/matches/interface';

interface IClassPlayerSlotProps extends Player {
  sport?: ESport;
}

export const ClassPlayerSlot: React.FC<IClassPlayerSlotProps> = (props) => {
  const { user, sport } = props;

  return (
    <Stack alignItems="center">
      <Avatar src={withHostname(user?.avatar?.formats?.small || '')} />
      <Typography fontSize={12} maxWidth={70} noWrap>
        {user?.fullname}
      </Typography>
      <Typography fontSize={10}>{getSportRating(props, sport)}</Typography>
    </Stack>
  );
};

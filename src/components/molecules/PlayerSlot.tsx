import { Avatar, Box, Typography } from '@mui/material';
import { MatchMember, MatchMemberShort } from '../../services/user/interface';
import { Add } from '@mui/icons-material';
import { isPlatform } from '@ionic/react';

interface ITeamSlotIndex {
  teamIndex: number;
  slotIndex: number;
}
interface IPlayerSlot {
  member: MatchMember | MatchMemberShort;
  teamSlotIndex: ITeamSlotIndex;
  onSlotSelect: (val: ITeamSlotIndex) => void;
}
export const PlayerSlot: React.FC<IPlayerSlot> = ({
  member,
  teamSlotIndex,
  onSlotSelect,
}) => {
  const isMobile = isPlatform('mobile');

  return (
    <>
      {member ? (
        <Box
          minWidth={60}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar
            src={member.player.user.avatarUrl}
            sx={{ width: 50, height: 50 }}
          />
          <Typography
            fontSize={12}
            maxWidth={isMobile ? 60 : 'auto'}
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {member.player.user.firstname}
          </Typography>
          <Typography fontSize={12} color="gray">
            {member.player.ratingTennis}
          </Typography>
        </Box>
      ) : (
        <Box
          minWidth={60}
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ cursor: 'pointer' }}
          onClick={(e) => {
            e.stopPropagation();
            onSlotSelect(teamSlotIndex);
          }}
        >
          <Box
            width={50}
            height={50}
            borderRadius={50}
            border="1px solid #c6dcf2"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Add fontSize="small" color="primary" />
          </Box>
          <Typography color="gray" fontSize={12}>
            Add me
          </Typography>
        </Box>
      )}
    </>
  );
};

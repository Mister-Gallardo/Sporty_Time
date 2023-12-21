import { Avatar, Box, Typography } from '@mui/material';
import { MatchMember, MatchMemberShort } from '../../services/user/interface';
import { Add } from '@mui/icons-material';
import { isPlatform } from '@ionic/react';
import { useUserInfo } from '../../services/api/hooks';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

interface ITeamSlotIndex {
  teamIndex: number;
  slotIndex: number;
}
interface IPlayerSlot {
  member: MatchMember | MatchMemberShort;
  teamSlotIndex: ITeamSlotIndex;
  onSlotSelect?: (val: ITeamSlotIndex) => void;
}
export const PlayerSlot: React.FC<IPlayerSlot> = ({
  member,
  teamSlotIndex,
  onSlotSelect,
}) => {
  const isMobile = isPlatform('mobile');

  const user = useUserInfo();
  const creatorId = 59;

  const isUser = user?.id === member?.id;
  const isUserCreator = user?.id === creatorId;

  const myPayment = false;

  const didUserPay = isUser && myPayment;
  return (
    <>
      {member ? (
        <Box
          minWidth={60}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box sx={{ opacity: isUser && !myPayment ? 0.3 : 1 }}>
            <Avatar
              src={member.player.user.avatarUrl}
              sx={{ width: 50, height: 50 }}
            />
          </Box>
          <Box display="flex" flexWrap="nowrap" gap={0.5}>
            <Typography
              fontSize={12}
              maxWidth={isMobile ? 60 : 'auto'}
              noWrap
              overflow="hidden"
              textOverflow="ellipsis"
            >
              {member.player.user.firstname}
            </Typography>
            {isUser && <Typography fontSize={12}>(Вы)</Typography>}
          </Box>

          {didUserPay || !isUser ? (
            <Typography fontSize={12} color="gray">
              {member.player.ratingTennis}
            </Typography>
          ) : (
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              color="gray"
            >
              <Typography
                fontSize={12}
                textAlign="center"
                lineHeight={1.2}
                maxWidth={isMobile ? 70 : 'auto'}
              >
                Ожидается оплата
              </Typography>
              <MonetizationOnOutlinedIcon fontSize="small" />
            </Box>
          )}
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
            if (isUserCreator || !onSlotSelect) return;
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
          <Typography
            color="gray"
            fontSize={12}
            maxWidth={isMobile ? 60 : 'unset'}
            noWrap
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {isUserCreator ? 'Свободно' : 'Присоединиться'}
          </Typography>
        </Box>
      )}
    </>
  );
};

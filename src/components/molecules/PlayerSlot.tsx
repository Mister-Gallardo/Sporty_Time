import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import {
  MatchMember,
  MatchMemberShort,
} from '../../services/matches/interface';
import { Avatar, Box, Typography } from '@mui/material';
import { usePlayerProfile } from '../../services/api/hooks';
import { Add } from '@mui/icons-material';
import { isPlatform } from '@ionic/react';
import { ITeamSlot } from '../../types';

interface IPlayerSlot {
  isCancelled?: boolean;
  member: MatchMember | MatchMemberShort;
  teamSlotIndex: ITeamSlot;
  onSlotSelect?: (val: ITeamSlot) => void;
  isUserOwner?: boolean;
  isUserAlredyInMatch?: boolean;
}

export const PlayerSlot: React.FC<IPlayerSlot> = ({
  isCancelled,
  member,
  teamSlotIndex,
  onSlotSelect,
  isUserOwner,
  isUserAlredyInMatch,
}) => {
  const isMobile = isPlatform('mobile');

  const player = usePlayerProfile();
  const isUser = player?.id === member?.player?.id;

  return (
    <>
      {member ? (
        <Box
          minWidth={60}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box sx={{ opacity: isUser && !member.paid ? 0.3 : 1 }}>
            <Avatar
              src={member.player.user?.avatarUrl}
              sx={{ width: 50, height: 50 }}
            />
          </Box>
          <Box display="flex" flexWrap="nowrap" gap={0.5}>
            <Typography
              fontSize={12}
              maxWidth={60}
              noWrap
              overflow="hidden"
              textOverflow="ellipsis"
            >
              {member.player.user?.firstname}
            </Typography>
            {isUser && <Typography fontSize={12}>(Вы)</Typography>}
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            color="gray"
          >
            <Typography fontSize={12}>{member.player.ratingTennis}</Typography>

            {!isCancelled && !isUserOwner && isUser && (
              <>
                <Typography
                  textAlign="center"
                  lineHeight={1.2}
                  maxWidth={isMobile ? 70 : 'auto'}
                  fontSize={12}
                >
                  {member.paid ? 'Оплачено' : 'Ожидается оплата'}
                </Typography>
                <MonetizationOnOutlinedIcon fontSize="small" />
              </>
            )}
          </Box>
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
            if (isUserOwner || !onSlotSelect || isUserAlredyInMatch) return;
            onSlotSelect(teamSlotIndex);
          }}
        >
          <Box
            width={50}
            height={50}
            borderRadius={50}
            border={`1px solid ${isCancelled ? '#eee' : '#c6dcf2'}`}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Add
              fontSize="small"
              color={isCancelled ? 'disabled' : 'primary'}
            />
          </Box>
          {isCancelled || (
            <Typography color="gray" fontSize={12} maxWidth={60} noWrap>
              {isUserOwner || isUserAlredyInMatch
                ? 'Свободно'
                : 'Присоединиться'}
            </Typography>
          )}
        </Box>
      )}
    </>
  );
};

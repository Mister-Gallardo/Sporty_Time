import React from 'react';
import { useHistory } from 'react-router';
import { Box, Divider, Typography } from '@mui/material';
import { AvailableMatch } from '../../services/matches/interface';
import { matchDateFormat } from '../../helpers/matchDateFormat';
import useSortTeamMembers from '../../hooks/useSortTeamMembers';
import { PlayerSlot } from './PlayerSlot';
import { ITeamSlot } from '../../types';

export const MatchCard: React.FC<AvailableMatch> = ({
  matchBookings,
  gameDate,
  slot,
  id,
  ratingFrom,
  ratingTo,
  price,
  minutes,
  type,
}) => {
  const history = useHistory();

  const [playersArr] = useSortTeamMembers(matchBookings);

  const matchDate = matchDateFormat(gameDate, slot?.time);

  const onSlotSelect = (teamSlot: ITeamSlot) => {
    history.push(
      `/matches/${id}?team=${teamSlot.teamIndex}&slot=${teamSlot.slotIndex}`,
    );
  };

  return (
    <Box
      onClick={() => history.push(`/matches/${id}`)}
      border="2px solid #EED790"
      borderRadius={2}
      marginX={1}
      sx={{
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
      }}
    >
      <Box px={2}>
        <Typography
          mt={1}
          fontSize={14}
          fontWeight={600}
          textTransform="capitalize"
        >
          {matchDate}
        </Typography>

        <Typography color="gray">11км · {slot.court.club.title}</Typography>

        <Box py={2} display="flex" alignItems="flex-start" gap={1.5}>
          {playersArr.map((team, teamIndex) => {
            return (
              <React.Fragment key={teamIndex}>
                <Box
                  height="100%"
                  width={125}
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="space-between"
                >
                  {team.map((member, slotIndex) => {
                    const teamSlotIndex = { teamIndex, slotIndex };
                    return (
                      <PlayerSlot
                        key={slotIndex}
                        member={member}
                        teamSlotIndex={teamSlotIndex}
                        onSlotSelect={onSlotSelect}
                      />
                    );
                  })}
                </Box>
                {teamIndex === 0 && (
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    sx={{ my: 1 }}
                  />
                )}
              </React.Fragment>
            );
          })}
        </Box>
      </Box>

      <Box borderTop="1px #ddd solid">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box pl={2}>
            <Box display="flex" flexWrap="wrap">
              <Typography
                textTransform="capitalize"
                fontWeight={600}
                fontSize={13}
                whiteSpace="nowrap"
                mr={0.5}
              >
                {type.toLocaleLowerCase()} ·{' '}
              </Typography>
              <Typography color="gray" fontSize={13}>
                Уровень {ratingFrom} - {ratingTo}
              </Typography>
            </Box>
            <Typography color="gray" fontSize={13}>
              Пол: Любой
            </Typography>
          </Box>
          <Box
            sx={{
              width: '100%',
              maxWidth: '125px',
              height: '100%',
              background: '#6E8FFF',
              textAlign: 'center',
              paddingBlock: '.27rem',
              borderRadius: '0 0 5px 0',
              color: '#fff',
            }}
          >
            <Typography sx={{ fontSize: '1.25rem', fontWeight: '700' }}>
              ₽ {price}
            </Typography>
            <Typography>{minutes} мин</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

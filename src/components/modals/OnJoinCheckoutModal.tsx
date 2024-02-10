import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { Box, Button, Divider, Typography } from '@mui/material';
import { getOneAvailableMatch } from '../../services/matches/service';
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';
import { ModalContainer } from './ModalContainer';
import { getMatchTypeName, getSportName } from '../../helpers/getNameOf';

interface IOnJoinCheckoutModalProps {
  openState: boolean;
  handleModal: (val?: boolean) => void;
  handleCheckout: () => void;
}

export const OnJoinCheckoutModal: React.FC<IOnJoinCheckoutModalProps> = ({
  openState,
  handleModal,
  handleCheckout,
}) => {
  const { matchId } = useParams<{ matchId: string }>();

  const { data } = useQuery({
    queryKey: [`match`, Number(matchId)],
    queryFn: () => getOneAvailableMatch(Number(matchId)),
  });

  const matchData = data?.data;
  if (!matchData) return null;

  const { booking, type, sport, paid, price } = matchData;

  const interval = booking.interval;

  // match start date + start-end time
  const matchDate = `${interval.slice(2, 12)} | ${interval.slice(
    13,
    18,
  )}-${interval.slice(-10, -5)}`;

  const total = paid ? 0 : price / 4;

  const tags = booking?.court?.tags.map((tag) => tag.title).join(' | ');

  return (
    <ModalContainer
      openState={openState}
      handleModal={handleModal}
      headerTitle="Оплата"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={1}
        border="1px solid #ddd"
      >
        <Box flexGrow={1} pr={1}>
          <Typography>{matchDate}</Typography>
          <Typography color="gray">{getMatchTypeName(type)}</Typography>
          <Typography>
            {getSportName(sport)}, {booking?.court?.title}
          </Typography>
          <Typography>{tags}</Typography>
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          pl={2}
          pr={1}
        >
          <HistoryToggleOffOutlinedIcon />
          <Typography noWrap>{booking.duration} мин</Typography>
        </Box>
      </Box>

      <Box my={4} display="flex" alignItems="center" gap={4}>
        <Box>
          <Typography fontWeight={600}>Итог</Typography>
          <Typography fontSize={12} color="gray">
            Плата за услуги Sportytime и налоги включительно
          </Typography>
        </Box>

        <Typography
          fontSize={20}
          sx={{ color: 'primary.main' }}
          whiteSpace="nowrap"
        >
          {total} RUB
        </Typography>
      </Box>

      <Box py={1.5} px={2} borderTop="1px solid #ddd">
        <Button
          onClick={handleCheckout}
          variant="contained"
          sx={{
            backgroundColor: '#0d2432',
            borderRadius: 10,
            '&:hover': {
              backgroundColor: '#123347',
            },
          }}
          fullWidth
        >
          Забронировать место
        </Button>
      </Box>
    </ModalContainer>
  );
};

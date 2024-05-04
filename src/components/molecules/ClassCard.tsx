import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { isPlatform } from '@ionic/react';
import { IClass } from '../../services/classes/service';
import { getGenderName, getSportName } from '../../helpers/getNameOf';
import classImage from '../../images/matches/bgpadel_matchdetail.png';

const isMobile = isPlatform('mobile');

export const ClassCard: React.FC<IClass> = ({
  id,
  title,
  sport,
  playersCount,
  price,
  booking,
  gender,
  ratingFrom,
  ratingTo,
}) => {
  const classDate = booking && new Date(booking?.startsAt);
  const day =
    classDate && classDate.toLocaleDateString('ru', { weekday: 'short' });
  const date =
    classDate &&
    classDate.toLocaleDateString('ru', {
      month: 'short',
      day: 'numeric',
    });

  const time = booking && booking?.startsAt.split('T');
  return (
    <Box
      border="1px solid #eee"
      width="100%"
      maxWidth={isMobile ? 'unset' : 360}
    >
      <Link to={`/classes/${id}`}>
        <Box
          p={1.5}
          borderBottom="1px solid #eee"
          display="flex"
          alignItems="center"
        >
          <Stack alignItems="center" px={3}>
            <Box
              src={classImage}
              component="img"
              width={50}
              height={50}
              flexShrink={0}
            />
            <Typography mt={1} fontSize={13} color="gray">
              {getSportName(sport)}
            </Typography>
            <Typography>Занятие</Typography>
          </Stack>
          <Divider flexItem variant="fullWidth" orientation="vertical" />
          <Box px={1}>
            <Box
              display="flex"
              alignItems="center"
              gap={0.5}
              color="gray"
              textTransform="uppercase"
            >
              <Typography fontSize={10}>{day}</Typography>
              <span>&#183;</span>
              <Typography fontSize={10}>{date}</Typography>
              <span>&#183;</span>
              <Typography fontSize={10}>{time[1]?.slice(0, 5)}</Typography>
            </Box>
            <Typography mb={2} fontSize={16} fontWeight={600}>
              {title}
            </Typography>
            <Box
              mb={1}
              display="flex"
              alignItems="center"
              color="gray"
              gap={0.5}
            >
              <FmdGoodOutlinedIcon fontSize="small" color="disabled" />
              <Typography>{booking?.court?.club?.city}</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={3}>
              <Box display="flex" alignItems="center" gap={0.5}>
                <SignalCellularAltOutlinedIcon
                  fontSize="small"
                  color="disabled"
                />
                <Typography whiteSpace="nowrap">
                  {ratingFrom} - {ratingTo}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={0.5}>
                <Typography color="gray">Пол:</Typography>
                <Typography>{getGenderName(gender)}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          px={1.5}
          py={1}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex" alignItems="center" gap={1}>
            <Box display="flex">
              {[1, 2, 3, 4].map((slot, i) => {
                return (
                  <Box
                    key={slot}
                    border="1px solid blue"
                    width={30}
                    height={30}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    ml={i !== 0 ? -1 : 'unset'}
                    bgcolor="#fff"
                  >
                    <AddIcon color="info" />
                  </Box>
                );
              })}
            </Box>
            <Typography color="gray" fontSize={13}>
              0/{playersCount}
            </Typography>
          </Box>
          <Button variant="contained" sx={{ fontSize: 13, px: 2, py: 0.2 }}>
            <Stack>
              <Typography>Присоединиться</Typography>
              <Typography>{price}руб.</Typography>
            </Stack>
          </Button>
        </Box>
      </Link>
    </Box>
  );
};

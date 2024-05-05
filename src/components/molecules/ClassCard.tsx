import { Avatar, Box, Button, Divider, Stack, Typography } from '@mui/material';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { isPlatform } from '@ionic/react';
import { IClass } from '../../services/classes/service';
import { getGenderName, getSportName } from '../../helpers/getNameOf';
import classImage from '../../images/matches/bgpadel_matchdetail.png';
import { withHostname } from '../../services/api/service';
import { differenceInHours } from 'date-fns';

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
  classBookings,
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

  const bookedPlacesAmount = classBookings?.length || 0;
  const isFillfilled = bookedPlacesAmount === playersCount;

  const classStartsAt = new Date(booking?.startsAt);
  const timeDifference =
    classStartsAt && differenceInHours(classStartsAt, Date.now());

  const isRegistrationEnded = timeDifference <= 12;

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
            {booking && (
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
            )}
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
          height={60}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <Box display="flex" alignItems="center">
              {classBookings?.map((booking, i) => {
                const avatar = booking?.player?.user?.avatar?.formats?.small;
                return (
                  <Avatar
                    key={booking?.id}
                    src={withHostname(avatar || '')}
                    sx={{
                      width: 32,
                      height: 32,
                      ml: i !== 0 ? -1 : 'unset',
                      border: '1px solid #fff',
                    }}
                  />
                );
              })}
              {[...Array(playersCount - bookedPlacesAmount).keys()].map(
                (slot, i) => {
                  return (
                    <Box
                      key={slot}
                      zIndex={1}
                      border="1px solid blue"
                      width={30}
                      height={30}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      ml={bookedPlacesAmount !== 0 || i !== 0 ? -1 : 'unset'}
                      bgcolor="#fff"
                    >
                      <AddIcon color="info" />
                    </Box>
                  );
                },
              )}
            </Box>
            <Typography color="gray" fontSize={13}>
              {classBookings?.length}/{playersCount}
            </Typography>
          </Box>
          {isRegistrationEnded ? (
            <Typography>Регистрация закончена</Typography>
          ) : isFillfilled ? (
            <Typography>Мест нет</Typography>
          ) : booking?.cancelled ? (
            <Typography color="error">Отменено</Typography>
          ) : (
            <Button variant="contained" sx={{ fontSize: 13, px: 2, py: 0.2 }}>
              <Stack>
                <Typography>Присоединиться</Typography>
                <Typography>{price}руб.</Typography>
              </Stack>
            </Button>
          )}
        </Box>
      </Link>
    </Box>
  );
};

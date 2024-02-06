import { useHistory } from 'react-router';
import { Club, IAvailableTime } from '../../services/club/interface';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { DateBox } from './DateBox';
import { isPlatform } from '@ionic/react';

interface IClubCard extends Club {
  onClick: () => void;
}

export const ClubCard: React.FC<IClubCard> = (props) => {
  const { onClick, id, img, title, city, minPrice, availableTimes } = props;
  const isMobile = isPlatform('mobile');
  const history = useHistory();
  const [gameDate, times] = Object.entries(availableTimes || {})[0];

  return (
    <Box
      bgcolor="#fff"
      boxShadow="0 7px 8px -2px #e0e0e0"
      onClick={onClick}
      sx={{ cursor: isMobile ? 'unset' : 'pointer' }}
    >
      <Box
        position="relative"
        height="180px"
        width="100%"
        display="flex"
        alignItems="flex-end"
        sx={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
        }}
      >
        <IconButton sx={{ position: 'absolute', top: '10px', right: '10px' }}>
          <FavoriteBorderOutlined sx={{ color: '#fff' }} />
        </IconButton>
        <Box
          position="absolute"
          bottom={0}
          height="70px"
          width="100%"
          sx={{
            background:
              'linear-gradient(0deg, rgba(6,22,38,0.81) 8%, rgba(6,22,38,0) 100%)',
          }}
        />

        <Box
          zIndex={1}
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
          width="100%"
          color="white"
          px={1.5}
          pb={1}
        >
          <Typography fontSize={20} fontWeight={700}>
            {title}
          </Typography>
          <Box>
            <Typography textAlign="center" sx={{ opacity: 0.8 }}>
              1ч от
            </Typography>
            <Typography fontSize={20} fontWeight={700}>
              {minPrice} p
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box py={1.5} pl={1.5}>
        <Typography mb={1} color="gray">
          {/* 6km - L'Hospitalet de Llobregat */}
          {city}
        </Typography>
        <Box display="flex" gap={1} pb={2} sx={{ overflowX: 'auto' }}>
          {times.length === 0 ? (
            <Typography
              color="gray"
              width="100%"
              textAlign="center"
              fontSize={12}
            >
              По заданным параметрам нет свободных кортов
            </Typography>
          ) : (
            times?.map((elem: IAvailableTime, i: number) => {
              if (!elem.time) return;
              return (
                <DateBox
                  key={i}
                  startTime={elem.time}
                  onClick={(e: Event) => {
                    e.stopPropagation();
                    history.push(
                      `/book-court/${id}?tab=2&time=${elem.time}&day=${gameDate}`,
                    );
                  }}
                />
              );
            })
          )}
        </Box>
      </Box>
    </Box>
  );
};

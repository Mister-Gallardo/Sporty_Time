import { useHistory } from 'react-router';
import { Club, IAvailableTime } from '../../services/club/interface';
import { Box, Typography } from '@mui/material';
import { DateBox } from './DateBox';
import { isPlatform } from '@ionic/react';
import noImg from '../../images/no-image.jpg';
import { withHostname } from '../../services/api/service';

interface IClubCard extends Club {
  onClick: () => void;
}
const isMobile = isPlatform('mobile');

export const ClubCard: React.FC<IClubCard> = (props) => {
  const { onClick, id, images, title, city, minPrice, availableTimes } =
    props as any; // FIX
  const history = useHistory();

  const [gameDate, times] = Object.entries(availableTimes || {})[0];

  const previewImg = images.length === 0 ? noImg : images[0]?.formats.medium;

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
          backgroundImage: `url(${withHostname(previewImg)})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
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
          {minPrice && (
            <Box>
              <Typography textAlign="center" sx={{ opacity: 0.8 }}>
                1ч от
              </Typography>
              <Typography fontSize={20} fontWeight={700}>
                {minPrice} p
              </Typography>
            </Box>
          )}
        </Box>
      </Box>

      <Box py={1.5} pl={1.5}>
        <Typography mb={1} color="gray">
          {city}
        </Typography>
        <Box display="flex" gap={1} pb={2} sx={{ overflowX: 'auto' }}>
          {(times as IAvailableTime[]).length === 0 ? (
            <Typography
              color="gray"
              width="100%"
              textAlign="center"
              fontSize={12}
            >
              По заданным параметрам нет свободных кортов
            </Typography>
          ) : (
            (times as IAvailableTime[])?.map(
              (elem: IAvailableTime, i: number) => {
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
              },
            )
          )}
        </Box>
      </Box>
    </Box>
  );
};

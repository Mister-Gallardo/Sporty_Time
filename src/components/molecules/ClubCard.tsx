import { useHistory } from 'react-router';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { DateBox } from './DateBox';

const dummyData = [
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
];

interface IClubCard {}

export const ClubCard: React.FC<any> = ({
  id,
  img,
  title,
  minPrice,
  availableTimes,
}) => {
  const history = useHistory();

  return (
    <Box onClick={() => history.push(`/book-court/${id}?tab=2`)}>
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
          6km - L'Hospitalet de Llobregat (Barcelona)
        </Typography>
        <Box display="flex" gap={1} pb={2} sx={{ overflowX: 'auto' }}>
          {dummyData?.map((time) => (
            <DateBox
              key={time}
              startTime={time}
              onClick={() => console.log(`Make current time - ${time} active`)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

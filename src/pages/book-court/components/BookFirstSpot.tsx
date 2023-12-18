import { Add } from '@mui/icons-material';
import { Avatar, Box, Button, Typography } from '@mui/material';

interface IBookFirstSpot {
  price: number;
  playTime: number;
  handleBook: () => void;
}

export const BookFirstSpot: React.FC<IBookFirstSpot> = ({
  price,
  playTime,
  handleBook,
}) => {
  return (
    <Box border="1px solid #ccc" borderRadius={2} overflow="hidden">
      <Box
        position="relative"
        display="flex"
        justifyContent="space-evenly"
        px={2}
        py={3}
        borderBottom="1px solid #ddd"
      >
        <Box display="flex" gap={2}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={0.3}
          >
            <Avatar />
            <Typography color="blue" fontSize={12}>
              Свободно
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={0.3}
          >
            <Avatar />
            <Typography color="blue" fontSize={12}>
              Свободно
            </Typography>
          </Box>
        </Box>

        <Box height={40} borderLeft="1px solid #ddd"></Box>

        <Box display="flex" gap={2}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={0.3}
          >
            <Avatar />
            <Typography color="blue" fontSize={12}>
              Свободно
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={0.3}
          >
            <Avatar />
            <Typography color="blue" fontSize={12}>
              Свободно
            </Typography>
          </Box>
        </Box>

        <Button
          onClick={() => handleBook()}
          variant="contained"
          sx={{
            position: 'absolute',
            bottom: 10,
            borderRadius: 10,
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          <Add /> Забронировать первое место
        </Button>
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography color="gray" fontSize={12} fontWeight={600} px={2}>
          Первый игрок выбирает тип матча
        </Typography>
        <Box
          px={3}
          py={0.5}
          sx={{ backgroundColor: '#6e8ffd' }}
          color="white"
          textAlign="center"
        >
          <Typography fontSize={20} fontWeight={700}>
            ${price}
          </Typography>
          <Typography>{playTime}min</Typography>
        </Box>
      </Box>
    </Box>
  );
};

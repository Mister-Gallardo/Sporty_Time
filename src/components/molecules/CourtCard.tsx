import { isPlatform } from '@ionic/react';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { useHistory } from 'react-router';

interface ICourtCardProps {
  club: any;
}

export function CourtCard(props: ICourtCardProps) {
  const { club } = props;
  const { img, title } = club;
  const history = useHistory();
  const isMobile = isPlatform('mobile');
  const availableSlotsTimes = Object.keys(club.availableSlots).filter(
    (time) => club.availableSlots[time].length,
  );
  let minPrice = club.courts?.[0]?.price;
  if (minPrice) {
    club.courts.forEach((court: any) => {
      if (court.price < minPrice) minPrice = court.price;
    });
  }

  return (
    <Box
      onClick={() => history.push(`/book-court/${club.id}`)}
      sx={{
        width: '100%',
        height: 'max-content',
        background: '#fff',
        boxShadow:
          'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
      }}
    >
      <Box
        sx={{
          height: '75%',
          position: 'relative',
        }}
      >
        <IconButton sx={{ position: 'absolute', top: '10px', right: '10px' }}>
          <FavoriteBorderOutlined sx={{ color: '#fff' }} />
        </IconButton>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            maxHeight: '175px',
            objectFit: 'cover',
          }}
          component="img"
          src={img}
        />
        <Box
          sx={{
            width: '100%',
            position: 'absolute',
            top: '0',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            padding: '7px 14px',

            color: '#fff',
          }}
        >
          <Typography
            sx={{
              color: '#fff',
              maxWidth: '70%',
              fontSize: '1.15rem',
              fontWeight: '700',
            }}
          >
            {title}
          </Typography>
          {minPrice && (
            <Box>
              <Typography
                variant="body2"
                sx={{ color: '#e5e5e5', fontWeight: '500' }}
              >
                1 час от
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.15rem' }}>
                {minPrice} RUB
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
      <Box sx={{ padding: '10px 15px' }}>
        <Typography sx={{ color: '#grey' }}>672m - Дубаи</Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '1rem',
            marginTop: '10px',
            overflowX: 'auto',
            margin: isMobile ? '.25em calc(50% - 50vw)' : '10px 0 0 0',
            paddingInline: isMobile ? '15px' : '0',
            paddingBottom: '10px',
          }}
        >
          {availableSlotsTimes.map((time) => (
            <Box
              sx={{
                padding: '7px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '35px',
                border: '1.5px solid #e5e5e5',
                borderRadius: '5px',
              }}
            >
              {time}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

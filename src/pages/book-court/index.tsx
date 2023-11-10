import { isPlatform } from '@ionic/react';
import { Box } from '@mui/material';
import { CourtCard } from '../../components/molecules/CourtCard';

export function BookCourt() {
  const isMobile = isPlatform('mobile');

  return (
    <>
      <Box
        sx={{
          paddingInline: isMobile ? '0' : '10px',
          display: 'grid',
          alignContent: 'center',
          gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
          marginTop: '.5rem',
          gap: '1rem',
        }}
      >
        <CourtCard
          title="JA Ocean View Hotel Padel Tennis Court"
          img="https://res.cloudinary.com/playtomic/image/upload/c_limit,w_1600/v1/pro/tenants/0e032f8c-7b86-4847-97a4-7a2b673a218e/jaoceanviewae_0001"
          pricePerHour={400}
        />
        <CourtCard
          title="Padelx Floating Club"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ehB3JUbVZRBMTxOBO-Qx3kdsS3_2wsJywA&usqp=CAU"
          pricePerHour={150}
        />
        <CourtCard
          title="Awesome Tennis Court"
          img="https://womensfitness.co.uk/wp-content/uploads/sites/3/2023/06/Padel-lesson-indoors-1.jpg"
          pricePerHour={178}
        />
      </Box>
    </>
  );
}

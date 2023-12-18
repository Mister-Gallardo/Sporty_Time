import { Box, Divider, Typography } from '@mui/material';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import React from 'react';

const date = new Date();
const dateOptions: any = { weekday: 'long', day: 'numeric', month: 'short' };
console.log(date.toLocaleDateString('ru-RU', dateOptions));

// {data?.slot?.time.slice(0, -3)}

interface IMatchDataBlock {
  sport: string;
  ratingFrom: number;
  ratingTo: number;
  date: string;
  price: number;
  gender: string;
}

export const MainInfoBlock: React.FC<IMatchDataBlock> = () => {
  const status = true;
  const isPremium = true;
  return (
    <Box>
      {status && <Box>Some status</Box>}
      <Box
        p={2}
        bgcolor="#fff"
        borderRadius={2}
        border={isPremium ? '2px solid gold' : 'one'}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" gap={2}>
            <SportsTennisIcon />
            <Box>
              <Typography fontWeight={700}>SPORT</Typography>
              <Typography
                fontSize={13}
                fontWeight={600}
                textTransform="capitalize"
              >
                {date.toLocaleDateString('ru-RU', dateOptions)}
              </Typography>
            </Box>
          </Box>

          {isPremium && (
            <Box
              width={30}
              height={30}
              display="flex"
              alignItems="center"
              justifyContent="center"
              bgcolor="#0d2432"
              color="gold"
              borderRadius="50%"
            >
              <WorkspacePremiumOutlinedIcon fontSize="small" />
            </Box>
          )}
        </Box>

        <Divider sx={{ my: 1.5 }} />

        <Box display="flex" justifyContent="space-evenly">
          <Box textAlign="center">
            <Typography color="gray">Пол</Typography>
            <Typography fontSize={16} fontWeight={600}>
              text
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography color="gray">Уровень</Typography>
            <Typography fontSize={16} fontWeight={600}>
              text
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography color="gray">Цена</Typography>
            <Typography fontSize={16} fontWeight={600}>
              text
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>

    // <Box
    //   sx={{
    //     width: '100%',
    //     background: '#fff',
    //     border: '2px solid #EED790',
    //     borderRadius: '10px',
    //     padding: '10px',
    //   }}
    // >
    //   <Box
    //     sx={{
    //       display: 'flex',
    //       justifyContent: 'space-between',
    //       alignItems: 'center',
    //     }}
    //   >
    //     <Box
    //       sx={{
    //         display: 'flex',
    //         alignItems: 'center',
    //         gap: '.75rem',
    //         paddingInline: '10px',
    //       }}
    //     >
    //       <SportsTennis sx={{ color: '#000', opacity: '.7' }} />
    //       <Box>
    //         <Typography
    //           sx={{
    //             paddingBottom: '.2rem',
    //             fontWeight: '600',
    //             fontSize: '.9rem',
    //           }}
    //         >
    //           {data?.sport}
    //         </Typography>
    //         <Typography>
    //           {data?.gameDate}
    //           {', '}
    //           {data?.slot?.time.slice(0, -3)}
    //         </Typography>
    //       </Box>
    //     </Box>
    //     <Box
    //       sx={{
    //         display: 'flex',
    //         alignItems: 'center',
    //         justifyContent: 'center',

    //         width: '30px',
    //         height: '30px',
    //         background: '#0E2233',
    //         borderRadius: '50%',
    //       }}
    //     >
    //       <SportsBaseball
    //         sx={{ color: '#EFDB87', fontSize: '1.1rem', opacity: '.8' }}
    //       />
    //     </Box>
    //   </Box>

    //   <Box
    //     sx={{
    //       margin: '.75rem 0 1rem 0',
    //       width: '100%',
    //       height: '1px',
    //       background: '#e5e5e5',
    //       borderRadius: '3px',
    //     }}
    //   />
    //   <Box
    //     sx={{
    //       display: 'flex',
    //       alignItems: 'center',
    //       paddingInline: '10px',
    //       justifyContent: 'space-between',
    //     }}
    //   >
    //     <Box
    //       sx={{
    //         textAlign: 'center',
    //         display: 'flex',
    //         flexDirection: 'column',
    //         width: '100%',
    //       }}
    //     >
    //       <Typography
    //         sx={{
    //           fontWeight: '600',
    //           opacity: '.6',
    //           fontSize: '.85rem',
    //         }}
    //       >
    //         Гендер
    //       </Typography>
    //       <Typography sx={{ fontWeight: '700', fontSize: '1rem' }}>
    //         Смешанный
    //       </Typography>
    //     </Box>
    //     <Box
    //       sx={{
    //         textAlign: 'center',
    //         display: 'flex',
    //         flexDirection: 'column',
    //         width: '100%',
    //       }}
    //     >
    //       <Typography
    //         sx={{
    //           fontWeight: '600',
    //           opacity: '.6',
    //           fontSize: '.85rem',
    //         }}
    //       >
    //         Уровень
    //       </Typography>
    //       <Typography sx={{ fontWeight: '700', fontSize: '1rem' }}>
    //         {data?.ratingFrom} - {data?.ratingTo}
    //       </Typography>
    //     </Box>
    //     <Box
    //       sx={{
    //         textAlign: 'center',
    //         display: 'flex',
    //         flexDirection: 'column',
    //         width: '100%',
    //       }}
    //     >
    //       <Typography
    //         sx={{
    //           fontWeight: '600',
    //           opacity: '.6',
    //           fontSize: '.85rem',
    //         }}
    //       >
    //         Цена
    //       </Typography>
    //       <Typography sx={{ fontWeight: '700', fontSize: '1rem' }}>
    //         ₽ {data?.price}
    //       </Typography>
    //     </Box>
    //   </Box>
    // </Box>
  );
};
